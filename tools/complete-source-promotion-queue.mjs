import fs from "node:fs";

import { errorEntries } from "../src/data/errors.js";
import { reviewedSources } from "../src/data/reviewedSources.js";

function fixStatusValue(entry) {
  if (entry.fixStatus) return entry.fixStatus;
  if (entry.confidence === "low") return "needs-review";
  return "diagnostic-only";
}

function normalizeCode(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function matchingEntries(source) {
  const sourceCodes = new Set((source.extractedErrorCodes ?? []).map(normalizeCode).filter(Boolean));
  return errorEntries.filter((entry) => {
    if (entry.sources.some((item) => item.url === source.url)) return true;
    if (sourceCodes.has(normalizeCode(entry.code))) return true;
    return (entry.sourceErrorCodes ?? []).some((code) => sourceCodes.has(normalizeCode(code)));
  });
}

function promotedStatus(source) {
  const matches = matchingEntries(source);
  if (matches.length === 0) return "no-matching-posts";
  const statuses = new Set(matches.map(fixStatusValue));
  const hasOnlyGuidance = [...statuses].every((status) => status === "known-fix" || status === "workaround");
  return hasOnlyGuidance ? "curated" : "curated-partial";
}

const promotions = new Map(
  reviewedSources
    .filter((source) => source.reviewStatus === "curated-unresolved")
    .map((source) => [source.id, promotedStatus(source)]),
);

let updated = fs.readFileSync("src/data/reviewedSources.js", "utf8");

for (const [id, status] of promotions) {
  const objectPattern = new RegExp(
    `(\\{\\s*id: "${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}",[\\s\\S]*?reviewStatus: ")curated-unresolved("[\\s\\S]*?\\n\\s*\\})`,
  );
  if (!objectPattern.test(updated)) {
    throw new Error(`Could not find curated-unresolved reviewStatus for ${id}`);
  }
  updated = updated.replace(objectPattern, `$1${status}$2`);
}

fs.writeFileSync("src/data/reviewedSources.js", updated);

const statusCounts = [...promotions.values()].reduce((counts, status) => {
  counts[status] = (counts[status] ?? 0) + 1;
  return counts;
}, {});

console.log(`Promoted ${promotions.size} source rows.`);
console.log(JSON.stringify(statusCounts, null, 2));
