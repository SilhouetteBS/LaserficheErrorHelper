import fs from "node:fs";

import { errorEntries } from "../src/data/errors.js";
import { reviewedSources } from "../src/data/reviewedSources.js";

const reportDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Denver",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

function fixStatusValue(entry) {
  if (entry.fixStatus) return entry.fixStatus;
  if (entry.confidence === "low") return "needs-review";
  return "diagnostic-only";
}

function sourcePriority(sourceType) {
  if (sourceType === "official-docs") return 1;
  if (sourceType === "answers-laserfiche-employee") return 2;
  if (sourceType === "answers-community-confirmed") return 3;
  if (sourceType === "answers-community") return 4;
  return 5;
}

function normalizeCode(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function table(headers, rows) {
  const header = `| ${headers.join(" | ")} |`;
  const divider = `| ${headers.map(() => "---").join(" | ")} |`;
  const body = rows.map((row) => `| ${row.join(" | ")} |`);
  return [header, divider, ...body].join("\n");
}

function sourceLabel(sourceType) {
  const labels = {
    "official-docs": "Official Docs",
    "answers-laserfiche-employee": "Answers - Laserfiche Employee",
    "answers-community-confirmed": "Answers - Community Confirmed",
    "answers-community": "Answers - Community",
    "answers-search": "Answers - Search Reviewed",
  };
  return labels[sourceType] ?? sourceType;
}

function matchingEntries(source) {
  const sourceCodes = new Set((source.extractedErrorCodes ?? []).map(normalizeCode).filter(Boolean));
  return errorEntries.filter((entry) => {
    if (entry.sources.some((item) => item.url === source.url)) return true;
    if (sourceCodes.has(normalizeCode(entry.code))) return true;
    return (entry.sourceErrorCodes ?? []).some((code) => sourceCodes.has(normalizeCode(code)));
  });
}

function scoreSource(source, matches) {
  let score = 0;
  score += (6 - sourcePriority(source.sourceType)) * 100;
  if (matches.some((entry) => fixStatusValue(entry) === "unresolved")) score += 80;
  if (matches.some((entry) => fixStatusValue(entry) === "needs-review")) score += 60;
  if (matches.some((entry) => entry.confidence === "low")) score += 40;
  if (matches.some((entry) => (entry.scenarios?.length ?? 0) === 0)) score += 20;
  if ((source.extractedErrorCodes ?? []).length > 1) score += 10;
  return score;
}

const queue = reviewedSources
  .filter((source) => source.reviewStatus === "curated-unresolved")
  .map((source) => {
    const matches = matchingEntries(source);
    return {
      id: source.id,
      title: source.title,
      url: source.url,
      sourceType: source.sourceType,
      sourceTypeLabel: sourceLabel(source.sourceType),
      reviewedDate: source.reviewedDate,
      productTags: source.productTags ?? [],
      extractedErrorCodes: source.extractedErrorCodes ?? [],
      matchingEntryIds: matches.map((entry) => entry.id),
      matchingProducts: Array.from(new Set(matches.map((entry) => entry.product))).sort(),
      matchingFixStatuses: Array.from(new Set(matches.map(fixStatusValue))).sort(),
      score: scoreSource(source, matches),
    };
  })
  .sort((a, b) => b.score - a.score || sourcePriority(a.sourceType) - sourcePriority(b.sourceType) || a.title.localeCompare(b.title));

const report = [
  "# Source Promotion Queue",
  "",
  `Generated: ${reportDate}`,
  "",
  "This queue ranks curated-unresolved Answers sources for the next manual promotion pass. Higher rows should be checked first because they have stronger source authority or map to entries that are unresolved, needs-review, low-confidence, or missing scenario variants.",
  "",
  "## Summary",
  "",
  `- Curated unresolved sources: ${queue.length}`,
  `- Laserfiche employee unresolved sources: ${queue.filter((source) => source.sourceType === "answers-laserfiche-employee").length}`,
  `- Community-confirmed unresolved sources: ${queue.filter((source) => source.sourceType === "answers-community-confirmed").length}`,
  `- Sources with matching published entries: ${queue.filter((source) => source.matchingEntryIds.length > 0).length}`,
  "",
  "## Top Promotion Candidates",
  "",
  table(
    ["Score", "Source type", "Codes", "Products", "Current fix states", "Title"],
    queue.slice(0, 75).map((source) => [
      source.score,
      source.sourceTypeLabel,
      source.extractedErrorCodes.join(", ").replaceAll("|", "\\|") || "None",
      source.matchingProducts.join(", ").replaceAll("|", "\\|") || source.productTags.join(", ").replaceAll("|", "\\|") || "Unmatched",
      source.matchingFixStatuses.join(", ").replaceAll("|", "\\|") || "Unmatched",
      `[${source.title.replaceAll("|", "\\|")}](${source.url})`,
    ]),
  ),
  "",
];

fs.writeFileSync("research/source-promotion-queue.json", `${JSON.stringify(queue, null, 2)}\n`);
fs.writeFileSync("research/source-promotion-queue.md", `${report.join("\n")}\n`);
console.log(`Wrote research/source-promotion-queue.md with ${queue.length} unresolved sources.`);
