import fs from "node:fs";

import { baseErrorEntries } from "../src/data/errors.js";

const candidatesPath = "research/priority-source-review-candidates.json";
const reportPath = "research/priority-source-curation.md";
const overridesPath = "src/data/curationOverrides.js";

function fixStatusValue(entry) {
  if (entry.fixStatus) return entry.fixStatus;
  if (entry.confidence === "low") return "needs-review";
  return "diagnostic-only";
}

function sourceText(entry) {
  return [
    entry.summary,
    entry.notes,
    ...entry.likelyFixes,
    ...entry.sources.map((source) => `${source.sourceType} ${source.title} ${source.note}`),
    ...(entry.scenarios ?? []).flatMap((scenario) => [
      scenario.title,
      scenario.summary,
      ...(scenario.fixes ?? []),
      ...(scenario.causes ?? []),
      ...(scenario.symptoms ?? []),
    ]),
  ]
    .filter(Boolean)
    .join(" ");
}

function hasGenericNoFixLanguage(text) {
  return /no universal fix is confirmed|no confirmed public fix|no confirmed final fix|does not guarantee|open a support case if|collect .*logs/i.test(text);
}

function hasExplicitFixLanguage(text) {
  return /resolved by|user confirms|reports? fixing|accepted answer|fixed in|fixed by|was fixed|caused the issue|confirmed .*cause|confirmed .*fix|re-released|upgrade to|reinstall|repair|reset .*connection|assign .*licenses|remove unsupported|using .*server IP|server IP .*resolved|recreate .*user|certificate .*match|field type .*constraint/i.test(text);
}

function hasActionableGuidance(text) {
  return /check|confirm|verify|review|test|try|use |add .*exclusion|configure|restart|rerun|disable|enable|reset|repair|reinstall|upgrade|remove|assign|recreate|open .*event viewer/i.test(text);
}

function needsValidation(entry) {
  return entry.confidence === "low" || ["diagnostic-only", "unresolved", "needs-review"].includes(fixStatusValue(entry));
}

function isPrioritySourceCandidate(entry) {
  return needsValidation(entry) && entry.sources.some((source) => source.sourceType === "answers-laserfiche-employee");
}

function decisionFor(entry) {
  const currentStatus = fixStatusValue(entry);
  const text = sourceText(entry);
  const hasEmployeeSource = entry.sources.some((source) => source.sourceType === "answers-laserfiche-employee");
  const hasScenarioFixes = (entry.scenarios ?? []).some((scenario) => (scenario.fixes ?? []).length > 0);

  if (currentStatus === "known-fix" || currentStatus === "workaround") {
    return {
      fixStatus: currentStatus,
      action: "kept-existing-guidance",
      reason: "Entry already had source-backed fix guidance.",
    };
  }

  if (currentStatus === "unresolved") {
    return {
      fixStatus: "unresolved",
      action: "kept-unresolved",
      reason: "Reviewed public sources still do not contain a confirmed fix.",
    };
  }

  if (hasGenericNoFixLanguage(text) && !hasScenarioFixes) {
    return {
      fixStatus: currentStatus,
      action: "kept-diagnostic",
      reason: "Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed.",
    };
  }

  if (hasExplicitFixLanguage(text)) {
    return {
      fixStatus: "known-fix",
      action: "promoted-known-fix",
      reason: "Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language.",
    };
  }

  if ((hasEmployeeSource || hasScenarioFixes) && hasActionableGuidance(text) && !hasGenericNoFixLanguage(text)) {
    return {
      fixStatus: "workaround",
      action: "promoted-workaround",
      reason: "Employee-priority source notes provide actionable remediation, but not a universal confirmed fix.",
    };
  }

  return {
    fixStatus: currentStatus,
    action: "kept-diagnostic",
    reason: "Captured source notes provide diagnostics or support evidence but do not prove a fix.",
  };
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

const candidates = baseErrorEntries.filter(isPrioritySourceCandidate);
const decisions = candidates.map((entry) => ({
  id: entry.id,
  code: entry.code,
  product: entry.product,
  message: entry.message,
  previousFixStatus: fixStatusValue(entry),
  sourceCount: entry.sources.length,
  scenarioCount: entry.scenarios?.length ?? 0,
  ...decisionFor(entry),
}));

const overrides = decisions
  .filter((decision) => decision.fixStatus !== decision.previousFixStatus)
  .sort((a, b) => a.id.localeCompare(b.id));

const candidateExport = candidates.map((entry) => ({
  id: entry.id,
  code: entry.code,
  product: entry.product,
  message: entry.message,
  confidence: entry.confidence,
  fixStatus: entry.fixStatus ?? null,
  scenarioCount: entry.scenarios?.length ?? 0,
  sourceTypes: [...new Set(entry.sources.map((source) => source.sourceType))],
  sourceNotes: entry.sources.map((source) => source.note).join(" | "),
  fixes: entry.likelyFixes.join(" | "),
  notes: entry.notes ?? "",
}));

const overrideLines = [
  "export const curationOverrides = {",
  ...overrides.map(
    (decision) =>
      `  ${JSON.stringify(decision.id)}: { fixStatus: ${JSON.stringify(decision.fixStatus)}, curationNote: ${JSON.stringify(decision.reason)} },`,
  ),
  "};",
  "",
];

const byAction = countBy(decisions, (decision) => decision.action);
const byProduct = countBy(decisions, (decision) => decision.product);

const report = [
  "# Priority Source Curation",
  "",
  `Priority-source candidates reviewed: ${decisions.length}`,
  `Fix-status overrides applied: ${overrides.length}`,
  "",
  "## Decision Summary",
  "",
  table(
    ["Action", "Entries"],
    Object.entries(byAction).sort(([a], [b]) => a.localeCompare(b)).map(([action, count]) => [action, count]),
  ),
  "",
  "## Product Summary",
  "",
  table(
    ["Product", "Entries"],
    Object.entries(byProduct).sort(([a], [b]) => a.localeCompare(b)).map(([product, count]) => [product, count]),
  ),
  "",
  "## Overrides",
  "",
  table(
    ["Product", "Code", "Previous", "New", "Reason", "Message"],
    overrides.map((decision) => [
      decision.product,
      decision.code,
      decision.previousFixStatus,
      decision.fixStatus,
      decision.reason,
      decision.message.replaceAll("|", "\\|"),
    ]),
  ),
  "",
  "## Kept for Manual Review",
  "",
  table(
    ["Product", "Code", "Status", "Action", "Reason", "Message"],
    decisions
      .filter((decision) => decision.fixStatus === decision.previousFixStatus)
      .map((decision) => [
        decision.product,
        decision.code,
        decision.fixStatus,
        decision.action,
        decision.reason,
        decision.message.replaceAll("|", "\\|"),
      ]),
  ),
  "",
];

fs.writeFileSync(candidatesPath, `${JSON.stringify(candidateExport, null, 2)}\n`);
fs.writeFileSync(overridesPath, `${overrideLines.join("\n")}`);
fs.writeFileSync(reportPath, `${report.join("\n")}\n`);
console.log(`Reviewed ${decisions.length} priority-source candidates; wrote ${overrides.length} fix-status overrides.`);
