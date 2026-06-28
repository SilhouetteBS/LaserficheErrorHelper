# Research Workflow

This project publishes curated troubleshooting entries only. Raw or partially reviewed research should stay in `research/reviewed-sources.json` until it has enough evidence for `src/data/errors.js`.

## Source Priority

1. Official Laserfiche documentation.
2. Laserfiche Answers replies from Laserfiche employees.
3. Accepted or corroborated Laserfiche Answers community replies.
4. Unverified community reports.

## Review Checklist

For each source reviewed, record:

- URL
- title
- source type
- reviewed date
- product tags
- extracted error codes
- review status
- short notes

When adding a published error entry, include product, versions, symptoms, likely fixes, source links, confidence, and uncertainty notes. Do not publish a fix as high confidence unless the source clearly supports it.

## Multiple Scenarios for One Error

Some Laserfiche errors have more than one cause or fix path. Keep those cases on one entry and use the `scenarios` array when:

- the same code appears in different products or modules
- the same message has different causes by version
- official documentation identifies the code but Answers posts identify product-specific fixes
- community and employee replies describe different but plausible remediation paths

Each scenario should name the symptom, likely cause, fix or next step, version context, and source URLs that support that specific scenario.

## Validation Queue

Run `npm run quality` to generate `research/quality-report.md`. Use the report to prioritize:

1. low-confidence entries with official documentation or employee replies
2. diagnostic-only entries that have enough source context to become a known fix or workaround
3. unresolved entries that need another Answers/documentation pass
4. message-only entries that should be merged into an existing code entry as a scenario

Run `npm run validation:batches` to triage the full validation queue in batches of 50. The generated ledger records each candidate, its batch, a disposition, and the next review step. Treat the ledger as a planning artifact: it proves every candidate was triaged, but it does not by itself justify promoting a fix.

Run `npm run curation:priority` after refreshing validation batches to review priority-source candidates. The command writes `research/priority-source-curation.md`, exports the source candidate set, and updates `src/data/curationOverrides.js` with conservative fix-status promotions.

## Product-Specific Discovery

The official Version 12 server-code pass is tracked separately in `research/answers-search-results.json` and `research/answers-reviewed-summary.json`.

Use `research/product-discovery-queue.json` for product-specific discovery outside the official server-code listing. Each queue item contains official documentation searches and Laserfiche Answers searches for one product.

Use `research/product-discovery-results.json` for candidate signatures found during product discovery. A signature can be:

- a numeric error code, such as `9357`
- an exact UI or log message with no numeric code
- an exception class or subsystem message
- a synthetic identifier for a recurring message-only issue, such as `FORMS-AUTH-001`

Before publishing a product-specific entry in `src/data/errors.js`:

- confirm the source product and version when available
- prefer official docs and Laserfiche employee replies
- avoid duplicating an existing server-code entry unless the product-specific context adds a distinct fix path
- use the approved product list from `src/data/errors.js`
- record every promoted source in `src/data/reviewedSources.js`
