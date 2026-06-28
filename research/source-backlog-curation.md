# Source Backlog Curation

Source research pass: research/source-research-pass-2026-06-28-5.json
Official documentation source augmentations: 10
Reviewed Answers source augmentations: 5
Entries with Answers candidates for manual review: 7
Priority Answers candidates: 0

## Official Documentation Attached

| Entry | Product | Code | Official matches | Message |
| --- | --- | --- | --- | --- |
| full-text-search-9498-session-reset | Full Text Search | 9498 | 1 | Failed to find the full-text search session. The connection to the search engine might have been reset. |
| import-agent-9013-port80-ssl-schedule | Import Agent | 9013 | 1 | Access denied when a scheduled Import Agent profile runs after port 80 is blocked. |
| records-9193-uncutoff-blocked | Records Management | 9193 | 1 | The record or record folder cannot be uncutoff at this point. |
| records-9234-filing-date-after-cutoff | Records Management | 9234 | 1 | The filing date cannot be changed after cutoff or confirming a record transfer. |
| web-client-6720-importing-pdf | Web Client | 6720 | 1 | Error 6720 when importing PDF. |
| web-client-scanning-9013-custom-url | Web Client | 9013 | 1 | Web Scanning access denied through custom URL. |
| web-client-9036-unknown-internal-error | Web Client | 9036 | 1 | Unknown internal error in Web Client. |
| web-client-scanning-9039-date-field | Web Client | 9039 | 1 | Multistatus response when storing from Web Scan URL shortcut. |
| weblink-auto-login-9013 | WebLink | 9013 | 1 | WebLink users get Access Denied. |
| weblink-read-only-named-user-9030 | WebLink | 9030 | 1 | WebLink read-only named user login returns no license available. |

## Reviewed Answers Candidates

