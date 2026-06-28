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
};

export const sourceCandidatePromotions = {
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
