# Maintenance Plan

## Monthly

- Run `npm run collect:answers -- "Product Name" 25` for products with thin coverage or recent community reports.
- Review GitHub issues labeled `needs-review`.
- Run `npm run quality` and check repeated-code clusters.
- Add scenarios for repeated codes with confirmed different causes.

## Quarterly

- Refresh official documentation imports with `npm run generate:official-docs`.
- Run `npm run progress` and compare product coverage.
- Review `docs/known-limitations.md` and update counts.
- Check the live GitHub Pages app on desktop and mobile.

## Before Public Releases

- Run `npm run verify:launch`.
- Update `CHANGELOG.md`.
- Confirm GitHub Pages deploy passes.
- Spot-check the live site, one deep link, one filtered URL, and one correction issue link.

## Priority Queues

1. User-submitted source corrections.
2. Laserfiche employee source-backed fixes.
3. Repeated-code scenario modeling.
4. Thin products: AI Service and Webtools Agent.
5. Official-doc baseline entries with high search demand.
