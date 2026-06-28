import fs from "node:fs";
import path from "node:path";
import { reviewedSources } from "../src/data/reviewedSources.js";

const today = new Date().toISOString().slice(0, 10);
const resultsPath = path.join("research", "product-discovery-results.json");
const [, , productArg = "", targetArg = "25"] = process.argv;
const requestedProduct = productArg.trim();
const targetCount = Number.parseInt(targetArg, 10) || 25;
const passSlug = requestedProduct ? `${slugify(requestedProduct)}-${targetCount}` : "all";
const passPath = path.join("research", `answers-product-pass-${today}-${passSlug}.json`);

const maxPagesPerQuery = targetCount > 25 ? 16 : 8;
const productSearches = [
  {
    product: "Forms",
    productTags: ["Forms"],
    queries: [
      'Forms "LFF" error',
      'Forms "submission failed" error',
      'Forms "routing service" error',
      'Forms "event log" error',
      'Forms "failed to generate" error',
    ],
  },
  {
    product: "Workflow",
    productTags: ["Workflow"],
    queries: [
      'Workflow "WF" error',
      'Workflow "Subscriber" error',
      'Workflow "activity" error',
      'Workflow "terminated" error',
      'Workflow "repository" error',
    ],
  },
  {
    product: "Web Client",
    productTags: ["Web Client"],
    queries: [
      '"Web Client" error Laserfiche',
      '"Web Access" error Laserfiche',
      '"Web Client" "HTTP Error" Laserfiche',
      '"Web Client" "repository" error',
      '"Web Client" "scanning" error',
      '"Web Access" "HTTP Error" Laserfiche',
      '"Web Access" repository error',
      '"Web Scanning" error Laserfiche',
      '"Web Client" "Access Denied" Laserfiche',
      '"Web Client" "Unknown internal error"',
    ],
  },
];

const selectedSearches = requestedProduct
  ? productSearches.filter((search) => search.product.toLowerCase() === requestedProduct.toLowerCase())
  : productSearches;

if (selectedSearches.length === 0) {
  throw new Error(`Unknown product "${requestedProduct}". Known products: ${productSearches.map((search) => search.product).join(", ")}`);
}

const existingResults = JSON.parse(fs.readFileSync(resultsPath, "utf8"));
const existingUrls = new Set([
  ...reviewedSources.map((source) => normalizeUrl(source.url)),
  ...existingResults.map((row) => normalizeUrl(row.url)),
]);

const newRows = [];
const passSummary = [];

for (const search of selectedSearches) {
  const collected = [];
  const seenThisProduct = new Set();

  for (const query of search.queries) {
    for (let page = 1; page <= maxPagesPerQuery && collected.length < targetCount; page += 1) {
      const searchUrl = answersSearchUrl(query, page);
      const html = await fetchText(searchUrl);
      const candidates = extractSearchCandidates(html);

      for (const candidate of candidates) {
        const url = normalizeUrl(candidate.url);
        if (existingUrls.has(url) || seenThisProduct.has(url)) continue;

        seenThisProduct.add(url);
        const detail = await fetchQuestionDetail(url);
        const row = {
          product: search.product,
          query,
          page,
          signature: detail.signature,
          signatureType: detail.signatureType,
          title: detail.title || candidate.title,
          url,
          snippet: detail.snippet || candidate.snippet,
          sourceType: detail.sourceType,
          discoveredDate: today,
          status: detail.status,
          reviewedDate: today,
          productTags: detail.productTags.length ? detail.productTags : search.productTags,
          extractedErrorCodes: detail.extractedErrorCodes,
          notes: detail.notes,
        };

        collected.push(row);
        newRows.push(row);
        existingUrls.add(url);
        if (collected.length >= targetCount) break;
      }
    }
  }

  passSummary.push({
    product: search.product,
    requested: targetCount,
    collected: collected.length,
    rows: collected.map(({ title, url, extractedErrorCodes, status }) => ({
      title,
      url,
      extractedErrorCodes,
      status,
    })),
  });
}

if (newRows.length > 0) {
  existingResults.push(...newRows);
  fs.writeFileSync(resultsPath, `${JSON.stringify(existingResults, null, 2)}\n`);
}

fs.writeFileSync(
  passPath,
  `${JSON.stringify(
    {
      reviewedDate: today,
      targetCount,
      products: passSummary,
    },
    null,
    2,
  )}\n`,
);

