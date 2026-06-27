import { errorEntries, sourcePriority } from "../src/data/errors.js";
import { reviewedSources } from "../src/data/reviewedSources.js";

const errors = [];
const reviewedUrls = new Set(reviewedSources.map((source) => source.url));

for (const entry of errorEntries) {
  for (const field of ["id", "code", "message", "product", "confidence", "reviewedDate", "summary"]) {
    if (!entry[field]) errors.push(`${entry.id || "unknown"} is missing ${field}`);
  }
  if (!Array.isArray(entry.versions) || entry.versions.length === 0) {
    errors.push(`${entry.id} must include at least one version label`);
  }
  if (!Array.isArray(entry.sources) || entry.sources.length === 0) {
    errors.push(`${entry.id} must include source evidence`);
  }
  for (const source of entry.sources ?? []) {
    if (!sourcePriority[source.sourceType]) {
      errors.push(`${entry.id} uses unknown source type ${source.sourceType}`);
    }
    if (!reviewedUrls.has(source.url)) {
      errors.push(`${entry.id} source ${source.url} is not in the reviewed-source ledger`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${errorEntries.length} error entries and ${reviewedSources.length} reviewed sources.`);
