import fs from "node:fs";

import { errorEntries, sourcePriority } from "../src/data/errors.js";

const batchSize = Number.parseInt(process.argv[2] ?? "50", 10);
const outputJson = "research/validation-batches.json";
const outputMd = "research/validation-batches.md";

function fixStatusValue(entry) {
  if (entry.fixStatus) return entry.fixStatus;
  if (entry.confidence === "low") return "needs-review";
  return "diagnostic-only";
}

function needsValidation(entry) {
  return entry.confidence === "low" || ["diagnostic-only", "unresolved", "needs-review"].includes(fixStatusValue(entry));
}

function bestSource(entry) {
  return [...entry.sources].sort((a, b) => (sourcePriority[a.sourceType] ?? 99) - (sourcePriority[b.sourceType] ?? 99))[0];
}

function disposition(entry) {
  const sourceTypes = new Set(entry.sources.map((source) => source.sourceType));
  const status = fixStatusValue(entry);
  if (sourceTypes.has("answers-laserfiche-employee")) return "priority-source-review";
  if (sourceTypes.has("answers-community-confirmed") && status === "diagnostic-only") return "candidate-for-fix-upgrade";
  if (entry.sources.length > 1 && (entry.scenarios?.length ?? 0) === 0) return "candidate-for-scenario-review";
  if (sourceTypes.has("official-docs") && entry.sources.length === 1) return "official-doc-baseline-only";
  if (status === "unresolved" || status === "needs-review") return "needs-additional-source-research";
  return "keep-diagnostic-only";
}

function nextStep(dispositionValue) {
  const steps = {
    "priority-source-review": "Open the linked employee or official source and confirm whether a fix, workaround, or scenario can be promoted.",
    "candidate-for-fix-upgrade": "Review the confirmed community source and promote only if the fix is clearly confirmed for the product/version.",
    "candidate-for-scenario-review": "Check whether multiple sources describe distinct causes or fixes and add scenarios if supported.",
    "official-doc-baseline-only": "Keep as needs-review unless a Laserfiche Answers or help-doc source provides actionable remediation.",
    "needs-additional-source-research": "Search Laserfiche Answers and official docs for a source-backed fix.",
    "keep-diagnostic-only": "Keep visible as diagnostic-only until a stronger source is found.",
  };
  return steps[dispositionValue];
}

function countBy(rows, getKey) {
  return rows.reduce((acc, row) => {
    const key = getKey(row);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function table(headers, rows) {
  const header = `| ${headers.join(" | ")} |`;
  const divider = `| ${headers.map(() => "---").join(" | ")} |`;
  const body = rows.map((row) => `| ${row.join(" | ")} |`);
  return [header, divider, ...body].join("\n");
}

const candidates = errorEntries
  .filter(needsValidation)
  .sort((a, b) => {
    const sourceRank = (sourcePriority[bestSource(a)?.sourceType] ?? 99) - (sourcePriority[bestSource(b)?.sourceType] ?? 99);
    return sourceRank || a.product.localeCompare(b.product) || a.code.localeCompare(b.code, undefined, { numeric: true });
  });

const rows = candidates.map((entry, index) => {
  const dispositionValue = disposition(entry);
  const source = bestSource(entry);
  return {
    batch: Math.floor(index / batchSize) + 1,
    sequence: index + 1,
    id: entry.id,
    code: entry.code,
    product: entry.product,
    message: entry.message,
    confidence: entry.confidence,
    fixStatus: fixStatusValue(entry),
    bestSourceType: source?.sourceType ?? "unknown",
    sourceCount: entry.sources.length,
    scenarioCount: entry.scenarios?.length ?? 0,
    disposition: dispositionValue,
    nextStep: nextStep(dispositionValue),
  };
});

const batchRows = Object.entries(countBy(rows, (row) => row.batch))
  .map(([batch, count]) => {
    const batchItems = rows.filter((row) => row.batch === Number(batch));
    const byDisposition = countBy(batchItems, (row) => row.disposition);
    return {
      batch: Number(batch),
      count,
      dispositions: byDisposition,
      products: countBy(batchItems, (row) => row.product),
    };
  })
  .sort((a, b) => a.batch - b.batch);

const byDisposition = countBy(rows, (row) => row.disposition);
const byProduct = countBy(rows, (row) => row.product);

const report = [
  "# Validation Batch Ledger",
  "",
  `Batch size: ${batchSize}`,
  `Candidates triaged: ${rows.length}`,
  `Batches: ${batchRows.length}`,
  "",
  "## Disposition Summary",
  "",
  table(
    ["Disposition", "Candidates"],
    Object.entries(byDisposition).sort(([a], [b]) => a.localeCompare(b)).map(([key, count]) => [key, count]),
  ),
  "",
  "## Product Summary",
  "",
  table(
    ["Product", "Candidates"],
    Object.entries(byProduct).sort(([a], [b]) => a.localeCompare(b)).map(([key, count]) => [key, count]),
  ),
  "",
  "## Batches",
  "",
  table(
    ["Batch", "Candidates", "Top disposition", "Top product"],
    batchRows.map((batch) => {
      const topDisposition = Object.entries(batch.dispositions).sort((a, b) => b[1] - a[1])[0];
      const topProduct = Object.entries(batch.products).sort((a, b) => b[1] - a[1])[0];
      return [batch.batch, batch.count, `${topDisposition[0]} (${topDisposition[1]})`, `${topProduct[0]} (${topProduct[1]})`];
    }),
  ),
  "",
  "## Next Steps by Disposition",
  "",
  ...Object.keys(byDisposition)
    .sort()
    .flatMap((key) => [`- ${key}: ${nextStep(key)}`]),
  "",
];

fs.writeFileSync(outputJson, `${JSON.stringify({ batchSize, totalCandidates: rows.length, batches: batchRows, rows }, null, 2)}\n`);
fs.writeFileSync(outputMd, `${report.join("\n")}\n`);
console.log(`Wrote ${outputJson} and ${outputMd} for ${rows.length} candidates in ${batchRows.length} batches.`);
