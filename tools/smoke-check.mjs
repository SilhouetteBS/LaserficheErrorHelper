import { chromium } from "playwright";
import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = resolve(rootDir, "dist");
let server;

async function expectVisible(locator, message) {
  if (!(await locator.isVisible())) throw new Error(message);
}

function contentType(filePath) {
  const types = {
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".ico": "image/x-icon",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".svg": "image/svg+xml",
  };
  return types[extname(filePath)] ?? "application/octet-stream";
}

function startStaticServer() {
  return new Promise((resolveServer) => {
    const staticServer = createServer((request, response) => {
      const rawPath = decodeURIComponent(new URL(request.url, "http://127.0.0.1").pathname);
      const sitePath = rawPath.replace(/^\/LaserficheErrorHelper\/?/, "");
      const relativePath = sitePath || "index.html";
      const resolvedPath = normalize(resolve(distDir, relativePath));
      const filePath = resolvedPath.startsWith(distDir) && existsSync(resolvedPath) ? resolvedPath : join(distDir, "index.html");
      response.setHeader("Content-Type", contentType(filePath));
      createReadStream(filePath).pipe(response);
    });
    staticServer.listen(0, "127.0.0.1", () => resolveServer(staticServer));
  });
}

try {
  if (!existsSync(join(distDir, "index.html"))) {
    throw new Error("dist/index.html is missing. Run npm run build before npm run smoke.");
  }
  server = await startStaticServer();
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}/LaserficheErrorHelper/`;
  const browser = await chromium.launch({ executablePath: chromePath });
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("favicon.ico")) consoleErrors.push(message.text());
  });

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await expectVisible(page.getByText("Get started"), "First-visit instructions were not visible.");

  await page.getByRole("button", { name: "How it works" }).click();
  await expectVisible(page.getByRole("heading", { name: "How It Works" }), "How It Works dialog did not open.");
  await page.getByRole("button", { name: "Close dialog" }).click();

  await page.getByRole("button", { name: "About" }).click();
  const aboutDialog = page.getByRole("dialog");
  await expectVisible(aboutDialog.getByText("not affiliated with or endorsed by Laserfiche"), "About disclaimer was not visible.");
  await page.getByRole("button", { name: "Close dialog" }).click();

  await page.getByRole("button", { name: "More Filters" }).click();
  await expectVisible(page.getByLabel("More filters"), "More Filters panel did not open.");

  await page.getByRole("button", { name: "More Filters" }).click();
  await page.getByRole("button", { name: "Open result filters" }).click();
  await expectVisible(page.getByLabel("More filters"), "Result-pane filter icon did not open More Filters.");

  await page.getByPlaceholder("Search code, message, symptom, product, or fix").fill("Web Access");
  await page.waitForURL(/q=Web\+Access/);
  await expectVisible(page.getByRole("button", { name: /Web Client/ }).first(), "Web Access alias did not return Web Client results.");

  await page.getByPlaceholder("Search code, message, symptom, product, or fix").fill("9030");
  await page.waitForURL(/q=9030/);
  await page.getByRole("button", { name: /Laserfiche Server\/Repository Server/ }).click();
  await page.getByRole("button", { name: /9030 Maximum sessions or licensing limit reached/ }).click();
  await page.waitForURL(/error=/);
  await expectVisible(page.getByRole("button", { name: "Share" }), "Share action was not visible.");
  const correctionLink = page.getByRole("link", { name: "Report Correction" });
  await expectVisible(correctionLink, "Report correction link was not visible.");
  const href = await correctionLink.getAttribute("href");
  if (!href?.includes("ISSUE_TEMPLATE") && !href?.includes("template=error-report.yml")) {
    throw new Error("Correction link does not point to the error-report issue template.");
  }

  await expectVisible(page.getByText("Reviewed Source Ledger"), "Reviewed Source Ledger was not visible.");
  await page.setViewportSize({ width: 390, height: 844 });
  const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  await browser.close();

  if (mobileOverflow) throw new Error("Mobile viewport has horizontal overflow.");
  if (consoleErrors.length > 0) throw new Error(`Console errors: ${consoleErrors.join("; ")}`);
  console.log(`Smoke check passed: ${baseUrl}`);
} finally {
  if (server) {
    await new Promise((resolveClose) => server.close(resolveClose));
  }
}
