# Product Catalog Splitting Design

The published catalog is still small enough to load as a static GitHub Pages app, but the current data shape is approaching the point where product-level chunks will be easier to maintain and faster to render.

## Current State

- `src/data/errors.js` contains the merged publishable error catalog.
- `src/data/reviewedSources.js` contains the reviewed source ledger.
- Build output chunks application code and lazy-loads the large catalog modules after the shell mounts.
- Vite modulepreload is disabled so catalog chunks are not requested from the initial HTML.
- The catalog data remains large enough that Vite reports a large JavaScript chunk warning.
- The largest split candidates are currently Laserfiche Server/Repository Server, Windows Client/Desktop Client, and Forms.

## Recommended Target Shape

The next target is true product slices under `src/data/products/`:

- `src/data/products/index.js` exposes lightweight product metadata, counts, aliases, and version coverage.
- `src/data/products/<productKey>.js` exports the full error entries and reviewed source rows for one product.
- A generated `error-id-index.js` maps every error ID to a product key for deep links.
- A generated lightweight search index contains ID, code, product, message, and searchable keywords so global search does not require loading every product slice immediately.

## Loading Behavior

- Initial page load imports product metadata, the error ID index, and the lightweight search index.
- Selecting a product imports that product slice.
- Opening a direct `?error=<id>` link looks up the product key from the error ID index, imports that slice, and then selects the entry.
- Global search can show lightweight result rows first, then hydrate detail data when a result is selected.

## Migration Steps

1. Add a generation script that writes product slices from the existing merged catalog without changing the UI.
2. Add automated parity checks: total entries, total sources, IDs, product names, source URLs, and search index coverage must match the current catalog.
3. Change the UI data access layer to load from an in-memory catalog store instead of importing `errorEntries` directly in every path.
4. Enable product lazy-loading for product filters and direct error links.
5. Enable global search hydration once product-level loading is stable.
6. Split the official documentation baseline only after product slices are proven stable.

## Guardrails

- Keep all published data sanitized; research-only notes and raw scraping artifacts stay under `research/`.
- Preserve GitHub Pages compatibility. The split data must be static ESM or JSON assets under the site base path.
- Do not change product names during the split. Product renames should remain separate data-cleanup changes.
- Keep the no-selection instruction pane behavior intact for first visits.
