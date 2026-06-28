export const sourceCandidateReviews = {
  "https://answers.laserfiche.com/questions/199757/The-requested-service-ILicensingService-may-not-be-running-LFF3004UnableToOpenServiceProxy": {
    entryId: "forms-lff3004-licensing-service-proxy",
    disposition: "accepted-diagnostic",
    sourceType: "answers-community",
    title: "The requested service ILicensingService may not be running LFF3004",
    note:
      "Priority candidate reviewed. The thread suggests checking the Laserfiche Forms Routing Service and links to a web.config-related thread, but the page itself does not confirm a final fix.",
    reviewStatus: "curated-unresolved",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF3004"],
  },
  "https://answers.laserfiche.com/questions/168241/Error-Reading-HTTP-response-body": {
    entryId: "web-client-http-response-body",
    disposition: "rejected-cross-product",
    sourceType: "answers-community",
    title: "Error Reading HTTP response body",
    note:
      "Priority candidate reviewed and rejected for this Web Client entry. The page discusses a Workflow briefcase copy issue, not Web Client response-body handling.",
    reviewStatus: "cross-product",
    productTags: ["Workflow", "Version 10"],
    extractedErrorCodes: ["WEBCLIENT-HTTP-RESPONSE-BODY"],
  },
  "https://answers.laserfiche.com/questions/53899/A-lost-connection-condition-has-been-detected-error-weblink-82": {
    entryId: "weblink-9-lost-connection-tiles",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "A lost connection condition has been detected error WebLink 8.2",
    note:
      "Priority candidate reviewed. The accepted remediation was to set the IIS 6 MaxConnections value to 40 for WebLink on Windows XP; the requester confirmed it worked.",
    reviewStatus: "curated",
    productTags: ["WebLink", "Version 9"],
    extractedErrorCodes: ["WEBLINK-LOST-CONNECTION"],
  },
  "https://answers.laserfiche.com/questions/172318/Temporary-error-The-call-to-Laserfiche-Workflow-API-was-not-successful-The-operation-has-timed-out-LFF5203WFServerApiFault": {
    entryId: "workflow-lff5203-wf-server-api-fault",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "Temporary LFF5203 Workflow API timeout",
    note:
      "Priority candidate reviewed. A later reply reports resolving the issue by changing the Workflow Subscriber service back to LocalSystem.",
    reviewStatus: "curated",
    productTags: ["Workflow", "Forms", "Version 11"],
    extractedErrorCodes: ["LFF5203"],
  },
  "https://answers.laserfiche.com/questions/115969/LFF5203": {
    entryId: "workflow-lff5203-wf-server-api-fault",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "LFF5203",
    note:
      "Priority candidate reviewed. The requester confirmed that disabling Forms AutoRetry in the cf_options table and restarting the Forms Routing Service stopped duplicate workflow triggers after LFF5203.",
    reviewStatus: "curated",
    productTags: ["Workflow", "Forms", "Version 10"],
    extractedErrorCodes: ["LFF5203"],
  },
  "https://answers.laserfiche.com/questions/139087/The-call-to-Laserfiche-Workflow-API-was-not-successful": {
    entryId: "workflow-lff5203-wf-server-api-fault",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "The call to Laserfiche Workflow API was not successful",
    note:
      "Priority candidate reviewed. The thread documents Forms giving up after 30 seconds and a support-provided OperationTimeout registry workaround for Workflow Server.",
    reviewStatus: "curated",
    productTags: ["Workflow", "Forms", "Version 10"],
    extractedErrorCodes: ["LFF5203"],
  },
  "https://answers.laserfiche.com/questions/230306/Laserfiche-API-On-Premise-upload-failing": {
    entryId: "api-server-upload-conflict-409",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "Laserfiche API On Premise upload failing",
    note:
      "Reviewed candidate accepted. The requester confirmed that creating a new repository volume and directing uploads there resolved HTTP 409 upload failures; a Laserfiche employee explained the copied database and volume may be out of sync and recommended Support's integrity tooling.",
    reviewStatus: "curated",
    productTags: ["API Server", "Laserfiche Server/Repository Server", "Version 12"],
    extractedErrorCodes: ["409", "-2147024816"],
  },
  "https://answers.laserfiche.com/questions/216086/Forms-Team-Javascript-filter-no-longer-working-with-Forms-11-update-5": {
    entryId: "forms-lff6010-team-filter-timeout",
    disposition: "accepted-fix",
    sourceType: "answers-laserfiche-employee",
    title: "Forms Team Javascript filter no longer working with Forms 11 update 5",
    note:
      "Reviewed candidate accepted. Laserfiche employee replies identify this as the same Forms 11 Update 5 team-filter issue addressed by hotfix, note that existing running instances may need the user task restarted or main_instance_extended_data cleared, and state the issue was fixed in Forms 12 as bug 510207.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 11", "Version 12"],
    extractedErrorCodes: ["LFF6010"],
  },
  "https://answers.laserfiche.com/questions/127460/How-Can-I-Override-the-User-Task-Going-to-a-Group": {
    entryId: "forms-lff6010-team-filter-timeout",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "How Can I Override the User Task Going to a Group",
    note:
      "Reviewed candidate accepted for an LFF6010 InvalidJavaScriptFilter scenario. The confirmed fix is to return team member objects from team.findTeamMembersByUserName or team.findTeamMembersByDisplayName and verify that saved process variable values match the expected usernames.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF6010"],
  },
  "https://answers.laserfiche.com/questions/180912/Forms--Configuration-improperly-stating-The-Connection-Verified-for-Notification-Service-Server": {
    entryId: "forms-lff8100-notification-server-down",
    disposition: "accepted-diagnostic",
    sourceType: "answers-laserfiche-employee",
    title: "Forms Configuration improperly states connection verified for Notification Service Server",
    note:
      "Reviewed candidate accepted. A Laserfiche employee explains that FormsConfig tests the Master Service endpoint, while LFF8100 can still occur when the Hub URL is not configured with an address accessible to both the Master Service and browsers; they recommend reviewing Notification Hub/Master configs and LFNotificationService logs.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF8100"],
  },
  "https://answers.laserfiche.com/questions/147581/Forms-Notification-Hub-not-working-on-SSL": {
    entryId: "forms-lff8100-notification-server-down",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "Forms Notification Hub not working on SSL",
    note:
      "Reviewed candidate accepted. The confirmed SSL fix path includes stopping the Notification Hub Service, binding the certificate to port 8181 with netsh, adding the URL ACL for the Hub service account, and verifying Forms/Notification URLs use the matching FQDN.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF8100"],
  },
  "https://answers.laserfiche.com/questions/197639/Load-Balancing-Forms-When-Routing-Service-is-Not-In-NLB": {
    entryId: "forms-lff8100-notification-server-down",
    disposition: "accepted-diagnostic",
    sourceType: "answers-laserfiche-employee",
    title: "Load Balancing Forms When Routing Service is Not In NLB",
    note:
      "Reviewed candidate accepted. A Laserfiche employee explains that load-balanced Forms servers must connect to the primary Routing and Notification services and that ports 8268 and 8181 must be open among Forms servers, Notification Master, Notification Hub, and browsers.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF8100"],
  },
  "https://answers.laserfiche.com/questions/159709/How-to-properly-stepbystep-configure-Laserfiche-with-a-SSL-Cert": {
    entryId: "forms-lff8100-notification-server-down",
    disposition: "accepted-diagnostic",
    sourceType: "answers-laserfiche-employee",
    title: "How to properly configure Laserfiche with an SSL certificate",
    note:
      "Reviewed candidate accepted as supporting SSL diagnostics. Laserfiche employee guidance recommends getting services working with FQDN and DNS first, then loading certificates whose hostnames match and are trusted by the clients and services.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF8100"],
  },
  "https://answers.laserfiche.com/questions/163841/IPushNotificationService-May-Not-Be-Running": {
    entryId: "forms-lff8100-notification-server-down",
    disposition: "accepted-diagnostic",
    sourceType: "answers-laserfiche-employee",
    title: "IPushNotificationService May Not Be Running",
    note:
      "Reviewed candidate accepted. Staff guidance is to verify or restart the Laserfiche Notification Master Service, inspect LFNotificationService logs, and check SSL/TLS binding, URL ACL, and DMZ Hub/Master routing for notification traffic.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF8100"],
  },
  "https://answers.laserfiche.com/questions/212727/Errors-encountered-during-forms-submission": {
    entryId: "forms-lff9320-validation-aggregate",
    disposition: "accepted-diagnostic",
    sourceType: "answers-community",
    title: "Errors encountered during forms submission",
    note:
      "Reviewed candidate accepted. The Forms 11 scenario includes LFF9300, LFF9312, and LFF9320 during submission; the suggested diagnostic is to test backend validation behavior when users see required-field validation on tablets but not computers.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 11"],
    extractedErrorCodes: ["LFF9300", "LFF9312", "LFF9320"],
  },
  "https://answers.laserfiche.com/questions/155375/How-to-change-Backend-Validation": {
    entryId: "forms-lff9320-validation-aggregate",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "How to change Backend Validation",
    note:
      "Reviewed candidate accepted. The thread documents LFF9309/LFF9312/LFF9320 invalid choice validation and confirms Backend Validation can be changed from the form settings gear in Forms 10.2.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF9309", "LFF9312", "LFF9320"],
  },
  "https://answers.laserfiche.com/questions/120112/Reading-Laserfiche-errors": {
    entryId: "forms-lff9320-validation-aggregate",
    disposition: "accepted-diagnostic",
    sourceType: "answers-community",
    title: "Reading Laserfiche errors",
    note:
      "Reviewed candidate accepted. The community answer explains that the Position value maps to field order, points to Backend Validation settings, and cautions that reducing validation can weaken data validation.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF9309", "LFF9312", "LFF9320"],
  },
  "https://answers.laserfiche.com/questions/122018/Adding-values-in-dropdown-list-forms-with-jquery": {
    entryId: "forms-lff9320-validation-aggregate",
    disposition: "accepted-fix",
    sourceType: "answers-laserfiche-employee",
    title: "Adding values in dropdown list forms with jquery",
    note:
      "Reviewed candidate accepted. A Laserfiche employee explains that backend validation rejects JavaScript-added choices unless they are configured choices and says to change Backend Validation to No Validation if script-added choices are required.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF9309", "LFF9312", "LFF9320"],
  },
  "https://answers.laserfiche.com/questions/121754/Javascript-invalidating-data": {
    entryId: "forms-lff9320-validation-aggregate",
    disposition: "accepted-diagnostic",
    sourceType: "answers-laserfiche-employee",
    title: "Javascript invalidating data",
    note:
      "Reviewed candidate accepted. A Laserfiche employee explains that replacing fields with custom script can remove fields and cause backend validation to fail; hide fields and insert links after them instead of replacing them.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF9313", "LFF9312", "LFF9320"],
  },
  "https://answers.laserfiche.com/questions/170630/LF-Audit-Service-Event-Log-Error": {
    entryId: "web-client-http-response-body",
    disposition: "accepted-diagnostic",
    sourceType: "answers-community",
    title: "LF Audit Service Event Log Error",
    note:
      "Reviewed candidate accepted as a related HTTP response-body diagnostic. The reply maps 0x2efe to ERROR_INTERNET_CONNECTION_ABORTED and suggests intermittent network issues when the product can recover on later attempts.",
    reviewStatus: "curated",
    productTags: ["Audit Trail", "Version 10"],
    extractedErrorCodes: ["0x2efe", "WEBCLIENT-HTTP-RESPONSE-BODY"],
  },
  "https://answers.laserfiche.com/questions/165005/TemplateInfoReader-Limit": {
    entryId: "web-client-http-response-body",
    disposition: "accepted-diagnostic",
    sourceType: "answers-laserfiche-employee",
    title: "TemplateInfoReader Limit",
    note:
      "Reviewed candidate accepted as a related HTTP response-body diagnostic. Laserfiche employee replies suggest a possible SDK/template-field bug, support case with exported definitions, or proxy/firewall interference if the aborted HTTP response recurs.",
    reviewStatus: "curated",
    productTags: ["API Server", "Laserfiche Server/Repository Server", "Version 10"],
    extractedErrorCodes: ["0x2efe", "WEBCLIENT-HTTP-RESPONSE-BODY"],
  },
  "https://answers.laserfiche.com/questions/131312/Error-reading-HTTP-response-body-when-downloading-in-Mac-OS-X": {
    entryId: "web-client-http-response-body",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "Error reading HTTP response body when downloading in Mac OS X",
    note:
      "Reviewed candidate accepted. The Web Access 10.2 download thread reports two concrete remediation paths: replacing a problematic page in the document and disabling BranchCache on the Laserfiche server when caching caused the failure.",
    reviewStatus: "curated",
    productTags: ["Web Client", "Version 10"],
    extractedErrorCodes: ["WEBCLIENT-HTTP-RESPONSE-BODY"],
  },
  "https://answers.laserfiche.com/questions/99071/Forms-start-a-workflow-business-Process": {
    entryId: "workflow-0735-0516-business-process",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "Forms start a workflow business Process",
    note:
      "Reviewed candidate accepted. The thread documents 0735-WF1 and LFF5203 when Forms starts a workflow business process; the requester confirmed logging out of the Client and back in resolved the missing business process details, and staff identified it as a Client bug with newly published business processes.",
    reviewStatus: "curated",
    productTags: ["Workflow", "Forms", "Version 10"],
    extractedErrorCodes: ["0735-WF1", "LFF5203"],
  },
  "https://answers.laserfiche.com/questions/157246/Bad-Field-Value-Access-Denied--Troubleshooting-Help": {
    entryId: "forms-lff502-unexpected-error",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "Bad Field Value Access Denied - Troubleshooting Help",
    note:
      "Reviewed candidate accepted. The requester confirmed Forms LFF502/field access failures were resolved by adding the Everyone group back to field permissions.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF502", "9010"],
  },
  "https://answers.laserfiche.com/questions/109337/Forms-Workflow-Service-stopped-working": {
    entryId: "forms-lff502-unexpected-error",
    disposition: "accepted-diagnostic",
    sourceType: "answers-community-confirmed",
    title: "Forms Workflow Service stopped working",
    note:
      "Reviewed candidate accepted. The thread ties LFF502 to Workflow service HTTP 500/endpoint failures and later confirms that excessive CPU or RAM usage can prevent Laserfiche applications from communicating.",
    reviewStatus: "curated",
    productTags: ["Forms", "Workflow", "Version 10"],
    extractedErrorCodes: ["LFF502", "0x80004005"],
  },
  "https://answers.laserfiche.com/questions/157069/LFF502--Unexpected-Error-on-Forms-Submission": {
    entryId: "forms-lff502-unexpected-error",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "LFF502 - Unexpected Error on Forms Submission",
    note:
      "Reviewed candidate accepted. Multiple users confirmed recycling the Forms application pool resolved LFF502 on form submission.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF502"],
  },
  "https://answers.laserfiche.com/questions/104123/An-unexpected-error-has-occurred": {
    entryId: "forms-lff502-unexpected-error",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "An unexpected error has occurred",
    note:
      "Reviewed candidate accepted. The requester confirmed LFF502 with invalid expanded name was caused by a Forms field variable with no name.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF502"],
  },
  "https://answers.laserfiche.com/questions/117502/LFF502UnexpectedError-Unexpected-error-after-102-upgrade": {
    entryId: "forms-lff502-unexpected-error",
    disposition: "accepted-fix",
    sourceType: "answers-laserfiche-employee",
    title: "LFF502 Unexpected error after 10.2 upgrade",
    note:
      "Reviewed candidate accepted. Laserfiche employee replies identify null date-field formats after a Forms 10.2 upgrade and provide SQL to locate and update affected cf_fields rows; the requester confirmed the fix.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF502"],
  },
  "https://answers.laserfiche.com/questions/115409/Error-on-LF-Forms-using-Internet-Explorer": {
    entryId: "forms-lff502-unexpected-error",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "Error on LF Forms using Internet Explorer",
    note:
      "Reviewed candidate accepted. The requester confirmed Forms 10.2 hotfix KB1013831 resolved LFF502 submissions from Internet Explorer.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF502"],
  },
  "https://answers.laserfiche.com/questions/115076/Forms--Ocurri-un-error-inesperado-LFF502UnexpectedError": {
    entryId: "forms-lff502-unexpected-error",
    disposition: "accepted-diagnostic",
    sourceType: "answers-laserfiche-employee",
    title: "Forms - Ocurrio un error inesperado LFF502",
    note:
      "Reviewed candidate accepted. A Laserfiche employee ties LFF502 routing save failures to a missing Saxon-HE dependency and recommends reinstalling Saxon-HE from the Forms installer Support folder.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF502"],
  },
  "https://answers.laserfiche.com/questions/97875/Forms-terminated": {
    entryId: "forms-lff502-unexpected-error",
    disposition: "accepted-diagnostic",
    sourceType: "answers-laserfiche-employee",
    title: "Forms terminated",
    note:
      "Reviewed candidate accepted. Laserfiche employee replies identify a known Forms 10.0 issue where user tasks can terminate with LFF502 and say an upcoming 10.0 update would address it.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF502"],
  },
  "https://answers.laserfiche.com/questions/203584/LFF502Unexpected-Error--Unknown-field-multiplicity": {
    entryId: "forms-lff502-unexpected-error",
    disposition: "accepted-diagnostic",
    sourceType: "answers-laserfiche-employee",
    title: "LFF502 Unexpected Error - Unknown field multiplicity",
    note:
      "Reviewed candidate accepted. A Laserfiche employee explains that Unknown field multiplicity can occur when a field outside a collection/table is submitted as if it were inside a collection/table, indicating possible form corruption.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 10"],
    extractedErrorCodes: ["LFF502"],
  },
  "https://answers.laserfiche.com/questions/205804/Error-LFF502UnexpectedError-After-Upgrading-Forms-to-Version-11-Update-3": {
    entryId: "forms-lff502-unexpected-error",
    disposition: "accepted-fix",
    sourceType: "answers-laserfiche-employee",
    title: "Error LFF502 UnexpectedError After Upgrading Forms to Version 11 Update 3",
    note:
      "Reviewed candidate accepted. Laserfiche employee replies identify a Forms 11 Update 3 regression when a form id matches a theme id, provide a SQL workaround after database backup, and point to hotfix KB1014419.",
    reviewStatus: "curated",
    productTags: ["Forms", "Version 11"],
    extractedErrorCodes: ["LFF502"],
  },
  "https://answers.laserfiche.com/questions/113868/exporting-data-from-820636": {
    entryId: "windows-client-desktop-client-0x80070050-export-display-engine",
    disposition: "accepted-fix",
    sourceType: "answers-laserfiche-employee",
    title: "exporting data from 8.2.0.636",
    note:
      "Reviewed candidate accepted. Laserfiche employee reply says export issues with some TIFF Group IV images should be resolved by upgrading to at least Laserfiche 9.2.",
    reviewStatus: "curated",
    productTags: ["Windows Client/Desktop Client", "Version 9"],
    extractedErrorCodes: ["6608", "0x80070050"],
  },
  "https://answers.laserfiche.com/questions/119420/Error-6568-when-pasting-in-briefcase": {
    entryId: "windows-client-desktop-client-6568-briefcase-volume",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "Error 6568 when pasting in briefcase",
    note:
      "Reviewed candidate accepted. The requester confirmed detaching and reattaching the repository resolved 6568 Volume cannot be found when pasting a briefcase.",
    reviewStatus: "curated",
    productTags: ["Windows Client/Desktop Client", "Version 9"],
    extractedErrorCodes: ["6568"],
  },
  "https://answers.laserfiche.com/questions/49760/902-and-901-Laserfiche-Client-throwing-errors-connecting-to-91-repository": {
    entryId: "windows-client-desktop-client-0x80004002-application-error-due-to-no-such-interface-supported",
    disposition: "accepted-fix",
    sourceType: "answers-laserfiche-employee",
    title: "9.0.2 and 9.0.1 Laserfiche Client throwing errors connecting to 9.1 repository",
    note:
      "Reviewed candidate accepted. Laserfiche employee replies identify a 9.0 Client timing issue exposed by 9.1 Server changes; upgrade clients to 9.1 or disable Business Processes with the EnableBusinessProcesses setting if BPs are not used.",
    reviewStatus: "curated",
    productTags: ["Windows Client/Desktop Client", "Laserfiche Server/Repository Server", "Version 9"],
    extractedErrorCodes: ["6000", "0x80004002"],
  },
  "https://answers.laserfiche.com/questions/48181/I-got-a-9037-error-invalid-session-after-upgrade-from-lasserfiche-81-How-can-I-fix-it": {
    entryId: "lf-server-9037-invalid-session",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "I got a 9037 error invalid session after upgrade from Laserfiche 8.1",
    note:
      "Reviewed candidate accepted. The requester confirmed moving the generated license file into the server folder and restarting the Laserfiche service resolved 9037 after upgrade.",
    reviewStatus: "curated",
    productTags: ["Laserfiche Server/Repository Server", "Windows Client/Desktop Client", "Version 9"],
    extractedErrorCodes: ["9037"],
  },
  "https://answers.laserfiche.com/questions/109572/The-repository-cannot-be-mounted-at-the-current-time-because-it-is-being-mounted-or-umounted-Please-wait-until-the-current-operation-completes-9526": {
    entryId: "lf-server-9526-repository-mounting-unmounting",
    disposition: "accepted-fix",
    sourceType: "answers-community-confirmed",
    title: "The repository cannot be mounted at the current time because it is being mounted or unmounted",
    note:
      "Reviewed candidate accepted. The requester found SQL services were not running due to a login issue, and another reply confirmed restarting the Laserfiche Service cleared 9526.",
    reviewStatus: "curated",
    productTags: ["Laserfiche Server/Repository Server", "Version 10"],
    extractedErrorCodes: ["9526", "784"],
  },
  "https://answers.laserfiche.com/questions/120217/lf-crashing-when-viewing-document-at-certain-page": {
    entryId: "windows-client-desktop-client-0x5876f4ad-specific-page-crash",
    disposition: "accepted-diagnostic",
    sourceType: "answers-laserfiche-employee",
    title: "lf crashing when viewing document at certain page",
    note:
      "Reviewed candidate accepted as diagnostic. Laserfiche employee guidance says to open a support case with a briefcase or crash dump, narrow whether the image, thumbnail, annotations, or text cause the crash, and enable LFSO tracing.",
    reviewStatus: "curated",
    productTags: ["Windows Client/Desktop Client", "Version 10"],
    extractedErrorCodes: ["0x5876f4ad", "0x5862fabe", "0xc0000005", "0x001fcf46"],
  },
  "https://answers.laserfiche.com/questions/181371/Client-1041-crashes-when-opening-PDF": {
    entryId: "windows-client-desktop-client-0x5cdf1ea5-pdf-acrobat-crash",
    disposition: "accepted-diagnostic",
    sourceType: "answers-laserfiche-employee",
    title: "Client 10.4.1 crashes when opening PDF",
    note:
      "Reviewed candidate accepted. Laserfiche employee reply identifies a known issue reported to Adobe, LF bug 282441, when opening PDFs externally with Acrobat causes Client crashes.",
    reviewStatus: "curated",
    productTags: ["Windows Client/Desktop Client", "Version 10", "Version 11"],
    extractedErrorCodes: ["0x5cdf1ea5", "0xd49544eb", "0xc0000005", "0x0003e935"],
  },
};

