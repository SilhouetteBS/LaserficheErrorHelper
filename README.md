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
npm run build
npm run render:check
npm run dev
```

## GitHub Pages

The app is configured for the repository path `/LaserficheSelfHostedErrorHelper/` through `vite.config.js` and the included Pages workflow.
