# Laserfiche Error Helper Quality Report

Generated: 2026-06-28

## Summary

- Published entries: 1905
- Reviewed sources: 924
- Entries needing validation: 0
- Entries with scenario variants: 17
- High-priority unresolved reviewed sources: 0
- Thin-coverage products with fewer than 5 entries: 4
- Repeated-code clusters to review for scenario modeling: 101

## Confidence Coverage

| Confidence | Entries |
| --- | --- |
| high | 64 |
| low | 1479 |
| medium | 362 |

## Fix Status Coverage

| Fix status | Entries |
| --- | --- |
| diagnostic-only | 350 |
| known-fix | 105 |
| needs-review | 1135 |
| workaround | 315 |

## Validation Triage Coverage

| Validation status | Entries |
| --- | --- |
| official-doc-baseline | 1135 |
| reviewed-diagnostic | 387 |

## Validation Queue by Product

| Product | Needs validation |
| --- | --- |
| Administration Hub | 0 |
| AI Service | 0 |
| API Server | 0 |
| Audit Trail | 0 |
| Common Dialog | 0 |
| Connector | 0 |
| Directory Server | 0 |
| Discussions | 0 |
| Distributed Computing Cluster | 0 |
| Federated Search | 0 |
| Forms | 0 |
| Full Text Search | 0 |
| Import Agent | 0 |
| Laserfiche Installer | 0 |
| Laserfiche Server/Repository Server | 0 |
| Mobile | 0 |
| Office Integration | 0 |
| Quick Fields | 0 |
| Records Management | 0 |
| Snapshot | 0 |
| Web Client | 0 |
| WebLink | 0 |
| Webtools Agent | 0 |
| Windows Client/Desktop Client | 0 |
| Workflow | 0 |

## Reviewed Source Status

| Review status | Sources |
| --- | --- |
| cross-product | 65 |
| curated | 410 |
| curated-partial | 442 |
| no-matching-posts | 2 |
| not-actionable | 4 |

## High-Priority Unresolved Sources

| Source type | Sources |
| --- | --- |

## Thin Product Coverage

| Product | Published entries |
| --- | --- |
| AI Service | 1 |
| Webtools Agent | 2 |
| Administration Hub | 4 |
| Federated Search | 4 |

## Product-Level Lazy Load Candidates

| Product | Published entries | Linked sources |
| --- | --- | --- |
| Laserfiche Server/Repository Server | 1081 | 1164 |
| Windows Client/Desktop Client | 234 | 236 |
| Forms | 122 | 154 |
| Directory Server | 76 | 77 |
| Workflow | 62 | 69 |
| Web Client | 60 | 67 |
| Laserfiche Installer | 41 | 41 |
| Quick Fields | 34 | 35 |
| WebLink | 24 | 27 |
| Import Agent | 24 | 25 |

## Repeated-Code Scenario Review

| Code | Entries | Products | Entries with scenarios |
| --- | --- | --- | --- |
| LFF502-UnexpectedError | 21 | Directory Server, Forms, Laserfiche Server/Repository Server | 0 |
| 9013 | 16 | Connector, Import Agent, Laserfiche Server/Repository Server, Quick Fields, Records Management, Web Client, WebLink, Windows Client/Desktop Client, Workflow | 1 |
| 0x80040310 | 7 | Laserfiche Installer, Web Client, Windows Client/Desktop Client | 0 |
| 9010 | 7 | API Server, Laserfiche Server/Repository Server, Mobile, Quick Fields, Workflow | 1 |
| 0x80004002 | 6 | Laserfiche Server/Repository Server, Windows Client/Desktop Client, Workflow | 1 |
| 9008 | 6 | Full Text Search, Import Agent, Laserfiche Server/Repository Server | 0 |
| 10061 | 6 | Forms, Workflow | 0 |
| 0x80004005 | 5 | Directory Server, Forms, Windows Client/Desktop Client | 0 |
| 0x80131040 | 5 | API Server, Directory Server, Web Client | 0 |
| 6000 | 5 | Directory Server, Laserfiche Server/Repository Server, Records Management, Snapshot, Windows Client/Desktop Client | 0 |
| LFF2106-InvalidDataSent | 5 | Directory Server, Discussions, Mobile | 0 |
| LFF2400-DataSourceConnectionError | 5 | Forms | 0 |
| 0x800706BA | 4 | Distributed Computing Cluster, Quick Fields | 0 |
| 780 | 4 | Laserfiche Server/Repository Server, Snapshot | 1 |
| 784 | 4 | Full Text Search, Laserfiche Server/Repository Server | 1 |
| 797 | 4 | Laserfiche Server/Repository Server, Workflow | 0 |
| 9025 | 4 | Laserfiche Server/Repository Server | 0 |
| 42000 | 4 | Audit Trail, Discussions, Forms | 0 |
| LFF4112-PdfNetworkError | 4 | Forms, Laserfiche Installer | 0 |
| 0x80005000 | 3 | Directory Server, Workflow | 0 |
| 0x80040154 | 3 | Laserfiche Installer, WebLink, Windows Client/Desktop Client | 0 |
| 0xc004248d | 3 | Directory Server | 0 |
| 0xc0042330 | 3 | Laserfiche Installer, Windows Client/Desktop Client | 0 |
| 0xc0042332 / 0x80042332 | 3 | Directory Server, Windows Client/Desktop Client | 0 |
| 0xc0042335 | 3 | Web Client, Windows Client/Desktop Client | 0 |

## Top Validation Candidates

| Product | Code | Fix status | Confidence | Best source | Title |
| --- | --- | --- | --- | --- | --- |

## Review Rules

- Prioritize low-confidence entries that have Laserfiche employee or official documentation sources.
- Upgrade an entry only when the source supports the symptom, cause, and fix for the product/version context.
- Add scenario variants when the same code has different causes or fixes.
- Keep unresolved diagnostic entries visible when they help users identify the error but do not imply a confirmed fix.
- Catalog data is already split into Vite chunks for errors, reviewed sources, official docs, and vendor code; keep large new datasets in separate importable modules.
- If product-level lazy loading is implemented later, start with the largest products in the Product-Level Lazy Load Candidates section.

