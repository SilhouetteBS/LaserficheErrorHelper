import fs from "node:fs";
import path from "node:path";

import { errorEntries } from "../src/data/errors.js";
import { officialDocumentationErrorEntries } from "../src/data/officialDocumentationErrors.js";
import { reviewedSources } from "../src/data/reviewedSources.js";

const today = new Date().toISOString().slice(0, 10);
const passPath = nextAvailablePassPath(path.join("research", `source-research-pass-${today}.json`));
const reportPath = "research/source-research-backlog.md";
const requestTimeoutMs = 15000;
const maxPages = 2;
const maxCandidates = 5;

const reviewedUrls = new Set(reviewedSources.map((source) => normalizeUrl(source.url)));
const backlogEntries = errorEntries
  .filter((entry) => entry.validationStatus === "source-research-needed")
  .sort((a, b) => a.product.localeCompare(b.product) || a.code.localeCompare(b.code, undefined, { numeric: true }));

const researchRows = [];

for (const entry of backlogEntries) {
  const existingEntryUrls = new Set(entry.sources.map((source) => normalizeUrl(source.url)));
  const answersCandidates = [];
  for (const query of searchQueries(entry)) {
    for (let page = 1; page <= maxPages && answersCandidates.length < maxCandidates; page += 1) {
      let html = "";
      try {
        html = await fetchText(answersSearchUrl(query, page));
      } catch (error) {
        answersCandidates.push({
          query,
          page,
          error: error.message,
        });
        continue;
      }

      for (const candidate of extractSearchCandidates(html)) {
        const url = normalizeUrl(candidate.url);
        if (existingEntryUrls.has(url)) continue;
        if (answersCandidates.some((row) => row.url === url)) continue;
        answersCandidates.push({
          query,
          page,
          title: candidate.title,
          url,
          alreadyReviewed: reviewedUrls.has(url),
          snippet: candidate.snippet,
        });
        if (answersCandidates.length >= maxCandidates) break;
      }
    }
  }

  const officialMatches = officialDocumentationErrorEntries
    .filter((officialEntry) => officialMatchesBacklogEntry(officialEntry, entry))
    .slice(0, 5)
    .map((officialEntry) => ({
      id: officialEntry.id,
      code: officialEntry.code,
      product: officialEntry.product,
      message: officialEntry.message,
      url: officialEntry.sources[0]?.url,
    }));

  researchRows.push({
    id: entry.id,
    product: entry.product,
    code: entry.code,
    message: entry.message,
    existingSources: [...existingEntryUrls],
    officialMatches,
    answersCandidates,
    conclusion:
      answersCandidates.some((candidate) => candidate.url && !candidate.alreadyReviewed) || officialMatches.length > 0
        ? "needs-manual-review"
        : "no-new-public-source-found",
  });
}

const summary = {
  reviewedDate: today,
  backlogEntries: backlogEntries.length,
  rowsWithNewAnswersCandidates: researchRows.filter((row) =>
    row.answersCandidates.some((candidate) => candidate.url && !candidate.alreadyReviewed),
  ).length,
  rowsWithOfficialMatches: researchRows.filter((row) => row.officialMatches.length > 0).length,
  rowsWithoutNewPublicSources: researchRows.filter((row) => row.conclusion === "no-new-public-source-found").length,
  rows: researchRows,
};

fs.writeFileSync(passPath, `${JSON.stringify(summary, null, 2)}\n`);
fs.writeFileSync(reportPath, `${backlogReport(summary)}\n`);
console.log(
  `Researched ${summary.backlogEntries} backlog rows; ${summary.rowsWithNewAnswersCandidates} have new Answers candidates and ${summary.rowsWithOfficialMatches} have official-doc matches.`,
);
console.log(passPath);

function searchQueries(entry) {
  return [
    `${entry.product} "${entry.code}" Laserfiche`,
    `"${entry.code}" "${entry.message}"`,
    `"${entry.message}" Laserfiche`,
  ];
}

function officialMatchesBacklogEntry(officialEntry, backlogEntry) {
  if (normalizeComparable(officialEntry.code) === normalizeComparable(backlogEntry.code)) return true;
  if (normalizeComparable(officialEntry.message) === normalizeComparable(backlogEntry.message)) return true;
  return false;
}

function answersSearchUrl(query, page) {
  const params = new URLSearchParams({ q: query, page: String(page) });
  return `https://answers.laserfiche.com/questions?${params}`;
}

async function fetchText(url) {
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
  return response.text();
}

function extractSearchCandidates(html) {
  const candidates = [];
  const seen = new Set();
  const anchorPattern = /<a\b[^>]*href=["']([^"']*\/questions\/\d+\/[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
  for (const match of html.matchAll(anchorPattern)) {
    const url = normalizeUrl(match[1]);
    const title = cleanText(match[2]);
    if (!title || seen.has(url)) continue;
    seen.add(url);
    candidates.push({ url, title, snippet: title });
  }
  return candidates;
}

function backlogReport(summary) {
  const rows = summary.rows.map((row) => [
    row.product,
    row.code,
    row.officialMatches.length,
    row.answersCandidates.filter((candidate) => candidate.url && !candidate.alreadyReviewed).length,
    row.conclusion,
    row.message.replaceAll("|", "\\|"),
  ]);

  return [
    "# Source Research Backlog",
    "",
    `Last researched: ${summary.reviewedDate}`,
    `Entries needing additional source research: ${summary.backlogEntries}`,
    `Rows with new Answers candidates: ${summary.rowsWithNewAnswersCandidates}`,
    `Rows with official-doc matches: ${summary.rowsWithOfficialMatches}`,
    "",
    table(["Product", "Code", "Official matches", "New Answers candidates", "Conclusion", "Message"], rows),
    "",
    `Detailed pass data: ${passPath}`,
  ].join("\n");
}

function table(headers, rows) {
  const header = `| ${headers.join(" | ")} |`;
  const divider = `| ${headers.map(() => "---").join(" | ")} |`;
  const body = rows.map((row) => `| ${row.join(" | ")} |`);
  return [header, divider, ...body].join("\n");
}

function cleanText(value) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeComparable(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]/g, "");
}

function normalizeUrl(value) {
  const url = new URL(value, "https://answers.laserfiche.com");
  url.search = "";
  url.hash = "";
  return url.toString();
}

function nextAvailablePassPath(basePath) {
  if (!fs.existsSync(basePath)) return basePath;

  const parsed = path.parse(basePath);
  for (let index = 2; ; index += 1) {
    const candidate = path.join(parsed.dir, `${parsed.name}-${index}${parsed.ext}`);
    if (!fs.existsSync(candidate)) return candidate;
  }
}
