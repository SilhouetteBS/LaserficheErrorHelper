import fs from "node:fs";
import path from "node:path";

import { errorEntries } from "../src/data/errors.js";
import { reviewedSources } from "../src/data/reviewedSources.js";

const today = new Date().toISOString().slice(0, 10);
const batchPattern = /^answers-chrome-search-pass-\d{4}-\d{2}-\d{2}-batch-\d+\.json$/;
const discoveryPath = "research/product-discovery-results.json";
const processingJsonPath = `research/answers-chrome-processing-${today}.json`;
const processingReportPath = `research/answers-chrome-processing-${today}.md`;

const discoveryRows = readJson(discoveryPath);
const discoveryRowsByUrl = new Map(discoveryRows.map((row) => [normalizeUrl(row.url), row]));
const knownUrls = new Set([
  ...discoveryRows.map((row) => normalizeUrl(row.url)),
  ...reviewedSources.map((source) => normalizeUrl(source.url)),
  ...errorEntries.flatMap((entry) => entry.sources.map((source) => normalizeUrl(source.url))),
]);

const batchFiles = fs
  .readdirSync("research")
  .filter((name) => batchPattern.test(name))
  .sort()
  .map((name) => path.join("research", name));

if (batchFiles.length === 0) {
  throw new Error("No recovered Chrome Answers batch files found.");
}

const batchRows = batchFiles.flatMap((batchFile) => {
  const batch = readJson(batchFile);
  return (batch.rows ?? []).map((row) => ({
    ...row,
    batchFile,
  }));
});

const seenInBatches = new Set();
const duplicates = [];
const accepted = [];
const alreadyStaged = [];

for (const row of batchRows) {
  const url = normalizeUrl(row.url);
  if (!url) continue;

  if (seenInBatches.has(url)) {
    duplicates.push({ ...row, url, duplicateReason: "duplicate-within-recovered-batches" });
    continue;
  }
  seenInBatches.add(url);

  const existingDiscoveryRow = discoveryRowsByUrl.get(url);
  if (existingDiscoveryRow?.notes?.startsWith("Recovered from signed-in Chrome Answers search batch.")) {
    alreadyStaged.push(existingDiscoveryRow);
    continue;
  }

  if (knownUrls.has(url)) {
    duplicates.push({ ...row, url, duplicateReason: "already-known-in-research-or-catalog" });
    continue;
  }

  const title = cleanText(row.title);
  const codes = extractErrorCodes(title);
  const productTags = inferProductTags(`${title} ${row.query ?? ""}`);
  const product = productTags[0] ?? inferProductFromQuery(row.query) ?? "Laserfiche Server/Repository Server";

  accepted.push({
    product,
    query: row.query,
    signature: codes[0] ?? title,
    signatureType: codes.length > 0 ? "error-code" : "message-text",
    title,
    url,
    snippet: title,
    sourceType: "Answers candidate",
    discoveredDate: row.discoveredDate ?? today,
    status: "candidate",
    reviewedDate: row.reviewedDate ?? today,
    productTags,
    extractedErrorCodes: codes,
    notes:
      "Recovered from signed-in Chrome Answers search batch. Detail page still needs manual review before promotion to a curated entry or reviewed source.",
  });
}

const mergedDiscoveryRows = [
  ...discoveryRows,
  ...accepted,
];

fs.writeFileSync(discoveryPath, `${JSON.stringify(mergedDiscoveryRows, null, 2)}\n`);

const stagedRows = [...alreadyStaged, ...accepted];
const priorityCandidates = stagedRows
  .filter((row) => row.extractedErrorCodes.length > 0 || likelyActionableTitle(row.title))
  .sort((a, b) => {
    const aScore = candidatePriority(a);
    const bScore = candidatePriority(b);
    return bScore - aScore || a.product.localeCompare(b.product) || a.title.localeCompare(b.title);
  });

const summary = {
  processedDate: today,
  batchFiles,
  recoveredRows: batchRows.length,
  uniqueRecoveredUrls: seenInBatches.size,
  alreadyStagedInProductDiscovery: alreadyStaged.length,
  duplicatesSkipped: duplicates.length,
  appendedToProductDiscovery: accepted.length,
  stagedInProductDiscovery: stagedRows.length,
  priorityCandidates: priorityCandidates.length,
  duplicates,
  accepted,
  alreadyStaged,
  priorityReviewRows: priorityCandidates,
};

fs.writeFileSync(processingJsonPath, `${JSON.stringify(summary, null, 2)}\n`);
fs.writeFileSync(processingReportPath, `${report(summary)}\n`);

console.log(`Processed ${summary.recoveredRows} recovered Answers rows.`);
console.log(`Appended ${summary.appendedToProductDiscovery} candidates to ${discoveryPath}.`);
console.log(`Already staged candidates: ${summary.alreadyStagedInProductDiscovery}.`);
console.log(`Skipped ${summary.duplicatesSkipped} duplicate or already-known URLs.`);
console.log(`Priority review rows: ${summary.priorityCandidates}.`);
console.log(processingReportPath);

function normalizeUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value, "https://answers.laserfiche.com");
    url.hash = "";
    url.search = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return String(value).split("#")[0].split("?")[0].replace(/\/$/, "");
  }
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));
}

