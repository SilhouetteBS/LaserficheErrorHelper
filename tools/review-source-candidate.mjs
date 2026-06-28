import fs from "node:fs";

const decisionsPath = "research/source-candidate-decisions.json";
const curationPath = "research/source-backlog-curation.json";
const validDispositions = new Set([
  "accepted-fix",
  "accepted-diagnostic",
  "rejected-low-signal",
  "rejected-cross-product",
  "pending",
]);

const [url, disposition, ...noteParts] = process.argv.slice(2);

if (!url || !disposition || !validDispositions.has(disposition)) {
  console.error(
    [
      "Usage: node tools/review-source-candidate.mjs <url> <disposition> [note]",
      `Dispositions: ${[...validDispositions].join(", ")}`,
    ].join("\n"),
  );
  process.exit(1);
}

const curation = fs.existsSync(curationPath) ? JSON.parse(fs.readFileSync(curationPath, "utf8")) : { answersReviewRows: [] };
const candidate = curation.answersReviewRows
  .flatMap((row) => row.candidates.map((source) => ({ ...source, entryId: row.id, product: row.product, code: row.code })))
  .find((source) => source.url === url);

const decisions = fs.existsSync(decisionsPath)
  ? JSON.parse(fs.readFileSync(decisionsPath, "utf8"))
  : { updatedDate: null, decisions: [] };

const nextDecision = {
  url,
  entryId: candidate?.entryId ?? null,
  product: candidate?.product ?? null,
  code: candidate?.code ?? null,
  title: candidate?.title ?? null,
  disposition,
  note: noteParts.join(" ").trim(),
  reviewedDate: new Date().toISOString().slice(0, 10),
};

decisions.updatedDate = nextDecision.reviewedDate;
decisions.decisions = [
  ...decisions.decisions.filter((decision) => decision.url !== url),
  nextDecision,
].sort((a, b) => (a.entryId ?? "").localeCompare(b.entryId ?? "") || a.url.localeCompare(b.url));

fs.writeFileSync(decisionsPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(`Marked ${url} as ${disposition}.`);
