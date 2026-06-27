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
