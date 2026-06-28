import fs from "node:fs";
import path from "node:path";

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("Usage: node tools/extract-answer-text.mjs <answers-html> [...]");
  process.exit(1);
}

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  console.log(`\n### ${path.basename(file)}`);
  const title = matchText(html, /<h3 class="qtitle post-title">[\s\S]*?<span>([\s\S]*?)<\/span>/);
  if (title) console.log(`TITLE: ${title}`);

  const blocks = [
    ...html.matchAll(
      /<div class="post-content-topinfo small">([\s\S]*?)<div id="postinner-[\s\S]*?<div class="post-body-raw">([\s\S]*?)<\/div>/g,
    ),
  ];

  for (const [index, block] of blocks.entries()) {
    console.log(`POST ${index + 1} ${clean(block[1])}`);
    console.log(clean(block[2]).slice(0, 2000));
  }
}

function matchText(html, pattern) {
  const match = html.match(pattern);
  return match ? clean(match[1]) : "";
}

function clean(value) {
  return decodeEntities(value)
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
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
