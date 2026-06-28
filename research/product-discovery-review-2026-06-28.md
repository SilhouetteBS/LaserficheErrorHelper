# Product Discovery Review - 2026-06-28

Reviewed latest targeted product-discovery passes:

- `research/answers-product-pass-2026-06-28-forms-25-2.json`
- `research/answers-product-pass-2026-06-28-workflow-25-2.json`
- `research/answers-product-pass-2026-06-28-directory-server-25.json`
- `research/answers-product-pass-2026-06-28-windows-client-desktop-client-25.json`
- `research/answers-product-pass-2026-06-28-web-client-25-2.json`

## Summary

| Product | Requested | Collected | Candidate rows | No-code rows | Review priority |
| --- | ---: | ---: | ---: | ---: | --- |
| Forms | 25 | 25 | 25 | 0 | High |
| Workflow | 25 | 25 | 2 | 23 | Low |
| Directory Server | 25 | 25 | 0 | 25 | None from this pass |
| Windows Client/Desktop Client | 25 | 25 | 9 | 16 | Medium |
| Web Client | 25 | 1 | 0 | 1 | None from this pass |

## Next Manual Review Queue

### Forms

This pass is dominated by `LFF502-UnexpectedError` variants. Review as a cluster, because the same broad Forms code appears across service stoppage, submission, upgrade, browser, and data-format scenarios.

High-priority sample rows:

- `LFF502`, `LFF502-UnexpectedError` - Forms 10.3.1 Service Stopping Intermittently Leaving Processes Suspended - https://answers.laserfiche.com/questions/146448/Forms-1031-Service-Stopping-Intermittently-Leaving-Processes-Suspended
- `LFF502-UnexpectedError`, `0x80004005` - Forms Workflow Service stopped working - https://answers.laserfiche.com/questions/109337/Forms-Workflow-Service-stopped-working
- `LFF502`, `LFF502-UnexpectedError` - LFF502 - Unexpected Error on Forms Submission - https://answers.laserfiche.com/questions/157069/LFF502--Unexpected-Error-on-Forms-Submission
- `LFF502-UnexpectedError` - LFF502-UnexpectedError: Input string was not in a correct format - https://answers.laserfiche.com/questions/203522/LFF502UnexpectedError-Input-string-was-not-in-a-correct-format
- `LFF502-UnexpectedError` - Unexpected error after 10.2 upgrade - https://answers.laserfiche.com/questions/117502/LFF502UnexpectedError-Unexpected-error-after-102-upgrade

Recommended handling:

- Create or update one parent `LFF502-UnexpectedError` Forms entry.
- Promote only confirmed scenario branches, not one universal fix.
- Prioritize Laserfiche employee replies and requester-confirmed outcomes.

### Windows Client/Desktop Client

This pass added several concrete code candidates. Some may belong to Laserfiche Server/Repository Server rather than Windows Client after review.

Candidate rows:

- `9086` - Workflow failing with 9086 Error - https://answers.laserfiche.com/questions/115342/Workflow-failing-with-9086-Error
- `0x80070050` - exporting data from 8.2.0.636 - https://answers.laserfiche.com/questions/113868/exporting-data-from-820636
- `6568` - Error 6568 when pasting in briefcase - https://answers.laserfiche.com/questions/119420/Error-6568-when-pasting-in-briefcase
- `0x80004002` - 9.0.2 and 9.0.1 Laserfiche Client throwing errors connecting to 9.1 repository - https://answers.laserfiche.com/questions/49760/902-and-901-Laserfiche-Client-throwing-errors-connecting-to-91-repository
- `9037` - invalid session after upgrade from Laserfiche 8.1 - https://answers.laserfiche.com/questions/48181/I-got-a-9037-error-invalid-session-after-upgrade-from-lasserfiche-81-How-can-I-fix-it
- `784`, `9526` - repository cannot be mounted while mount/unmount is in progress - https://answers.laserfiche.com/questions/109572/The-repository-cannot-be-mounted-at-the-current-time-because-it-is-being-mounted-or-umounted-Please-wait-until-the-current-operation-completes-9526
- `0x5876f4ad`, `0x5862fabe`, `0xc0000005`, `0x001fcf46` - lf crashing when viewing document at certain page - https://answers.laserfiche.com/questions/120217/lf-crashing-when-viewing-document-at-certain-page
- `0x5aac406e`, `0xfa43f4b2`, `0xc06d007e`, `0x0010ddc2` - LFS 10.3 slow responsiveness - https://answers.laserfiche.com/questions/136227/LFS-103-slow-responsiveness
- `0x5cdf1ea5`, `0xd49544eb`, `0xc0000005`, `0x0003e935` - Client 10.4.1 crashes when opening PDF - https://answers.laserfiche.com/questions/181371/Client-1041-crashes-when-opening-PDF

Recommended handling:

- Review crash-signature rows together and only promote if the page identifies a product version, root cause, or confirmed workaround.
- Reclassify repository mount/session codes to Laserfiche Server/Repository Server if the source indicates the Client is only surfacing a server-side condition.

### Workflow

Only two code-bearing rows were found in this pass:

- `0x80131937`, `22003` - The conversion of the nvarchar value overflowed an INT2 column Error - https://answers.laserfiche.com/questions/197595/The-conversion-of-the-nvarchar-value-overflowed-an-INT2-column-Error
- `LFF502-UnexpectedError` - Form(s) terminated - https://answers.laserfiche.com/questions/97875/Forms-terminated

Recommended handling:

- Treat the first as a possible Workflow/SQL diagnostic candidate.
- Treat the second as part of the Forms `LFF502` cluster unless the page shows a Workflow-specific cause.

### Directory Server and Web Client

No actionable code-bearing candidates were added from these specific pass files.

Recommended handling:

- Skip these pass files for now.
- Use more targeted query terms for the next discovery run, such as `LFDS SAML error code`, `LFDS authentication 0x`, `Web Access HTTP 500`, `Web Client 0x800`, and `Web Scanning error`.