| Entry | Disposition | Source | Note |
| --- | --- | --- | --- |
| forms-lff3004-licensing-service-proxy | accepted-diagnostic | [The requested service ILicensingService may not be running LFF3004](https://answers.laserfiche.com/questions/199757/The-requested-service-ILicensingService-may-not-be-running-LFF3004UnableToOpenServiceProxy) | Priority candidate reviewed. The thread suggests checking the Laserfiche Forms Routing Service and links to a web.config-related thread, but the page itself does not confirm a final fix. |
| web-client-http-response-body | rejected-cross-product | [Error Reading HTTP response body](https://answers.laserfiche.com/questions/168241/Error-Reading-HTTP-response-body) | Priority candidate reviewed and rejected for this Web Client entry. The page discusses a Workflow briefcase copy issue, not Web Client response-body handling. |
| weblink-9-lost-connection-tiles | accepted-fix | [A lost connection condition has been detected error WebLink 8.2](https://answers.laserfiche.com/questions/53899/A-lost-connection-condition-has-been-detected-error-weblink-82) | Priority candidate reviewed. The accepted remediation was to set the IIS 6 MaxConnections value to 40 for WebLink on Windows XP; the requester confirmed it worked. |
| workflow-lff5203-wf-server-api-fault | accepted-fix | [Temporary LFF5203 Workflow API timeout](https://answers.laserfiche.com/questions/172318/Temporary-error-The-call-to-Laserfiche-Workflow-API-was-not-successful-The-operation-has-timed-out-LFF5203WFServerApiFault) | Priority candidate reviewed. A later reply reports resolving the issue by changing the Workflow Subscriber service back to LocalSystem. |
| workflow-lff5203-wf-server-api-fault | accepted-fix | [LFF5203](https://answers.laserfiche.com/questions/115969/LFF5203) | Priority candidate reviewed. The requester confirmed that disabling Forms AutoRetry in the cf_options table and restarting the Forms Routing Service stopped duplicate workflow triggers after LFF5203. |
| workflow-lff5203-wf-server-api-fault | accepted-fix | [The call to Laserfiche Workflow API was not successful](https://answers.laserfiche.com/questions/139087/The-call-to-Laserfiche-Workflow-API-was-not-successful) | Priority candidate reviewed. The thread documents Forms giving up after 30 seconds and a support-provided OperationTimeout registry workaround for Workflow Server. |

## Answers Candidates

| Entry | Product | Code | Disposition | Candidate | URL |
| --- | --- | --- | --- | --- | --- |
| api-server-upload-conflict-409 | API Server | 409 | manual-review-low-signal | Laserfiche API On Premise upload failing | https://answers.laserfiche.com/questions/230306/Laserfiche-API-On-Premise-upload-failing |
| api-server-upload-conflict-409 | API Server | 409 | manual-review-low-signal | Forms 11 - Saves/prints field data on page with extra codes. | https://answers.laserfiche.com/questions/213242/Forms-11--Savesprints-field-data-on-page-with-extra-codes |
| api-server-upload-conflict-409 | API Server | 409 | manual-review-low-signal | Swagger v2.0 Definition of Self-Hosted Laserfiche API? | https://answers.laserfiche.com/questions/219565/Swagger-v20-Definition-of-SelfHosted-Laserfiche-API |
| api-server-upload-conflict-409 | API Server | 409 | manual-review-low-signal | Remotely & Silent Uninstall Laserfiche 10.3 and 10.4 Client | https://answers.laserfiche.com/questions/191875/Remotely--Silent-Uninstall-Laserfiche-103-and-104-Client |
| api-server-upload-conflict-409 | API Server | 409 | manual-review-low-signal | Laserfiche VM DEMO on Cloud Provider | https://answers.laserfiche.com/questions/221665/Laserfiche-VM-DEMO-on-Cloud-Provider |
| forms-lff6010-team-filter-timeout | Forms | LFF6010 | manual-review-low-signal | Forms Team Javascript filter no longer working with Forms 11 update 5 | https://answers.laserfiche.com/questions/216086/Forms-Team-Javascript-filter-no-longer-working-with-Forms-11-update-5 |
| forms-lff6010-team-filter-timeout | Forms | LFF6010 | manual-review-low-signal | How Can I Override the User Task Going to a Group | https://answers.laserfiche.com/questions/127460/How-Can-I-Override-the-User-Task-Going-to-a-Group |
| forms-lff8100-notification-server-down | Forms | LFF8100 | manual-review-low-signal | Forms - Configuration improperly stating The Connection Verified for Notification Service Server | https://answers.laserfiche.com/questions/180912/Forms--Configuration-improperly-stating-The-Connection-Verified-for-Notification-Service-Server |
| forms-lff8100-notification-server-down | Forms | LFF8100 | manual-review-low-signal | Forms Notification Hub not working on SSL | https://answers.laserfiche.com/questions/147581/Forms-Notification-Hub-not-working-on-SSL |
| forms-lff8100-notification-server-down | Forms | LFF8100 | manual-review-low-signal | Load Balancing Forms When Routing Service is Not In NLB | https://answers.laserfiche.com/questions/197639/Load-Balancing-Forms-When-Routing-Service-is-Not-In-NLB |
| forms-lff8100-notification-server-down | Forms | LFF8100 | manual-review-low-signal | How to properly, step-by-step configure Laserfiche with a SSL Cert? | https://answers.laserfiche.com/questions/159709/How-to-properly-stepbystep-configure-Laserfiche-with-a-SSL-Cert |
| forms-lff8100-notification-server-down | Forms | LFF8100 | manual-review-low-signal | IPushNotificationService May Not Be Running | https://answers.laserfiche.com/questions/163841/IPushNotificationService-May-Not-Be-Running |
| forms-lff9320-validation-aggregate | Forms | LFF9320 | manual-review-low-signal | Errors encountered during forms submission | https://answers.laserfiche.com/questions/212727/Errors-encountered-during-forms-submission |
| forms-lff9320-validation-aggregate | Forms | LFF9320 | manual-review-low-signal | How to change Backend Validation | https://answers.laserfiche.com/questions/155375/How-to-change-Backend-Validation |
| forms-lff9320-validation-aggregate | Forms | LFF9320 | manual-review-low-signal | Reading Laserfiche errors | https://answers.laserfiche.com/questions/120112/Reading-Laserfiche-errors |
| forms-lff9320-validation-aggregate | Forms | LFF9320 | manual-review-low-signal | Adding values in dropdown list forms with jquery | https://answers.laserfiche.com/questions/122018/Adding-values-in-dropdown-list-forms-with-jquery |
| forms-lff9320-validation-aggregate | Forms | LFF9320 | manual-review-low-signal | Javascript invalidating data | https://answers.laserfiche.com/questions/121754/Javascript-invalidating-data |
| snapshot-driver-126-1377-printservice | Snapshot | 126 | manual-review-low-signal | Unattended Installation (LFGet.exe) - Permissions issue | https://answers.laserfiche.com/questions/232457/Unattended-Installation-LFGetexe--Permissions-issue |
| snapshot-driver-126-1377-printservice | Snapshot | 126 | manual-review-low-signal | Remotely & Silent Uninstall Laserfiche 10.3 and 10.4 Client | https://answers.laserfiche.com/questions/191875/Remotely--Silent-Uninstall-Laserfiche-103-and-104-Client |
| snapshot-driver-126-1377-printservice | Snapshot | 126 | manual-review-low-signal | Error reading XML file - The XML file being uploaded has been corrupted | https://answers.laserfiche.com/questions/169851/Error-reading-XML-file--The-XML-file-being-uploaded-has-been-corrupted |
| web-client-http-response-body | Web Client | WEBCLIENT-HTTP-RESPONSE-BODY | manual-review-low-signal | LF Audit Service Event Log Error | https://answers.laserfiche.com/questions/170630/LF-Audit-Service-Event-Log-Error |
| web-client-http-response-body | Web Client | WEBCLIENT-HTTP-RESPONSE-BODY | manual-review-low-signal | TemplateInfoReader Limit? | https://answers.laserfiche.com/questions/165005/TemplateInfoReader-Limit |
| web-client-http-response-body | Web Client | WEBCLIENT-HTTP-RESPONSE-BODY | manual-review-low-signal | Export Volumes using SDK | https://answers.laserfiche.com/questions/202030/Export-Volumes-using-SDK |
| web-client-http-response-body | Web Client | WEBCLIENT-HTTP-RESPONSE-BODY | manual-review-low-signal | "Error reading HTTP response body" when downloading in Mac OS X | https://answers.laserfiche.com/questions/131312/Error-reading-HTTP-response-body-when-downloading-in-Mac-OS-X |
| workflow-0735-0516-business-process | Workflow | 0735-WF1 | manual-review-low-signal | Forms start a workflow business Process | https://answers.laserfiche.com/questions/99071/Forms-start-a-workflow-business-Process |

## Rule

Official documentation matches are attached only as baseline evidence. Answers candidates remain manual-review items until their detail pages confirm a fix, workaround, or scenario.
