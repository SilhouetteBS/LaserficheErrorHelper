import { errorEntries, productOptions, sourcePriority, versionOptions } from "../src/data/errors.js";
import { reviewedSources } from "../src/data/reviewedSources.js";

const errors = [];
const reviewedUrls = new Set(reviewedSources.map((source) => source.url));
const validProducts = new Set(productOptions);
const validVersions = new Set(versionOptions);
const sortedProducts = [...productOptions].sort((a, b) => a.localeCompare(b));

if (productOptions.some((product, index) => product !== sortedProducts[index])) {
  errors.push("productOptions must remain in alphabetical order");
}

for (const entry of errorEntries) {
  for (const field of ["id", "code", "message", "product", "confidence", "reviewedDate", "summary"]) {
    if (!entry[field]) errors.push(`${entry.id || "unknown"} is missing ${field}`);
  }
  if (!Array.isArray(entry.versions) || entry.versions.length === 0) {
    errors.push(`${entry.id} must include at least one version label`);
  }
  if (!validProducts.has(entry.product)) {
    errors.push(`${entry.id} uses unknown product ${entry.product}`);
  }
  for (const version of entry.versions ?? []) {
    if (!validVersions.has(version)) {
      errors.push(`${entry.id} uses unknown version ${version}`);
    }
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
