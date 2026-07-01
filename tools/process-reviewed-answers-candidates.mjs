import fs from "node:fs";

const reportDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Denver",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const reviewPath = `research/answers-chrome-review-${reportDate}.json`;
const discoveryPath = "research/product-discovery-results.json";
const queueJsonPath = `research/answers-chrome-promotion-queue-${reportDate}.json`;
const queueMdPath = `research/answers-chrome-promotion-queue-${reportDate}.md`;

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, "utf8").replace(/^\uFEFF/, ""));
}

function sourceRank(sourceType) {
  if (sourceType.includes("Laserfiche employee")) return 1;
  if (sourceType.includes("Community confirmed")) return 2;
  return 3;
}

function recommendedDisposition(row) {
  if (row.sourceType.includes("Laserfiche employee")) return "Promote first after confirming the staff reply contains usable guidance.";
  if ((row.extractedErrorCodes ?? []).length > 0) return "Review for a source-backed entry or scenario on an existing entry.";
  return "Review as message-text evidence; publish only if the thread has actionable guidance.";
}

function escapeTable(value) {
  return String(value ?? "")
    .replaceAll("|", "\\|")
    .replace(/\s+/g, " ")
    .trim();
}

function table(headers, rows) {
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map(escapeTable).join(" | ")} |`),
  ].join("\n");
}

function normalizeUrl(value) {
  return String(value ?? "").trim().toLowerCase();
}

const review = readJson(reviewPath);
const discoveryRows = readJson(discoveryPath);
const discoveryByUrl = new Map(discoveryRows.map((row) => [normalizeUrl(row.url), row]));

const promotionQueue = review.rows
  .filter((row) => row.researchStatus === "candidate")
  .map((row) => ({
    product: row.product,
    signature: row.signature,
    signatureType: row.signatureType,
    title: row.title,
    url: row.url,
    sourceType: row.sourceType,
    extractedErrorCodes: row.extractedErrorCodes ?? [],
    productTags: row.productTags ?? [],
    snippet: row.snippet,
    recommendedDisposition: recommendedDisposition(row),
  }))
  .sort((a, b) => sourceRank(a.sourceType) - sourceRank(b.sourceType) || a.product.localeCompare(b.product) || a.title.localeCompare(b.title));

let stampedRows = 0;
for (const row of promotionQueue) {
  const discoveryRow = discoveryByUrl.get(normalizeUrl(row.url));
  if (!discoveryRow) continue;
  discoveryRow.processedDate = reportDate;
  discoveryRow.processingQueue = queueMdPath;
  discoveryRow.notes = `${discoveryRow.notes ?? ""} Processed into ${queueMdPath}; ${row.recommendedDisposition}`.replace(/\s+/g, " ").trim();
  stampedRows += 1;
}

const byProduct = promotionQueue.reduce((counts, row) => {
  counts[row.product] = (counts[row.product] ?? 0) + 1;
  return counts;
}, {});

const sourceCounts = promotionQueue.reduce((counts, row) => {
  counts[row.sourceType] = (counts[row.sourceType] ?? 0) + 1;
  return counts;
}, {});

const queue = {
  processedDate: reportDate,
  sourceReviewPath: reviewPath,
  summary: {
    reviewedCandidates: review.reviewedCandidates,
    promotionCandidates: promotionQueue.length,
    stampedDiscoveryRows: stampedRows,
    lowSignalCandidates: review.lowSignalCandidates,
    notActionableCandidates: review.notActionableCandidates,
    employeePriorityCandidates: promotionQueue.filter((row) => row.sourceType.includes("Laserfiche employee")).length,
    codeCandidates: promotionQueue.filter((row) => row.extractedErrorCodes.length > 0).length,
    messageOnlyCandidates: promotionQueue.filter((row) => row.extractedErrorCodes.length === 0).length,
    byProduct,
    bySourceType: sourceCounts,
  },
  promotionQueue,
};

const productSections = Object.entries(byProduct)
  .sort(([a], [b]) => a.localeCompare(b))
  .flatMap(([product]) => {
    const rows = promotionQueue.filter((row) => row.product === product);
    return [
      `## ${product}`,
      "",
      table(
        ["Source", "Codes", "Signature", "Title", "Recommended disposition"],
        rows.map((row) => [
          row.sourceType,
          row.extractedErrorCodes.join(", ") || "None",
          row.signature,
          `[${row.title}](${row.url})`,
          row.recommendedDisposition,
        ]),
      ),
      "",
    ];
  });

const report = [
  "# Chrome Answers Promotion Queue",
  "",
  `Processed: ${reportDate}`,
  "",
  "This queue contains recovered Answers search results that survived the detail-page review pass. These rows are ready for manual source-backed promotion into the public error catalog, but they have not been published as fixes yet.",
  "",
  "## Summary",
  "",
  `- Reviewed candidates: ${review.reviewedCandidates}`,
  `- Promotion candidates: ${promotionQueue.length}`,
  `- Discovery rows stamped as processed: ${stampedRows}`,
  `- Laserfiche employee priority candidates: ${queue.summary.employeePriorityCandidates}`,
  `- Candidates with extracted error codes: ${queue.summary.codeCandidates}`,
  `- Message-only candidates: ${queue.summary.messageOnlyCandidates}`,
  `- Low-signal candidates left out of queue: ${review.lowSignalCandidates}`,
  `- Not-actionable candidates left out of queue: ${review.notActionableCandidates}`,
  "",
  "## Product Counts",
  "",
  table(
    ["Product", "Candidates"],
    Object.entries(byProduct)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([product, count]) => [product, count]),
  ),
  "",
  ...productSections,
];

fs.writeFileSync(queueJsonPath, `${JSON.stringify(queue, null, 2)}\n`);
fs.writeFileSync(queueMdPath, `${report.join("\n")}\n`);
fs.writeFileSync(discoveryPath, `${JSON.stringify(discoveryRows, null, 2)}\n`);

console.log(`Processed ${promotionQueue.length} Answers candidates into ${queueMdPath}.`);
console.log(`Stamped ${stampedRows} discovery rows.`);
