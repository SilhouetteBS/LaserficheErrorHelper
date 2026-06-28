# Priority Source Curation

Priority-source candidates reviewed: 138
Fix-status overrides applied: 86
Total override entries after merge: 118

## Decision Summary

| Action | Entries |
| --- | --- |
| kept-diagnostic | 32 |
| kept-existing-guidance | 1 |
| kept-unresolved | 19 |
| promoted-known-fix | 27 |
| promoted-workaround | 59 |

## Product Summary

| Product | Entries |
| --- | --- |
| Administration Hub | 2 |
| API Server | 1 |
| Audit Trail | 6 |
| Connector | 2 |
| Directory Server | 5 |
| Distributed Computing Cluster | 2 |
| Federated Search | 1 |
| Forms | 16 |
| Full Text Search | 4 |
| Import Agent | 4 |
| Laserfiche Installer | 4 |
| Laserfiche Server/Repository Server | 46 |
| Mobile | 6 |
| Office Integration | 5 |
| Quick Fields | 3 |
| Records Management | 1 |
| Snapshot | 1 |
| Web Client | 4 |
| WebLink | 7 |
| Windows Client/Desktop Client | 7 |
| Workflow | 11 |

## Overrides

| Product | Code | Previous | New | Reason | Message |
| --- | --- | --- | --- | --- | --- |
| Administration Hub | ADMIN-HUB-AGENT-CONNECTIVITY | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Administration Hub cannot connect to some servers with agents installed. |
| API Server | API-FILE-NOT-FOUND | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Invalid Request. Property file not found in the request body. |
| Audit Trail | 9237 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Could not enable audit log. |
| Audit Trail | AUDITTRAIL-ADDSEARCHABLEDATA | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | There was an error while applying Audit Trail repository configuration changes. |
| Audit Trail | AUDITTRAIL-CONFIGURATION-ERROR | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Error while configuring Audit Trail date ranges or repository settings. |
| Audit Trail | 40001 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Audit Trail database purge transaction was chosen as the deadlock victim. |
| Audit Trail | 08001 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | SQL Server Native Client could not open a connection to SQL Server. |
| Connector | DOCUSIGN-WIS-405 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | HTTP 405 when opening DocuSign Web Import Services endpoint. |
| Distributed Computing Cluster | DCC-OCR-SCHEDULER | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | OCR processing could not be performed by the Scheduler. |
| Directory Server | 8335 / 0000208F | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Invalid DN syntax during LookupNestedGroupMembership. |
| Directory Server | HTTP 503 / LFDS-ENDPOINT | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Forms configuration cannot reach LFDS LicenseManager service. |
| Forms | LFF9906-AuditTrailTmeoutSendEventToATHub | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Forms timed out sending audit events to Audit Trail Hub Service. |
| Forms | DCOM-OLD-SERVER | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | DCOM was unable to communicate with an old Laserfiche server. |
| Forms | FORMS-INTERNAL-ERROR | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Laserfiche Forms has encountered an internal error. |
| Forms | LFF2105 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | An error occurred while retrieving your form. |
| Forms | LFF2400-DataSourceConnectionError | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | An error occurred while testing the data source connection. |
| Forms | LFF335 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Cannot register Laserfiche repository. |
| Forms | LFF378-Lookupfailed | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Lookup failed to retrieve data from tables. |
| Forms | LFF502 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | An unexpected error has occurred. |
| Forms | LFF502 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Laserfiche Forms has encountered a problem. Unexpected error. |
| Forms | LFF706 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Unable to trigger Forms routing. |
| Forms | FORMS-ILLEGAL-CHARACTER | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Illegal character error when submitting an offline mobile form. |
| Forms | FORMS-ROUTING-NOT-LISTENING | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Forms Routing Service is running but not listening on its port. |
| Full Text Search | 9451 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | The search catalog could not be created or failed to start. |
| Full Text Search | 9479 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Error connecting to the search engine. |
| Full Text Search | LFFTS-INDEX-MIRROR | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Mirroring search index files is not a supported corruption failover strategy. |
| Import Agent | 9008 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | General database error while generating pages from PDF. |
| Import Agent | IMPORT-AGENT-COMPARE-ARRAY | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Failed to compare two elements in the array while executing an Import Agent profile. |
| Import Agent | EVENT-8 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Access is denied in Import Agent Event ID 8 for a small subset of files. |
| Laserfiche Installer | INSTALLER-LOG-FILE-OPEN | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Error opening installation log file. |
| Laserfiche Server/Repository Server | 789 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Invalid object name |
| Laserfiche Server/Repository Server | 1040 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | The specified index is out of range for this collection |
| Laserfiche Server/Repository Server | 780 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | No response received from the server |
| Laserfiche Server/Repository Server | 782 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Invalid host name |
| Laserfiche Server/Repository Server | 784 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Operation timed out |
| Laserfiche Server/Repository Server | 797 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Could not connect to the Laserfiche Server |
| Laserfiche Server/Repository Server | 9006 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Volume not found |
| Laserfiche Server/Repository Server | 9008 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | General database error |
| Laserfiche Server/Repository Server | 9010 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | The User Account or Password is Incorrect |
| Laserfiche Server/Repository Server | 9012 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Trustee not Found |
| Laserfiche Server/Repository Server | 9013 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Access Denied |
| Laserfiche Server/Repository Server | 9014 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Entry Locked |
| Laserfiche Server/Repository Server | 9017 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Bad Field Value |
| Laserfiche Server/Repository Server | 9022 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Volume Currently Locked or in Use |
| Laserfiche Server/Repository Server | 9025 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Error Reading Repository Information, or Repository Misconfigured |
| Laserfiche Server/Repository Server | 9035 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | The Current Request Could Not Be Executed Because There Are Too Many Existing Operations Executing |
| Laserfiche Server/Repository Server | 9044 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Invalid Volume Path |
| Laserfiche Server/Repository Server | 9051 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | The Specified Operation Is Not Recognized |
| Laserfiche Server/Repository Server | 9059 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Operation Failed Due To Entry Sharing Violation |
| Laserfiche Server/Repository Server | 9063 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | The entry is locked and cannot be modified, or the object needs to be refreshed before it can be updated. |
| Laserfiche Server/Repository Server | 9066 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | One Or More Required Fields Were Omitted |
| Laserfiche Server/Repository Server | 9073 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | This User Is Not Allowed to Log In Using a Password |
| Laserfiche Server/Repository Server | 9084 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | The search term you have entered is not valid. |
| Laserfiche Server/Repository Server | 9105 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | A read-only session is not permitted to perform this operation. |
| Laserfiche Server/Repository Server | 9237 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Could not enable audit log. |
| Laserfiche Server/Repository Server | 9265 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | There was an error decompressing the briefcase. The briefcase file may be corrupt or the disk may be full. |
| Laserfiche Server/Repository Server | 9288 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | This repository does not have an associated catalog. |
| Laserfiche Server/Repository Server | 9290 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | The repository cannot be unregistered because the search catalog could not be detached. |
| Laserfiche Server/Repository Server | 9302 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Setting the date or time pattern to the supplied string failed. |
| Laserfiche Server/Repository Server | 9337 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | The field constraint has a syntax error or is invalid. |
| Laserfiche Server/Repository Server | 9352 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | The number of registered Laserfiche named users has reached its licensed limit. |
| Laserfiche Server/Repository Server | 9356 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | LDAP server profile not found. |
| Laserfiche Server/Repository Server | 9409 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Fail to initialize the external table. |
| Laserfiche Server/Repository Server | 9526 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | The repository cannot be mounted at the current time because it is being mounted or unmounted. Please wait until the current operation completes. |
| Laserfiche Server/Repository Server | 9528 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Cannot connect to the Laserfiche Directory Server. |
| Mobile | MOBILE-CERTIFICATE-INVALID | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | The certificate for this server is invalid in the Mobile app. |
| Mobile | MOBILE-DATABASE-NOT-FOUND | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Database Not Found, Please Check the Name of the Database. |
| Mobile | LFDS-WCF-HANDSHAKE | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Mobile cannot configure Directory Server access from a DMZ server. |
| Mobile | 9010 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | The user account or password is incorrect when using Windows authentication in Mobile. |
| Office Integration | 0xe0434352 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Excel crashes or Laserfiche tab is missing. |
| Office Integration | OFFICE-INVISIBLE-FORM | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | This form is invisible while opening Office documents through WebTools Agent. |
| Quick Fields | QF-ERROR-LOGS | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Where to review Quick Fields error details. |
| Snapshot | SNAPSHOT-INTERNAL-16 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Internal error 16 from Snapshot virtual printer output. |
| Windows Client/Desktop Client | 9013 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Access Denied from /laserfiche/DocumentService.ashx/GetSecurity. |
| Web Client | WEBCLIENT-OCR-QUEUE | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Documents could not be sent to the OCR queue. |
| Web Client | WEB-SCANNING-NOT-LOADING | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Web Scanning does not load. |
| WebLink | 3005 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Event code 3005: An unhandled exception has occurred. |
| WebLink | WEBLINK-COMPRESSED-FILE-CORRUPT | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Compressed file data is invalid or corrupt and cannot be decompressed. |
| Windows Client/Desktop Client | 0x80040155 / 341 | diagnostic-only | known-fix | Captured source notes include explicit fix, resolved, accepted-answer, or corrected-configuration language. | Interface not registered while emailing from Laserfiche Client. |
| Workflow | 0267-WF1 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | The script method was not found. |
| Workflow | 0543-WF0 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | The Workflow Server needs a license with the Laserfiche serial as a connection. |
| Workflow | 0544-WF0 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Workflow Designer connection or condition editor failure. |
| Workflow | WORKFLOW-INVALID-MAIL-HEADER | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Invalid character was found in the mail header. |
| Workflow | 797 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Workflow Subscriber could not connect to Laserfiche Server. |
| Workflow | 9001 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Workflow Subscriber cannot process an entry that no longer exists. |
| Workflow | 9013 | diagnostic-only | workaround | Employee-priority source notes provide actionable remediation, but not a universal confirmed fix. | Workflow Subscriber access denied. |

