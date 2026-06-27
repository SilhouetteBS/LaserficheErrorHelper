import { chromium } from "playwright";
import { preview } from "vite";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
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
  await page.getByPlaceholder("Search code, message, symptom, product, or fix").fill("9030");
  await page.getByRole("button", { name: /9030 Maximum sessions or licensing limit reached/ }).click();
  await page.screenshot({ path: "dist/render-check.png", fullPage: false });
  const visible = await page.getByText("Potential fixes and checks").isVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: "dist/render-check-mobile.png", fullPage: false });
  const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  await browser.close();
  if (!visible) throw new Error("Detail pane did not render expected troubleshooting section.");
  if (mobileOverflow) throw new Error("Mobile viewport has horizontal overflow.");
  if (consoleErrors.length > 0) throw new Error(`Console errors: ${consoleErrors.join("; ")}`);
  console.log(`Render check passed: ${url}`);
} finally {
  if (server) {
    await new Promise((resolve) => server.httpServer.close(resolve));
  }
}