export const sourceCandidatePromotions = {
  "forms-lff502-unexpected-error": {
    fixStatus: "workaround",
    confidence: "medium",
    curationNote:
      "Reviewed LFF502 cluster added multiple confirmed scenario branches. LFF502 remains a broad wrapper; use the LFForms event inner exception to choose the branch.",
    likelyFixes: [
      "Start with Applications and Services Logs > LFForms and identify the inner exception before applying any fix.",
      "If LFF502 appears after a form submission and the stack references SubmissionCache/Thanks, recycle the Forms application pool and retest.",
      "If the stack references invalid expanded name, check for fields or variables with blank names.",
      "If the stack references null date format after a Forms 10.2 upgrade, review date fields with null format and apply the Laserfiche-provided hotfix or database correction through support change control.",
      "If the stack references Forms 11 Update 3 theme casting, apply the Forms 11 Update 3 hotfix or use the documented theme_id workaround only after backing up the Forms database.",
    ],
    scenarios: [
      {
        title: "Forms application pool cache causes LFF502 on submission",
        summary: "A reviewed Forms thread had multiple confirmations that recycling the Forms application pool cleared LFF502 on submission.",
        versions: ["Version 10"],
        symptoms: ["A form submission returns LFF502-UnexpectedError.", "The workflow or downstream work may still start or complete."],
        causes: ["Forms application pool state or cached submission state may be stale."],
        fixes: ["Recycle the Forms application pool.", "Retest the affected process and monitor LFForms logs for recurrence."],
        sourceUrls: ["https://answers.laserfiche.com/questions/157069/LFF502--Unexpected-Error-on-Forms-Submission"],
      },
      {
        title: "Blank variable name creates invalid XML element name",
        summary: "A reviewed thread confirmed LFF502 with invalid expanded name was caused by a Forms field variable with no name.",
        versions: ["Version 10"],
        symptoms: ["Submission fails with LFF502.", "LFForms logs include invalid expanded name or VariableXMLGenerator."],
        causes: ["A field or variable in the process has a blank name."],
        fixes: ["Inspect all forms and process variables for blank variable names.", "Assign valid variable names and republish the process."],
        sourceUrls: ["https://answers.laserfiche.com/questions/104123/An-unexpected-error-has-occurred"],
      },
      {
        title: "Null date format after Forms 10.2 upgrade",
        summary:
          "Laserfiche employee replies identify null date field formats after a Forms 10.2 upgrade and provide SQL to locate and repair affected rows.",
        versions: ["Version 10"],
        symptoms: ["Approval-task submission fails after upgrading to Forms 10.2.", "LFForms logs reference CheckIsDateTimeFormat or a null date format."],
        causes: ["One or more date fields have a null format in the Forms database."],
        fixes: [
          "Check for Forms 10.2 hotfix coverage first.",
          "Use the employee-provided SQL only through normal database backup and change-control procedures.",
          "Set affected date-field formats such as MM/dd/yyyy, then retest the process.",
        ],
        sourceUrls: ["https://answers.laserfiche.com/questions/117502/LFF502UnexpectedError-Unexpected-error-after-102-upgrade"],
      },
      {
        title: "Forms 11 Update 3 form id matches theme id regression",
        summary:
          "A reviewed Forms 11 Update 3 thread documents LFF502 when a form id matches a theme id; Laserfiche released hotfix KB1014419.",
        versions: ["Version 11"],
        symptoms: ["A task form closes or preview fails after upgrading to Forms 11 Update 3.", "LFForms logs include InvalidCastException involving cf_forms and cf_theme."],
        causes: ["A Forms 11 Update 3 regression occurs when cf_forms.form_id equals cf_theme.id."],
        fixes: [
          "Apply Laserfiche Forms 11 Update 3 hotfix KB1014419 or later.",
          "As a short-term workaround, duplicate the affected form and reassign tasks to the duplicate.",
          "Only use the employee-provided theme_id SQL workaround after backing up the Forms database.",
        ],
        sourceUrls: [
          "https://answers.laserfiche.com/questions/205804/Error-LFF502UnexpectedError-After-Upgrading-Forms-to-Version-11-Update-3",
        ],
      },
    ],
  },
  "windows-client-desktop-client-0x80070050-export-display-engine": {
    fixStatus: "known-fix",
    confidence: "medium",
    curationNote:
      "Reviewed Answers candidate confirmed Laserfiche Client 8.2 export/display-engine failures with some TIFF Group IV images were resolved in later versions.",
    likelyFixes: [
      "For Laserfiche Client 8.2 export failures with unknown display engine error 6608 and 0x80070050, upgrade the Client to at least version 9.2.",
      "If upgrade is not immediately possible, isolate whether the failure is tied to specific TIFF Group IV images before attempting bulk export.",
    ],
    scenarios: [
      {
        title: "Laserfiche Client 8.2 export fails on some TIFF Group IV images",
        summary:
          "A Laserfiche employee reply states that export issues with some TIFF Group IV images should be resolved in Laserfiche 9.2.",
        versions: ["Version 9"],
        symptoms: ["Exporting images reports unknown display engine error 6608 with 0x80070050.", "The failure can occur for folders or repository export attempts."],
        causes: ["Older Client export/display code has known issues with some TIFF Group IV images."],
        fixes: ["Upgrade the Laserfiche Client to at least version 9.2.", "Retest export of the affected folder or images."],
        sourceUrls: ["https://answers.laserfiche.com/questions/113868/exporting-data-from-820636"],
      },
    ],
  },
  "windows-client-desktop-client-6568-briefcase-volume": {
    fixStatus: "workaround",
    confidence: "medium",
    curationNote:
      "Reviewed Answers candidate confirmed detaching and reattaching the repository can resolve briefcase paste error 6568.",
    likelyFixes: [
      "If pasting a briefcase returns 6568 Volume cannot be found, detach and reattach the repository in the Client, then retry.",
      "Also verify the target folder import volume settings if detaching and reattaching does not resolve the issue.",
    ],
    scenarios: [
      {
        title: "Briefcase paste reports Volume cannot be found",
        summary: "A reviewed thread confirmed error 6568 was cleared by detaching and reattaching the repository.",
        versions: ["Version 9"],
        symptoms: ["Pasting a briefcase into the Client fails with error 6568.", "The same user may reproduce the issue from another workstation."],
        causes: ["The Client/repository attachment state may be stale or inconsistent."],
        fixes: ["Detach the repository.", "Reattach the repository and retry pasting the briefcase."],
        sourceUrls: ["https://answers.laserfiche.com/questions/119420/Error-6568-when-pasting-in-briefcase"],
      },
    ],
  },
  "windows-client-desktop-client-0x80004002-application-error-due-to-no-such-interface-supported": {
    fixStatus: "known-fix",
    confidence: "medium",
    curationNote:
      "Reviewed Answers candidate added Laserfiche employee confirmation of a 9.0 Client timing issue when connecting to a 9.1 Server.",
    likelyFixes: [
      "Upgrade affected 9.0.1 or 9.0.2 Clients to the 9.1 Client or later when connecting to a 9.1+ Server.",
      "If users do not use Business Processes and cannot upgrade immediately, set [Settings]EnableBusinessProcesses to No as the employee-described workaround.",
    ],
    scenarios: [
      {
        title: "Laserfiche 9.0 Client connects to 9.1 Server and fails loading Business Processes",
        summary:
          "Laserfiche employee replies identify a 9.0 Client timing issue exposed by 9.1 Server changes; upgrading the Client resolves it.",
        versions: ["Version 9"],
        symptoms: ["The 9.0.1 or 9.0.2 Client fails when connecting to a 9.1 repository.", "The error includes 6000:0x80004002 and ISecurityGroupProvider."],
        causes: ["A 9.0 Client bug is exposed by 9.1 Server Business Process changes."],
        fixes: [
          "Upgrade affected Clients to version 9.1 or later.",
          "If Business Processes are not used, set the [Settings]EnableBusinessProcesses attribute to No as a temporary workaround.",
        ],
        sourceUrls: [
          "https://answers.laserfiche.com/questions/49760/902-and-901-Laserfiche-Client-throwing-errors-connecting-to-91-repository",
        ],
      },
    ],
  },
  "lf-server-9037-invalid-session": {
    fixStatus: "workaround",
    confidence: "medium",
    curationNote:
      "Reviewed Answers candidate confirmed a post-upgrade 9037 case resolved by moving the generated license file into the server folder and restarting Laserfiche Server.",
    likelyFixes: [
      "After an upgrade, verify the generated license file is in the expected Laserfiche Server folder, not left on the server desktop or another temporary location.",
      "Restart the Laserfiche Server service after correcting the license-file location.",
    ],
  },
  "lf-server-9526-repository-mounting-unmounting": {
    fixStatus: "workaround",
    confidence: "medium",
    curationNote:
      "Reviewed Answers candidate added a confirmed server-side SQL-services branch for 9526/784 access failures.",
    likelyFixes: [
      "If 9526 appears with operation timeout 784 and the Laserfiche services are running, verify SQL Server services and SQL service account login state.",
      "Restart the Laserfiche Server service after SQL connectivity is restored.",
    ],
  },
  "windows-client-desktop-client-0x5876f4ad-specific-page-crash": {
    fixStatus: "diagnostic-only",
    confidence: "medium",
    curationNote:
      "Reviewed Answers candidate added Laserfiche employee diagnostic guidance for Client crashes tied to one document page.",
    likelyFixes: [
      "If the Client crashes on a specific page, open a support case and provide a briefcase or crash dump where permitted.",
      "Narrow the cause by testing whether deleting annotations, text, preceding pages, or viewing the image file outside Laserfiche changes the behavior.",
      "Enable LFSO tracing to capture the operation sequence immediately before the crash.",
    ],
  },
  "windows-client-desktop-client-0x5cdf1ea5-pdf-acrobat-crash": {
    fixStatus: "diagnostic-only",
    confidence: "medium",
    curationNote:
      "Reviewed Answers candidate identified a known Client/Adobe Acrobat PDF-opening crash reported as Laserfiche bug 282441.",
    likelyFixes: [
      "If the Client crashes only when PDFs open externally in Acrobat, test opening PDFs inside the Client instead.",
      "Check Laserfiche and Adobe updates for the known Acrobat-related issue referenced as LF bug 282441.",
      "Collect crash details and Adobe/Laserfiche versions before opening a support case.",
    ],
    scenarios: [
      {
        title: "Client crashes when PDF is configured to open in Acrobat",
        summary:
          "A Laserfiche employee reply identifies this as a known issue reported to Adobe when opening PDFs externally with Acrobat.",
        versions: ["Version 10", "Version 11"],
        symptoms: ["Opening a PDF in the Client works when configured to open inside the Client.", "The Client crashes when configured to open the PDF with Acrobat."],
        causes: ["A known Laserfiche/Adobe interaction can crash LF.exe when launching PDFs in Acrobat."],
        fixes: ["Use in-Client PDF opening as a workaround.", "Check for Laserfiche and Adobe updates related to LF bug 282441."],
        sourceUrls: ["https://answers.laserfiche.com/questions/181371/Client-1041-crashes-when-opening-PDF"],
      },
    ],
  },
  "api-server-upload-conflict-409": {
    fixStatus: "workaround",
    confidence: "medium",
    curationNote:
      "Reviewed Answers candidate confirmed a specific HTTP 409 API upload scenario caused by repository volume/database mismatch after copying or restoring repository data.",
    likelyFixes: [
      "If API uploads create a 0-byte document and then return 409 The file exists, try directing new uploads to a newly-created repository volume.",
      "Check whether the repository database and volume files were copied or restored separately and may now be out of sync.",
      "Open a Laserfiche Support case and ask about repository integrity tooling before manually changing volume files.",
    ],
    scenarios: [
      {
        title: "Copied repository volume is out of sync with the repository database",
        summary:
          "A reviewed API Server thread confirmed upload 409 was resolved by using a new repository volume; staff explained the database can be behind the volume on disk after a copy or restore.",
        versions: ["Version 12"],
        symptoms: [
          "The API upload request returns HTTP 409 with The file exists.",
          "The document entry appears in Laserfiche but its file size is 0 bytes.",
          "The failure occurs in one repository while another repository on the same server works.",
        ],
        causes: [
          "The repository database and volume on disk may be out of sync, causing the server to choose a file name that already exists on disk.",
        ],
        fixes: [
          "Create a new repository volume and configure new uploads to use it, then retest the API upload.",
          "If the repository was copied or restored, contact Laserfiche Support or the solution provider for integrity checking before production cutover.",
        ],
        sourceUrls: ["https://answers.laserfiche.com/questions/230306/Laserfiche-API-On-Premise-upload-failing"],
      },
    ],
  },
  "forms-lff6010-team-filter-timeout": {
    fixStatus: "workaround",
    confidence: "medium",
    curationNote:
      "Reviewed Answers candidates added Forms 11 Update 5 hotfix guidance and a confirmed team-filter JavaScript object-return pattern.",
    likelyFixes: [
      "For Forms 11 Update 5 FilterReturnedScriptError, request the relevant hotfix or upgrade to Forms 12 where Laserfiche staff says bug 510207 is fixed.",
      "For existing running instances after the hotfix, restart the affected user task or clear the affected main_instance_extended_data row as directed by support.",
      "When a team filter assigns to a user, return team member objects from team.findTeamMembersByUserName or team.findTeamMembersByDisplayName instead of returning plain text.",
    ],
    scenarios: [
      {
        title: "Forms 11 Update 5 team filter receives null values",
        summary:
          "A reviewed thread documents LFF6010 FilterReturnedScriptError after Forms 11 Update 5, with staff pointing to a hotfix and Forms 12 bug 510207.",
        versions: ["Version 11", "Version 12"],
        symptoms: [
          "A team JavaScript filter that previously worked fails after Forms 11 Update 5.",
          "The error mentions Cannot read property toLowerCase of null and LFF6010-FilterReturnedScriptError.",
        ],
        causes: ["A Forms 11 Update 5 bug can affect stored/running team filter data."],
        fixes: [
          "Request the Forms hotfix from Support or upgrade to Forms 12.",
          "Restart affected running user tasks after applying the hotfix.",
          "If directed by support, remove the affected main_instance_extended_data row for the instance and retry.",
        ],
        sourceUrls: [
          "https://answers.laserfiche.com/questions/216086/Forms-Team-Javascript-filter-no-longer-working-with-Forms-11-update-5",
        ],
      },
      {
        title: "Team filter returns a username string instead of a team member object",
        summary:
          "A reviewed thread confirmed LFF6010 InvalidJavaScriptFilter was resolved by returning a team member object and validating the submitted username variable.",
        versions: ["Version 10"],
        symptoms: [
          "The team filter test or task assignment reports LFF6010-InvalidJavaScriptFilter.",
          "The process assigns to the team instead of the expected individual.",
        ],
        causes: ["The script returns a string value where Forms expects a team member object."],
        fixes: [
          "Use team.findTeamMembersByUserName or team.findTeamMembersByDisplayName to get the team member object.",
          "Check process variables to confirm hidden/lookup fields save the username that the script expects.",
        ],
        sourceUrls: ["https://answers.laserfiche.com/questions/127460/How-Can-I-Override-the-User-Task-Going-to-a-Group"],
      },
    ],
  },
  "forms-lff8100-notification-server-down": {
    fixStatus: "workaround",
    confidence: "medium",
    curationNote:
      "Reviewed Answers candidates added staff-backed Notification Master/Hub configuration, SSL binding, FQDN, and load-balanced Forms scenarios for LFF8100.",
    likelyFixes: [
      "Verify the Notification Master Service and Notification Hub Service are running, then inspect LFNotificationService logs for the first failing endpoint.",
      "Configure the Hub URL with an FQDN that is reachable by both the Notification Master Service and browsers; localhost can verify one test but still fail real-time notifications.",
      "For SSL, stop the Hub Service, bind the certificate to port 8181, add the URL ACL for the Hub service account, and verify Forms URLs use the same trusted FQDN.",
      "For load-balanced Forms, confirm the Forms servers use the intended primary Routing/Notification services and that TCP 8268 and 8181 are open between the required servers and browsers.",
    ],
  },
  "forms-lff9320-validation-aggregate": {
    fixStatus: "workaround",
    confidence: "medium",
    curationNote:
      "Reviewed Answers candidates added backend validation, invalid choice, JavaScript-modified field, and field-position diagnostics for LFF9320 validation aggregate failures.",
    likelyFixes: [
      "Use the field name and Position value in the error to identify the field failing backend validation.",
      "If JavaScript adds choices dynamically, either use configured choices or test changing Backend Validation to No Validation for that form.",
      "If custom JavaScript replaces fields, change the script to hide fields and insert display links after them instead of removing or replacing the original inputs.",
      "Treat No Validation as a targeted workaround; review the data-quality impact before using it broadly.",
    ],
  },
  "web-client-http-response-body": {
    fixStatus: "workaround",
    confidence: "medium",
    curationNote:
      "Reviewed Answers candidates added BranchCache/page replacement, 0x2efe connection-aborted, and proxy/firewall diagnostic scenarios for Error reading HTTP response body.",
    likelyFixes: [
      "If downloads fail for a specific document or page, replace the problematic page and retest the download.",
      "If the error is server-wide or intermittent, test disabling BranchCache on the Laserfiche server and review caching/proxy layers.",
      "Map 0x2efe to ERROR_INTERNET_CONNECTION_ABORTED and check for intermittent network, proxy, firewall, or aborted TCP connections.",
    ],
  },
  "workflow-0735-0516-business-process": {
    fixStatus: "workaround",
    confidence: "medium",
    curationNote:
      "Reviewed Answers candidate confirmed a Forms-started Workflow business process case where logging out of the Client and back in refreshed newly published business-process details.",
    likelyFixes: [
      "When business process details are missing after a newly-published Workflow business process runs, log out of the Windows Client/Desktop Client and log back in.",
      "Confirm the workflow is configured as a business process when Forms reports that the workflow must be a business process.",
    ],
    scenarios: [
      {
        title: "Newly published Workflow business process details do not appear in the Client",
        summary:
          "A reviewed thread confirmed that logging out of the Client and back in resolved missing business-process step details after Forms started a Workflow business process.",
        versions: ["Version 10"],
        symptoms: [
          "Forms reports 0735-WF1 or LFF5203 when starting a workflow business process.",
          "The workflow runs, but Business Process Details in the Client do not show the expected steps.",
        ],
        causes: ["The Client may not refresh newly published business-process metadata until the user signs in again."],
        fixes: [
          "Verify the workflow is published as a business process.",
          "Log out of the Client and log back in, then check Business Process Details again.",
        ],
        sourceUrls: ["https://answers.laserfiche.com/questions/99071/Forms-start-a-workflow-business-Process"],
      },
    ],
  },
  "weblink-9-lost-connection-tiles": {
    fixStatus: "workaround",
    confidence: "medium",
    curationNote:
      "Priority Answers candidate confirmed a WebLink lost-connection workaround for Windows XP/IIS connection limits.",
    likelyFixes: [
      "For WebLink on Windows XP/IIS 6, set the IIS MaxConnections value to 40 and retest.",
      "Do not set MaxConnections above 40; the reviewed source warns that 40 is the hardcoded limit.",
    ],
    scenarios: [
      {
        title: "WebLink on Windows XP reaches the IIS connection limit",
        summary: "A reviewed WebLink 8.2 thread confirmed lost-connection errors were resolved by setting IIS MaxConnections to 40.",
        versions: ["Version 9"],
        symptoms: [
          "WebLink reports that a lost connection condition has been detected.",
          "Users are returned to the login page after acknowledging the message.",
        ],
        causes: ["The WebLink site is hosted on Windows XP and reaches the IIS connection limit."],
        fixes: [
          "Open a command prompt on the WebLink server.",
          "Run the IIS adsutil command to set w3svc/MaxConnections to 40.",
          "Retest WebLink access after the setting is applied.",
        ],
        sourceUrls: [
          "https://answers.laserfiche.com/questions/53899/A-lost-connection-condition-has-been-detected-error-weblink-82",
        ],
      },
    ],
  },
  "workflow-lff5203-wf-server-api-fault": {
    fixStatus: "workaround",
    confidence: "medium",
    curationNote:
      "Priority Answers candidates confirmed several source-backed LFF5203 scenarios, including Forms retry behavior, Workflow startup timeout, and Workflow Subscriber service identity.",
    likelyFixes: [
      "If Forms starts duplicate workflows after LFF5203, review the Forms AutoRetry setting and restart the Forms Routing Service after any change.",
      "If Workflow takes longer than Forms allows to start, reduce the selected business-process variables or increase the Workflow OperationTimeout registry value as directed by support.",
      "If intermittent LFF5203 began after service-account changes, verify the Workflow Subscriber service identity and test whether LocalSystem is required in that environment.",
    ],
    scenarios: [
      {
        title: "Forms AutoRetry duplicates workflow starts after LFF5203",
        summary:
          "A Forms 10.2 thread confirmed duplicate workflow starts after LFF5203 were stopped by disabling AutoRetry and restarting the Forms Routing Service.",
        versions: ["Version 10"],
        symptoms: [
          "A Forms process triggers a workflow twice after upgrade to Forms 10.2.",
          "Windows logs include LFF5203-WFServerApiFault timeout details.",
        ],
        causes: ["Forms AutoRetry retries a suspended service task after the first Workflow API call times out."],
        fixes: [
          "Change the AutoRetry value in the Forms cf_options table to false only after confirming this matches the environment policy.",
          "Restart the Laserfiche Forms Routing Service.",
          "Retest the affected form process and monitor for duplicate workflow starts.",
        ],
        sourceUrls: ["https://answers.laserfiche.com/questions/115969/LFF5203"],
      },
      {
        title: "Workflow startup exceeds the Forms 30-second wait",
        summary:
          "A reviewed Forms 10.3 thread documents LFF5203 when Workflow startup exceeded the Forms wait time, with a support-provided OperationTimeout registry workaround.",
        versions: ["Version 10"],
        symptoms: [
          "A Forms service task is suspended with LFF5203-WFServerApiFault.",
          "The affected workflow takes more than 30 seconds to start.",
        ],
        causes: ["Workflow startup is delayed, such as by retrieving a large number of business-process variables."],
        fixes: [
          "Reduce the number of business-process variables retrieved at workflow startup when possible.",
          "On the Workflow Server machine, add or update the OperationTimeout DWORD under the Workflow Options registry key as directed by Laserfiche support.",
          "Restart IIS and the Workflow Server service, then retest the Forms process.",
        ],
        sourceUrls: [
          "https://answers.laserfiche.com/questions/139087/The-call-to-Laserfiche-Workflow-API-was-not-successful",
        ],
      },
      {
        title: "Workflow Subscriber service identity causes intermittent LFF5203",
        summary:
          "A later reply on a reviewed thread reports resolving intermittent LFF5203 by changing the Workflow Subscriber service back to LocalSystem.",
        versions: ["Version 11"],
        symptoms: [
          "Forms intermittently reports LFF5203 while other processes continue working.",
          "Workflow API calls time out and later recover.",
        ],
        causes: ["The Workflow Subscriber service account may not be valid for the environment or may lack required local/service permissions."],
        fixes: [
          "Review the Workflow Subscriber service identity and recent service-account changes.",
          "Test changing the Workflow Subscriber service back to LocalSystem where that matches the deployment model.",
          "Restart the affected Workflow services and monitor for recurrence.",
        ],
        sourceUrls: [
          "https://answers.laserfiche.com/questions/172318/Temporary-error-The-call-to-Laserfiche-Workflow-API-was-not-successful-The-operation-has-timed-out-LFF5203WFServerApiFault",
        ],
      },
    ],
  },
};