## Kept for Manual Review

| Product | Code | Status | Action | Reason | Message |
| --- | --- | --- | --- | --- | --- |
| Office Integration | 0x4b9c08e8 / 0x57e2061a / 0x0011fd82 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Missing Laserfiche tag in Excel |
| Windows Client/Desktop Client | 0x80029c4a | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Error Code: 0 MAPI_E_FAILURE |
| Laserfiche Installer | 0x80029c4a / 0x80070057 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Error code 6000 (library\DLL) & Error code 0 / MAPI_E_FAILURE when trying to email out of Laserfiche |
| Directory Server | 0xC0000064 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Windows Authentication validation says the account does not exist. |
| Windows Client/Desktop Client | 0xc0042330 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Error trying to redact a document |
| Laserfiche Server/Repository Server | 0xc0042354 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Invalid Volume Path (9044) |
| Windows Client/Desktop Client | 0xc0042354 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Laserfiche Volumes |
| Web Client | 401 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Remote server returned unauthorized. |
| Windows Client/Desktop Client | 499 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Error Message: Unknown error. [499Invalid class string] (Invalid class string) |
| Laserfiche Installer | 0588-WF1 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Issue publishing workflows with custom activities using 3rd party libraries |
| Workflow | 0604-WFSO0 | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | The communication object ServiceChannel cannot be used because it is in the Faulted state. |
| Workflow | 0637-WF1 | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | The session has been reset by the server. |
| Laserfiche Installer | 0742-WF1 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Workflow Enhanced Security |
| Laserfiche Server/Repository Server | 768 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Unknown error |
| Full Text Search | 784 | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | Operation timed out. |
| Laserfiche Server/Repository Server | 792 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Invalid stream state |
| Laserfiche Server/Repository Server | 1366 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Internal SSL error |
| Laserfiche Server/Repository Server | 2044 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | VM Server move |
| Laserfiche Server/Repository Server | 9008 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Repository operations fail while Laserfiche Server loses SQL connectivity. |
| Workflow | 9010 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Audit Trail shows Workflow invalid username or password failures. |
| Laserfiche Server/Repository Server | 9011 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Account locked |
| Records Management | 9013 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Access denied deleting a record series. |
| Laserfiche Server/Repository Server | 9030 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Maximum sessions or licensing limit reached |
| WebLink | 9035 | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | The current request could not be performed because there are too many existing operations running. |
| Laserfiche Server/Repository Server | 9067 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | The Current Session Has Been Terminated |
| WebLink | 9091 | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | Unexpected end-of-file or end-of-input in WebLink search URL. |
| Import Agent | 9133 | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | Page text out of range while importing large text files. |
| Laserfiche Server/Repository Server | 9523 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | The repository cannot be mounted at the current time because it is being upgraded. Please wait until the upgrade completes. |
| Laserfiche Server/Repository Server | 9527 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | The result of the operation cannot be retrieved because the operation has not finished. |
| Quick Fields | 22018 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | ODBC Data Source Administrator |
| Audit Trail | 42000 | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | DBCC SHRINKDATABASE could not adjust space allocation for the Audit Trail database. |
| Workflow | 2147467259 | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | Workflow not responsive / Error sending HTTP request to server. |
| Connector | CONNECTOR-CONTROL-VALUE-INVALID | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | Writing the value to the target application control failed because the value is not valid. |
| Distributed Computing Cluster | DCC-WORKER-REMOTE-SERVER | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | Unable to connect to the remote server when adding a DCC worker. |
| Federated Search | FEDERATED-SEARCH-INSTALL-FAILED | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Federated Search installation failed and will be rolled back. |
| Forms | FORMS-ARCHIVE-SEQUENCE | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | Sequence contains no matching element. |
| Forms | HTTP 500.19 / 0x800700b7 | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | Forms returns HTTP Error 500.19 with error code 0x800700b7. |
| WebLink | HTTP 503 / WEBLINK-SESSION-NULL | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | WebLink returns HTTP 503 or logs Value cannot be null for a disconnected session. |
| Administration Hub | LFAH3800 | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | Laserfiche Administration Hub encountered a SCP error. |
| Directory Server | LFDS-LDAP-CREDENTIAL-INVALID | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | The supplied credential is invalid when saving or using an LFDS LDAP connection. |
| Directory Server | LFDS19 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | No user found when adding a user to Directory Server. |
| Forms | LFF706 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Unable to trigger routing. |
| Mobile | LFF5017-LicenseValidationNoSuccess | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Forms Configuration Failed to Load |
| Forms | LFF5437 | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | An error occurred when generating pages for PDFs in a Save to Repository service task. |
| Mobile | MOBILE-NETWORK-FAILURE-FORMS | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Network failure when opening Fill out a form in Laserfiche Mobile. |
| Office Integration | OFFICE-COM-IENUMERABLE | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | Unable to cast COM object to System.Collections.IEnumerable during Word checkout. |
| Office Integration | OFFICE-REPOSITORY-NOT-FOUND | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | Office plugin cannot find the repository. |
| Quick Fields | QF-FIELD-ERROR | workaround | kept-existing-guidance | Entry already had source-backed fix guidance. | Field Error appears for Quick Fields metadata assignments. |
| Windows Client/Desktop Client | TEXT-EXTRACTOR-LOAD-FAILED | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | Failed to load Text Extractor. |
| WebLink | WEBLINK-ARGUMENT-NULL | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | Caught exception ArgumentNullException, Message: Value cannot be null in WebLink. |
| WebLink | WEBLINK-PAGE1 | diagnostic-only | kept-diagnostic | Captured source notes are diagnostic or explicitly state that no universal public fix is confirmed. | WebLink Page1.aspx error after a single search result. |
| Web Client | WEBSCAN-INVALID-CONNECTION | unresolved | kept-unresolved | Reviewed public sources still do not contain a confirmed fix. | Invalid connection when launching Web Client Scanning. |

