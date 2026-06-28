import fs from "node:fs";

const path = "research/product-discovery-results.json";
const rows = JSON.parse(fs.readFileSync(path, "utf8"));
const noisePattern =
  /\b(?:course available|training|webinar|survey|announcement|what'?s new|release announcement|new course|conference|office hours)\b/i;

let updated = 0;

for (const row of rows) {
  if (row.status !== "reviewed-no-code" && row.status !== "candidate") continue;
  if (Array.isArray(row.extractedErrorCodes) && row.extractedErrorCodes.length > 0) continue;
  const haystack = `${row.title ?? ""} ${row.snippet ?? ""}`;
  if (!noisePattern.test(haystack)) continue;

  row.status = "not-actionable";
  row.notes = "Marked not-actionable by discovery-noise cleanup because the result is training, news, or announcement content rather than an error troubleshooting source.";
  updated += 1;
}

fs.writeFileSync(path, `${JSON.stringify(rows, null, 2)}\n`);
console.log(`Marked ${updated} discovery rows as not-actionable.`);
