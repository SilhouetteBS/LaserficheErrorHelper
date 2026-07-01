import fs from "node:fs";

const today = new Date().toISOString().slice(0, 10);
const discoveryPath = "research/product-discovery-results.json";
const processingPath = `research/answers-chrome-processing-${today}.json`;
const reviewJsonPath = `research/answers-chrome-review-${today}.json`;
const reviewReportPath = `research/answers-chrome-review-${today}.md`;
const requestTimeoutMs = 8000;
const concurrency = 8;

const discoveryRows = readJson(discoveryPath);
const processing = readJson(processingPath);
const recoveredRows = [...processing.accepted, ...processing.alreadyStaged].sort((a, b) => a.url.localeCompare(b.url));
const recoveredUrls = new Set(recoveredRows.map((row) => normalizeUrl(row.url)));
const reviewedRows = [];

for (let index = 0; index < recoveredRows.length; index += concurrency) {
  const chunk = recoveredRows.slice(index, index + concurrency);
  const reviewedChunk = await Promise.all(
    chunk.map(async (row) => {
      const detail = await fetchDetail(row.url).catch((error) => ({
        fetchError: error.message,
      }));

      return reviewCandidate(row, detail);
    }),
  );

  reviewedRows.push(...reviewedChunk);
  console.log(`Reviewed ${Math.min(index + concurrency, recoveredRows.length)}/${recoveredRows.length}`);
}

const reviewedByUrl = new Map(reviewedRows.map((row) => [normalizeUrl(row.url), row]));
const updatedDiscoveryRows = discoveryRows.map((row) => {
  const reviewed = reviewedByUrl.get(normalizeUrl(row.url));
  if (!reviewed) return row;

  return {
    ...row,
    product: reviewed.product,
    signature: reviewed.signature,
    signatureType: reviewed.signatureType,
    title: reviewed.title,
    snippet: reviewed.snippet,
    sourceType: reviewed.sourceType,
    status: reviewed.researchStatus,
    reviewedDate: today,
    productTags: reviewed.productTags,
    extractedErrorCodes: reviewed.extractedErrorCodes,
    notes: reviewed.notes,
  };
});

const summary = {
  reviewedDate: today,
  reviewedCandidates: reviewedRows.length,
  actionableCandidates: reviewedRows.filter((row) => row.researchStatus === "candidate").length,
  lowSignalCandidates: reviewedRows.filter((row) => row.researchStatus === "reviewed-no-code").length,
  notActionableCandidates: reviewedRows.filter((row) => row.researchStatus === "not-actionable").length,
  employeeCandidates: reviewedRows.filter((row) => row.sourceType === "Answers candidate - Laserfiche employee").length,
  communityConfirmedCandidates: reviewedRows.filter((row) => row.sourceType === "Answers candidate - community confirmed").length,
  fetchErrors: reviewedRows.filter((row) => row.fetchError).length,
  rows: reviewedRows,
};

fs.writeFileSync(discoveryPath, `${JSON.stringify(updatedDiscoveryRows, null, 2)}\n`);
fs.writeFileSync(reviewJsonPath, `${JSON.stringify(summary, null, 2)}\n`);
fs.writeFileSync(reviewReportPath, `${report(summary)}\n`);

console.log(`Reviewed ${summary.reviewedCandidates} recovered Answers candidates.`);
console.log(`Actionable candidates: ${summary.actionableCandidates}.`);
console.log(`Low-signal candidates: ${summary.lowSignalCandidates}.`);
console.log(`Not-actionable candidates: ${summary.notActionableCandidates}.`);
console.log(`Employee candidates: ${summary.employeeCandidates}.`);
console.log(`Fetch errors: ${summary.fetchErrors}.`);
console.log(reviewReportPath);

async function fetchDetail(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
  const response = await fetch(url, {
    signal: controller.signal,
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36",
    },
  }).finally(() => clearTimeout(timeout));

  if (!response.ok) {
    throw new Error(`${response.status} while fetching ${url}`);
  }

  const html = await response.text();
  const title = readableTitle(html, url);
  const text = htmlToText(html);
  return {
    title,
    text,
    snippet: relevantSnippet(text, title),
  };
}

