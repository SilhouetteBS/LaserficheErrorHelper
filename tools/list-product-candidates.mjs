import fs from "node:fs";

const [, , productArg = "", statusArg = "candidate", limitArg = "25"] = process.argv;
const limit = Number.parseInt(limitArg, 10) || 25;
const rows = JSON.parse(fs.readFileSync("research/product-discovery-results.json", "utf8"));

const filtered = rows
  .filter((row) => !productArg || row.product.toLowerCase() === productArg.toLowerCase())
  .filter((row) => !statusArg || row.status === statusArg)
  .slice(0, limit);

const counts = rows.reduce((acc, row) => {
  acc[row.product] ||= {};
  acc[row.product][row.status] = (acc[row.product][row.status] || 0) + 1;
  return acc;
}, {});

console.log(JSON.stringify({ filters: { product: productArg || "All", status: statusArg || "All", limit }, counts }, null, 2));

for (const row of filtered) {
  console.log(`\n${row.product} | ${row.status} | ${row.signature}`);
  console.log(row.title);
  console.log(row.url);
}
