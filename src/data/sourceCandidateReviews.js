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
};

export const sourceCandidatePromotions = {
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