console.log(`Added ${newRows.length} new Answers candidates.`);
for (const product of passSummary) {
  console.log(`${product.product}: ${product.collected}/${product.requested}`);
}
console.log(passPath);

function answersSearchUrl(query, page) {
  const params = new URLSearchParams({ q: query, page: String(page) });
  return `https://answers.laserfiche.com/questions?${params}`;
}

async function fetchQuestionDetail(url) {
  const html = await fetchText(url);
  const title = readableTitle(
    cleanText(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "") ||
      cleanText(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || ""),
    url,
  );
  const text = htmlToText(html);
  const extractedErrorCodes = extractErrorCodes(`${title} ${text}`);
  const productTags = extractProductTags(text);
  const hasLaserficheReply = /\b(?:Laserfiche employee|from Laserfiche|Laserfiche staff)\b/i.test(text);
  const hasAcceptedOrResolved = /\b(?:accepted answer|resolved|fixed|solution|workaround)\b/i.test(text);
  const status = extractedErrorCodes.length ? "candidate" : "reviewed-no-code";
  const sourceType = hasLaserficheReply
    ? "Answers candidate - Laserfiche employee"
    : hasAcceptedOrResolved
      ? "Answers candidate - community confirmed"
      : "Answers candidate";

  return {
    title,
    signature: extractedErrorCodes[0] || title,
    signatureType: extractedErrorCodes[0] ? "error-code" : "message-text",
    snippet: relevantSnippet(text, extractedErrorCodes[0] || "error"),
    sourceType,
    productTags,
    extractedErrorCodes,
    status,
    notes: hasLaserficheReply
      ? "Fresh Answers pass candidate. Detail page text indicates a Laserfiche-associated reply may be present; review before promotion."
      : "Fresh Answers pass candidate. Review detail page before promotion.",
  };
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36",
    },
  });
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

function extractErrorCodes(text) {
  const codes = new Set();
  const patterns = [
    /\bLFF\d{3,5}(?:-[A-Za-z0-9]+)?\b/g,
    /\b\d{3,4}-WF\d+\b/g,
    /\b\d{4,5}-[A-Z]{2}\d*\b/g,
    /\b0x[0-9A-Fa-f]{6,8}\b/g,
    /\bHTTP\s*(?:Error\s*)?\d{3}(?:\.\d+)?\b/gi,
    /\b(?:error|code)\s*\[?(\d{3,5})\]?\b/gi,
  ];

  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      codes.add((match[1] || match[0]).replace(/\s+/g, " ").trim());
    }
  }

  return [...codes].slice(0, 8);
}

function extractProductTags(text) {
  const tags = [];
  const productChecks = [
    ["Forms", /\bForms\b/i],
    ["Workflow", /\bWorkflow\b/i],
    ["Web Client", /\bWeb Client\b|\bWeb Access\b/i],
    ["Web Client", /\bWeb Scanning\b|\bscanning\b/i],
    ["Directory Server", /\bDirectory Server\b|\bLFDS\b/i],
    ["Laserfiche Server/Repository Server", /\bRepository\b|\bLaserfiche Server\b/i],
  ];
  for (const [tag, pattern] of productChecks) {
    if (pattern.test(text)) tags.push(tag);
  }
  for (const version of ["9", "10", "11", "12"]) {
    if (new RegExp(`\\b(?:Version\\s*)?${version}(?:\\.\\d+)?\\b`, "i").test(text)) {
      tags.push(`Version ${version}`);
    }
  }
  return [...new Set(tags)];
}

function htmlToText(html) {
  return cleanText(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  );
}

function relevantSnippet(text, needle) {
  const index = text.toLowerCase().indexOf(String(needle).toLowerCase());
  const start = Math.max(0, index === -1 ? 0 : index - 220);
  return text.slice(start, start + 520).trim();
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

function readableTitle(value, url) {
  const cleaned = value.replace(/\s+-\s+Laserfiche Answers\s*$/i, "").replace(/^(Question|Discussion|Announcement)\s+/i, "");
  if (cleaned && !/^Question$|^Discussion$|^Announcement$/i.test(cleaned)) return cleaned;

  const slug = new URL(url).pathname.split("/").filter(Boolean).at(-1) || "";
  return decodeURIComponent(slug).replace(/-/g, " ").replace(/\s+/g, " ").trim();
}

function normalizeUrl(value) {
  const url = new URL(value, "https://answers.laserfiche.com");
  url.search = "";
  url.hash = "";
  return url.toString();
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
