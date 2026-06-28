# Release Process

Use this checklist when publishing a public update to the GitHub Pages helper.

## Pre-Release

1. Run `npm run lint:data`.
2. Run `npm run quality` and review `research/quality-report.md`.
3. Run `npm run validation:batches` when validation coverage changed.
4. Run `npm run curation:priority` when priority-source entries should be re-evaluated.
5. Run `npm run quality` and `npm run validation:batches` again if curation changed fix statuses.
6. Run `npm run progress` when research coverage changed.
7. Run `npm run build`.
8. Run `npm run render:check`.
9. Review `git diff --stat` and confirm only intended files changed.

## Version Notes

Add a dated entry to `CHANGELOG.md` for user-visible changes, data coverage changes, and known limitations.

## Publish

1. Commit with a concise message.
2. Push `main`.
3. Watch the `Deploy GitHub Pages` workflow.
4. Confirm the live site returns `200 OK`.
5. Spot-check one deep link and one filtered URL.

## Data Quality Gate

Before marking an entry as `known-fix` or `workaround`, confirm that the source supports:

- the product context
- the version context, when mentioned
- the observable symptom
- the fix or workaround
- whether the reply came from official documentation, a Laserfiche employee, or the community

Entries that identify an error but do not prove a fix should remain visible as `diagnostic-only`, `unresolved`, or `needs-review`.
