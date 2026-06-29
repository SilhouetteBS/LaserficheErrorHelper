# Contributing

Thank you for helping improve the FicheBait Laserfiche Error Helper. Contributions should make the catalog more accurate, easier to verify, or easier to maintain.

## Good Contributions

- Correct an error code, message, product, version, symptom, or source link.
- Add a source-backed fix, workaround, or diagnostic step.
- Add a scenario when the same error has more than one cause or fix.
- Improve public documentation, accessibility, tests, or release checks.
- Report a search term that should find an existing entry but does not.

## Evidence Standards

Every new or promoted fix needs source evidence. Preferred source order:

1. Official Laserfiche documentation.
2. Laserfiche Answers replies from Laserfiche employees.
3. Accepted or corroborated Laserfiche Answers community replies.
4. Community-only diagnostic reports.

Do not mark an entry as `known-fix` or `workaround` unless the source supports the product, version when available, symptom, and remediation.

## Before Opening a Pull Request

Run:

```powershell
npm install
npm run lint:data
npm run quality
npm run progress
npm run smoke
npm run build
npm run render:check
```

For user-facing changes, update `CHANGELOG.md`.

## Data Model Notes

- Published entries live in `src/data/errors.js`.
- Reviewed source ledger rows live in `src/data/reviewedSources.js`.
- Source-backed candidate promotions live in `src/data/sourceCandidateReviews.js`.
- Multiple causes or fixes for the same code should be represented with `scenarios` on the best matching entry.
- Raw discovery artifacts stay under `research/` and should not be treated as final evidence without review.

## Pull Request Checklist

- The change is source-backed or clearly marked diagnostic-only.
- Every published source URL has a reviewed source ledger row.
- Product names and version labels match the approved lists.
- Public guidance does not imply official Laserfiche endorsement.
- Risky database or configuration steps include backup/change-control language.
