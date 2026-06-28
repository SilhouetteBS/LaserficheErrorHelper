# Product Discovery Review - 2026-06-28 Pass 2

Scope requested: steps 1-7 from the prior next-step list.

## Forms LFF502 Cluster

Reviewed 14 Forms candidates from `research/answers-product-pass-2026-06-28-forms-25-2.json` and the related Workflow pass row for `Forms terminated`.

Accepted and promoted under `forms-lff502-unexpected-error`:

- `accepted-fix` - field access rights removed from Everyone - https://answers.laserfiche.com/questions/157246/Bad-Field-Value-Access-Denied--Troubleshooting-Help
- `accepted-diagnostic` - Workflow service HTTP 500 / server resource exhaustion branch - https://answers.laserfiche.com/questions/109337/Forms-Workflow-Service-stopped-working
- `accepted-fix` - recycle Forms application pool - https://answers.laserfiche.com/questions/157069/LFF502--Unexpected-Error-on-Forms-Submission
- `accepted-fix` - blank field variable name causes invalid XML element name - https://answers.laserfiche.com/questions/104123/An-unexpected-error-has-occurred
- `accepted-fix` - null date format after Forms 10.2 upgrade - https://answers.laserfiche.com/questions/117502/LFF502UnexpectedError-Unexpected-error-after-102-upgrade
- `accepted-fix` - Forms 10.2 Internet Explorer hotfix confirmation - https://answers.laserfiche.com/questions/115409/Error-on-LF-Forms-using-Internet-Explorer
- `accepted-diagnostic` - missing Saxon-HE dependency - https://answers.laserfiche.com/questions/115076/Forms--Ocurri-un-error-inesperado-LFF502UnexpectedError
- `accepted-diagnostic` - Forms 10.0 terminated user-task known issue - https://answers.laserfiche.com/questions/97875/Forms-terminated
- `accepted-diagnostic` - unknown field multiplicity / possible corrupted form - https://answers.laserfiche.com/questions/203584/LFF502Unexpected-Error--Unknown-field-multiplicity
- `accepted-fix` - Forms 11 Update 3 form id/theme id regression and hotfix KB1014419 - https://answers.laserfiche.com/questions/205804/Error-LFF502UnexpectedError-After-Upgrading-Forms-to-Version-11-Update-3

Reviewed but not promoted:

- `diagnostic-only, not enough final confirmation` - intermittent Forms service LDAP credential issue - https://answers.laserfiche.com/questions/146448/Forms-1031-Service-Stopping-Intermittently-Leaving-Processes-Suspended
- `diagnostic-only, not enough final confirmation` - Forms 10.4.5 input string format issue; support case/rollback path only - https://answers.laserfiche.com/questions/203522/LFF502UnexpectedError-Input-string-was-not-in-a-correct-format
- `low-signal` - OperationCanceledException tablet submission thread has no replies or fix - https://answers.laserfiche.com/questions/172749/Forms-Submission-Error-Inner-exception-SystemOperationCanceledException--Message-The-operation-was-canceled
- `low-signal` - rollback form thread recommends event-log review and database restore caution, but no direct fix - https://answers.laserfiche.com/questions/164924/LFF502-error-Any-way-to-roll-back-form-to-previous-version

## Windows Client/Desktop Client Candidates

Reviewed 9 candidates from `research/answers-product-pass-2026-06-28-windows-client-desktop-client-25.json`.

Accepted and promoted:

- `accepted-fix` - Client 8.2 export/display-engine 6608/0x80070050 fixed by upgrading to at least 9.2 - https://answers.laserfiche.com/questions/113868/exporting-data-from-820636
- `accepted-fix` - briefcase paste 6568 resolved by detaching and reattaching repository - https://answers.laserfiche.com/questions/119420/Error-6568-when-pasting-in-briefcase
- `accepted-fix` - 9.0 Client to 9.1 Server 0x80004002 Business Processes issue; upgrade Client or disable Business Processes if unused - https://answers.laserfiche.com/questions/49760/902-and-901-Laserfiche-Client-throwing-errors-connecting-to-91-repository
- `accepted-fix` - post-upgrade 9037 invalid session resolved by moving generated license file to server folder and restarting Laserfiche Server - https://answers.laserfiche.com/questions/48181/I-got-a-9037-error-invalid-session-after-upgrade-from-lasserfiche-81-How-can-I-fix-it
- `accepted-fix` - 9526/784 branch resolved by restoring SQL services and restarting Laserfiche service - https://answers.laserfiche.com/questions/109572/The-repository-cannot-be-mounted-at-the-current-time-because-it-is-being-mounted-or-umounted-Please-wait-until-the-current-operation-completes-9526
- `accepted-diagnostic` - Client crash on one document page; support case, briefcase/crash dump, LFSO tracing, and isolate image/annotation/text - https://answers.laserfiche.com/questions/120217/lf-crashing-when-viewing-document-at-certain-page
- `accepted-diagnostic` - Client crash opening PDFs externally with Acrobat; known issue reported to Adobe as LF bug 282441 - https://answers.laserfiche.com/questions/181371/Client-1041-crashes-when-opening-PDF

Reviewed but not promoted:

- `diagnostic-only, no final fix` - Workflow search query error 9086 - https://answers.laserfiche.com/questions/115342/Workflow-failing-with-9086-Error
- `low-signal/mixed thread` - LFS 10.3 slow responsiveness includes unrelated WebLink and OCR crash branches; no single Client fix - https://answers.laserfiche.com/questions/136227/LFS-103-slow-responsiveness

## Targeted Directory Server and Web Client Discovery

Ran:

- `npm run collect:answers -- "Directory Server" 25`
- `npm run collect:answers -- "Web Client" 25`

New pass files:

- `research/answers-product-pass-2026-06-28-directory-server-25-2.json`
- `research/answers-product-pass-2026-06-28-web-client-25-3.json`

Results:

| Product | Requested | Collected | Candidate rows | No-code rows | Outcome |
| --- | ---: | ---: | ---: | ---: | --- |
| Directory Server | 25 | 25 | 0 | 25 | No new code-bearing candidates |
| Web Client | 25 | 1 | 0 | 1 | No new code-bearing candidates |

Next discovery recommendation:

- Directory Server needs query terms centered on actual code snippets, for example `site:answers.laserfiche.com LFDS 9010`, `LFDS 9012`, `LFDS LFF3007`, `Directory Server 0xc0042332`, and `Laserfiche Directory Server 0x8007052e`.
- Web Client needs query terms centered on legacy product names and exact error text, for example `Web Access 9037`, `Web Access 12039`, `Web Client HTTP 500.19`, `Web Scanning 9013`, and `Web Access Error reading HTTP response body`.
