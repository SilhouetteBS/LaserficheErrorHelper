import fs from "node:fs";
import { sourceCandidateReviews } from "../src/data/sourceCandidateReviews.js";

const passPath = process.argv[2] ?? latestPassPath();
const pass = JSON.parse(fs.readFileSync(passPath, "utf8"));
const allPassRows = allSourceResearchPasses().flatMap((candidatePath) => JSON.parse(fs.readFileSync(candidatePath, "utf8")).rows);
const augmentationsPath = "src/data/sourceAugmentations.js";
const reportPath = "research/source-backlog-curation.md";
const jsonPath = "research/source-backlog-curation.json";
const decisionsPath = "research/source-candidate-decisions.json";
const sourceCandidateDecisions = fs.existsSync(decisionsPath)
  ? JSON.parse(fs.readFileSync(decisionsPath, "utf8")).decisions ?? []
  : [];
const allCandidateReviews = Object.fromEntries([
  ...sourceCandidateDecisions.map((decision) => [
    decision.url,
    {
      entryId: decision.entryId,
      disposition: decision.disposition,
      title: decision.title,
      note: decision.note,
    },
  ]),
  ...Object.entries(sourceCandidateReviews),
]);

const officialAugmentations = Object.fromEntries(
  allPassRows
    .filter((row) => row.officialMatches.length > 0)
    .map((row) => [
      row.id,
      uniqueSources(
        row.officialMatches.map((match) => ({
          sourceType: "official-docs",
          title: `Official documentation match: ${match.code}`,
          url: match.url,
          note:
            match.message === row.message
              ? "Official documentation contains the same error message; attached as baseline evidence, not a confirmed fix."
              : "Official documentation contains the same error code; attached as baseline evidence, not a confirmed fix.",
        })),
      ),
    ]),
);

const reviewedCandidateAugmentations = Object.values(sourceCandidateReviews)
  .filter((review) => review.disposition.startsWith("accepted-"))
  .reduce((groups, review) => {
    const sources = groups[review.entryId] ?? [];
    sources.push({
      sourceType: review.sourceType,
      title: review.title,
      url: candidateUrl(review),
      note: review.note,
    });
    groups[review.entryId] = sources;
    return groups;
  }, {});

const sourceAugmentations = mergeAugmentations(officialAugmentations, reviewedCandidateAugmentations);

const answersReviewRows = pass.rows
  .filter((row) => row.answersCandidates.some((candidate) => candidate.url && !candidate.alreadyReviewed && !allCandidateReviews[candidate.url]))
  .map((row) => ({
    id: row.id,
    product: row.product,
    code: row.code,
    message: row.message,
    candidates: row.answersCandidates
      .filter((candidate) => candidate.url && !candidate.alreadyReviewed && !allCandidateReviews[candidate.url])
      .map((candidate) => ({
        title: candidate.title,
        url: candidate.url,
        disposition: likelyRelevant(candidate, row) ? "manual-review-priority" : "manual-review-low-signal",
      })),
  }));

const summary = {
  passPath,
  officialSourceAugmentations: Object.values(officialAugmentations).reduce((sum, sources) => sum + sources.length, 0),
  reviewedCandidateAugmentations: Object.values(reviewedCandidateAugmentations).reduce((sum, sources) => sum + sources.length, 0),
  entriesWithOfficialAugmentations: Object.keys(officialAugmentations).length,
  entriesWithReviewedCandidateAugmentations: Object.keys(reviewedCandidateAugmentations).length,
  entriesWithAnswersCandidates: answersReviewRows.length,
  answersCandidates: answersReviewRows.reduce((sum, row) => sum + row.candidates.length, 0),
  answersPriorityCandidates: answersReviewRows.reduce(
    (sum, row) => sum + row.candidates.filter((candidate) => candidate.disposition === "manual-review-priority").length,
    0,
  ),
};

const augmentationLines = [
  "export const sourceAugmentations = {",
  ...Object.entries(sourceAugmentations)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([id, sources]) => `  ${JSON.stringify(id)}: ${JSON.stringify(sources)},`),
  "};",
  "",
];