function reviewCandidate(row, detail) {
  const text = cleanText(`${detail.title ?? row.title} ${detail.text ?? ""}`);
  const title = cleanText(detail.title || row.title);
  const extractedErrorCodes = unique([...extractErrorCodes(title), ...extractErrorCodes(text)]).slice(0, 12);
  const strongProductTags = unique([...inferProductTags(`${title} ${row.query ?? ""}`), ...inferProductTags(row.product)]);
  const productTags = strongProductTags.length > 0 ? strongProductTags : row.productTags ?? [];
  const product = row.product && row.product !== "Laserfiche Server/Repository Server" ? row.product : productTags[0] ?? row.product;
  const sourceType = sourceTypeFor(text);
  const detailSnippet = detail.snippet || relevantSnippet(text, title);
  const fetchError = detail.fetchError ?? null;
  const researchStatus = statusFor({ title, text, extractedErrorCodes, fetchError });
  const signalNotes = [
    fetchError ? `Fetch failed: ${fetchError}` : null,
    sourceType === "Answers candidate - Laserfiche employee" ? "Detail page text suggests a Laserfiche employee/staff response may be present." : null,
    sourceType === "Answers candidate - community confirmed" ? "Detail page text suggests an accepted/resolved/community-confirmed answer may be present." : null,
    extractedErrorCodes.length > 0 ? `Extracted candidate code(s): ${extractedErrorCodes.join(", ")}.` : "No stable error code was extracted from the detail page.",
    researchStatus === "candidate"
      ? "Detail page appears actionable enough for manual curation review; do not publish until the fix/diagnostic is confirmed."
      : null,
  ].filter(Boolean);

  return {
    ...row,
    product,
    signature: extractedErrorCodes[0] ?? title,
    signatureType: extractedErrorCodes.length > 0 ? "error-code" : "message-text",
    title,
    url: normalizeUrl(row.url),
    snippet: detailSnippet,
    sourceType,
    researchStatus,
    productTags,
    extractedErrorCodes,
    fetchError,
    notes: signalNotes.join(" "),
  };
}

function statusFor({ title, text, extractedErrorCodes, fetchError }) {
  if (fetchError) return "reviewed-no-code";
  if (isClearlyNotActionable(`${title} ${text}`)) return "not-actionable";
  if (extractedErrorCodes.length > 0) return "candidate";
  if (likelyActionableTitle(title) && hasTroubleshootingSignal(text)) return "candidate";
  return "reviewed-no-code";
}

function sourceTypeFor(text) {
  if (/\b(?:Laserfiche employee|from Laserfiche|Laserfiche staff|Laserfiche Support|Laserfiche Team)\b/i.test(text)) {
    return "Answers candidate - Laserfiche employee";
  }
  return "Answers candidate";
}

function isClearlyNotActionable(text) {
  return /\b(?:cloud only|laserfiche cloud|feature request|enhancement request|how do i|how to|best practice|documentation request)\b/i.test(
    text,
  );
}

function hasTroubleshootingSignal(text) {
  return /\b(?:restart|service|iis|sql|database|configuration|config|log|event viewer|install|upgrade|hotfix|patch|permission|rights|certificate|tls|ssl|port|firewall|volume|repository|workflow|forms|web client|weblink|mobile server|quick fields|import agent|connector)\b/i.test(
    text,
  );
}

function likelyActionableTitle(title) {
  return /\b(error|failed|failure|exception|unable|cannot|can't|denied|timeout|timed out|invalid|unavailable|object reference|internal error|not found)\b/i.test(
    title,
  );
}