function cleanText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractErrorCodes(value) {
  const text = cleanText(value);
  const codes = new Set();
  const patterns = [
    /\bAADSTS\d{4,8}\b/gi,
    /\b0x[0-9a-f]{6,12}\b/gi,
    /\bLFF[A-Z0-9-]*\d[A-Z0-9-]*\b/gi,
    /\b\d{3,5}-WF\d+\b/gi,
    /\bWF\d{1,5}(?:-[A-Z0-9]+)?\b/gi,
    /\bHTTP\s*\d{3}(?:\.\d+)?\b/gi,
    /\berror\s*(?:code)?\s*\[?(\d{3,6}(?::\d+)?)\]?/gi,
    /\[(\d{3,6}(?::\d+)?)\]/g,
  ];

  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      codes.add((match[1] ?? match[0]).replace(/\s+/g, " ").trim());
    }
  }

  return [...codes].slice(0, 10);
}

function inferProductFromQuery(query = "") {
  return inferProductTags(query)[0] ?? null;
}

function inferProductTags(value) {
  const text = cleanText(value);
  const productPatterns = [
    ["Administration Hub", /\bAdministration Hub\b|\bAdmin Hub\b/i],
    ["AI Service", /\bAI Service\b/i],
    ["API Server", /\bAPI Server\b|\bLaserfiche API\b|\bRepository API\b/i],
    ["Audit Trail", /\bAudit Trail\b/i],
    ["Common Dialog", /\bCommon Dialog\b/i],
    ["Connector", /\bConnector\b/i],
    ["Directory Server", /\bDirectory Server\b|\bLFDS\b|\bSAML\b|\bLDAP\b/i],
    ["Discussions", /\bDiscussions\b/i],
    ["Distributed Computing Cluster", /\bDistributed Computing Cluster\b|\bDCC\b/i],
    ["Federated Search", /\bFederated Search\b/i],
    ["Forms", /\bForms\b|\bLFF/i],
    ["Full Text Search", /\bFull Text Search\b|\bLFFTS\b/i],
    ["Import Agent", /\bImport Agent\b/i],
    ["Laserfiche Installer", /\bInstaller\b|\bInstallation\b|\bSetup\b/i],
    ["Laserfiche Server/Repository Server", /\bLaserfiche Server\b|\bRepository Server\b|\bLFServer\b/i],
    ["Mobile", /\bMobile\b/i],
    ["Office Integration", /\bOffice Integration\b|\bOffice Plugin\b|\bOutlook\b|\bWord\b/i],
    ["Quick Fields", /\bQuick Fields\b|\bQF\b/i],
    ["Records Management", /\bRecords Management\b|\bRetention\b|\bCutoff\b/i],
    ["Snapshot", /\bSnapshot\b/i],
    ["Web Client", /\bWeb Client\b|\bWeb Access\b|\bWeb Scanning\b/i],
    ["WebLink", /\bWebLink\b/i],
    ["Webtools Agent", /\bWebtools Agent\b|\bWebtools\b/i],
    ["Windows Client/Desktop Client", /\bWindows Client\b|\bDesktop Client\b|\bLaserfiche Client\b|\bLF\.exe\b/i],
    ["Workflow", /\bWorkflow\b|\bSubscriber\b|\bWF\d/i],
  ];

  return productPatterns.filter(([, pattern]) => pattern.test(text)).map(([product]) => product);
}

function likelyActionableTitle(title) {
  return /\b(error|failed|failure|exception|unable|cannot|can't|denied|timeout|timed out|invalid|unavailable|object reference|internal error|not found)\b/i.test(
    title,
  );
}

function candidatePriority(row) {
  let score = 0;
  score += row.extractedErrorCodes.length * 5;
  if (likelyActionableTitle(row.title)) score += 4;
  if (row.productTags.length > 0) score += 2;
  if (/\bLaserfiche employee|staff|official\b/i.test(row.notes ?? "")) score += 3;
  return score;
}

function report(summary) {
  return [
    "# Recovered Chrome Answers Candidate Processing",
    "",
    `Processed: ${summary.processedDate}`,
    `Recovered rows: ${summary.recoveredRows}`,
    `Unique recovered URLs: ${summary.uniqueRecoveredUrls}`,
    `Newly appended to product discovery in this run: ${summary.appendedToProductDiscovery}`,
    `Already staged in product discovery: ${summary.alreadyStagedInProductDiscovery}`,
    `Total staged in product discovery: ${summary.stagedInProductDiscovery}`,
    `Duplicate or already-known URLs skipped: ${summary.duplicatesSkipped}`,
    `Priority review rows: ${summary.priorityCandidates}`,
    "",
    "## Batch Files",
    "",
    ...summary.batchFiles.map((file) => `- ${file}`),
    "",
    "## Priority Review Candidates",
    "",
    table(
      ["Product", "Signature", "Title", "URL"],
      summary.priorityReviewRows.map((row) => [
        row.product,
        row.signature.replaceAll("|", "\\|"),
        row.title.replaceAll("|", "\\|"),
        row.url,
      ]),
    ),
    "",
    "## Processing Rule",
    "",
    "Recovered search-result rows are appended as product-discovery candidates only. They are not curated sources and do not change the public helper until their detail pages are manually reviewed.",
  ].join("\n");
}

function table(headers, rows) {
  const header = `| ${headers.join(" | ")} |`;
  const divider = `| ${headers.map(() => "---").join(" | ")} |`;
  const body = rows.map((row) => `| ${row.join(" | ")} |`);
  return [header, divider, ...body].join("\n");
}
