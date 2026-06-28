import fs from "node:fs";
import { errorEntries } from "../src/data/errors.js";
import { reviewedSources } from "../src/data/reviewedSources.js";

const [, , productArg = "", limitArg = "80", formatArg = "detail"] = process.argv;
const limit = Number.parseInt(limitArg, 10) || 80;
const rows = JSON.parse(fs.readFileSync("research/product-discovery-results.json", "utf8"));
const reviewedUrls = new Set(reviewedSources.map((source) => normalizeUrl(source.url)));
const promotedCodes = new Set(errorEntries.flatMap((entry) => codeKeys(entry.code)));
const highValueProducts = new Set([
  "Forms",
  "Workflow",
  "Web Client",
  "Directory Server",
  "Laserfiche Server/Repository Server",
  "Windows Client/Desktop Client",
]);

const candidates = rows
  .filter((row) => !productArg || row.product.toLowerCase() === productArg.toLowerCase())
  .filter((row) => row.status === "candidate")
  .filter((row) => Array.isArray(row.extractedErrorCodes) && row.extractedErrorCodes.length > 0)
  .filter((row) => !reviewedUrls.has(normalizeUrl(row.url)))
  .map((row) => ({
    ...row,
    promotionScore: scoreCandidate(row),
    unpromotedCodes: row.extractedErrorCodes.filter((code) => !hasPromotedCode(code)),
  }))
  .filter((row) => row.unpromotedCodes.length > 0)
  .sort((a, b) => b.promotionScore - a.promotionScore || a.product.localeCompare(b.product) || a.title.localeCompare(b.title));

const summary = candidates.reduce((acc, row) => {
  acc[row.product] ||= { total: 0, employee: 0, confirmed: 0, unpromotedCode: 0 };
  acc[row.product].total += 1;
  if (/employee/i.test(row.sourceType)) acc[row.product].employee += 1;
  if (/confirmed/i.test(row.sourceType)) acc[row.product].confirmed += 1;
  if (row.unpromotedCodes.length > 0) acc[row.product].unpromotedCode += 1;
  return acc;
}, {});

console.log(JSON.stringify({ filters: { product: productArg || "All", limit }, summary }, null, 2));

if (formatArg === "checklist") {
  const grouped = Map.groupBy(candidates.slice(0, limit), (row) => row.product);

  for (const [product, rows] of grouped) {
    console.log("");
    console.log(`## ${product}`);
    for (const row of rows) {
      const codes = row.unpromotedCodes.length ? row.unpromotedCodes : row.extractedErrorCodes;
      console.log(`- [ ] ${codes.join(", ")} | ${sourceLabel(row.sourceType)} | score ${row.promotionScore}`);
      console.log(`  ${row.title}`);
      console.log(`  ${row.url}`);
    }
  }
} else {
  for (const row of candidates.slice(0, limit)) {
    console.log("");
    console.log(`${row.promotionScore} | ${row.product} | ${row.sourceType} | ${row.extractedErrorCodes.join(", ")}`);
    console.log(row.title);
    console.log(row.url);
    console.log(row.snippet);
  }
}

function scoreCandidate(row) {
  let score = 0;
  if (highValueProducts.has(row.product)) score += 40;
  if (/employee/i.test(row.sourceType)) score += 35;
  if (/confirmed/i.test(row.sourceType)) score += 20;
  score += Math.min(row.extractedErrorCodes.length, 4) * 4;
  if (/(fixed|resolved|solution|workaround|hotfix|upgrade|update|reconfigure|restart|permission|rights|configuration)/i.test(row.snippet ?? "")) {
    score += 12;
  }
  if (/(course|training|announcement|what'?s new|survey|webinar)/i.test(`${row.title} ${row.snippet}`)) {
    score -= 60;
  }
  return score;
}

function normalizeUrl(value) {
  const url = new URL(value);
  url.hash = "";
  url.search = "";
  return url.toString();
}

function normalizeCode(value) {
  return String(value).toLowerCase().replace(/\s+/g, " ").trim();
}

function codeKeys(value) {
  const normalized = normalizeCode(value);
  const keys = new Set([normalized]);
  for (const part of normalized.split(/\s*[/,]\s*/)) {
    if (part) keys.add(part);
  }
  for (const match of normalized.matchAll(/\b(lff\d+)(?:-[a-z0-9]+)?\b/g)) {
    keys.add(match[1]);
  }
  for (const match of normalized.matchAll(/\b(\d{4}-wf\d+)\b/g)) {
    keys.add(match[1]);
  }
  for (const match of normalized.matchAll(/\b(0x[0-9a-f]+)\b/g)) {
    keys.add(match[1]);
  }
  for (const match of normalized.matchAll(/\b(?:http error\s*)?(\d{3,5})\b/g)) {
    keys.add(match[1]);
  }
  return [...keys];
}

function hasPromotedCode(value) {
  return codeKeys(value).some((key) => promotedCodes.has(key));
}

function sourceLabel(value) {
  if (/employee/i.test(value)) return "Laserfiche employee";
  if (/confirmed/i.test(value)) return "Community confirmed";
  return "Community";
}
