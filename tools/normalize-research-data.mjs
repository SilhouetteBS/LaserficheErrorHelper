import fs from "node:fs";

const files = [
  "research/product-discovery-results.json",
  "research/answers-product-pass-2026-06-28.json",
  "research/product-discovery-queue.json",
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  normalizeNode(data);
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
  console.log(`Normalized ${file}`);
}

function normalizeNode(value) {
  if (Array.isArray(value)) {
    for (const item of value) normalizeNode(item);
    return;
  }

  if (!value || typeof value !== "object") return;

  if (value.product === "Web Client Scanning") value.product = "Web Client";
  if (Array.isArray(value.productTags)) {
    value.productTags = [...new Set(value.productTags.map((tag) => (tag === "Web Client Scanning" ? "Web Client" : tag)))];
  }
  if (typeof value.title === "string" && typeof value.url === "string" && /<[^>]+>|^(Question|Discussion|Announcement)$/i.test(value.title.trim())) {
    value.title = titleFromUrl(value.url);
  }

  for (const child of Object.values(value)) normalizeNode(child);
}

function titleFromUrl(url) {
  const slug = new URL(url).pathname.split("/").filter(Boolean).at(-1) || "";
  return decodeURIComponent(slug).replace(/-/g, " ").replace(/\s+/g, " ").trim();
}