const report = [
  "# Source Backlog Curation",
  "",
  `Source research pass: ${passPath}`,
  `Official documentation source augmentations: ${summary.officialSourceAugmentations}`,
  `Reviewed Answers source augmentations: ${summary.reviewedCandidateAugmentations}`,
  `Entries with Answers candidates for manual review: ${summary.entriesWithAnswersCandidates}`,
  `Priority Answers candidates: ${summary.answersPriorityCandidates}`,
  "",
  "## Official Documentation Attached",
  "",
  table(
    ["Entry", "Product", "Code", "Official matches", "Message"],
    allPassRows
      .filter((row) => officialAugmentations[row.id])
      .map((row) => [row.id, row.product, row.code, officialAugmentations[row.id].length, row.message.replaceAll("|", "\\|")]),
  ),
  "",
  "## Reviewed Answers Candidates",
  "",
  table(
    ["Entry", "Disposition", "Source", "Note"],
    Object.entries(allCandidateReviews).map(([url, review]) => [
      review.entryId,
      review.disposition,
      `[${(review.title ?? url).replaceAll("|", "\\|")}](${url})`,
      (review.note ?? "").replaceAll("|", "\\|"),
    ]),
  ),
  "",
  "## Answers Candidates",
  "",
  table(
    ["Entry", "Product", "Code", "Disposition", "Candidate", "URL"],
    answersReviewRows.flatMap((row) =>
      row.candidates.map((candidate) => [
        row.id,
        row.product,
        row.code,
        candidate.disposition,
        candidate.title.replaceAll("|", "\\|"),
        candidate.url,
      ]),
    ),
  ),
  "",
  "## Rule",
  "",
  "Official documentation matches are attached only as baseline evidence. Answers candidates remain manual-review items until their detail pages confirm a fix, workaround, or scenario.",
];

fs.writeFileSync(augmentationsPath, `${augmentationLines.join("\n")}`);
fs.writeFileSync(jsonPath, `${JSON.stringify({ summary, officialAugmentations, reviewedCandidateAugmentations, answersReviewRows }, null, 2)}\n`);
fs.writeFileSync(reportPath, `${report.join("\n")}\n`);
console.log(
  `Attached ${summary.officialSourceAugmentations} official sources and listed ${summary.answersCandidates} Answers candidates for review.`,
);

function latestPassPath() {
  const candidates = sourceResearchPassEntries().sort((a, b) => a.mtimeMs - b.mtimeMs);
  if (candidates.length === 0) throw new Error("No source research pass files found.");
  return `research/${candidates.at(-1).name}`;
}

function allSourceResearchPasses() {
  return sourceResearchPassEntries().map((entry) => `research/${entry.name}`);
}

function sourceResearchPassEntries() {
  return fs
    .readdirSync("research")
    .filter((name) => /^source-research-pass-\d{4}-\d{2}-\d{2}(?:-\d+)?\.json$/.test(name))
    .map((name) => ({ name, mtimeMs: fs.statSync(`research/${name}`).mtimeMs }));
}

function uniqueSources(sources) {
  const seen = new Set();
  return sources.filter((source) => {
    const key = `${source.sourceType}|${source.url}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function mergeAugmentations(...augmentationMaps) {
  const merged = {};
  for (const augmentationMap of augmentationMaps) {
    for (const [id, sources] of Object.entries(augmentationMap)) {
      merged[id] = uniqueSources([...(merged[id] ?? []), ...sources]);
    }
  }
  return merged;
}

function candidateUrl(review) {
  return Object.entries(sourceCandidateReviews).find(([, candidateReview]) => candidateReview === review)?.[0];
}

function likelyRelevant(candidate, row) {
  const haystack = `${candidate.title} ${candidate.snippet ?? ""}`.toLowerCase();
  return haystack.includes(String(row.code).toLowerCase()) || haystack.includes(row.message.toLowerCase().slice(0, 36));
}

function table(headers, rows) {
  const header = `| ${headers.join(" | ")} |`;
  const divider = `| ${headers.map(() => "---").join(" | ")} |`;
  const body = rows.map((row) => `| ${row.join(" | ")} |`);
  return [header, divider, ...body].join("\n");
}
