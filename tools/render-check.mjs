import { chromium } from "playwright";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "vite";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const desktopScreenshot = resolve(rootDir, "dist", "render-check.png");
const mobileScreenshot = resolve(rootDir, "dist", "render-check-mobile.png");
let server;

try {
  server = await preview({
    preview: {
      host: "127.0.0.1",
      port: 0,
      strictPort: false,
    },
  });
  const address = server.httpServer.address();
  const url = `http://127.0.0.1:${address.port}/LaserficheSelfHostedErrorHelper/`;
  const browser = await chromium.launch({ executablePath: chromePath });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("favicon.ico")) {
      consoleErrors.push(message.text());
    }
  });
  await page.goto(url, { waitUntil: "networkidle" });
  const firstVisitInstructionsVisible = await page.getByText("Search or browse Laserfiche errors").isVisible();
  if (!firstVisitInstructionsVisible) throw new Error("First visit did not show the instructions pane.");
  await page.getByPlaceholder("Search code, message, symptom, product, or fix").fill("9030");
  await page.waitForURL(/q=9030/);
  await page.getByRole("button", { name: /Laserfiche Server\/Repository Server/ }).click();
  await page.getByRole("button", { name: /9030 Maximum sessions or licensing limit reached/ }).click();
  await page.waitForURL(/error=/);
  await page.screenshot({ path: desktopScreenshot, fullPage: false });
  const visible = await page.getByText("Likely Fixes").isVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: mobileScreenshot, fullPage: false });
  const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  await browser.close();
  if (!visible) throw new Error("Detail pane did not render expected troubleshooting section.");
  if (mobileOverflow) throw new Error("Mobile viewport has horizontal overflow.");
  if (!existsSync(desktopScreenshot) || !existsSync(mobileScreenshot)) {
    throw new Error("Render check screenshots were not written.");
  }
  if (consoleErrors.length > 0) throw new Error(`Console errors: ${consoleErrors.join("; ")}`);
  console.log(`Render check passed: ${url}`);
} finally {
  if (server) {
    await new Promise((resolve) => server.httpServer.close(resolve));
  }
}
