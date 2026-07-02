# Laserfiche Error Helper Quality Report

Generated: 2026-07-02

## Summary

- Published entries: 2175
- Reviewed sources: 1370
- Entries needing validation: 0
- Entries with scenario variants: 20
- High-priority unresolved reviewed sources: 2
- Thin-coverage products with fewer than 5 entries: 1
- Repeated-code clusters to review for scenario modeling: 118

## Confidence Coverage

| Confidence | Entries |
| --- | --- |
| high | 88 |
| low | 1544 |
| medium | 543 |

## Fix Status Coverage

| Fix status | Entries |
| --- | --- |
| diagnostic-only | 356 |
| known-fix | 121 |
| needs-review | 1374 |
| workaround | 324 |

## Validation Triage Coverage

| Validation status | Entries |
| --- | --- |
| official-doc-baseline | 1129 |
| reviewed-diagnostic | 662 |

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
| curated | 428 |
| curated-partial | 450 |
| curated-unresolved | 421 |
| no-matching-posts | 2 |
| not-actionable | 4 |

## High-Priority Unresolved Sources

| Source type | Sources |
| --- | --- |
| Answers - Laserfiche Employee | 2 |

## Thin Product Coverage

| Product | Published entries |
| --- | --- |
| AI Service | 1 |

## Product-Level Lazy Load Candidates

| Product | Published entries | Linked sources |
| --- | --- | --- |
| Laserfiche Server/Repository Server | 1175 | 1265 |
| Windows Client/Desktop Client | 235 | 237 |
| Forms | 140 | 177 |
| Directory Server | 105 | 106 |
| Web Client | 77 | 84 |
| Workflow | 76 | 83 |
| WebLink | 56 | 59 |
| Quick Fields | 54 | 55 |
| Laserfiche Installer | 47 | 47 |
| Import Agent | 30 | 31 |

## Repeated-Code Scenario Review

| Code | Entries | Products | Entries with scenarios |
| --- | --- | --- | --- |
| LFF502-UnexpectedError | 24 | Directory Server, Forms, Laserfiche Server/Repository Server | 1 |
| 9013 | 17 | Connector, Import Agent, Laserfiche Server/Repository Server, Quick Fields, Records Management, Web Client, WebLink, Windows Client/Desktop Client, Workflow | 1 |
| 6000 | 13 | Directory Server, Forms, Laserfiche Installer, Laserfiche Server/Repository Server, Records Management, Snapshot, Windows Client/Desktop Client, Workflow | 0 |
| 9008 | 9 | Full Text Search, Import Agent, Laserfiche Server/Repository Server | 1 |
| 0x80040310 | 7 | Laserfiche Installer, Web Client, Windows Client/Desktop Client | 0 |
| 784 | 7 | Full Text Search, Laserfiche Server/Repository Server | 1 |
| 7050 | 7 | Laserfiche Server/Repository Server | 0 |
| 9010 | 7 | API Server, Laserfiche Server/Repository Server, Mobile, Quick Fields, Workflow | 1 |
| 10061 | 7 | Forms, Quick Fields, Workflow | 0 |
| 42000 | 7 | Audit Trail, Discussions, Forms, Laserfiche Server/Repository Server, Quick Fields, Workflow | 0 |
| 0x80004002 | 6 | Laserfiche Server/Repository Server, Windows Client/Desktop Client, Workflow | 1 |
| 0x800706BA | 5 | Distributed Computing Cluster, Forms, Quick Fields | 0 |
| 0x80004005 | 5 | Directory Server, Forms, Windows Client/Desktop Client | 0 |
| 0x80005000 | 5 | Directory Server, Workflow | 0 |
| 0x80131040 | 5 | API Server, Directory Server, Web Client | 0 |
| 404 | 5 | API Server, Laserfiche Server/Repository Server, WebLink, Workflow | 1 |
| 780 | 5 | Laserfiche Server/Repository Server, Snapshot | 1 |
| 797 | 5 | Laserfiche Server/Repository Server, Workflow | 0 |
| 9025 | 5 | Laserfiche Server/Repository Server | 0 |
| LFF2106-InvalidDataSent | 5 | Directory Server, Discussions, Mobile | 0 |
| LFF2400-DataSourceConnectionError | 5 | Forms | 1 |
| 0x80070002 | 4 | Laserfiche Installer, Laserfiche Server/Repository Server, Web Client, Workflow | 0 |
| 0xc0042335 | 4 | Laserfiche Server/Repository Server, Web Client, Windows Client/Desktop Client | 0 |
| 500 | 4 | Audit Trail, Laserfiche Server/Repository Server, Mobile, WebLink | 0 |
| 9001 | 4 | Laserfiche Server/Repository Server, Records Management, Workflow | 0 |

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