function relevantSnippet(text, fallback) {
  const clean = cleanText(text);
  const patterns = [
    /\b(error|failed|failure|exception|unable|cannot|denied|timeout|invalid|unavailable|object reference|internal error|not found)\b/i,
    /\b(LFF[A-Z0-9-]*\d[A-Z0-9-]*|\d{3,5}-WF\d+|AADSTS\d{4,8}|0x[0-9a-f]{6,12}|\[\d{3,6}(?::\d+)?\])/i,
  ];
  const index = patterns.map((pattern) => clean.search(pattern)).find((position) => position >= 0);
  const start = Math.max(0, (index ?? 0) - 180);
  const snippet = clean.slice(start, start + 900).trim();
  return snippet || cleanText(fallback).slice(0, 900);
}

function readableTitle(html, fallbackUrl) {
  const raw =
    html.match(/<h3 class="qtitle post-title">[\s\S]*?<span>([\s\S]*?)<\/span>/i)?.[1] ??
    html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ??
    fallbackUrl;

  return htmlToText(raw).replace(/\s*-\s*Laserfiche Answers\s*$/i, "").trim();
}

function htmlToText(value) {
  return decodeEntities(String(value ?? ""))
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(value) {
  return value
    .replaceAll("&nbsp;", " ")
    .replaceAll("&#39;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
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
    /\bQF\d{3,5}\b/gi,
    /\bLFDS\d{2,5}\b/gi,
    /\bHTTP\s*\d{3}(?:\.\d+)?\b/gi,
    /\berror\s*(?:code)?\s*:?\s*\[?(\d{3,6}(?::\d+)?)\]?/gi,
    /\[(\d{3,6}(?::\d+)?)\]/g,
  ];

  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      codes.add((match[1] ?? match[0]).replace(/\s+/g, " ").trim());
    }
  }

  return [...codes];
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

function cleanText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));
}

function report(summary) {
  const priorityRows = summary.rows
    .filter((row) => row.researchStatus === "candidate")
    .sort((a, b) => candidatePriority(b) - candidatePriority(a) || a.product.localeCompare(b.product));

  return [
    "# Chrome Answers Candidate Detail Review",
    "",
    `Reviewed: ${summary.reviewedDate}`,
    `Candidates reviewed: ${summary.reviewedCandidates}`,
    `Actionable/manual-curation candidates: ${summary.actionableCandidates}`,
    `Low-signal candidates: ${summary.lowSignalCandidates}`,
    `Not-actionable candidates: ${summary.notActionableCandidates}`,
    `Potential Laserfiche employee candidates: ${summary.employeeCandidates}`,
    `Potential community-confirmed candidates: ${summary.communityConfirmedCandidates}`,
    `Fetch errors: ${summary.fetchErrors}`,
    "",
    "## Manual Curation Queue",
    "",
    table(
      ["Product", "Signature", "Source type", "Title", "URL"],
      priorityRows.map((row) => [
        row.product,
        row.signature.replaceAll("|", "\\|"),
        row.sourceType,
        row.title.replaceAll("|", "\\|"),
        row.url,
      ]),
    ),
    "",
    "## Low-Signal Or Not-Actionable",
    "",
    table(
      ["Status", "Product", "Title", "URL"],
      summary.rows
        .filter((row) => row.researchStatus !== "candidate")
        .map((row) => [row.researchStatus, row.product, row.title.replaceAll("|", "\\|"), row.url]),
    ),
    "",
    "## Rule",
    "",
    "This pass reviewed detail-page text and updated research metadata only. It does not publish helper entries. Promote rows only after confirming the source-backed symptom, cause, fix, version context, and whether a Laserfiche employee replied.",
  ].join("\n");
}

function candidatePriority(row) {
  let score = 0;
  score += row.extractedErrorCodes.length * 5;
  if (row.sourceType === "Answers candidate - Laserfiche employee") score += 10;
  if (row.sourceType === "Answers candidate - community confirmed") score += 5;
  if (likelyActionableTitle(row.title)) score += 4;
  if (row.productTags.length > 0) score += 2;
  return score;
}

function table(headers, rows) {
  const header = `| ${headers.join(" | ")} |`;
  const divider = `| ${headers.map(() => "---").join(" | ")} |`;
  const body = rows.map((row) => `| ${row.join(" | ")} |`);
  return [header, divider, ...body].join("\n");
}
