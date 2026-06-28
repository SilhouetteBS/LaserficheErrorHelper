import fs from "node:fs";

import { baseErrorEntries } from "../src/data/errors.js";
import { curationOverrides as existingOverrides } from "../src/data/curationOverrides.js";

const candidatesPath = "research/community-fix-review-candidates.json";
const reportPath = "research/community-fix-curation.md";
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
  return /no universal fix is confirmed|no confirmed public fix|no confirmed final fix|documented for discovery|auto-promoted diagnostic|does not guarantee|open a support case if|collect .*logs/i.test(text);
}

function hasExplicitFixLanguage(text) {
  return /resolved by|user confirms|requester reports|reports? fixing|accepted answer|fixed in|fixed by|was fixed|confirmed .*fix|confirmed .*cause|changing .*resolved|recreate|repair|reinstall|upgrade|hotfix|patch|reset .*connection|assign .*licenses|remove unsupported|corrected|workaround/i.test(text);
}

function hasActionableGuidance(text) {
  return /check|confirm|verify|review|test|try|use |add .*exclusion|configure|restart|rerun|disable|enable|reset|repair|reinstall|upgrade|remove|assign|recreate|open .*event viewer|compare/i.test(text);
}

function needsValidation(entry) {
  return entry.confidence === "low" || ["diagnostic-only", "unresolved", "needs-review"].includes(fixStatusValue(entry));
}

function isCommunityFixCandidate(entry) {
  const sourceTypes = new Set(entry.sources.map((source) => source.sourceType));
  return (
    needsValidation(entry) &&
    sourceTypes.has("answers-community-confirmed") &&
    !sourceTypes.has("answers-laserfiche-employee")
  );
}

function decisionFor(entry) {
  const currentStatus = fixStatusValue(entry);
  const text = sourceText(entry);
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
      reason: "Community-confirmed source notes include explicit resolved, fixed, accepted-answer, corrected-configuration, or workaround language.",
    };
  }

  if (hasActionableGuidance(text)) {
    return {
      fixStatus: "workaround",
      action: "promoted-workaround",
      reason: "Community-confirmed source notes provide actionable remediation but do not prove a universal fix.",
    };
  }

  return {
    fixStatus: currentStatus,
    action: "kept-diagnostic",
    reason: "Captured source notes do not provide enough fix evidence to promote.",
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

function sourceLabel(sourceType) {
  const labels = {
    "official-docs": "Official Docs",
    "answers-community-confirmed": "Answers - Community Confirmed",
    "answers-community": "Answers - Community",
  };
  return labels[sourceType] ?? sourceType;
}

const candidates = baseErrorEntries.filter(isCommunityFixCandidate);
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

const mergedOverrides = {
  ...existingOverrides,
  ...Object.fromEntries(
    overrides.map((decision) => [
      decision.id,
      {
        fixStatus: decision.fixStatus,
        curationNote: decision.reason,
      },
    ]),
  ),
};

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
  ...Object.entries(mergedOverrides)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([id, override]) =>
        `  ${JSON.stringify(id)}: { fixStatus: ${JSON.stringify(override.fixStatus)}, curationNote: ${JSON.stringify(override.curationNote)} },`,
    ),
  "};",
  "",
];

const byAction = countBy(decisions, (decision) => decision.action);
const byProduct = countBy(decisions, (decision) => decision.product);

const report = [
  "# Community Confirmed Fix Curation",
  "",
  `Community-confirmed candidates reviewed: ${decisions.length}`,
  `Fix-status overrides applied in this pass: ${overrides.length}`,
  `Total override entries after merge: ${Object.keys(mergedOverrides).length}`,
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
  "## Overrides Added",
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
  "## Source Priority",
  "",
  ...[
    "- This pass only evaluates entries with `Answers - Community Confirmed` sources and no Laserfiche employee source.",
    "- Community-confirmed entries become `known-fix` only when captured notes include explicit fixed/resolved/accepted/workaround language.",
    "- Diagnostic-only entries remain unchanged when the source was merely discovered or does not prove remediation.",
  ],
  "",
];

fs.writeFileSync(candidatesPath, `${JSON.stringify(candidateExport, null, 2)}\n`);
fs.writeFileSync(overridesPath, `${overrideLines.join("\n")}`);
fs.writeFileSync(reportPath, `${report.join("\n")}\n`);
console.log(`Reviewed ${decisions.length} community-confirmed candidates; added ${overrides.length} fix-status overrides.`);
