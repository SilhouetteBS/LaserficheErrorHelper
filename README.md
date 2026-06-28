# Laserfiche Self-Hosted Error Helper

Interactive GitHub Pages app for browsing Laserfiche self-hosted error codes, symptoms, and curated troubleshooting guidance from Laserfiche documentation and Laserfiche Answers.

## Data Rules

- Published entries live in `src/data/errors.js`.
- Reviewed research lives in `research/reviewed-sources.json`.
- Laserfiche employee replies are ranked above community replies.
- Low-confidence entries are allowed when they come from official code listings but do not yet have a reviewed fix.

## Development

```powershell
npm install
npm run lint:data
npm run quality
npm run validation:batches
npm run curation:priority
npm run build
npm run render:check
npm run dev
```

## Research and Quality

- `npm run progress` updates the broad research coverage report.
- `npm run quality` updates `research/quality-report.md` with validation counts and the highest-priority uncertain entries.
- `npm run validation:batches` updates `research/validation-batches.md` and `research/validation-batches.json` in batches of 50.
- `npm run curation:priority` reviews priority-source candidates and updates `src/data/curationOverrides.js`.
- Low-confidence or diagnostic-only entries should stay visible, but fixes should not be promoted without source-backed evidence.
- Repeated causes or fixes for the same code should be captured as scenarios on the existing entry instead of creating duplicate entries.

## GitHub Pages

The app is configured for the repository path `/LaserficheSelfHostedErrorHelper/` through `vite.config.js` and the included Pages workflow.

See `docs/release-process.md` before publishing public updates.
