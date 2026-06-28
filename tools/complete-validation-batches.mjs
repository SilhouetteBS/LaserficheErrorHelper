import fs from "node:fs";

import { errorEntries, sourcePriority } from "../src/data/errors.js";

const outputPath = "src/data/validationOverrides.js";
const reportPath = "research/validation-completion.md";
const backlogPath = "research/source-research-backlog.md";
const snapshotPath = "research/validation-completion.json";

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

function triageFor(dispositionValue) {
  const triage = {
    "candidate-for-fix-upgrade": {
      validationStatus: "reviewed-diagnostic",
      validationNote:
        "Community-confirmed source was reviewed by the curation pass; no stronger fix should be promoted without additional source evidence.",
    },
    "candidate-for-scenario-review": {
      validationStatus: "reviewed-diagnostic",
      validationNote:
        "Scenario review was completed or the captured sources did not support distinct source-backed scenarios.",
    },
    "keep-diagnostic-only": {
      validationStatus: "reviewed-diagnostic",
      validationNote: "Reviewed as a diagnostic-only entry; keep visible without implying a confirmed fix.",
    },
    "needs-additional-source-research": {
      validationStatus: "source-research-needed",
      validationNote: "Entry is documented for discovery, but a stronger source-backed fix still needs additional research.",
    },
    "official-doc-baseline-only": {
      validationStatus: "official-doc-baseline",
      validationNote: "Official documentation baseline entry; no public Answers fix has been attached yet.",
    },
    "priority-source-review": {
      validationStatus: "reviewed-diagnostic",
      validationNote:
        "Priority source was reviewed by the curation pass; remaining evidence is diagnostic or scenario-limited.",
    },
  };
  return triage[dispositionValue];
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

const decisions = candidates.map((entry) => {
  const dispositionValue = disposition(entry);
  return {
    id: entry.id,
    code: entry.code,
    product: entry.product,
    message: entry.message,
    confidence: entry.confidence,
    fixStatus: fixStatusValue(entry),
    bestSourceType: bestSource(entry)?.sourceType ?? "unknown",
    sourceCount: entry.sources.length,
    scenarioCount: entry.scenarios?.length ?? 0,
    validationDisposition: dispositionValue,
    ...triageFor(dispositionValue),
  };
});

const overrides = Object.fromEntries(
  decisions.map((decision) => [
    decision.id,
    {
      validationStatus: decision.validationStatus,
      validationDisposition: decision.validationDisposition,
      validationNote: decision.validationNote,
    },
  ]),
);

const sourceResearchBacklog = decisions.filter((decision) => decision.validationStatus === "source-research-needed");
const byDisposition = countBy(decisions, (decision) => decision.validationDisposition);
const byStatus = countBy(decisions, (decision) => decision.validationStatus);
const byProduct = countBy(decisions, (decision) => decision.product);

const overrideLines = [
  "export const validationTriageOverrides = {",
  ...Object.entries(overrides)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([id, override]) =>
        `  ${JSON.stringify(id)}: { validationStatus: ${JSON.stringify(override.validationStatus)}, validationDisposition: ${JSON.stringify(override.validationDisposition)}, validationNote: ${JSON.stringify(override.validationNote)} },`,
    ),
  "};",
  "",
];

const report = [
  "# Validation Completion",
  "",
  `Validation rows triaged: ${decisions.length}`,
  `Source-research backlog rows: ${sourceResearchBacklog.length}`,
  "",
  "## Validation Status Summary",
  "",
  table(
    ["Validation status", "Entries"],
    Object.entries(byStatus).sort(([a], [b]) => a.localeCompare(b)).map(([status, count]) => [status, count]),
  ),
  "",
  "## Prior Disposition Summary",
  "",
  table(
    ["Disposition", "Entries"],
    Object.entries(byDisposition).sort(([a], [b]) => a.localeCompare(b)).map(([status, count]) => [status, count]),
  ),
  "",
  "## Product Summary",
  "",
  table(
    ["Product", "Entries"],
    Object.entries(byProduct).sort(([a], [b]) => a.localeCompare(b)).map(([product, count]) => [product, count]),
  ),
  "",
  "## Rule",
  "",
  "Completion means the current validation batch was triaged. It does not mean every entry has a confirmed fix.",
  "Entries with `source-research-needed` remain visible and are tracked in the separate source-research backlog.",
  "",
];

const backlogReport = [
  "# Source Research Backlog",
  "",
  `Entries needing additional source research: ${sourceResearchBacklog.length}`,
  "",
  table(
    ["Product", "Code", "Fix status", "Best source", "Message"],
    sourceResearchBacklog.map((entry) => [
      entry.product,
      entry.code,
      entry.fixStatus,
      entry.bestSourceType,
      entry.message.replaceAll("|", "\\|"),
    ]),
  ),
  "",
];

fs.writeFileSync(outputPath, `${overrideLines.join("\n")}`);
fs.writeFileSync(reportPath, `${report.join("\n")}\n`);
fs.writeFileSync(backlogPath, `${backlogReport.join("\n")}\n`);
fs.writeFileSync(snapshotPath, `${JSON.stringify({ decisions, sourceResearchBacklog }, null, 2)}\n`);
console.log(`Triaged ${decisions.length} validation rows; ${sourceResearchBacklog.length} remain in the source-research backlog.`);
