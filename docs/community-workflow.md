# Community Workflow

## How Users Should Contribute

1. Search the live helper for the error code or message.
2. Open the entry and use the correction link when the entry is incomplete or incorrect.
3. Include product, version, symptom, source URL, and suggested correction.
4. Remove private data, credentials, hostnames, repository names, license details, and customer-identifying information.

## Maintainer Review

Maintainers should classify submissions into one of these outcomes:

- Accepted fix: source supports a known fix.
- Accepted workaround: source supports a workaround but not a permanent fix.
- Accepted diagnostic: source helps identify or troubleshoot the error but does not prove a fix.
- Scenario needed: source describes another cause or remediation path for an existing code.
- Rejected cross-product: source belongs to a different product context.
- Rejected low-signal: source does not add actionable evidence.

## Source Promotion Rules

Promote a fix only when the source supports:

- Product context.
- Version context, when available.
- Observable symptom.
- Cause or diagnostic branch.
- Fix, workaround, or next step.
- Source authority.

When the same code has multiple causes, add a scenario instead of replacing the existing guidance.

## Privacy Rules

Public issues and pull requests must not include credentials, license files, customer names, server names, repository names, private URLs, or full logs with identifying data.
