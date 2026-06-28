import { officialDocumentationErrorEntries } from "./officialDocumentationErrors.js";

export const sourcePriority = {
  "official-docs": 1,
  "answers-laserfiche-employee": 2,
  "answers-community-confirmed": 3,
  "answers-community": 4,
};

export const productOptions = [
  "Administration Hub",
  "AI Service",
  "API Server",
  "Audit Trail",
  "Common Dialog",
  "Connector",
  "Directory Server",
  "Discussions",
  "Distributed Computing Cluster",
  "Federated Search",
  "Forms",
  "Full Text Search",
  "Import Agent",
  "Laserfiche Installer",
  "Laserfiche Server/Repository Server",
  "Mobile",
  "Office Integration",
  "Quick Fields",
  "Records Management",
  "Snapshot",
  "Web Client Scanning",
  "WebLink",
  "Webtools Agent",
  "Windows Client/Desktop Client",
  "Workflow",
];

export const versionOptions = ["Version 9", "Version 10", "Version 11", "Version 12"];

export const sourceTypeOptions = [
  { value: "answers-community-confirmed", label: "Answers - Community Confirmed" },
  { value: "answers-laserfiche-employee", label: "Answers - Laserfiche Employee" },
  { value: "answers-community", label: "Answers - Community" },
  { value: "answers-search", label: "Answers - Search Reviewed" },
  { value: "official-docs", label: "Official Docs" },
];

const curatedErrorEntries = [
  {
    id: "lf-client-768-unknown-error",
    code: "768",
    message: "Unknown error",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "A generic LFSO unknown error; employee replies point to trace logging, server restarts, and network checks depending on context.",
    symptoms: [
      "Client or repository operations fail with Unknown error. [768].",
      "The error can appear during login, document access, page deletion, or other client/server operations.",
    ],
    likelyFixes: [
      "Enable LFSO tracing from Help > About > Tracing, restart the client, reproduce the problem, and collect trace logs for support.",
      "For login-time 768 errors, restart SQL Server followed by the Laserfiche Server service, then test repository login again.",
      "Check client-to-server connectivity and firewalls; test from the client installed on the Laserfiche Server as a control.",
      "Open a support case when the trace logs are needed to identify the root cause.",
    ],
    notes:
      "Laserfiche employee guidance varies by scenario. One selected answer mentions Laserfiche 8; this entry keeps Version 12 because the official code is in the Version 12 listing.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 768 as Unknown error.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Laserfiche Unknown Error 768 after accessing several Documents",
        url: "https://answers.laserfiche.com/questions/168149/Laserfiche-Unknown-Error-768-after-accessing-several-Documents",
        note: "Robert Strickland from Laserfiche recommends collecting LFSO trace logs and opening a support case.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Unknown Error 768",
        url: "https://answers.laserfiche.com/questions/60134/Unknown-Error-768",
        note:
          "Alexander Huang from Laserfiche recommends restarting SQL Server and Laserfiche Server, then checking network/firewall connectivity.",
      },
    ],
  },
  {
    id: "lf-client-780-no-response",
    code: "780",
    message: "No response received from the server",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "The client did not receive a server response; related Answers replies point to network, firewall, service pack, repository volume, and antivirus checks.",
    symptoms: [
      "Opening documents, generating pages, assigning templates, or logging in returns No response received from the server. [780].",
      "The issue may happen only across VPN/firewall paths, only for certain document types, or only for certain repository files.",
    ],
    likelyFixes: [
      "Check firewall/VPN paths and confirm Laserfiche traffic on ports 80 or 443 is allowed when those ports are used.",
      "Look for firewalls blocking large response messages or certain file types, especially Office files.",
      "For Laserfiche 9.1.1 Service Pack 1 environments, review the re-released service pack noted by Laserfiche.",
      "Verify the electronic document exists on the repository volume, can be opened from the server filesystem, and the volume disk is not full.",
      "Temporarily test without antivirus or add exclusions for Laserfiche files, folders, executables, and processes.",
    ],
    notes:
      "The reviewed Answers posts describe several distinct 780 scenarios. Treat the fixes as troubleshooting branches, not one universal root cause.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 780 as No response received from the server.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Microsoft Office Files on VPN have Error 780",
        url: "https://answers.laserfiche.com/questions/101400/Microsoft-Office-Files-on-VPN-have-Error-780-No-response-received-from-the-server",
        note:
          "Brian McKeever from Laserfiche points to firewall ports 80/443 and firewalls blocking large responses or file types.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "error 780 after server upgrade to 9.1.1.545",
        url: "https://answers.laserfiche.com/questions/59045/error-780-after-server-upgrade-to-911545",
        note:
          "Alexander Huang from Laserfiche references KB 1013480 and the re-released Laserfiche 9.1.1 SP1 for a client/server connection issue.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "No response received from the server while assigning a template",
        url: "https://answers.laserfiche.com/questions/110818/when-I-assign-a-template-to-a-PDF-in-LF-Client-I-receive-No-reponse-received-from-the-server-780",
        note:
          "Ryan Wong from Laserfiche recommends verifying the electronic document exists and opens correctly from the repository volume.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Failed to Load Image. No response received from the server. [780]",
        url: "https://answers.laserfiche.com/questions/95104/Failed-to-Load-Image-No-response-received-from-the-server-780-on-some-Pages-when-open-in-Document-Viewer",
        note: "Raymond Cruz from Laserfiche asks about antivirus and recommends testing Laserfiche exclusions.",
      },
    ],
  },
  {
    id: "lf-client-782-invalid-host-name",
    code: "782",
    message: "Invalid host name",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "The client cannot resolve or use the specified Laserfiche Server host name; employee replies point to DNS, FQDN, and connectivity checks.",
    symptoms: [
      "Logging into a repository through the desktop client returns Invalid host name. [782].",
      "The issue may affect a new workstation or only some users/machines.",
    ],
    likelyFixes: [
      "Try attaching or logging in by IP address to isolate DNS/name-resolution issues.",
      "Test the server short name versus the fully qualified domain name.",
      "Ping the Laserfiche Server from the affected workstation and compare behavior with working machines.",
      "Collect the error details if the host-name tests do not isolate the problem.",
    ],
    notes: "The strongest reviewed Answers replies are Laserfiche employee troubleshooting questions rather than final confirmed resolutions.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 782 as Invalid host name.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Invalid host name. [782] when logging into a repository",
        url: "https://answers.laserfiche.com/questions/80225/Invalid-host-name-782-when-logging-into-a-repository-through-the-desktop-client",
        note: "Laserfiche employee reply recommends testing IP address versus server name to check for DNS issues.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "new laptop has error 782 Invalid host name",
        url: "https://answers.laserfiche.com/questions/133566/new-laptop-has-error-782-Invalid-host-name",
        note: "Brian McKeever from Laserfiche asks whether the workstation can ping the server and whether FQDN behaves differently.",
      },
    ],
  },
  {
    id: "lf-client-784-operation-timeout",
    code: "784",
    message: "Operation timed out",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Client operations timed out; employee replies point to overloaded SQL Server or transient network connectivity between the client environment and Laserfiche Server.",
    symptoms: [
      "Login or client operations return Operation timed out. [784].",
      "The issue may occur from virtual desktops, remote networks, VPNs, or during metadata/search-related operations.",
    ],
    likelyFixes: [
      "Check SQL Server load and performance when the timeout occurs.",
      "Investigate network connectivity between the client network or virtual desktop environment and Laserfiche Server.",
      "For Azure or hosted networks, check site-to-site VPN or ExpressRoute tunnel health.",
      "Review timing with server, SQL, and network logs before opening support.",
    ],
    notes: "Reviewed Answers replies are scenario-specific and should be used as troubleshooting branches.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 784 as Operation timed out.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "error 784 operation timed out",
        url: "https://answers.laserfiche.com/questions/153318/error-784-operation-timed-out",
        note: "Robert Strickland from Laserfiche notes that this type of performance issue can usually be traced to overloaded SQL Server.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Virtual Desktop - 784 Timeout when logging into the Desktop Client",
        url: "https://answers.laserfiche.com/questions/197061/Virtual-Desktop-784-Timeout-when-logging-into-the-Desktop-Client",
        note: "Samuel Carson from Laserfiche points to transient connectivity between the Azure VNet and hosted Laserfiche Server.",
      },
    ],
  },
  {
    id: "lf-admin-789-invalid-object-name",
    code: "789",
    message: "Invalid object name",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Admin Console or repository operations can fail with an invalid object name; the reviewed employee-selected answer identifies one recycle-bin purge scenario as a product bug with a workaround.",
    symptoms: [
      "Admin Console or recycle bin action fails with Invalid object name. [789].",
      "The reviewed Answers thread reproduced the issue while purging deleted entries in Laserfiche 10.2.",
    ],
    likelyFixes: [
      "If purging from Recycle Bin, select the affected user's deleted entries in the right pane and purge from there.",
      "Use the Details button to capture the full call stack and error context.",
      "Treat reproducible cases as a product bug or support case, especially if the workaround does not apply.",
    ],
    notes: "Laserfiche employee reply marks the recycle-bin purge scenario as bug #153955, so the workaround is scenario-specific.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 789 as Invalid object name.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "789 - Invalid Object Name",
        url: "https://answers.laserfiche.com/questions/114378/789--Invalid-Object-Name",
        note: "Selected Laserfiche employee answer identifies a recycle-bin purge bug and workaround.",
      },
    ],
  },
  {
    id: "lf-fts-792-invalid-stream-state",
    code: "792",
    message: "Invalid stream state",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Full Text Search may log Invalid stream state while processing repository entries; employee guidance points to affected entries, templates, user activity, or locked index files.",
    symptoms: [
      "LFFTS logs Laserfiche Server error: Invalid stream state. [792].",
      "The error may include entry IDs associated with full-text or search processing.",
    ],
    likelyFixes: [
      "Check whether the affected entry IDs can be opened and whether they share a specific template.",
      "Review user or process activity against the affected entries at the time of the error.",
      "Check whether another process has .idx files locked and is preventing LFFTS from using them.",
      "Open a support case if the message repeats and entry/template review does not isolate the cause.",
    ],
    notes: "The reviewed Answers thread is from an older environment, but the troubleshooting branches remain useful for Version 12 official-code triage.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 792 as Invalid stream state.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "LFFTS: Laserfiche Server error: Invalid stream state.(792)",
        url: "https://answers.laserfiche.com/questions/63975/LFFTS-Laserfiche-Server-error-Invalid-stream-state792",
        note: "Laserfiche employee reply suggests checking affected entries/templates and possible index-file locks.",
      },
    ],
  },
  {
    id: "lf-client-797-cannot-connect-server",
    code: "797",
    message: "Could not connect to the Laserfiche Server",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "high",
    reviewedDate: "2026-06-27",
    summary:
      "Client connection failures with error 797 are commonly tied to name resolution, VPN/firewall paths, antivirus interference, repository attachment settings, or server licensing/service state.",
    symptoms: [
      "Client login or repository attachment fails with Could not connect to the Laserfiche Server. [797].",
      "The issue may appear only over VPN, after server changes, or on specific workstations.",
    ],
    likelyFixes: [
      "Ping the Laserfiche Server from the affected workstation or VPN path.",
      "Attach the repository using the server IP address or FQDN instead of the discovered server name.",
      "Check that firewalls allow the Laserfiche Server listening port.",
      "Add Laserfiche files, folders, executables, and processes as antivirus exclusions.",
      "If the issue is tied to server licensing, confirm the license file is in the Laserfiche Server program folder, restart the Laserfiche Server service, and review WMI or Application event-log errors.",
    ],
    notes: "Multiple Answers threads describe different confirmed or employee-guided branches; use the fixes as a decision tree rather than a single root cause.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 797 as Could not connect to the Laserfiche Server.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "797 Error when using client",
        url: "https://answers.laserfiche.com/questions/117672/797-Error-when-using-client",
        note: "Laserfiche employee asks about VPN/firewall access; user confirms a firewall fix.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error Message: Could not connect to the Laserfiche Server. [797]",
        url: "https://answers.laserfiche.com/questions/63136/Error-Message-Could-not-connect-to-the-Laserfiche-Server-797",
        note: "Laserfiche employee suggests attaching by IP and checking firewall and antivirus exclusions.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "797 Errors",
        url: "https://answers.laserfiche.com/questions/99162/797-Errors",
        note: "Laserfiche employee points to antivirus exclusions for Laserfiche files, folders, executables, and processes.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "797",
        url: "https://answers.laserfiche.com/questions/71494/797",
        note: "Laserfiche employee asks about license placement, service restart, and WMI/Application event-log errors.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "v10.2 Could not connect to the Laserfiche Server [797]",
        url: "https://answers.laserfiche.com/questions/119692/v102-Could-not-connect-to-the-Laserfiche-Server-797",
        note: "Laserfiche employee suggests using Attach with the new server name or IP; user confirms the corrected server fixed it.",
      },
    ],
  },
  {
    id: "lf-client-1040-index-out-of-range",
    code: "1040",
    message: "The specified index is out of range for this collection",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "A reviewed client scenario returned errors 6000 and 1040 when deleting from search results; employee guidance treats it as a likely client bug that needs tracing and support review.",
    symptoms: [
      "Deleting a document from search results prompts error 6000 and The specified index is out of range for this collection. [1040].",
      "Related messages may include Entry not found. [9001].",
    ],
    likelyFixes: [
      "Enable LFSO tracing from Help > About > Tracing, restart the client, reproduce the issue, and attach the trace logs to a support case.",
      "Treat delete-from-search-results occurrences as a client bug when the steps are reproducible.",
      "Capture associated 6000 and 9001 messages because they may help support reproduce the sequence.",
    ],
    notes: "The Laserfiche employee reply says the scenario appears to be a client bug but was not reproduced in-thread.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 1040 as The specified index is out of range for this collection.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Deleting a document from a search result prompts errors 6000 and 1040",
        url: "https://answers.laserfiche.com/questions/137784/Deleting-a-document-from-a-search-result-prompts-errors-6000-and-1040-also-clear-results",
        note: "Laserfiche employee recommends LFSO tracing and support review for the suspected client bug.",
      },
    ],
  },
  {
    id: "lf-client-1201-windows-authentication-failed",
    code: "1201",
    message: "Windows authentication failed",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Windows authentication failures can come from workstation-specific or Active Directory profile issues outside Laserfiche, based on the reviewed community-confirmed thread and Laserfiche employee KB pointer.",
    symptoms: [
      "Login returns Windows authentication failed. [1201].",
      "The issue may affect one Windows user profile or one workstation while other combinations work.",
    ],
    likelyFixes: [
      "Test the same Active Directory account from another workstation.",
      "Test another Windows user from the affected workstation.",
      "Install relevant Windows updates and reboot the workstation.",
      "Investigate Active Directory user-profile problems outside Laserfiche and review Laserfiche support KB 1012431 if available.",
    ],
    notes: "The selected fix came from a community reply; a Laserfiche employee follow-up points users to the relevant support KB.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 1201 as Windows authentication failed.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "what could be causing a windows authentication fail error 1201?",
        url: "https://answers.laserfiche.com/questions/51850/what-could-be-causing-a-windows-authentication-fail-error-1201",
        note: "Approved community answer points to Active Directory profile issues; Laserfiche employee reply references support KB 1012431.",
      },
    ],
  },
  {
    id: "lf-server-1366-internal-ssl-error",
    code: "1366",
    message: "Internal SSL error",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "high",
    reviewedDate: "2026-06-27",
    summary:
      "Internal SSL error during Admin Console repository login may indicate that the server registration or certificate host name does not match the expected fully qualified server name.",
    symptoms: [
      "Admin Console login to a repository fails with Internal SSL error. [1366].",
      "Tracing may show the local server name when the environment expects an FQDN.",
    ],
    likelyFixes: [
      "Enable LFSO tracing, restart Admin Console or the client, reproduce the error, and review the SSL details.",
      "If tracing shows the wrong server name, re-register the Laserfiche Server with the FQDN in Admin Console.",
      "Open a support case if tracing does not identify a certificate or host-name mismatch.",
    ],
    notes: "The reviewed thread includes a selected Laserfiche employee tracing recommendation and a user-confirmed FQDN registration fix.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 1366 as Internal SSL error.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Internal SSL error [1366] when trying to log into repository using Admin Console",
        url: "https://answers.laserfiche.com/questions/118714/Internal-SSL-error-1366-when-trying-to-log-into-repository-using-Admin-Console",
        note: "Laserfiche employee recommends LFSO tracing; user reports fixing the issue by registering the server with its FQDN.",
      },
    ],
  },
  {
    id: "lf-search-7857-invalid-character-search-string",
    code: "7857",
    message: "Invalid character in search string",
    product: "Windows Client/Desktop Client",
    versions: ["Version 9", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Invalid character in search string can be caused by generated advanced search syntax that includes a malformed or unintended field criterion, especially around blank template field searches.",
    symptoms: [
      "A template search with blank fields returns Invalid character in search string. [7857].",
      "The generated advanced search syntax may include an incomplete field clause even though the user did not intentionally enter that criterion.",
    ],
    likelyFixes: [
      "Inspect the generated Advanced Search Syntax for the failing search.",
      "Remove malformed field criteria and test the template-only search syntax.",
      "If a date field is involved, try an explicit broad date range instead of leaving the field blank.",
      "Use appropriate administrative privileges when counting documents by template, because ordinary searches may omit entries the user cannot see.",
    ],
    notes: "The reviewed Answers thread was from a Version 7 to Version 9 upgrade context, so this is promoted as a troubleshooting pattern for Version 12 rather than a guaranteed product-specific defect.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 7857 as Invalid character in search string.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "7857: Invalid character in search string.",
        url: "https://answers.laserfiche.com/questions/50245/7857-Invalid-character-in-search-string",
        note: "Laserfiche employee asks for generated advanced search syntax; user confirms cleaning up the generated field syntax resolved the search.",
      },
    ],
  },
  {
    id: "lf-server-9013-access-denied",
    code: "9013",
    message: "Access Denied",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 12"],
    confidence: "high",
    reviewedDate: "2026-06-27",
    summary: "The operation failed because the account lacks a required permission or related access right.",
    symptoms: [
      "Opening, viewing, deleting, or otherwise acting on an entry returns Access denied. [9013].",
      "The user may appear to have broad rights, but effective rights, security tags, or volume rights can still block the operation.",
    ],
    likelyFixes: [
      "Use the Effective Rights tab on the entry access-rights dialog to confirm the user's actual rights.",
      "Check security tags and volume rights in addition to entry access rights.",
      "For Records Management deletion cases, check whether child records or record folders still have rights or locks that prevent deletion.",
    ],
    notes:
      "One Records Management thread did not include a final confirmed resolution, so that scenario remains medium-confidence even though Laserfiche employees replied.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9013 as Access Denied.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "9013 - Laserfiche Answers",
        url: "https://answers.laserfiche.com/questions/221051/9013",
        note:
          "Brian McKeever from Laserfiche explains 9013 as a permission error and calls out effective rights, tags, and volume rights.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error Access denied. [9013] - Laserfiche Answers",
        url: "https://answers.laserfiche.com/questions/72907/Error-Access-denied-9013",
        note:
          "Laserfiche employees asked about repository version and rights to child records/record folders in a Records Management deletion case.",
      },
    ],
  },
  {
    id: "lf-server-9001-entry-not-found",
    code: "9001",
    message: "Entry Not Found",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary:
      "Official documentation maps 9001 to an entry that cannot be found, including some Records Management disposition scenarios.",
    symptoms: [
      "A repository action fails with Entry not found. [9001].",
      "The official example mentions confirming final disposition on a record folder.",
    ],
    likelyFixes: [
      "Update the Laserfiche client and server to the latest available version for the installed major release.",
      "If the error occurs in a browser workflow, update the browser or try an alternate browser.",
      "Verify the user has the security tags required to view the folder or record being accessed.",
      "If the error occurs from Workflow, simplify or isolate the workflow path that references the missing entry.",
    ],
    notes: "Seeded from official documentation. No matching Answers post was curated in this pass.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9001 Entry Not Found",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9001.htm",
        note: "Provides symptoms and suggested resolutions for 9001.",
      },
    ],
  },
  {
    id: "lf-server-9005-volume-read-only",
    code: "9005",
    message: "Volume is Read-only",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary: "A repository update failed because the target document or related template data resides on a read-only volume.",
    symptoms: [
      "A document, template, or related repository object cannot be modified.",
      "The error text indicates the volume is read-only. [9005].",
    ],
    likelyFixes: [
      "Migrate the document to a writable volume before modifying it.",
      "If modifying or deleting a template, check whether documents assigned to it are on a read-only volume.",
      "Clear the read-only setting on the affected volume when the repository design allows it.",
    ],
    notes: "Seeded from official documentation only.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9005 Volume is Read-only",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9005.htm",
        note: "Explains that read-only volumes cannot be modified and gives document/template checks.",
      },
    ],
  },
  {
    id: "lf-server-9006-volume-not-found",
    code: "9006",
    message: "Volume not found",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Imports can fail when the destination folder lacks a default volume, or when Import Agent list-file processing references a volume that is not present or not recognized.",
    symptoms: [
      "The Windows Client output log reports Volume not found. [9006] during import.",
      "Scanned or imported documents fail before being stored in the repository.",
    ],
    likelyFixes: [
      "Configure the destination folder used for scanned or imported documents.",
      "In the Windows Client, check Tools > Options > New Documents > Import Profiles and set the client destination folder.",
      "Confirm the target volume exists and is mounted on the repository server.",
      "For Import Agent list files, confirm the volume named in the LST file exists in Administration Console and test with another valid volume.",
      "If list files reference image files, confirm Import Agent is configured to recognize .lst files and that the referenced image path/filter is correct.",
    ],
    notes: "Import Agent guidance is scenario-specific but employee-confirmed as a useful troubleshooting path.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9006 Volume not found",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9006.htm",
        note: "Identifies a missing default volume for the destination folder as the documented cause.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Import Agent Startlist, volume not found error [9006]",
        url: "https://answers.laserfiche.com/questions/138657/Import-Agent-Startlist-volume-not-found-error-9006",
        note: "Laserfiche employee confirms checking the referenced volume and Import Agent list-file recognition/profile configuration.",
      },
    ],
  },
  {
    id: "lf-server-9008-general-database-error",
    code: "9008",
    message: "General database error",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche Server returned a generic SQL/database failure; reviewed employee replies point to server event logs, SQL rights, and a known volume-access search scenario.",
    symptoms: [
      "A repository action fails with General database error. [9008].",
      "The accompanying message may say Error executing SQL command.",
    ],
    likelyFixes: [
      "Review Windows Event Viewer on the Laserfiche Server for the more specific database error.",
      "Confirm the Laserfiche Server service runs as a Windows account that can access the DBMS.",
      "Verify the service account has required disk permissions.",
      "If using MSDE or SQL Server Express, confirm all expansion databases are attached.",
      "For search-time failures, check Laserfiche ContentRepository event logs for the underlying SQL error.",
      "If the search user cannot access more than 30 volumes, test with a user that has Manage Entry Access while opening a support case for the volume-access bug.",
    ],
    notes: "The volume-access search case was identified by Laserfiche as bug #336714; use it only when the event log and volume-access pattern match.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9008 General database error",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9008.htm",
        note: "Directs administrators to Event Viewer and service-account/database checks.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error executing SQL command. general database error 9008",
        url: "https://answers.laserfiche.com/questions/190690/Error-executing-SQL-command-general-database-error-9008",
        note: "Laserfiche employee recommends ContentRepository event-log review and describes a search bug involving inaccessible volumes.",
      },
    ],
  },
  {
    id: "lf-server-9010-account-password-incorrect",
    code: "9010",
    message: "The User Account or Password is Incorrect",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Manual Windows-account sign-in can fail because of bad credentials, clock skew, or a stale Directory Server communication channel.",
    symptoms: [
      "The Laserfiche Client reports The User Account or Password is Incorrect. [9010].",
      "Users may be able to sign in after waiting several minutes or after the Laserfiche Server is restarted.",
    ],
    likelyFixes: [
      "Confirm the password is correct and case-sensitive.",
      "Synchronize Windows system clocks between Laserfiche Server and the domain controller.",
      "For Laserfiche 10 Rio environments, review the referenced Laserfiche update path for this condition.",
      "If this appears after moving to LFDS/Rio in Version 10 and Windows users cannot log in while repository named users can, apply Laserfiche Directory Server 10 Update 1 or a later maintenance build.",
      "If Import Agent shows the error, review Import Agent's username/password troubleshooting guidance.",
      "If Windows Authentication and Directory Server are involved, verify the LFDS service logon account and grant it sufficient SQL Server rights when SQL uses Windows authentication.",
      "Restart Laserfiche Server to force a Directory Server user sync if recent named-user changes have not propagated.",
    ],
    notes:
      "The LFDS service-account fix came from a Laserfiche employee follow-up after a support ticket; the LFDS 10 Update 1 path applies to a narrower Rio/LFDS Windows-authentication scenario.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9010 User Account or Password Incorrect",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9010.htm",
        note: "Lists credential, time synchronization, Directory Server channel, and Import Agent scenarios.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "The user account or password is incorrect. [9010] with Windows Authentication",
        url: "https://answers.laserfiche.com/questions/108568/The-user-account-or-password-is-incorrect-9010-error-occurs-when-logging-into-a-repository-with-Windows-Authentication",
        note: "Laserfiche employee reports the issue was fixed by changing the LFDS service logon account and granting SQL rights.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "LF Server 10 cannot connect with LFDS",
        url: "https://answers.laserfiche.com/questions/88453/LF-Server-10-cannot-connect-with-LFDS",
        note: "James Newton from Laserfiche says LFDS 10 Update 1 fixed a Rio/LFDS issue where Windows users received 9010 while repository named users could still log in.",
      },
    ],
  },
  {
    id: "lf-server-9011-account-locked",
    code: "9011",
    message: "Account locked",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary: "The account is disabled or locked after too many incorrect password attempts.",
    symptoms: [
      "Sign-in fails with Account locked. [9011].",
      "The affected Laserfiche user account may have been manually disabled or automatically locked.",
    ],
    likelyFixes: [
      "Wait and try again if the lockout policy allows automatic unlock.",
      "Have a Laserfiche administrator unlock or re-enable the account.",
      "Verify the user is not repeatedly submitting an outdated password from a saved credential or service.",
      "If Workflow logs 9011 from Subscriber, remove and re-add the monitored repository in Workflow Configuration Manager.",
      "If this followed a repository copy, investigate whether the repository was copied incorrectly.",
    ],
    notes: "Workflow monitored-repository reconfiguration was confirmed by the user after Laserfiche employee guidance.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9011 Account locked",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9011.htm",
        note: "Explains disabled accounts and password-attempt lockouts.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Account Locked. [9011] in subscriber_error.log",
        url: "https://answers.laserfiche.com/questions/94788/Account-Locked-9011-in-subscribererrorlog",
        note: "Laserfiche employee suggests reconfiguring the Workflow monitored repository; user confirms it fixed the issue.",
      },
    ],
  },
  {
    id: "lf-server-9012-trustee-not-found",
    code: "9012",
    message: "Trustee not Found",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche cannot resolve the referenced repository trustee, often surfacing around repository named-user assignment, migrated repositories, or missing user/group security data.",
    symptoms: [
      "Assigning a repository named user returns Trustee not found. [9012].",
      "Users or groups may be missing from repository access-rights views after a migration.",
    ],
    likelyFixes: [
      "Confirm the affected user or group exists in the repository and in the expected identity provider.",
      "After migration, verify trustee synchronization and repository security data before assigning named users.",
      "Open a Laserfiche support case when repository users/groups are missing or named-user assignment fails after migration.",
    ],
    notes: "The reviewed employee guidance is a support-case recommendation for a migration scenario, so confidence is medium and scenario-specific.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9012 as Trustee not Found.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "The trustee not found. [9012]",
        url: "https://answers.laserfiche.com/questions/131819/When-selecting-Repository-Named-User-it-gives-error-The-Trustee-could-not-be-found-The-trustee-not-found-9012",
        note: "Laserfiche employee recommends opening a support case for the migrated repository/named-user assignment scenario.",
      },
    ],
  },
  {
    id: "lf-server-9014-entry-locked",
    code: "9014",
    message: "Entry Locked",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 11", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary: "The repository object is locked by another user or process, or a client bug/support case may be involved.",
    symptoms: [
      "Modifying metadata or another repository object fails with Entry locked. [9014].",
      "In some cases the item appears unlocked until the user attempts the change.",
    ],
    likelyFixes: [
      "Add the Locked By column or check the lock indicator to identify who has the entry locked.",
      "Wait until the document is no longer in use and retry the operation.",
      "If the entry locks itself and still fails, update to the latest service pack for the installed client version and open a support case.",
      "Check whether repository resources are being exceeded if the problem is persistent.",
      "For Workflow invoke/repeat patterns, verify the workflow is acting on the intended entry rather than the workflow starting entry.",
      "Review Workflow Admin Console task error handlers; Workflow may wait and retry 9014/9059 actions after a configured interval.",
    ],
    notes:
      "A Laserfiche employee indicated that a document locking itself and then failing because of the lock should be treated as a bug/support case.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9014 Entry Locked",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9014.htm",
        note: "Explains that another user may be modifying the object and recommends waiting or contacting the administrator.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "entry locked when changing metadata - Laserfiche Answers",
        url: "https://answers.laserfiche.com/questions/80868/entry-locked-when-changing-metadata",
        note: "Robert Strickland from Laserfiche recommends checking the Locked By column and opening a support case for self-locking behavior.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Warning 9014 and 9059",
        url: "https://answers.laserfiche.com/questions/110289/Warning-9014-and-9059",
        note: "Laserfiche employee explains short-lived Workflow locks and retry behavior; user confirmed an Invoke activity targeted the wrong entry.",
      },
    ],
  },
  {
    id: "lf-server-9018-repository-not-found",
    code: "9018",
    message: "Repository Not Found",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary: "The client or process is trying to open a repository that is not attached to the Laserfiche Server.",
    symptoms: [
      "Sign-in or repository selection fails with Repository Not Found. [9018].",
      "The repository may not be attached, started, or loadable on the target Laserfiche Server.",
    ],
    likelyFixes: [
      "Confirm the repository is attached to the Laserfiche Server instance being contacted.",
      "Check Windows Event Viewer for repository startup and load errors.",
      "Verify the client is targeting the correct Laserfiche Server and repository name.",
    ],
    notes: "Seeded from official documentation only.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9018 Repository Not Found",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9018.htm",
        note: "Recommends checking the repository attachment and Event Viewer startup errors.",
      },
    ],
  },
  {
    id: "lf-server-9025-repository-misconfigured",
    code: "9025",
    message: "Error Reading Repository Information, or Repository Misconfigured",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche cannot read repository information; employee replies point to repository/server event logs and SQL access checks.",
    symptoms: [
      "Login or repository creation fails with Error reading Repository Information, or the repository is misconfigured. [9025].",
      "Repository creation may also show missing available databases or SQL login/connectivity symptoms.",
    ],
    likelyFixes: [
      "On Laserfiche 10 or later, check Applications and Services Logs > Laserfiche > ContentRepository > Service > Admin in Windows Event Viewer.",
      "On Laserfiche 9, check the Windows Application event log for related repository errors.",
      "For repository creation or attach failures, verify the Laserfiche Server service account can connect to SQL Server and has required SQL rights.",
      "Confirm SQL Native Client and Laserfiche Server licensing are valid when creating or attaching repositories.",
    ],
    notes:
      "The official 9025 detail page gives the error text only; the actionable troubleshooting comes from Laserfiche employee replies on Answers.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9025 Repository Misconfigured",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9025.htm",
        note: "Lists the official 9025 error text.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error reading Repository Information - Laserfiche Answers",
        url: "https://answers.laserfiche.com/questions/208698/Error-reading-Repository-Information",
        note:
          "Samuel Carson and Miruna Babatie from Laserfiche point to repository event logs, with Version 9 using the Application log.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "available databases wont show up when creating a repository - Laserfiche Answers",
        url: "https://answers.laserfiche.com/questions/68466/available-databases-wont-show-up-when-creating-a-repository-LF-902-SQL-2012",
        note:
          "Laserfiche employees recommend SQL Native Client, licensing, SQL connectivity, and service-account SQL role checks.",
      },
    ],
  },
  {
    id: "lf-server-9027-password-policy",
    code: "9027",
    message: "Password Violates Password Policy",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary: "The proposed Laserfiche password does not meet the configured password-complexity requirements.",
    symptoms: [
      "A password change or account update fails with Password Violates Password Policy. [9027].",
      "The password may include the username, be too short, or miss required character categories.",
    ],
    likelyFixes: [
      "Use a password that does not contain the account username.",
      "Increase the password length.",
      "Include uppercase letters, lowercase letters, digits, and non-alphanumeric characters when required by policy.",
      "Ask the Laserfiche administrator to confirm the configured password policy.",
    ],
    notes: "Seeded from official documentation only.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9027 Password Violates Password Policy",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9027.htm",
        note: "Lists the documented password-complexity requirements to check.",
      },
    ],
  },
  {
    id: "lf-server-9030-session-license-limit",
    code: "9030",
    message: "Maximum sessions or licensing limit reached",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Login can fail when repository sessions, per-user session limits, or named-user license assignment are not valid for the account.",
    symptoms: [
      "Login fails with 9030 even when the user appears licensed in Laserfiche Directory Server.",
      "The full message may mention the number of sessions, the account session limit, or missing named-user allocation.",
    ],
    likelyFixes: [
      "Confirm server licensing and whether the Laserfiche Server hardware fingerprint or license state changed.",
      "If this follows a License Manager to LFDS migration, verify LFDS can reach its SQL database so Laserfiche Server can read the migrated named users.",
      "Collect Directory Server operational/admin/operations event logs and the LFDS executable version/build before opening support.",
      "Try unassigning and reassigning the named-user license if the account appears licensed but still cannot log in.",
      "Check whether the issue is fixed by updating to Laserfiche 10.1 or later when the environment is still on early 10.0 builds.",
    ],
    notes:
      "The license reassignment and 10.1 update notes are community/user-reported fixes. Laserfiche employee guidance focused on support evidence collection.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note:
          "Lists 9030 as the maximum number of sessions licensed for the server instance being reached.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error 9030 on Named User - Laserfiche Answers",
        url: "https://answers.laserfiche.com/questions/93619/Error-9030-on-Named-User",
        note:
          "Shule Wong from Laserfiche requested LFDS event logs and lfds.exe version/build details for support review.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "Error 9030 on Named User - community follow-up",
        url: "https://answers.laserfiche.com/questions/93619/Error-9030-on-Named-User",
        note:
          "Users reported success after license reassignment, automatic logout tuning, and later Laserfiche 10.1 behavior.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "The user has not been allocated a name user license, or the maximum number of sessions that this server instance is licensed for has been reached. [9030]",
        url: "https://answers.laserfiche.com/questions/69010/The-user-has-not-been-allocated-a-name-user-license-or-the-maximum-number-of-sessions-that-this-server-instance-is-licensed-for-has-been-reached-9030",
        note: "Miruna Babatie from Laserfiche explains that Laserfiche Server could not read migrated users because LFDS could not contact its SQL database.",
      },
    ],
  },
  {
    id: "lf-server-6508-incorrect-credentials",
    code: "6508",
    message: "The user name or password is incorrect",
    product: "Windows Client/Desktop Client",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary: "Official documentation identifies 6508 as an incorrect username or password condition.",
    symptoms: [
      "Client login fails with a credential-related error.",
      "No reviewed Answers fix has been curated for this entry yet.",
    ],
    likelyFixes: [
      "Verify the username, password, authentication mode, and repository target.",
      "If Windows authentication is involved, validate domain trust, account lockout, and whether the user can authenticate elsewhere.",
      "Search and review Laserfiche Answers before publishing a higher-confidence fix.",
    ],
    notes: "Seeded from official documentation only. More Answers review is needed before operational fixes are promoted.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 6508 as the username or password being incorrect.",
      },
    ],
  },
  {
    id: "lf-server-9043-database-connection",
    code: "9043",
    message: "Could not obtain a connection to the database",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary: "Official documentation maps 9043 to a repository-server database connection failure.",
    symptoms: [
      "Repository operations fail when the server cannot get a database connection.",
      "The error may appear with broader SQL Server, connectivity, or repository availability symptoms.",
    ],
    likelyFixes: [
      "Check SQL Server availability, network connectivity, service account permissions, and database connection limits.",
      "Review Laserfiche Server and SQL Server logs around the timestamp of the error.",
      "Search and review Laserfiche Answers before publishing a higher-confidence fix.",
    ],
    notes: "Seeded from official documentation only. Answers research is still needed.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9043 as Could Not Obtain a Connection to the Database.",
      },
    ],
  },
  {
    id: "lf-server-9037-invalid-session",
    code: "9037",
    message: "Invalid Session",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary:
      "The Windows Client session is invalid, with official documentation pointing to migration, upgrade, or server license-file causes.",
    symptoms: [
      "Signing in to the Laserfiche Windows Client returns Invalid Session. [9037].",
      "The problem may appear after a migration, upgrade, or license-file change.",
    ],
    likelyFixes: [
      "Restart the Laserfiche service on the Laserfiche Server.",
      "Review recent migration, upgrade, and license-file changes if the restart does not resolve the issue.",
      "Collect server logs before opening a support case if the error returns.",
    ],
    notes: "Seeded from official documentation only.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9037 Invalid Session",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9037.htm",
        note: "Lists migration, upgrade, and license-file causes and recommends restarting the Laserfiche service.",
      },
    ],
  },
  {
    id: "lf-server-9042-request-timed-out",
    code: "9042",
    message: "The Request Has Timed Out",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary: "The repository request timed out before Laserfiche could complete it.",
    symptoms: [
      "A repository operation fails with The Request Has Timed Out. [9042].",
      "The official detail page lists the error text but does not provide a specific remediation.",
    ],
    likelyFixes: [
      "Check Laserfiche Server, SQL Server, and network health around the timestamp of the timeout.",
      "Review whether the operation is unusually large or blocked behind other repository work.",
      "Search and review Laserfiche Answers before promoting a higher-confidence fix.",
    ],
    notes: "Seeded from official documentation only. A targeted Answers search found no matching posts in this pass.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9042 Request Timed Out",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9042.htm",
        note: "Lists the official 9042 error text.",
      },
    ],
  },
  {
    id: "lf-server-9045-object-locked",
    code: "9045",
    message: "The Operation Cannot Complete Because an Object is Locked",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary: "A repository object is locked by another running action such as Workflow.",
    symptoms: [
      "Modifying a repository object fails with The operation cannot complete because an object is locked. [9045].",
      "The affected object may be locked by a running workflow or other repository process.",
    ],
    likelyFixes: [
      "Wait for the locking operation to finish and retry.",
      "If the locked object is a document, use the Laserfiche Admin Console to unlock it.",
      "Restart the Laserfiche service and retry if the lock does not clear normally.",
    ],
    notes: "Seeded from official documentation only.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9045 Object Locked",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9045.htm",
        note: "Explains that another action such as Workflow may be locking the object.",
      },
    ],
  },
  {
    id: "lf-server-9046-invalid-repository-instance",
    code: "9046",
    message: "The Repository Is Not Recognized as a Valid Repository In This Laserfiche Instance",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary: "The repository is not valid for this Laserfiche Server instance, often when unregistering a repository that no longer exists.",
    symptoms: [
      "Administrative repository removal or access fails with 9046.",
      "The repository may no longer exist but still has registration data on the server.",
    ],
    likelyFixes: [
      "Confirm the repository is expected to be registered on this Laserfiche Server instance.",
      "If unregistering a missing repository, carefully remove the documented Laserfiche repository registry keys.",
      "Back up registry state before deleting repository keys and involve support if the environment is unclear.",
    ],
    notes: "Seeded from official documentation only. Registry changes should be treated as an administrative maintenance task.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9046 Repository Not Recognized",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9046.htm",
        note: "Documents the registry keys to remove when manually unregistering a missing repository.",
      },
    ],
  },
  {
    id: "lf-server-9047-object-modified-since-read",
    code: "9047",
    message: "The Object Has Been Modified Since It Was Last Read",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary: "Another user modified the document after it was opened, so the local view must be refreshed before saving changes.",
    symptoms: [
      "Saving or updating a document fails with The Object Has Been Modified Since It Was Last Read. [9047].",
      "The document has changed since the user opened it.",
    ],
    likelyFixes: [
      "Close and reopen the document before applying changes.",
      "Use the Refresh toolbar button in Document Viewer.",
      "Coordinate edits if multiple users or automation are updating the same object.",
    ],
    notes: "Seeded from official documentation only.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9047 Object Modified Since Read",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9047.htm",
        note: "Recommends reopening or refreshing the document before making changes.",
      },
    ],
  },
  {
    id: "lf-server-9017-bad-field-value-date-format",
    code: "9017",
    message: "Bad Field Value",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "The value being written to a repository field is not valid for that field type. Reviewed Answers threads most often show this with Workflow or Forms date tokens being written to Laserfiche date fields.",
    symptoms: [
      "Workflow reports The data assigned to field is not valid. 9017.",
      "A text or regular-expression token is written into a Laserfiche date field.",
      "The issue may start after changing a metadata field from text to date.",
    ],
    likelyFixes: [
      "Track the token value immediately before the field assignment and confirm it matches the expected field type.",
      "For date fields, reformat extracted strings into the Windows date format used by the Workflow server or into the field's configured display format.",
      "Use Workflow token calculation or substitution to convert values such as YYYYMMDD before assigning them to a date field.",
      "Confirm that the Laserfiche field type still matches the values being supplied by Forms or Workflow.",
    ],
    notes:
      "One reviewed thread names Forms 10.2.0.834. The Version 12 tag is retained because 9017 is also listed in the Laserfiche 12 official error code table.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9017 as Bad Field Value.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "9017 Bad field value. [0265-WF10]",
        url: "https://answers.laserfiche.com/questions/129280/9017-Bad-field-value-0265WF10",
        note:
          "Laserfiche employee guidance recommends tracking the value before it is set and checking whether it matches the Workflow server's Windows date format.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "Date column invalid format error: The data assigned to field 'Student DOB' is not valid. 9017",
        url: "https://answers.laserfiche.com/questions/231597/Date-column-invalid-format-error-The-data-assigned-to-field-Student-DOB-is-not-valid-9017",
        note:
          "Community guidance explains that an extracted YYYYMMDD value must be converted before assignment to a Laserfiche date field.",
      },
    ],
  },
  {
    id: "lf-server-9022-volume-locked",
    code: "9022",
    message: "Volume Currently Locked or in Use",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche cannot change a volume path, read-only state, or enabled state while something still has the volume open.",
    symptoms: [
      "Changing a volume path, marking a volume read-only, or disabling a volume fails with 9022.",
      "The volume appears unused, but background services may still hold locks.",
    ],
    likelyFixes: [
      "Check whether indexing or another Laserfiche background service is using the volume.",
      "Perform volume maintenance during a controlled outage when users and automation are disconnected.",
      "If a lock does not clear after normal shutdown, collect server/service state and involve Laserfiche Support before forcing changes.",
    ],
    notes:
      "The reviewed employee-backed thread discusses administrative volume changes rather than document-level user locks.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9022 as Volume Currently Locked or in Use.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Volume currently locked or in use. [9022] - can't mark as Read-only, disable, or change fixed path",
        url: "https://answers.laserfiche.com/questions/82855/Volume-currently-locked-or-in-use-9022--cant-mark-as-Readonly-disable-or-change-fixed-path",
        note:
          "The thread identifies background services such as indexing as a possible reason a volume remains locked during administrative changes.",
      },
    ],
  },
  {
    id: "lf-server-9029-repository-license-limit",
    code: "9029",
    message: "The Maximum Number of Repositories That This Server Instance Is Licensed For Has Been Reached",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "The server believes its license allows no additional repositories. In one reviewed first-repository scenario, the likely cause was license validation failing.",
    symptoms: [
      "Creating or attaching a repository fails with 9029 even when no repository has been created yet.",
      "Administration Console may show Maximum Repositories allowed as 0.",
    ],
    likelyFixes: [
      "Open the Administration Console and check the server's repository license count.",
      "Confirm the Laserfiche Server service can validate the license and has the correct license file.",
      "Restart the Laserfiche Server service after correcting license validation or connectivity issues.",
      "Contact Laserfiche Support or your reseller if the license count remains wrong.",
    ],
    notes:
      "The reviewed Answers thread is community-confirmed rather than a Laserfiche employee answer, so confidence remains medium.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9029 as the maximum repository count being reached.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "1st repository creation : error 9029 - the maximum number of repositories has been reached",
        url: "https://answers.laserfiche.com/questions/65262/1st-repository-creation--error-9029--the-maximum-number-of-repositories-has-been-reached",
        note:
          "Accepted guidance points to failed server license validation and checking whether the Administration Console shows Maximum Repositories allowed as 0.",
      },
    ],
  },
  {
    id: "lf-server-9035-too-many-operations",
    code: "9035",
    message: "The Current Request Could Not Be Executed Because There Are Too Many Existing Operations Executing",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 11", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche reports too many concurrent operations. A reviewed WebLink 11 thread identifies one known issue that required a Laserfiche Support supplied fix.",
    symptoms: [
      "Requests fail or log warnings with 9035.",
      "WebLink 11 operational logs may show the warning while loading tile data.",
      "The server may not show obvious CPU, memory, or disk pressure.",
    ],
    likelyFixes: [
      "Check whether many long-running repository operations are active and retry when load is lower.",
      "For WebLink 11.0.2307.136 with repeated tile-data warnings, contact Laserfiche Support for the applicable fix.",
      "Review product updates or hotfix guidance before applying private fixes in production.",
    ],
    notes:
      "The strongest reviewed thread is WebLink-specific and mentions WebLink 11.0.2307.136. Treat that as a scenario-specific fix path.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9035 as too many existing operations executing.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "The current request could not be performed because there are too many existing operations running. [9035]",
        url: "https://answers.laserfiche.com/questions/221839/The-current-request-could-not-be-performed-because-there-are-too-many-existing-operations-running-9035",
        note:
          "Laserfiche employee response says the WebLink 11 scenario was a known issue and that Technical Support had a potential fix.",
      },
    ],
  },
  {
    id: "lf-server-9044-invalid-volume-path",
    code: "9044",
    message: "Invalid Volume Path",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "high",
    reviewedDate: "2026-06-27",
    summary:
      "The volume path is invalid or inaccessible to the Laserfiche Server service account.",
    symptoms: [
      "Creating or editing a volume fails with Invalid volume path. [9044].",
      "The path may look valid to an administrator but not be reachable by the service identity.",
    ],
    likelyFixes: [
      "Check the Windows account running the Laserfiche Server service.",
      "Grant that service account full control to the volume folder as required by the environment.",
      "If the volume is on a network share, use a service account that can access the share and configure the path with UNC notation.",
      "Avoid relying on Local System for remote or non-local volume paths.",
    ],
    notes:
      "Reviewed Laserfiche employee guidance calls out Local System account limitations and filesystem permissions.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9044 as Invalid Volume Path.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Invalid volume path. [9044]",
        url: "https://answers.laserfiche.com/questions/94688/Invalid-volume-path-9044",
        note:
          "Laserfiche employee response lists root causes including the server service running as Local System and missing folder permissions for the volume path.",
      },
    ],
  },
  {
    id: "lf-server-9051-operation-not-recognized-client-102",
    code: "9051",
    message: "The Specified Operation Is Not Recognized",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "The server or client does not recognize the requested operation. A reviewed Laserfiche 10.2 scanning/client scenario was a known bug fixed in 10.2.1.",
    symptoms: [
      "Laserfiche Scanning or a client integration fails with 9051 after upgrading to 10.2.",
      "The Windows Client may crash or fail while storing scanned pages into an existing document.",
      "SDK integrations using older client automation components may surface the error after a client upgrade.",
    ],
    likelyFixes: [
      "If the environment is Laserfiche 10.2, upgrade the Windows Client and related runtime components to 10.2.1 or later.",
      "Confirm whether the failing workflow, SDK, or client action depends on an older client automation command.",
      "Collect the full technical details and product versions before opening a support case for other 9051 scenarios.",
    ],
    notes:
      "The reviewed fix is specific to Laserfiche 10.2 bug 154363. Version 12 remains included because the code exists in the current official error listing.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9051 as The Specified Operation Is Not Recognized.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "10.2 Client crashes with \"The specified operation is not recognized. [9051]\"",
        url: "https://answers.laserfiche.com/questions/117439/102-Client-crashes-with-The-specified-operation-is-not-recognized-9051",
        note:
          "Laserfiche employee response identifies a known 10.2 issue, reference 154363, and confirms it was fixed with 10.2.1.",
      },
    ],
  },
  {
    id: "lf-server-9059-entry-sharing-violation",
    code: "9059",
    message: "Operation Failed Due To Entry Sharing Violation",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "An entry operation hit a sharing violation. A reviewed PDF import scenario was tied to generated text during import and a Laserfiche Server 10.1 fix.",
    symptoms: [
      "PDF import fails with 9059 when Generate Text is selected.",
      "Workflow or rights-related operations may also log sharing-violation warnings.",
    ],
    likelyFixes: [
      "For Laserfiche Server 10.1 PDF import cases, verify the server is updated to a build that includes bug 136436.",
      "If the issue persists after updating, test whether the PDF format is unsupported by the third-party PDF component used by Laserfiche.",
      "Disable generated text during import as a diagnostic step and compare behavior.",
      "Open a support case when the failure is reproducible with a sample PDF.",
    ],
    notes:
      "The reviewed thread includes both employee bug guidance and community follow-up that unsupported PDF format may still be a factor.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9059 as Operation Failed Due To Entry Sharing Violation.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Operation failed due to entry sharing violation. [9059]",
        url: "https://answers.laserfiche.com/questions/114221/Operation-failed-due-to-entry-sharing-violation-9059",
        note:
          "Laserfiche employee response says the PDF import/generate-text scenario should be fixed in the latest 10.1 Laserfiche Server, bug 136436.",
      },
    ],
  },
  {
    id: "lf-server-9063-entry-locked-refresh-needed",
    code: "9063",
    message: "The entry is locked and cannot be modified, or the object needs to be refreshed before it can be updated.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "The entry was locked or stale when the client tried to save changes. Reviewed Laserfiche 9.x threads point to fixes in later builds and refreshing or reopening affected objects.",
    symptoms: [
      "The Windows Client reports 9063 while advancing between documents, renaming an open document, or saving metadata.",
      "The object may still save some changes even though the client reports a lock or refresh error.",
    ],
    likelyFixes: [
      "Refresh or reopen the document before retrying the change.",
      "Check whether Workflow or another client is modifying the same document at the same time.",
      "For Laserfiche 9.1.1.546 Alt+Down scenarios, contact support or update to a later fixed build.",
      "For Laserfiche 9.1 rename-while-open scenarios, upgrade to 9.2 or later based on the reviewed employee reproduction.",
    ],
    notes:
      "Reviewed threads mention Laserfiche 9.1.1.546, support-provided lfs.exe build 9.1.1.564, and a separate issue reproduced in 9.1 but not 9.2.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9063 as an entry lock or refresh-needed error.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "Laserfiche 9.1.1.546 Client Error Code 9063",
        url: "https://answers.laserfiche.com/questions/61491/Laserfiche-911546-Client-Error-Code-9063",
        note:
          "The requester reports support supplied lfs.exe build 9.1.1.564 and attributed the lock condition to multiple application access.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Client getting 9063 error when renaming document",
        url: "https://answers.laserfiche.com/questions/117586/Client-getting-9063-error-when-renaming-document",
        note:
          "Laserfiche employee response says the rename-while-open scenario was reproducible in 9.1 but not 9.2.",
      },
    ],
  },
  {
    id: "lf-server-9066-required-fields-omitted",
    code: "9066",
    message: "One Or More Required Fields Were Omitted",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "A required field is blank or a supplied metadata value is invalid for the field. Reviewed Answers posts show this in Workflow and Quick Fields metadata updates.",
    symptoms: [
      "Workflow or Quick Fields reports 9066 while assigning template metadata.",
      "Metadata may be cleared or fail to save when required fields or token values do not match the field definition.",
    ],
    likelyFixes: [
      "Confirm every required field in the target template receives a nonblank value.",
      "When using tokens, verify the token value type matches the Laserfiche field type before assigning it.",
      "For Quick Fields 9.0 scenarios, apply the latest Quick Fields patch referenced by Laserfiche Support.",
      "Republish the Workflow after changing Assign Field Values activity configuration.",
    ],
    notes:
      "Reviewed Answers threads include Workflow metadata assignment and Quick Fields 9.0 patch scenarios.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9066 as One Or More Required Fields Were Omitted.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Metadata disappears and error 9066 on populated fields",
        url: "https://answers.laserfiche.com/questions/112995/Metadata-disappears-and-error-9066-on-populated-fields",
        note:
          "Laserfiche employee replies recommend checking that token values have the correct field types and that the workflow was republished after assigning field values.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Metadata Being Erased After Receiving [9066] Error",
        url: "https://answers.laserfiche.com/questions/68935/Metadata-Being-Erased-After-Receiving-9066-Error",
        note: "Laserfiche employee reply recommends applying the latest Quick Fields patch, KB 1013497.",
      },
    ],
  },
  {
    id: "lf-server-9067-session-terminated-office-integration",
    code: "9067",
    message: "The Current Session Has Been Terminated",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 11", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "The repository session was terminated. One reviewed Office Integration 11 thread was resolved by correcting the Web Client server configuration from an IP address to the FQDN.",
    symptoms: [
      "Office Integration fails to connect to the repository and reports 9067.",
      "The issue may be intermittent and affect Office Integration while Web Client access works.",
      "Self-hosted API calls may also report a terminated session and require support investigation.",
    ],
    likelyFixes: [
      "For Office Integration, check the Web Client configuration page and verify the configured Laserfiche Server name is the expected FQDN.",
      "Replace IP-address server configuration with the FQDN when Office Integration depends on that configuration.",
      "For API Server cases where a fresh token is terminated, collect API operation logs and open a Laserfiche Support case.",
    ],
    notes:
      "The concrete fix came from a Version 11 Office Integration thread. The API Server thread had employee guidance to open a support ticket.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9067 as The Current Session Has Been Terminated.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "LF 11 Office Integration Failed to connect to the server [9067]",
        url: "https://answers.laserfiche.com/questions/202550/LF-11-Office-Integration-Failed-to-connect-to-the-server-Verify-the-server-is-online-before-trying-again-9067",
        note:
          "Community follow-up after a Laserfiche case reports that changing the Web Client server value from IP address to FQDN resolved complaints.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "The Current Session has been Terminated [9067]",
        url: "https://answers.laserfiche.com/questions/224931/The-Current-Session-has-been-Terminated-9067",
        note: "Laserfiche employee guidance for a self-hosted API Server session case was to open a support ticket for investigation.",
      },
    ],
  },
  {
    id: "lf-server-9073-password-login-not-allowed",
    code: "9073",
    message: "This User Is Not Allowed to Log In Using a Password",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "A connection profile or starting-rule configuration is using an account that is no longer allowed to authenticate with a password.",
    symptoms: [
      "Workflow Designer reports 9073 while editing starting rules.",
      "The workstation user can open Workflow Designer, but the selected repository connection profile fails.",
    ],
    likelyFixes: [
      "Open the starting-rule wizard and check which connection profile is selected.",
      "Select a different repository connection profile that uses an allowed authentication method.",
      "Update the affected user in the Laserfiche Administration Console if password sign-in should be allowed.",
    ],
    notes:
      "Reviewed employee guidance is specific to Workflow Designer starting rules in a Version 10 environment.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9073 as This User Is Not Allowed to Log In Using a Password.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "WF Designer editing starting rules user gets error 9073",
        url: "https://answers.laserfiche.com/questions/167851/WF-Designer-editing-starting-rules-user-gets-error-This-user-is-not-allowed-to-sign-in-using-a-password-9073",
        note:
          "Laserfiche employee reply says the rules wizard connection profile is likely using a user no longer allowed to log in with a password.",
      },
    ],
  },
  {
    id: "lf-server-9084-invalid-search-term",
    code: "9084",
    message: "The search term you have entered is not valid.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "The repository search syntax is invalid. Reviewed Workflow and SDK threads point to quoting field values, validating custom search syntax, and isolating bad entry names or special characters.",
    symptoms: [
      "Workflow Search Repository or SDK search code fails with 9084.",
      "The query may include field values with spaces, hyphens, special characters, or unquoted token output.",
    ],
    likelyFixes: [
      "Wrap text field values in double quotes in custom search syntax.",
      "Log or inspect the final search string after token replacement before executing the search.",
      "Test the same search in the Laserfiche Client to isolate syntax problems.",
      "Use try/catch or per-entry handling in Workflow loops so one invalid folder or search value does not terminate the whole workflow.",
    ],
    notes:
      "Reviewed posts include Workflow and SDK examples. Version 12 is retained from the official listing.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9084 as an invalid search term.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Search Repository error messages #9084 and #9085",
        url: "https://answers.laserfiche.com/questions/128927/Search-Repository-error-messages-9084-and-9085",
        note: "Laserfiche employee response says a Workflow field value in the query needed double quotes.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Getting an error 9084 when using SDK",
        url: "https://answers.laserfiche.com/questions/54760/Getting-an-error-9084-when-using-SDK",
        note: "Laserfiche employee response identifies incorrect SDK search syntax as the cause.",
      },
    ],
  },
  {
    id: "lf-server-9105-read-only-session-license",
    code: "9105",
    message: "A read-only session is not permitted to perform this operation.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "The operation requires a writable session, but the server issued a read-only session. A reviewed employee answer traced one case to incorrect Laserfiche Server licensing.",
    symptoms: [
      "Creating a user, template, or other administrative object fails with 9105.",
      "The user appears to have rights, but the server session is read-only.",
    ],
    likelyFixes: [
      "Check whether the Laserfiche Server is activated with the correct license.",
      "Reactivate with the proper key and regenerate or install the correct license file.",
      "Restart the Laserfiche Server service after correcting the license state.",
    ],
    notes:
      "The reviewed Answers thread points to a licensing issue rather than normal repository security.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9105 as a read-only session operation failure.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error Code : 9105",
        url: "https://answers.laserfiche.com/questions/97754/Error-Code--9105",
        note:
          "Laserfiche employee response says the issue was caused by incorrect Laserfiche Server licensing and resolved after reactivation with the proper key.",
      },
    ],
  },
  {
    id: "lf-server-9237-audit-log-enable-failed",
    code: "9237",
    message: "Could not enable audit log.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 12"],
    confidence: "high",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche could not open or initialize the repository audit log. Reviewed threads point to SQL connection disruption, service restart, audit log path permissions, and possible log-file corruption.",
    symptoms: [
      "Repository login or startup fails with Could not enable audit log. [9237].",
      "The issue may appear after SQL Server connection changes or service interruptions.",
    ],
    likelyFixes: [
      "Restart the Laserfiche Server service after SQL Server connectivity is restored.",
      "Verify the Laserfiche Server service account has read/write permissions to the configured Audit Log path.",
      "Check the repository AuditLog registry path and confirm the path exists.",
      "If permissions and path are valid, back up the repository audit log file before following support guidance to recreate it.",
    ],
    notes:
      "One accepted community fix was a Laserfiche Server restart after SQL Server was restarted; employee guidance adds audit-log path and permissions checks.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9237 as Could not enable audit log.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Audit trail problem resulting in 9237 error for end users",
        url: "https://answers.laserfiche.com/questions/81944/Audit-trail-problem-resulting-in-9237-error-for-end-users",
        note:
          "Laserfiche employee reply recommends checking the server service account permissions to the Audit Log path and backing up the log file if the path and rights are valid.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "9237: Could not enable audit log",
        url: "https://answers.laserfiche.com/questions/48042/9237-Could-not-enable-audit-log",
        note: "Accepted answer reports the error cleared after restarting the Laserfiche Server following a SQL Server restart.",
      },
    ],
  },
  {
    id: "lf-server-9265-briefcase-decompress-error",
    code: "9265",
    message: "There was an error decompressing the briefcase. The briefcase file may be corrupt or the disk may be full.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Briefcase import failed while decompressing. Reviewed employee guidance points to repository temp space during import and incomplete asynchronous briefcase exports.",
    symptoms: [
      "Briefcase import or Workflow Replicate Entry fails with 9265.",
      "Disk space may appear sufficient after the failure because temporary files are cleaned up.",
      "Briefcases generated by custom code may be smaller than client-generated briefcases and fail to import.",
    ],
    likelyFixes: [
      "Monitor free space on the repository drive and temp folder while imports are running, not only after they fail.",
      "Avoid running many briefcase imports or Replicate Entry operations concurrently when repository temp space is limited.",
      "For SDK exports, use the synchronous Export function or correctly pair BeginExport with EndExport so the briefcase is complete before import.",
      "Compare failing briefcase size and behavior against a briefcase exported through the Laserfiche Client.",
    ],
    notes:
      "One reviewed thread is a self-hosted Workflow scenario; another is a RepositoryAccess 10.4 SDK export scenario.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9265 as a briefcase decompression error.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Briefcase Import error 9265 needs more specification",
        url: "https://answers.laserfiche.com/questions/224442/Briefcase-Import-error-9265-needs-more-specification",
        note:
          "Laserfiche employee reply explains that temp space on the repository drive can be consumed while Laserfiche Server uncompresses briefcases.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "There was an error decompressing the briefcase [9265]",
        url: "https://answers.laserfiche.com/questions/220015/There-was-an-error-decompressing-the-briefcase-The-briefcase-file-may-be-corrupt-the-disk-may-be-out-of-space-or-another-IO-error-occurred-9265",
        note:
          "Laserfiche employee reply recommends using synchronous Export or correct BeginExport/EndExport handling so an exported briefcase is complete.",
      },
    ],
  },
  {
    id: "lf-server-9288-no-search-catalog",
    code: "9288",
    message: "This repository does not have an associated catalog.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "The repository has no attached full-text search catalog. Reviewed employee guidance points to the Laserfiche Full Text Search service not being installed or running.",
    symptoms: [
      "Creating or using a repository reports 9288.",
      "Full-text search and indexing are unavailable until a catalog is attached or created.",
    ],
    likelyFixes: [
      "Verify the Laserfiche Full Text Search service is installed and running.",
      "If the service is missing, run the Laserfiche Server installer and install LFFTS on the appropriate machine.",
      "After LFFTS is available, create or attach the repository search catalog.",
    ],
    notes:
      "The reviewed Answers thread involved a new repository installation where the LFFTS service was not visible.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9288 as a repository without an associated catalog.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error 9288: This repository does not have an associated catalog",
        url: "https://answers.laserfiche.com/questions/88948/Error-9288--This-repository-does-not-have-an-associated-catalog-",
        note:
          "Laserfiche employee response says the service is Laserfiche Full Text Search and recommends installing LFFTS if it is missing.",
      },
    ],
  },
  {
    id: "lf-server-9290-catalog-detach-failed",
    code: "9290",
    message: "The repository cannot be unregistered because the search catalog could not be detached.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Repository unregister failed because the search catalog could not be detached.",
    symptoms: [
      "Unregistering a repository fails with 9290.",
      "The error may appear alongside earlier repository startup or audit log problems.",
    ],
    likelyFixes: [
      "Restart the Laserfiche Server service and retry when the failure appears transient.",
      "If restart does not help, manually unregister the repository using the documented Laserfiche KB 1011998 procedure.",
      "Register the repository again after manual cleanup if the repository should remain in service.",
    ],
    notes:
      "Reviewed thread includes employee guidance to manually unregister using KB 1011998 and community confirmation that a service restart sometimes clears the issue.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9290 as search catalog detach failure during repository unregister.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Repository cannot be unregistered because the search catalog could not be detached 9290",
        url: "https://answers.laserfiche.com/questions/95240/Repository-cannot-be-unregistered-because-the-search-catalog-could-not-be-detached-9290",
        note:
          "Laserfiche employee reply recommends manually unregistering the repository using KB 1011998, then registering it again.",
      },
    ],
  },
  {
    id: "lf-server-9302-date-time-pattern-failed",
    code: "9302",
    message: "Setting the date or time pattern to the supplied string failed.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "A date/time format pattern is invalid. Reviewed employee guidance points to case-sensitive date pattern tokens, especially MM for month instead of mm for minutes.",
    symptoms: [
      "A date token or pattern returns 9302.",
      "The month appears as zeros or the formatted value is wrong.",
    ],
    likelyFixes: [
      "Use uppercase MM for month in date patterns.",
      "Use lowercase mm only when the intended value is minutes.",
      "Test the formatted token output before assigning it to a field or search.",
    ],
    notes:
      "The reviewed thread confirms that changing mm to MM fixed the month value.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9302 as failure setting the date or time pattern.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "date token month is wrong, error 9302",
        url: "https://answers.laserfiche.com/questions/57631/date-token-month-is-wrong-error-9302",
        note: "Laserfiche employee reply explains that MM means month while mm means minutes.",
      },
    ],
  },
  {
    id: "lf-server-9337-field-constraint-syntax-error",
    code: "9337",
    message: "The field constraint has a syntax error or is invalid.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "A field constraint is invalid for the field type. Reviewed employee guidance shows that a regular-expression-style constraint on a number field can cause 9337 because the constraint is not a number constraint.",
    symptoms: [
      "Saving a field constraint returns 9337.",
      "A numeric field is configured with a pattern that contains characters such as dashes.",
    ],
    likelyFixes: [
      "Confirm the field type matches the constraint being configured.",
      "Use a text field when the constraint is a regular expression or pattern containing nonnumeric characters.",
      "If the field was created with the wrong type, recreate it with the correct field type before applying the constraint.",
    ],
    notes:
      "The reviewed thread involved Avante 9.2. Version 12 remains included because the code is in the official Version 12 listing.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9337 as an invalid field constraint syntax error.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "regular expressions syntax error 9337",
        url: "https://answers.laserfiche.com/questions/76309/regular-expressions-syntax-error-9337",
        note:
          "Laserfiche employee reply explains that the constraint was not valid for a number field and recommends using a text field.",
      },
    ],
  },
  {
    id: "lf-server-9352-repository-named-user-limit",
    code: "9352",
    message: "The number of registered Laserfiche named users has reached its licensed limit.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche cannot allocate another repository named user. Reviewed guidance points to LFDS server-instance license allocation or server activation, not just the total user count shown in LFDS.",
    symptoms: [
      "Adding or changing a repository user to Full returns 9352.",
      "LFDS may show available named users, but the Laserfiche Server instance cannot allocate repository named users.",
    ],
    likelyFixes: [
      "In LFDS, edit the registered Laserfiche Server instance and assign repository named-user licenses under Advanced options.",
      "Save the LFDS server-instance change and restart the Laserfiche Server service.",
      "For new Version 12 installs, verify the Laserfiche Server license is activated before creating the first full repository user.",
    ],
    notes:
      "One reviewed thread involved Rio 9.2.1; another involved a self-hosted Version 12 install.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9352 as the named-user licensed limit being reached.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Can't add Full user to Rio; error 9352",
        url: "https://answers.laserfiche.com/questions/80191/Cant-add-Full-user-to-Rio-error-9352",
        note:
          "Laserfiche employee reply says to assign repository named-user licenses to the Laserfiche Server instance in LFDS Advanced options, then restart Laserfiche Server.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "The number of registered repository named users has reached its licensed limit.[9352]",
        url: "https://answers.laserfiche.com/questions/227117/The-number-of-registered-repository-named-users-has-reached-its-licensed-limit9352",
        note: "Community guidance points to checking whether the server license has been activated.",
      },
    ],
  },
  {
    id: "lf-server-9356-ldap-profile-not-found",
    code: "9356",
    message: "LDAP server profile not found.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche could not find the LDAP profile referenced during sign-in or repository access.",
    symptoms: [
      "A user cannot sign in and receives LDAP server profile not found. [9356].",
      "The error may affect only one user or one client path.",
    ],
    likelyFixes: [
      "Recheck the LDAP profile name being used by the affected client or login path.",
      "Use Attach in the client to confirm the user is connecting to the intended Laserfiche Server.",
      "For web access paths, confirm the URL points to the intended application and not a different Laserfiche web component.",
      "If the profile has a friendly name in LFDS, confirm users authenticate using the expected profile name format.",
    ],
    notes:
      "Reviewed community follow-up also notes a case where the user was pointing to Web Access instead of WebLink.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9356 as LDAP server profile not found.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "LDAP Server Profile Not Found Error 9356",
        url: "https://answers.laserfiche.com/questions/89351/LDAP-Server-Profile-Not-Found-Error-9356",
        note:
          "Laserfiche employee reply says the most likely cause is a mistyped LDAP profile name and recommends confirming the server attachment.",
      },
    ],
  },
  {
    id: "lf-server-9409-external-table-init-failed",
    code: "9409",
    message: "Fail to initialize the external table.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 12"],
    confidence: "high",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche could not initialize an external table or dynamic field source. Reviewed employee guidance identifies unsupported timestamp/interval data types as one confirmed cause.",
    symptoms: [
      "Dynamic fields or external table registration fails with 9409.",
      "The external table may be a SQL view or linked-server-backed view.",
    ],
    likelyFixes: [
      "Inspect the external table or view for timestamp, timestamp-with-time-zone, timestamp-with-local-time-zone, interval-year-to-month, or interval-day-to-second columns.",
      "Remove unsupported columns from the view exposed to Laserfiche.",
      "If the issue is intermittent with linked-server data, test the view directly in SQL Server when the error occurs and review database connectivity.",
    ],
    notes:
      "One accepted answer resolved the issue by removing a timestamp column from the SQL view.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9409 as external table initialization failure.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error Message: Failed to initialize the external table. [9409]",
        url: "https://answers.laserfiche.com/questions/72761/Error-Message-Failed-to-initialize-the-external-table-9409",
        note:
          "Laserfiche employee reply confirms a timestamp column caused the issue and references unsupported external-table data types.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "Failed to initialize the external table - 9409",
        url: "https://answers.laserfiche.com/questions/79235/Failed-to-initialize-the-external-table--9409",
        note:
          "Community thread discusses linked-server-backed views and notes testing the view directly in SQL as a temporary recovery step.",
      },
    ],
  },
  {
    id: "lf-server-9421-invalid-search-catalog-status",
    code: "9421",
    message: "Invalid search catalog status.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "The full-text search catalog is in an invalid state, often because the catalog is corrupt or the Laserfiche Full Text Search service needs attention.",
    symptoms: [
      "Text searches fail with Invalid search catalog status. [9421].",
      "The repository search catalog may not start or may show an unhealthy state.",
    ],
    likelyFixes: [
      "Restart the Laserfiche Full Text Search service and retest search.",
      "If restart does not recover the catalog, delete or recreate the search catalog from the documented catalog path.",
      "Re-index the repository after recreating the catalog and plan for indexing time based on repository size.",
    ],
    notes:
      "Reviewed community answer says restarting the Full Text service resolved the issue in a later confirmation.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9421 as Invalid search catalog status.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "error 9421 : Invalid search catalog status ?",
        url: "https://answers.laserfiche.com/questions/60923/error-9421--Invalid-search-catalog-status-",
        note:
          "Accepted community answer recommends restarting Laserfiche Full Text Search, then recreating and re-indexing the catalog if needed.",
      },
    ],
  },
  {
    id: "lf-server-9523-repository-upgrading",
    code: "9523",
    message: "The repository cannot be mounted at the current time because it is being upgraded. Please wait until the upgrade completes.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "The repository is still in an internal upgrade or migration state and cannot be mounted until that process completes.",
    symptoms: [
      "Administration Console, Client, or Workflow cannot connect and report 9523.",
      "The message appears after upgrading or attaching a repository from an older Laserfiche version.",
    ],
    likelyFixes: [
      "Wait for the repository upgrade/migration process to complete before retrying.",
      "Check the Laserfiche Server machine's Application Event Viewer for upgrade progress or errors.",
      "Open a support case if the repository remains in the upgrade state far longer than expected or logs show upgrade failures.",
    ],
    notes:
      "Reviewed threads include upgrades from 8.x/9.x to 9.2/10.x. One user reported a 64 GB database completed internal migration in under an hour, but timing is environment-specific.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9523 as repository cannot be mounted because it is being upgraded.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "The repository cannot be mounted because it is being upgraded [9523]",
        url: "https://answers.laserfiche.com/questions/78747/The-repository-cannot-be-mounted-at-this-time-because-it-is-being-upgraded-Please-wait-until-the-upgrade-completes-9523",
        note:
          "Community follow-up reports the error is normal until internal migration finishes.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "The repository cannot be mounted at this time because it is being upgraded. [9523]",
        url: "https://answers.laserfiche.com/questions/83311/-The-repository-cannot-be-mounted-at-this-time-because-it-is-being-upgraded-Please-wait-until-the-upgrade-completes-9523",
        note:
          "Laserfiche employee reply recommends checking the Application Event Viewer on the Laserfiche Server for more information.",
      },
    ],
  },
  {
    id: "lf-server-9526-repository-mounting-unmounting",
    code: "9526",
    message: "The repository cannot be mounted at the current time because it is being mounted or unmounted. Please wait until the current operation completes.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche reports that the repository is already mounting or unmounting. Reviewed threads include a confirmed client-side DNS case where using the server IP resolved affected machines.",
    symptoms: [
      "Login or Admin Console access fails with 9526.",
      "The issue may affect only some client machines.",
    ],
    likelyFixes: [
      "Wait for any current mount or unmount operation to finish and retry.",
      "If only some clients fail, test attaching the Laserfiche Client to the server by IP address to isolate DNS issues.",
      "Verify SQL connectivity and the SQL instance name if the repository is being mounted.",
      "If attaching a repository, temporarily test firewall and antivirus behavior between client and server.",
    ],
    notes:
      "The accepted employee answer identifies client-side DNS as one confirmed cause; other reviewed replies are troubleshooting branches.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9526 as repository cannot be mounted because it is being mounted or unmounted.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "The repository cannot be mounted because it is being mounted or unmounted [9526]",
        url: "https://answers.laserfiche.com/questions/77752/The-repository-cannot-be-mounted-at-the-current-time-because-it-is-being-mounted-or-unmounted-Please-wait-until-the-current-operation-completes-9526",
        note:
          "Laserfiche employee accepted answer says the issue was client-side DNS and was resolved by attaching the client with the server IP address.",
      },
    ],
  },
  {
    id: "lf-server-9527-operation-result-not-finished",
    code: "9527",
    message: "The result of the operation cannot be retrieved because the operation has not finished.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "The operation result was requested before the operation completed. A reviewed Web Access 9.1.1 search scenario was identified as a bug fixed in 9.2.",
    symptoms: [
      "Web Access search returns Unknown Error 9527.",
      "The issue appears during searching within folders and subfolders.",
    ],
    likelyFixes: [
      "If using Web Access 9.1.1, upgrade to 9.2 or later.",
      "For other scenarios, collect the full operation details and server logs because the official code is generic.",
    ],
    notes:
      "Laserfiche employee response references SCR 119891 fixed in 9.2.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9527 as operation result not yet available.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Unknown Error 9527",
        url: "https://answers.laserfiche.com/questions/84635/Unknown-Error-9527",
        note: "Laserfiche employee reply says the Web Access issue was fixed in 9.2, SCR 119891.",
      },
    ],
  },
  {
    id: "lf-server-9528-directory-server-connect",
    code: "9528",
    message: "Cannot connect to the Laserfiche Directory Server.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche Server cannot connect to LFDS. Reviewed threads point to LFDS connectivity, cross-domain identity-provider configuration, and user-specific LFDS records.",
    symptoms: [
      "Repository sign-in or adding LFDS users fails with 9528.",
      "Related errors may include 9048 or 9357 when querying Directory Server users or groups.",
    ],
    likelyFixes: [
      "Verify the Laserfiche Server can reach LFDS on the configured host and ports.",
      "Review LFDS identity-provider settings, especially service-account querying across trusted domains.",
      "For effective-rights failures across domains, verify domain trusts, the LFDS host/domain move, service accounts, and whether the LFDS service can query the required domains.",
      "If only one user is affected, recreate or repair the affected user record as a diagnostic step.",
      "Open a support case when LFDS connectivity and identity-provider settings look correct but the error persists.",
    ],
    notes:
      "The strongest reviewed employee response recommends support for a cross-domain LFDS issue; a community-confirmed Version 10 thread reports recreating the user resolved one user-specific case.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9528 as cannot connect to Laserfiche Directory Server.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Cannot connect to Laserfiche Directory Server [9528]",
        url: "https://answers.laserfiche.com/questions/169393/Cannot-connect-to-Laserfiche-Directory-Server-9528",
        note: "Laserfiche employee reply recommends opening a support case for a cross-domain LFDS connectivity issue.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "Cannot connect to the Laserfiche Directory Server. [9528]",
        url: "https://answers.laserfiche.com/questions/181608/Cannot-connect-to-the-Laserfiche-Directory-Server-9528",
        note: "Community follow-up reports recreating the affected user resolved one Version 10 sign-in case.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Cannot View Effective Rights; Directory Server Error",
        url: "https://answers.laserfiche.com/questions/146237/Cannot-View-Effective-Rights-Directory-Server-Error",
        note: "Brianna Blanchard from Laserfiche says cross-domain LFDS placement is supported with correct trusts and recommends Support review the domains, service accounts, and full versions.",
      },
    ],
  },
  {
    id: "lf-server-9536-unexpected-lfds-error",
    code: "9536",
    message: "LFS received an unrecognized or unexpected error from LFDS.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 11", "Version 12"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche Server received an unexpected error from LFDS. Reviewed threads indicate some cases are resolved by updating Directory Server.",
    symptoms: [
      "Viewing documents or Workflow business-process details returns 9536.",
      "The issue may start after a Laserfiche migration or upgrade.",
      "Some service accounts may work while affected user accounts see the error.",
    ],
    likelyFixes: [
      "Update Laserfiche Directory Server to a current maintenance build for the installed major version.",
      "For Version 10.4 environments, review product updates that address LFDS-related 9536 errors.",
      "Compare affected users and groups against a working service account to isolate LFDS identity or group data issues.",
    ],
    notes:
      "Reviewed Answers follow-up reports Directory Server 11.0.2204.1467 resolved one case; another Version 10 thread points back to that update/fix discussion.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9536 as an unexpected LFDS error.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "Error: LFS received an unrecognized or unexpected error from LFDS. [9536]",
        url: "https://answers.laserfiche.com/questions/166318/Error-LFS-received-an-unrecognized-or-unexpected-error-from-LFDS-9536",
        note: "Community follow-up reports upgrading to Directory Server 11.0.2204.1467 resolved the error.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "9536 Error",
        url: "https://answers.laserfiche.com/questions/221061/9536-Error",
        note: "Community reply references the Version 10.4-related fix discussion for 9536.",
      },
    ],
  },
  {
    id: "lf-server-9128-briefcase-import-failed",
    code: "9128",
    message: "The briefcase failed to import",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary: "Official documentation maps 9128 to a failed briefcase import operation.",
    symptoms: [
      "Briefcase import fails with code 9128.",
      "The public docs listing does not provide a specific remediation on the reviewed page.",
    ],
    likelyFixes: [
      "Confirm the briefcase file is intact and compatible with the target repository/version.",
      "Check repository permissions, volume availability, and related import logs.",
      "Search and review Laserfiche Answers before publishing a higher-confidence fix.",
    ],
    notes: "Seeded from official documentation only. Answers research is still needed.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9128 as The briefcase failed to import.",
      },
    ],
  },
  {
    id: "forms-lff500-internal-error",
    code: "LFF500",
    message: "Laserfiche Forms encountered an internal error. Please try again.",
    product: "Forms",
    versions: ["Version 10", "Version 11", "Version 12"],
    confidence: "medium",
    reviewedDate: "2026-06-27",
    summary:
      "A Forms internal error can be triggered by form definition issues such as problematic title markup, but the reviewed source shows this as a broad symptom rather than one single root cause.",
    symptoms: [
      "Opening a Forms instance or submitting a form returns LFF500-InternalError.",
      "The same process may also show related LFF502 service or unexpected-error messages.",
    ],
    likelyFixes: [
      "Open the form in Forms designer, edit the form title, save it, and test the form again.",
      "Remove or simplify HTML or unusual markup from the form title when present.",
      "If the error persists, review Forms logs for the matching request because LFF500 can represent multiple backend failures.",
    ],
    notes:
      "The reviewed Answers thread is community-confirmed and gives a practical workaround, but it does not identify a universal Forms defect.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Laserfiche Forms encountered an internal error. Please try again. [LFF500-InternalError]",
        url: "https://answers.laserfiche.com/questions/125713/Laserfiche-Forms-encountered-an-internal-error-Please-try-again-LFF500InternalError",
        note: "Community replies suggest resaving the form title and checking for HTML tags in the title.",
      },
    ],
  },
  {
    id: "workflow-0232-wf1-0411-wf0-script-assembly-not-authorized",
    code: "0232-WF1 / 0411-WF0",
    message: "Workflow script assembly is not authorized to be run as part of a script.",
    product: "Workflow",
    versions: ["Version 9", "Version 10", "Version 11", "Version 12"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow publishing can fail when scripting is disabled or the referenced assembly is missing from the Workflow Administration Console custom assembly allow-list.",
    symptoms: [
      "Publishing a workflow with a script activity fails with Access denied.",
      "The error cites Laserfiche.Workflow.Activities or another assembly as not authorized and includes [0232-WF1] [0411-WF0].",
      "The same workflow may publish on another Workflow server where the assembly allow-list is configured differently.",
    ],
    likelyFixes: [
      "In Workflow Administration Console, open Security > Scripting and confirm scripting activities are enabled.",
      "Add an exact Custom Assembly List entry for the referenced assembly, including version, culture, and public key token.",
      "If the workflow was copied from another machine, remove and re-add the assembly reference through the Workflow designer wizard instead of only resolving the old DLL path.",
    ],
    notes:
      "A Laserfiche employee first points to scripting configuration; the requester confirmed the final fix was the missing exact custom assembly list entry.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Failed to publish workflow Error code [0232-WF1] [0411-WF0]",
        url: "https://answers.laserfiche.com/questions/111213/Failed-to-publish-workflow-Error-code-0232WF1-0411WF0",
        note: "Laserfiche reply asks whether scripting is enabled; follow-up confirms the custom assembly list needed an exact matching entry.",
      },
    ],
  },
  {
    id: "workflow-0516-wf10-invoke-workflow-not-visible",
    code: "0516-WF10",
    message: "Workflow Activity does not exist.",
    product: "Workflow",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "In Workflow 10.4.1 upgrade scenarios, Invoke Workflow can report that a workflow does not exist when enhanced workflow visibility/security prevents the runtime identity from seeing the target workflow.",
    symptoms: [
      "Invoke Workflow terminates with Workflow Activity does not exist. [0516-WF10].",
      "The issue may affect workflows created after an upgrade while older invoked workflows still run.",
      "The full activity error may show WfsoObjectNotFoundException for the target workflow.",
    ],
    likelyFixes: [
      "Check the full activity errors.log from Workflow Administration Console Monitoring.",
      "Review the target workflow's enhanced security or visibility setting introduced in Workflow 10.4.1.",
      "Ensure the Workflow Server service identity or runtime identity can see and invoke the target workflow.",
    ],
    notes:
      "The reviewed thread identifies Workflow 10.4.1.223 and includes Laserfiche employee guidance to check service identity and the full activity error.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Invoke Workflow - Workflow Activity does not exist 0516-WF10",
        url: "https://answers.laserfiche.com/questions/160646/Invoke-Workflow--Workflow-Activity-does-not-exist-0516WF10",
        note: "Laserfiche reply recommends checking service identity and activity errors.log; requester reports enhanced security visibility was the cause.",
      },
    ],
  },
  {
    id: "directory-server-saml-invalid-token-after-upgrade",
    code: "LFDS-SAML-INVALID-TOKEN",
    message: "Received an invalid or untrusted SAML token.",
    product: "Directory Server",
    versions: ["Version 10", "Version 11", "Version 12"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "After upgrading LFDS-integrated components, SAML login can fail when application registrations or license files are stale or mismatched.",
    symptoms: [
      "LFDS login returns Received an invalid or untrusted SAML token.",
      "The issue may appear after upgrading Laserfiche Server, Web Access, or other LFDS-integrated services.",
    ],
    likelyFixes: [
      "Renew or replace the Laserfiche Server license file used by the upgraded service.",
      "Delete and recreate the affected application registration in Directory Server.",
      "Restart the Laserfiche Server service and the affected web application pool after updating registration and license files.",
    ],
    notes:
      "The reviewed source is a community-confirmed resolution after Laserfiche Support involvement, not a Laserfiche employee public reply.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Upgraded to 10.3 - Now LFDS login gives Received an invalid or untrusted SAML token error",
        url: "https://answers.laserfiche.com/questions/132814/Upgraded-to-103--Now-LFDS-login-gives-Received-an-invalid-or-untrusted-SAML-token-error",
        note: "Requester reports support resolved it by renewing licensing, recreating LFDS registration, and restarting services/app pools.",
      },
    ],
  },
  {
    id: "quick-fields-agent-9013-unidentified-doc-auth",
    code: "9013",
    message: "Permission denied.",
    product: "Quick Fields",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields Agent can finish with permission denied when the session's unidentified-document configuration still uses Windows Authentication while the agent needs Laserfiche Authentication.",
    symptoms: [
      "Quick Fields Agent processes and stores documents but ends with error 9013.",
      "The same Quick Fields session runs successfully when processed manually.",
      "QF Agent service filesystem permissions appear correct.",
    ],
    likelyFixes: [
      "Open the Quick Fields session and check the unidentified-document configuration.",
      "Change that configuration from Windows Authentication to Laserfiche Authentication.",
      "Retest the session through Quick Fields Agent rather than only manual processing.",
    ],
    notes: "The reviewed Answers thread has a Laserfiche employee answer with a confirmed configuration fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "qf agent with error 9013",
        url: "https://answers.laserfiche.com/questions/65539/qf-agent--with-error-9013",
        note: "Alexander Huang from Laserfiche identifies the unidentified-document authentication setting as the cause.",
      },
    ],
  },
  {
    id: "office-integration-lfds-automatic-windows-auth",
    code: "OFFICE-LFDS-WINDOWS-AUTH",
    message:
      "Because your organization is using Laserfiche Directory Server authentication, you cannot use automatic Windows authentication.",
    product: "Office Integration",
    versions: ["Version 11"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Office Integration can show this LFDS authentication message when the repository was attached through a Web Client URL with LFDS SSO instead of the repository server name.",
    symptoms: [
      "One user cannot sign in through Office Integration with Windows Authentication.",
      "The same user can sign in through the Windows Client.",
      "The error says automatic Windows authentication cannot be used because the organization uses Laserfiche Directory Server authentication.",
    ],
    likelyFixes: [
      "Compare the affected user's Office Integration, Windows Client, and WebTools Agent versions with working users.",
      "Check whether Office Integration is connecting through a Web Client URL with LFDS SSO enabled.",
      "Detach the repository in Office Integration and attach it again using the Laserfiche Server/repository server name.",
    ],
    notes:
      "Laserfiche employee guidance identified the likely Web Client URL path; the requester confirmed reconnecting by server name fixed the user.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Office Integration - Cannot Use Windows Auth as LFDS Auth is Configured",
        url: "https://answers.laserfiche.com/questions/226098/Office-Integration--Cannot-Use-Windows-Auth-as-LFDS-Auth-is-Configured",
        note: "Samuel Carson from Laserfiche points to connecting through Web Client with LFDS SSO; requester confirms attaching by server name resolved it.",
      },
    ],
  },
  {
    id: "adminhub-lfah500-internal-error",
    code: "LFAH500",
    message: "Laserfiche Administration Hub encountered an internal error.",
    product: "Administration Hub",
    versions: ["Version 12"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Administration Hub LFAH500 can appear when Admin Hub API calls lose administrator authentication or when a known diagram-related bug is present in earlier Laserfiche 12 builds.",
    symptoms: [
      "Administration Hub displays LFAH500-InternalError.",
      "Admin Hub logs may show Unauthorized for API calls even after logging in as administrator.",
      "Diagram pages may fail with LFAH500 and stack traces in AdminHubLog_w3wp.log.",
    ],
    likelyFixes: [
      "Run Laserfiche.AdminHub.AdminHubUtility.exe from the AdminHub AgentController folder and reconfigure Administration Hub.",
      "Review certificate/FQDN configuration used by Admin Hub and Agent Controller.",
      "Update to Laserfiche 12 Fall 2025 or later when the failure matches the diagram-related bug fixed in Administration Hub 12.0.2509.20365.",
    ],
    notes:
      "Two Laserfiche employee replies identify separate LFAH500 paths: reconfiguration for an unauthorized API scenario and a Laserfiche 12 Fall 2025 fix for a diagram bug.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Administration Hub 12 Error LFAH500-Internal Error",
        url: "https://answers.laserfiche.com/questions/228870/Administration-Hub-12-Error-LFAH500Internal-Error",
        note: "Laserfiche reply points to Admin Hub losing administrator authentication and recommends reconfiguring with AdminHubUtility.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Administration Hub Diagram Error LFAH500",
        url: "https://answers.laserfiche.com/questions/228118/Administration-Hub-Diagram-Error-LFAH500",
        note: "Laserfiche reply says Administration Hub 12.0.2509.20365 includes a fix for related bug 585572.",
      },
    ],
  },
  {
    id: "adminhub-lfah1000-connect-to-lfds",
    code: "LFAH1000",
    message: "Administration Hub cannot connect to LFDS.",
    product: "Administration Hub",
    versions: ["Version 12"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Administration Hub configuration can fail with LFAH1000-ErrorConnectToLFDS while connecting to Directory Server. The reviewed thread documents the symptom but does not include a confirmed fix.",
    symptoms: [
      "Administration Hub configuration reports LFAH1000-ErrorConnectToLFDS.",
      "The issue may appear during a Version 12 upgrade or fresh Administration Hub install.",
      "The service account and configured FQDN may appear correct.",
    ],
    likelyFixes: [
      "Verify the LFDS licensing site, service account, and FQDN used on the Administration Hub configuration page.",
      "Check Administration Hub and LFDS logs for the underlying connection or authentication failure.",
      "No confirmed public fix was posted in the reviewed Answers thread; escalate with logs if configuration checks do not isolate the cause.",
    ],
    notes: "Documented as an unresolved candidate so users can recognize the error and gather the right logs.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Administrator Hub Configuration LFAH1000-ErrorConnectToLFDS",
        url: "https://answers.laserfiche.com/questions/225151/Administrator-Hub-Configuration-LFAH1000ErrorConnectToLFDS",
        note: "Community thread documents the error during Administration Hub Version 12 configuration, but no confirmed resolution is posted.",
      },
    ],
  },
  {
    id: "adminhub-lfah3800-scp-error",
    code: "LFAH3800",
    message: "Laserfiche Administration Hub encountered a SCP error.",
    product: "Administration Hub",
    versions: ["Version 12"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Administration Hub can fail to get the server list when the Admin Hub site cannot establish SSL connections with Agent Controller or the service connection point update fails.",
    symptoms: [
      "Administration Hub cannot get the server list.",
      "Agent Controller logs show LFAH3800-SCPError.",
      "Logs may include The specified domain either does not exist or could not be contacted.",
    ],
    likelyFixes: [
      "Confirm the Agent Controller certificate matches the FQDN configured in the utility.",
      "Check whether the certificate is a wildcard certificate and whether the configured host name matches the certificate subject/SAN.",
      "Review domain connectivity for the service account because the public thread does not include a final confirmed fix.",
    ],
    notes:
      "Laserfiche employee guidance identifies certificate/FQDN mismatch as a likely cause; the later SCP error remained unresolved publicly.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Administration Hub - Cannot get server list",
        url: "https://answers.laserfiche.com/questions/234855/Administration-Hub--Cannot-get-server-list",
        note: "Laserfiche reply says the certificate should match the Agent Controller FQDN configured in the utility.",
      },
    ],
  },
  {
    id: "api-server-http-500-19-repositoryapi",
    code: "HTTP 500.19 / 0x8007000d",
    message: "HTTP Error 500.19 repositoryAPI.",
    product: "API Server",
    versions: ["Version 11"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Repository API can return HTTP 500.19 with 0x8007000d when malformed JSON breaks API Server configuration.",
    symptoms: [
      "Browsing to LFRepositoryAPI in IIS returns HTTP Error 500.19.",
      "The detailed error includes 0x8007000d and points at the API Server web.config path.",
      "The issue may occur after editing appsettings.json.",
    ],
    likelyFixes: [
      "Validate appsettings.json for stray text or malformed JSON.",
      "Remove unexpected text from configuration values, then recycle the API Server application pool.",
      "Compare the edited configuration against a known-good API Server configuration.",
    ],
    notes: "Laserfiche employee answer identified an unexpected cmd string in the JSON as the likely cause in the reviewed case.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "HTTP Error 500.19 repositoryAPI",
        url: "https://answers.laserfiche.com/questions/207235/HTTP-Error-50019--repositoryAPI",
        note: "Samuel Carson from Laserfiche points out malformed JSON in appsettings.json.",
      },
    ],
  },
  {
    id: "import-agent-0x800401f3-ocr-com-class",
    code: "0x800401f3",
    message: "Exception from 0x800401f3 while performing OCR in Import Agent.",
    product: "Import Agent",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Import Agent OCR can fail with COM class string error 0x800401f3 when the Import Agent installation or registered components are damaged.",
    symptoms: [
      "Import Agent throws 0x800401f3 while performing OCR.",
      "The error may be interpreted as a missing or unregistered DLL.",
    ],
    likelyFixes: [
      "Run a repair of the Import Agent installation.",
      "Retest OCR through Import Agent after the repair completes.",
    ],
    notes: "Laserfiche employee reply recommends repairing Import Agent instead of manually hunting for the DLL.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Exception From 0x800401f3 Error in Import Agent",
        url: "https://answers.laserfiche.com/questions/94825/Exception-From-0x800401f3-Error-in-Import-Agent",
        note: "Raymond Cruz from Laserfiche says repairing the Import Agent install should fix the issue.",
      },
    ],
  },
  {
    id: "import-agent-9006-startlist-volume-not-found",
    code: "9006",
    message: "Volume not found.",
    product: "Import Agent",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Import Agent list-file imports can report volume not found when the LST file references a volume or file path incorrectly.",
    symptoms: [
      "Import Agent Startlist returns volume not found. [9006].",
      "Folders may be created, but image files are not placed into the intended entries.",
      "Images may be placed at the root of the volume instead of under the intended target folders.",
    ],
    likelyFixes: [
      "Confirm the volume named in the LST file exists in Administration Console.",
      "Enable Recognize file with LST extensions as list files and verify the profile filter includes .lst.",
      "Set the LST image location to the volume name rather than a folder in the volume when that matches the import format.",
    ],
    notes:
      "Laserfiche employee reply supports the LST-file/profile checks; the requester later confirmed the volume designation was the issue.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Import Agent Startlist, volume not found error [9006]",
        url: "https://answers.laserfiche.com/questions/138657/Import-Agent-Startlist-volume-not-found-error-9006",
        note: "Laserfiche reply recommends checking the LST recognition option and file references; requester resolved the volume designation.",
      },
    ],
  },
  {
    id: "import-agent-9013-folder-create-permission",
    code: "9013",
    message: "Permission denied.",
    product: "Import Agent",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary: "Import Agent error 9013 can indicate the configured user lacks permission to create documents in the target repository folder.",
    symptoms: [
      "Import Agent returns Error Code 9013.",
      "The affected import profile targets a specific repository folder.",
    ],
    likelyFixes: [
      "Check the repository security settings on the target folder.",
      "Confirm the Import Agent connection user has rights to create documents under that folder.",
      "Retest the import with the same profile after adjusting folder security.",
    ],
    notes: "Laserfiche employee reply maps this Import Agent scenario to create-document permissions in the repository.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Import Agent Error Code 9013",
        url: "https://answers.laserfiche.com/questions/177615/Import-Agent-Error-Code-9013",
        note: "Huazhen Liu from Laserfiche says the user does not have permission to create a document under the given folder.",
      },
    ],
  },
  {
    id: "import-agent-file-in-use",
    code: "IMPORT-FILE-IN-USE",
    message: "The process cannot access the file because it is being used by another process.",
    product: "Import Agent",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Import Agent can move documents to the IAError folder when it attempts to import files before another process has finished writing or releasing them.",
    symptoms: [
      "Import Agent reports that the process cannot access the file because it is being used by another process.",
      "Problem documents may land in the IAError folder.",
      "Some failed files may have .LCK extensions.",
    ],
    likelyFixes: [
      "Increase the delay before Import Agent attempts to import newly detected files.",
      "In Import Agent Config, open Profile > Options > Advanced and adjust the New Files timing.",
      "Confirm upstream systems fully finish writing files before Import Agent monitors the folder.",
    ],
    notes:
      "The reviewed thread has Laserfiche employee triage and a community follow-up saying similar issues were fixed by increasing the new-file delay.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "The process cannot access the file because it is being used by another process error when importing documents using Import Agent",
        url: "https://answers.laserfiche.com/questions/160421/The-process-cannot-access-the-file-because-it-is-being-used-by-another-process-error-when-importing-documents-using-Import-Agent",
        note: "Community follow-up recommends increasing the delay before Import Agent imports new files.",
      },
    ],
  },
  {
    id: "weblink-bad-key-dotnet-update",
    code: "WEBLINK-BAD-KEY",
    message: "Caught exception CryptographicException, Message: Bad Key in WebLink.",
    product: "WebLink",
    versions: ["Version 11"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink Bad Key event-log messages can indicate the May 14, 2024 .NET Framework cumulative update reliability issue affecting Laserfiche Web Client and WebLink.",
    symptoms: [
      "WebLink logs Caught exception CryptographicException, Message: Bad Key.",
      "The issue appears around the May 2024 .NET Framework cumulative update or related IIS crash symptoms.",
    ],
    likelyFixes: [
      "Apply the Laserfiche hotfix for the May 2024 .NET Framework update IIS crash issue.",
      "Confirm whether KB1014527 or the relevant support-provided hotfix is installed for the affected environment.",
      "Monitor WebLink event logs after applying the hotfix.",
    ],
    notes: "Laserfiche employee reply identifies the event-log message as part of the .NET Framework update IIS crash issue.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Caught exception CryptographicException, Message: Bad Key in WebLink",
        url: "https://answers.laserfiche.com/questions/221909/Caught-exception-CryptographicException-Message-Bad-Key-in-WebLink",
        note: "Laserfiche employee reply ties Bad Key to the May 2024 .NET Framework update issue; follow-up says KB1014527 helped.",
      },
    ],
  },
  {
    id: "weblink-argument-null-value-cannot-be-null",
    code: "WEBLINK-ARGUMENT-NULL",
    message: "Caught exception ArgumentNullException, Message: Value cannot be null in WebLink.",
    product: "WebLink",
    versions: ["Version 11"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink ArgumentNullException messages were reported after applying a hotfix, but the reviewed thread does not include a confirmed root cause or fix.",
    symptoms: [
      "WebLink logs Caught exception ArgumentNullException, Message: Value cannot be null.",
      "The errors may be noticed after applying a WebLink/Web Client hotfix.",
    ],
    likelyFixes: [
      "Increase Laserfiche event-log size so enough history remains for support review.",
      "Compare timestamps against patch/hotfix installation and related IIS or WebLink errors.",
      "No confirmed public fix was posted in the reviewed Answers thread; escalate with retained logs if it continues.",
    ],
    notes:
      "Laserfiche employee reply gives diagnostic guidance only. This entry is intentionally published as unresolved documentation.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Caught exception ArgumentNullException, Message: Value cannot be null in WebLink",
        url: "https://answers.laserfiche.com/questions/221945/Caught-exception-ArgumentNullException-Message-Value-cannot-be-null-in-WebLink",
        note: "Samuel Carson from Laserfiche recommends increasing Laserfiche event-log size to preserve diagnostic history.",
      },
    ],
  },
  {
    id: "forms-lff4117-failed-to-generate-page",
    code: "LFF4117",
    message: "Failed to generate page.",
    product: "Forms",
    versions: ["Version 10", "Version 11", "Version 12"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Forms can fail to generate a page when PDF generation, SSL Forms-server configuration, or external script loading is misconfigured.",
    symptoms: [
      "Forms returns [LFF4117-FailedToGeneratePage].",
      "The error may appear when sending or rendering a form as a PDF.",
      "A simplified form may reproduce the problem, indicating it is not necessarily tied to custom script.",
    ],
    likelyFixes: [
      "If the failing output is PDF-related, confirm Adobe Reader or the required PDF rendering dependency is installed where needed.",
      "Verify the Primary Forms Server address and SSL setting after upgrades.",
      "Review custom HTML fields and external script references if the error mentions failure to generate HTML.",
    ],
    notes:
      "The reviewed thread includes Laserfiche employee involvement plus community follow-ups with SSL and external-script troubleshooting paths.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Error: [LFF4117-FailedToGeneratePage]",
        url: "https://answers.laserfiche.com/questions/119958/Error-LFF4117FailedToGeneratePage",
        note: "Community follow-ups report fixes involving Primary Forms Server/SSL configuration and external script loading.",
      },
    ],
  },
  {
    id: "workflow-0543-wf0-license-connection",
    code: "0543-WF0",
    message: "The Workflow Server needs a license with the Laserfiche serial as a connection.",
    product: "Workflow",
    versions: ["Version 11"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow can report 0543-WF0 when attaching a repository or configuring Workflow against a server/license model that requires Workflow licensing or updated license files.",
    symptoms: [
      "Workflow Configuration Manager or Workflow Administration Console reports 0543-WF0 while adding a repository.",
      "The message says Workflow Server needs a license with the Laserfiche serial as a connection.",
      "The issue may appear after a reboot or licensing change.",
    ],
    likelyFixes: [
      "Confirm a monitored repository is configured correctly in Workflow Configuration Manager.",
      "Check the Laserfiche Server license type and serial in Administration Console.",
      "Regenerate or update license files for the affected Laserfiche components, including Workflow-related licensing locations.",
    ],
    notes:
      "Laserfiche employee replies point to repository licensing and Laserfiche Server license state; community follow-up mentions updating license file locations.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "The Workflow Server needs a license with The Laserfiche Serial as a connection. [0543-WF0]",
        url: "https://answers.laserfiche.com/questions/207790/The--Workflow-Server-needs-a-license-with-The-Laserfiche-Serial--as-a-connection-0543WF0",
        note: "Laserfiche reply says the error indicates a repository hosted on a Laserfiche Server license model requiring Workflow licensing.",
      },
    ],
  },
  {
    id: "workflow-0700-wf10-invoke-depth",
    code: "0700-WF10",
    message: "The maximum invoke depth has been reached.",
    product: "Workflow",
    versions: ["Version 9", "Version 10", "Version 11", "Version 12"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow Invoke Workflow can fail with 0700-WF10 when the same workflow is invoked repeatedly in a single instance and reaches the built-in recursion/loop guard.",
    symptoms: [
      "Invoke Workflow fails with 0700-WF10.",
      "A related message may say the maximum invoke depth has been reached.",
      "The workflow design invokes the same workflow repeatedly or recursively.",
    ],
    likelyFixes: [
      "Review invoke workflow paths for recursion or loops.",
      "Break recursive designs into a non-recursive pattern or add stop conditions before 32 invocations.",
      "Use the Workflow activity logs to identify the repeated invocation chain.",
    ],
    notes: "Laserfiche employee reply states there is a built-in limit of 32 iterations to protect against infinite loops.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Workflow Error 0700-WF10 with Invoke Workflow Activity",
        url: "https://answers.laserfiche.com/questions/57726/Workflow-Error-0700WF10-with-Invoke-Workflow-Activity",
        note: "Miruna Babatie from Laserfiche identifies the built-in 32-iteration invoke limit.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Failed to invoke workflow WFName the maximum invoke depth has been reached 32 0700WF10",
        url: "https://answers.laserfiche.com/questions/131228/Failed-to-invoke-workflow-WFName-the-maximum-invoke-depth-has-been-reached-32-0700WF10",
        note: "Miruna Babatie from Laserfiche warns that raising the server-wide maximum invoke depth should be handled through Support because it can mask infinite loops.",
      },
    ],
  },
  {
    id: "import-agent-9008-pdf-annotations",
    code: "9008",
    message: "General database error while generating pages from PDF.",
    product: "Import Agent",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Import Agent can report general database error 9008 while generating pages for certain PDFs, with logs pointing to PDF annotation import.",
    symptoms: [
      "Importing PDFs through Import Agent or the client returns General database error. [9008].",
      "Import Agent logs include PdfServices annotation import calls.",
      "The source PDF may contain AutoCAD SHX text or unusual annotations.",
    ],
    likelyFixes: [
      "Check the Laserfiche Server Windows event log for the specific database error behind 9008.",
      "Open a support case and provide the PDF file plus the Import Agent profile when the error is reproducible.",
      "Test whether flattening or regenerating the PDF annotations changes the failure.",
    ],
    notes:
      "Laserfiche employee replies provide diagnostic direction, but the public thread does not include a confirmed fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "PDF import General database error [9008] when generating pages",
        url: "https://answers.laserfiche.com/questions/115078/PDF-import-General-database-error-9008-when-generating-pages",
        note: "Laserfiche replies recommend checking Laserfiche Server event logs and opening a support case with the PDF and Import Agent profile.",
      },
    ],
  },
  {
    id: "import-agent-9045-entry-lock",
    code: "9045",
    message: "The operation cannot complete because an object is locked.",
    product: "Import Agent",
    versions: ["Version 10", "Version 11", "Version 12"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Import Agent can hit 9045 entry-lock errors when downstream Workflow processing starts before Import Agent has fully finished with the document.",
    symptoms: [
      "Import Agent logs error 9045 while importing a file.",
      "Documents may land in an error folder or be created without electronic data.",
      "Workflow may start on document creation and attempt to read/extract text too early.",
    ],
    likelyFixes: [
      "If Workflow depends on pages or text, trigger the workflow on document changes when pages are added instead of initial document creation.",
      "Allow the built-in retry behavior to handle temporary 9045 locks when possible.",
      "Open a support case with Import Agent logs if files still move to the error folder.",
    ],
    notes:
      "Laserfiche employee guidance explains the lock/retry behavior and suggests changing the Workflow start event when text is needed.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Entry Lock when using Import Agent",
        url: "https://answers.laserfiche.com/questions/187456/Entry-Lock-when-using-Import-Agent",
        note: "Miruna Babatie from Laserfiche says 9045 has retry handling and suggests starting Workflow when pages are added.",
      },
    ],
  },
  {
    id: "import-agent-install-media-license-errors",
    code: "IMPORTAGENT-INSTALL-MEDIA",
    message: "Import Agent installer asks to insert disk or cannot read/find the license file.",
    product: "Import Agent",
    versions: ["Version 11"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Import Agent 11 installation can fail from a mounted ISO with insert-disk or license-file read errors; copying the installation files locally resolved the reviewed case.",
    symptoms: [
      "The Import Agent installer prompts to insert disk during OCR engine installation.",
      "The installer reports that it cannot read or find the license file.",
      "The installation media is mounted from an ISO.",
    ],
    likelyFixes: [
      "Copy all files from the mounted ISO to a local folder.",
      "Run the Import Agent installer from the local copied folder.",
      "Keep the license file in an accessible local path during installation.",
    ],
    notes: "Community-confirmed workaround; no Laserfiche employee reply was posted in the reviewed discussion.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Errors when installing Import Agent 11",
        url: "https://answers.laserfiche.com/questions/213402/Errors-when-installing-Import-Agent-11-insert-disk-error-readingfinding-license-file",
        note: "Community reply suggests copying ISO contents to local disk; requester confirmed that fixed the install issue.",
      },
    ],
  },
  {
    id: "weblink-3005-unhandled-exception",
    code: "3005",
    message: "Event code 3005: An unhandled exception has occurred.",
    product: "WebLink",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink can log ASP.NET event code 3005 for unhandled exceptions. The reviewed thread points to IIS logs, customizations, and application-pool mode as troubleshooting paths.",
    symptoms: [
      "WebLink server event logs show Event code 3005 and An unhandled exception has occurred.",
      "Users may not report visible errors even while warnings appear repeatedly.",
      "Stack traces may reference WebLink8.Global.Application_BeginRequest.",
    ],
    likelyFixes: [
      "Find the corresponding IIS log row by timestamp and HTTP 500 status to identify the failing request.",
      "Check whether WebLink code was customized, especially Application_BeginRequest.",
      "Verify IIS application-pool mode and ASP.NET registration for older WebLink/IIS environments.",
    ],
    notes:
      "Laserfiche employee reply provides diagnostic direction. A community reply adds IIS/classic app-pool and ASP.NET registration checks.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Weblink - event code 3005: An unhandled exception has occurred",
        url: "https://answers.laserfiche.com/questions/62498/Weblink--event-code-3005--An-unhandled-exception-has-occurred",
        note: "Brian McKeever from Laserfiche recommends checking the matching IIS log row and customizations.",
      },
    ],
  },
  {
    id: "weblink-compressed-file-corrupt",
    code: "WEBLINK-COMPRESSED-FILE-CORRUPT",
    message: "Compressed file data is invalid or corrupt and cannot be decompressed.",
    product: "WebLink",
    versions: ["Version 9", "Version 10", "Version 11", "Version 12"],
    confidence: "high",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "When WebLink downloads a document and Laserfiche reports compressed file data is corrupt, the root issue is likely the repository volume/file data rather than WebLink itself.",
    symptoms: [
      "Downloading a document through WebLink returns compressed file data is invalid or corrupt.",
      "Only some documents on the same volume may fail.",
      "The volume may use Laserfiche compression.",
    ],
    likelyFixes: [
      "Export the affected file through the Laserfiche client and test whether it opens outside Laserfiche.",
      "Check whether the containing volume is compressed and whether only some files fail.",
      "Open a support case to inspect volume compression/data corruption when only some compressed files fail.",
    ],
    notes:
      "Laserfiche employee replies identify this as a repository/volume compression issue surfaced through WebLink.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Compressed file data is invalid or corrupt and cannot be decompressed",
        url: "https://answers.laserfiche.com/questions/89429/Compressed-file-data-is-invalid-or-corrupt-and-cannot-be-decompressed",
        note: "Brian McKeever from Laserfiche explains that each volume file is compressed separately and support can determine what happened.",
      },
    ],
  },
  {
    id: "weblink-9035-too-many-operations",
    code: "9035",
    message: "The current request could not be performed because there are too many existing operations running.",
    product: "WebLink",
    versions: ["Version 11"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink tile/image requests can log 9035 when too many operations are running. The reviewed source documents the event but does not provide a confirmed public fix.",
    symptoms: [
      "WebLink operational logs show 9035 during TileData.aspx requests.",
      "The stack trace may involve WebLinkControls.Tiling image extraction.",
      "The message reports too many existing operations running.",
    ],
    likelyFixes: [
      "Capture the full WebLink operational log event and request URL for support review.",
      "Check whether the issue clusters around specific documents, pages, annotations, or high-concurrency periods.",
      "No confirmed public fix was posted in the reviewed thread.",
    ],
    notes: "Published as unresolved documentation so administrators can recognize and search the exact WebLink symptom.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "The current request could not be performed because there are too many existing operations running. [9035]",
        url: "https://answers.laserfiche.com/questions/221839/The-current-request-could-not-be-performed-because-there-are-too-many-existing-operations-running-9035",
        note: "Reviewed thread documents WebLink operational log 9035; no confirmed public resolution was captured in this pass.",
      },
    ],
  },
  {
    id: "forms-lff502-unexpected-error",
    code: "LFF502",
    message: "Laserfiche Forms has encountered a problem. Unexpected error.",
    product: "Forms",
    versions: ["Version 10", "Version 11", "Version 12"],
    confidence: "low",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Forms LFF502 is a broad unexpected-error message; the reviewed employee guidance starts with the LFForms Windows event log for the specific backend failure.",
    symptoms: [
      "Submitting a form returns LFF502-UnexpectedError.",
      "The browser may also show HTTP 500.",
      "Restarting the Forms application pool may not resolve the issue.",
    ],
    likelyFixes: [
      "Open Windows Event Viewer on the Forms server.",
      "Check Applications and Services Logs > LFForms for the detailed error.",
      "Use the LFForms event details to determine the component-specific fix or support case evidence.",
    ],
    notes: "Laserfiche employee reply gives the diagnostic starting point, not a specific universal fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Forms 10 error [LFF502-UnexpectedError] when submitting",
        url: "https://answers.laserfiche.com/questions/95210/Forms-10-error-LFF502UnexpectedError-when-submitting",
        note: "Alexander Huang from Laserfiche directs the user to Applications and Services Logs > LFForms.",
      },
    ],
  },
  {
    id: "forms-lff5437-str-error-generate-page",
    code: "LFF5437",
    message: "An error occurred when generating pages for PDFs in a Save to Repository service task.",
    product: "Forms",
    versions: ["Version 11"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Forms Save to Repository can suspend instances with LFF5437-STRErrorGeneratePage while generating PDF pages. The reviewed thread documents the stack but has no confirmed public fix.",
    symptoms: [
      "Forms Monitor shows suspended upload tasks.",
      "The error is LFF5437-STRErrorGeneratePage.",
      "The task is a Save to Repository service task generating pages for PDFs.",
    ],
    likelyFixes: [
      "Capture the Forms stack trace, business process ID, instance ID, and affected document details.",
      "Compare whether only specific uploaded PDFs or all PDFs trigger page-generation failure.",
      "No confirmed public fix was posted in the reviewed thread.",
    ],
    notes: "Published as unresolved documentation because the exact LFF5437 signature is valuable for administrators to recognize.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Laserfiche Forms Error: LFF5437-STRErrorGeneratePage",
        url: "https://answers.laserfiche.com/questions/211554/Laserfiche-Forms-Error-LFF5437STRErrorGeneratePage",
        note: "Reviewed thread documents the LFF5437 Save to Repository page-generation stack in Forms 11.",
      },
    ],
  },
  {
    id: "forms-lff9320-validation-aggregate",
    code: "LFF9320",
    message: "Forms validation aggregate exception.",
    product: "Forms",
    versions: ["Version 12"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Forms can return LFF9320-FormsValidationAggregateException when hidden or rule-controlled required fields still fail validation during submission.",
    symptoms: [
      "Submission reports LFF9320-FormsValidationAggregateException.",
      "The details may include LFF9300-ValueRequired and LFF9312-ErrorOccuredDuringFormsValidation.",
      "The reported required fields may be hidden by form rules.",
    ],
    likelyFixes: [
      "Review field rules and required settings for hidden fields named in the validation error.",
      "Test the same route with field-rule combinations that show and hide the affected fields.",
      "No confirmed public fix was captured in the reviewed thread.",
    ],
    notes: "Published as unresolved documentation for a Version 12 Forms Layout Designer validation signature.",
    sources: [
      {
        sourceType: "answers-community",
        title: "What would cause this LFF9320-FormsValidationAggregateException error?",
        url: "https://answers.laserfiche.com/questions/235981/What-would-cause-this-LFF9320FormsValidationAggregateException-error",
        note: "Community thread documents hidden required fields causing LFF9300/LFF9312/LFF9320 validation errors.",
      },
    ],
  },
  {
    id: "forms-archive-sequence-no-match",
    code: "FORMS-ARCHIVE-SEQUENCE",
    message: "Sequence contains no matching element.",
    product: "Forms",
    versions: ["Version 11", "Version 12"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Forms archive or Save to Laserfiche routing can suspend with Sequence contains no matching element. The reviewed source documents the stack but no confirmed fix.",
    symptoms: [
      "A Forms archive profile verifies successfully but suspends on submission.",
      "The inner exception is System.InvalidOperationException: Sequence contains no matching element.",
      "The stack includes SaveToLaserficheHelper.OpenSessionAndSave or SaveToLaserficheService.Execute.",
    ],
    likelyFixes: [
      "Capture the archive profile, repository configuration, and suspended instance stack trace.",
      "Compare repository/profile IDs against the Save to Laserfiche configuration used by the process.",
      "No confirmed public fix was posted in the reviewed thread.",
    ],
    notes: "Laserfiche employee participation exists in the thread, but the reviewed excerpt does not include a confirmed resolution.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Forms Archive Error: Sequence contains no matching element",
        url: "https://answers.laserfiche.com/questions/221408/Forms-Archive-Error--Sequence-contains-no-matching-element",
        note: "Reviewed thread documents the Forms archive SaveToLaserfiche stack and symptom.",
      },
    ],
  },
  {
    id: "workflow-0650-wf0-condition-entry-deleted",
    code: "0650-WF0",
    message: "The condition entry was deleted.",
    product: "Workflow",
    versions: ["Version 9", "Version 10", "Version 11", "Version 12"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow wait conditions can terminate with 0650-WF0 when the entry being monitored was deleted and possibly restored later.",
    symptoms: [
      "Workflow terminates while waiting for entry changes.",
      "The error says The condition entry was deleted. [0650-WF0].",
      "The entry may still exist by the time administrators inspect it.",
    ],
    likelyFixes: [
      "Check Audit Trail or repository activity logs for delete and restore events on the affected entry.",
      "Review Workflow token logs and subscriber trace logs for the failing Wait activity.",
      "Add error handling around the Wait activity if delete/restore events are expected.",
    ],
    notes:
      "Laserfiche employee explanation and user follow-up confirm delete/restore activity as the cause in the reviewed case.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Workflow Terminating with Error 0650",
        url: "https://answers.laserfiche.com/questions/54725/Workflow-Terminating-with-Error-0650-",
        note: "Ed Heaney from Laserfiche explains delete events trigger the error; requester confirmed Audit Trail showed deletion and restore.",
      },
    ],
  },
  {
    id: "workflow-subscriber-9013-access-denied",
    code: "9013",
    message: "Workflow Subscriber access denied.",
    product: "Workflow",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow Subscriber can log 9013 Access denied when it cannot access the monitored repository or when subscriber configuration/repository identity is inconsistent.",
    symptoms: [
      "Workflows stop triggering from repository events while manual designer runs may still work.",
      "Workflow subscriber_error_log shows Access denied. [9013].",
      "The Windows identity may be Local System or another subscriber service identity.",
    ],
    likelyFixes: [
      "Verify Workflow Subscriber configuration can reach the intended repository.",
      "Check whether another subscriber is connected incorrectly and changed the subscriber account password.",
      "Check whether the repository is a copy with an incorrectly edited unique identifier.",
    ],
    notes:
      "Laserfiche employee reply lists two possible subscriber/repository configuration causes; the public thread does not show one final fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Workflow subscriber error 9013",
        url: "https://answers.laserfiche.com/questions/86218/Workflow-subscriber-error-9013",
        note: "Miruna Babatie from Laserfiche says this can happen with an incorrectly connected second subscriber or copied repository identifier issues.",
      },
    ],
  },
  {
    id: "workflow-0637-wf1-session-reset",
    code: "0637-WF1",
    message: "The session has been reset by the server.",
    product: "Workflow",
    versions: ["Version 9"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow Subscriber can report 0637-WF1 when the server resets the session while retrieving subscriber profile data. The reviewed thread documents the stack but no confirmed fix.",
    symptoms: [
      "Workflow and Workflow Subscriber services must be restarted periodically.",
      "Event Viewer logs WorkflowConnectionResetException.",
      "The message says The session has been reset by the server. [0637-WF1].",
    ],
    likelyFixes: [
      "Capture the full Workflow Subscriber exception and timing of service restarts.",
      "Review monitored repository connection and subscriber profile configuration.",
      "No confirmed public fix was captured in the reviewed thread.",
    ],
    notes: "Published as unresolved documentation for a Workflow Subscriber reset signature.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "The session has been reset by the server. [0637-WF1]",
        url: "https://answers.laserfiche.com/questions/106147/The-session-has-been-reset-by-the-server-0637WF1",
        note: "Reviewed thread documents the Workflow Subscriber 0637-WF1 stack.",
      },
    ],
  },
  {
    id: "workflow-2343-installer-iis",
    code: "2343",
    message: "Workflow installer specified path is empty.",
    product: "Workflow",
    versions: ["Version 11"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow 11 Designer/Admin Console installer error 2343 was tied to IIS not being installed and later addressed by Workflow 11 Update 1.",
    symptoms: [
      "Workflow 11 desktop component installation fails and rolls back.",
      "MSI logs show DEBUG: Error 2343: Specified path is empty.",
      "The failure references ChangeDir or registry value setup during install.",
    ],
    likelyFixes: [
      "Install Laserfiche Workflow 11 Update 1 or later.",
      "As a workaround for affected installers, install IIS on PCs that need Workflow Designer installed.",
      "Collect logs from the temp Laserfiche install Workflow folder if installation still fails.",
    ],
    notes:
      "Laserfiche employee reply identifies missing IIS as the cause and bug 312607; the selected answer points to Workflow 11 Update 1.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Workflow 11 Installation Setup Error Code 2343",
        url: "https://answers.laserfiche.com/questions/185188/Workflow-11-Installation-Setup-Error-Code-2343",
        note: "Alexander Huang from Laserfiche says the issue appears caused by not having IIS installed and was filed as bug 312607.",
      },
    ],
  },
  {
    id: "workflow-2147467259-not-responsive",
    code: "2147467259",
    message: "Workflow not responsive / Error sending HTTP request to server.",
    product: "Workflow",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow 10.4 can log generic error 2147467259 with Error sending HTTP request to server when an otherwise valid workflow does not trigger as expected.",
    symptoms: [
      "A published workflow validates but does not trigger from repository events.",
      "Workflow logs show Error Code 2147467259 or Error sending HTTP request to server.",
      "Older similar workflows may still run normally.",
    ],
    likelyFixes: [
      "Capture Workflow service logs for the affected workflow and activity name.",
      "Compare rule manager conditions and monitored repository configuration against working workflows.",
      "No confirmed public fix was captured in the reviewed thread.",
    ],
    notes: "Published as unresolved documentation for a generic but searchable Workflow error signature.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Workflow not responsive, Error Code 2147467259",
        url: "https://answers.laserfiche.com/questions/212850/Workflow-not-responsive-Error-Code-2147467259",
        note: "Reviewed thread documents the Workflow 10.4 activity stack and non-triggering symptom.",
      },
    ],
  },
  {
    id: "weblink-http-503-session-null",
    code: "HTTP 503 / WEBLINK-SESSION-NULL",
    message: "WebLink returns HTTP 503 or logs Value cannot be null for a disconnected session.",
    product: "WebLink",
    versions: ["Version 11"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink can go offline with HTTP 503 or log TileData.aspx session-null exceptions. Laserfiche employee guidance distinguishes an older WebLink 10 listing bug from Version 11 inactive-session tile requests.",
    symptoms: [
      "WebLink portal returns HTTP 503 until the WebLink application pool is reset.",
      "Laserfiche-Portal-Server logs Event ID 14 with WebLink.LFDSHelper.DisableLFDSConfigurations or TileData.aspx stack traces.",
      "A later event may include ArgumentNullException, parameter name session, after a user leaves a page inactive.",
    ],
    likelyFixes: [
      "Confirm the exact WebLink build and whether the issue matches the WebLink 10 long-listing bug fixed in WebLink 11.",
      "For Version 11 inactive-page TileData.aspx session-null events, capture reproducible steps before opening a support case.",
      "If the issue is only an event-log warning after an inactive session disconnects, document and monitor it rather than treating it as a portal outage.",
    ],
    notes:
      "The reviewed thread has Laserfiche employee guidance but no confirmed public fix for the repeated Version 11 HTTP 503 outage scenario.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "WebLink experiencing Error HTTP 503",
        url: "https://answers.laserfiche.com/questions/230484/WebLink-experiencing-Error-HTTP-503",
        note: "Rui Deng from Laserfiche says one similar WebLink 10 issue was fixed in WebLink 11 and that the later session-null tile event can occur after an inactive disconnected session.",
      },
    ],
  },
  {
    id: "weblink-missing-random-tiles-http-500",
    code: "HTTP 500 / WEBLINK-MISSING-TILES",
    message: "WebLink missing random tiles when viewing documents.",
    product: "WebLink",
    versions: ["Version 11"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink 11 can intermittently fail TileData.aspx requests with HTTP 500 and missing page tiles. Community follow-up reports Laserfiche Support identified a known bug and provided an updated WeblinkControls.dll.",
    symptoms: [
      "Document pages display missing tiles after viewing several documents.",
      "Browser developer tools show HTTP 500 responses from TileData.aspx.",
      "The issue was reported on WebLink 11 Update 5 and persisted for at least one user on Update 6.",
    ],
    likelyFixes: [
      "Apply current WebLink 11 updates, backing up configuration and customizations with WebLink Settings Bundler first.",
      "If the issue persists on Update 6, have the Solution Provider open a Laserfiche Support case for the known WebLink 11 tile bug.",
      "As a temporary workaround, some administrators schedule a stop and start of the WebLink application pool, after validating user impact.",
    ],
    notes:
      "The support-provided DLL fix is reported by a community/VAR follow-up, while Laserfiche employee replies in the public thread discuss update sequencing and configuration backups.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Weblink missing random tiles when viewing documents",
        url: "https://answers.laserfiche.com/questions/232843/Weblink-missing-random-tiles-when-viewing-documents",
        note: "Laserfiche reply recommends WebLink Update 6, explains it is not cumulative, and recommends backing up configuration/customizations before upgrade work.",
      },
    ],
  },
  {
    id: "weblink-404-17-iis-app",
    code: "HTTP 404.17",
    message: "WebLink returns IIS 404.17.",
    product: "WebLink",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink 9 on newer IIS can return 404.17 when the IIS application name, app pool runtime, or required component setup is wrong.",
    symptoms: [
      "Browsing the WebLink IIS application returns 404.17.",
      "The environment is a moved or recreated WebLink directory on Windows Server 2012 R2/IIS.",
      "The application path or name may include spaces.",
    ],
    likelyFixes: [
      "Create WebLink as an IIS application with a name that does not contain spaces.",
      "Set the WebLink application pool to the .NET runtime required by that WebLink version.",
      "Apply the Laserfiche knowledge-base component referenced by the Laserfiche employee reply when the login error remains.",
    ],
    notes: "Laserfiche employee replies provide IIS application naming, app-pool runtime, and missing-component checks.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Weblink 404.17 error",
        url: "https://answers.laserfiche.com/questions/79371/Weblink-40417-error",
        note: "Alexander Huang recommends recreating the IIS app without spaces; Raymond Cruz recommends checking the app pool runtime and missing component KB.",
      },
    ],
  },
  {
    id: "weblink-read-only-named-user-9030",
    code: "9030",
    message: "WebLink read-only named user login returns no license available.",
    product: "WebLink",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink auto-login with a read-only named user can return 9030 in a concurrent-license Avante environment. The reviewed thread documents the symptom but does not include a confirmed public resolution.",
    symptoms: [
      "WebLink is configured for Auto-Login with Laserfiche Credentials using a named account.",
      "Accessing WebLink returns error 9030.",
      "The environment does not use LFDS and has concurrent licensing.",
    ],
    likelyFixes: [
      "Verify the WebLink connection profile account and repository licensing model.",
      "Confirm whether the selected account type is valid for WebLink public/read-only access in that licensing model.",
      "No confirmed public fix was posted in the reviewed thread.",
    ],
    notes: "Published as unresolved so administrators can recognize this WebLink-specific 9030 scenario.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Weblink-Read Only Named User Account getting 9030 Error",
        url: "https://answers.laserfiche.com/questions/200366/WeblinkRead-Only-Named-User-Account-getting-9030-Error",
        note: "Thread documents WebLink Version 10 auto-login 9030 with no public confirmed resolution.",
      },
    ],
  },
  {
    id: "weblink-auto-login-9013",
    code: "9013",
    message: "WebLink users get Access Denied.",
    product: "WebLink",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink users can get Access Denied 9013 in an Auto Login to Windows configuration. The reviewed thread is product-specific but does not publish a confirmed fix.",
    symptoms: [
      "Access Denied 9013 appears only through WebLink.",
      "The WebLink site uses Auto Login to Windows.",
      "The environment is licensed for Public Portal for Single Public Access.",
    ],
    likelyFixes: [
      "Verify the WebLink identity, repository permissions, and auto-login configuration used by the site.",
      "Compare Windows-authentication and Laserfiche-authentication behavior for the same repository path.",
      "No confirmed public fix was posted in the reviewed thread.",
    ],
    notes: "Published as unresolved documentation because it is a searchable WebLink-specific access-denied scenario.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Weblink: Users getting Access Denied 9013 error",
        url: "https://answers.laserfiche.com/questions/181979/Weblink-Users-getting-Access-Denied-9013-error",
        note: "Thread documents WebLink Version 10 auto-login 9013 with no public confirmed resolution.",
      },
    ],
  },
  {
    id: "forms-lff3004-autotrigger-service-proxy",
    code: "LFF3004",
    message: "The requested service (IAutoTrigger) may not be running.",
    product: "Forms",
    versions: ["Version 10", "Version 11"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Forms save or routing operations can report LFF3004 when Forms cannot open an auto-trigger/routing service proxy. A community-confirmed fix involved correcting the Workflow monitored repository connection.",
    symptoms: [
      "Saving a form or changing publish status reports The requested service (IAutoTrigger) may not be running.",
      "The error includes [LFF3004-UnableToOpenServiceProxy].",
      "Related environments may also report Workflow licensing or monitored-repository configuration issues.",
    ],
    likelyFixes: [
      "Restart the Forms Routing Service and check whether the error returns.",
      "Open Workflow Configuration Manager and review Monitored Repositories.",
      "Remove and re-add the repository using the correct server URL/name, then retest Forms routing.",
    ],
    notes:
      "The confirmed fix is from a community follow-up, not a Laserfiche employee public answer. A related thread links LFF3004 with LFF706 after Forms 11 upgrades.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Forms 10 error The requested service (IAutoTrigger) may not be running.",
        url: "https://answers.laserfiche.com/questions/87831/Forms-10-error-The-requested-service-IAutoTrigger-may-not-be-running",
        note: "Community follow-up reports resolving it by removing and re-adding the monitored repository in Workflow Configuration Manager using the server URL.",
      },
    ],
  },
  {
    id: "forms-lff706-unable-to-trigger-routing",
    code: "LFF706",
    message: "Unable to trigger routing.",
    product: "Forms",
    versions: ["Version 11"],
    confidence: "low",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Forms can report LFF706 while editing variables in an in-progress instance when the Forms IIS application cannot connect to the Forms Routing Service.",
    symptoms: [
      "Editing variables on an in-progress Forms instance fails.",
      "The UI says Forms must be configured properly and suggests restarting the Forms Routing Service.",
      "Restarting the routing service may not immediately resolve the issue.",
    ],
    likelyFixes: [
      "Check the lfrouting endpoint in Forms/Web.config on the Forms IIS server.",
      "Confirm the Forms IIS app and Forms Routing Service are using the expected server and net.tcp port.",
      "Check for port conflicts and open a support case if the endpoint configuration looks correct.",
    ],
    notes: "Laserfiche employee guidance provides connection and endpoint checks but no final confirmed resolution was posted.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Forms 11- Trying to edit Variables in an In Progress Forms instance throws [LFF706-UnableToTriggerRouting] error",
        url: "https://answers.laserfiche.com/questions/201552/Forms-11-Trying-to-edit-Variables-in-an-In-Progress-Forms-instance-throws-LFF706UnableToTriggerRouting-error",
        note: "Ziyan Chen from Laserfiche says the Forms IIS server cannot connect to the Forms Routing Service and recommends checking the lfrouting endpoint.",
      },
    ],
  },
  {
    id: "forms-routing-service-not-listening",
    code: "FORMS-ROUTING-NOT-LISTENING",
    message: "Forms Routing Service is running but not listening on its port.",
    product: "Forms",
    versions: ["Version 10", "Version 11", "Version 12"],
    confidence: "high",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Forms routing-service listener failures should be investigated through the shared LFForms event channels plus Windows Application/System logs; repair or reinstall can reset listener and URL ACL state.",
    symptoms: [
      "Forms IIS logs indicate the Routing Service is not listening.",
      "The Windows service remains running, but netstat does not show the expected listener.",
      "Unable-to-trigger-routing errors may cluster after the listener disappears.",
    ],
    likelyFixes: [
      "Check Applications and Services Logs > Laserfiche > Forms > App > Admin and Operational.",
      "Differentiate Routing Service events from IIS app events by the User field when default identities are used.",
      "Check Windows Application and System logs for port, permission, or service warnings.",
      "Reboot first; if standalone Forms still cannot register listeners, repair the Forms installation before manually changing port listeners or URL ACLs.",
    ],
    notes: "Laserfiche employee answer clarifies logging locations and recommends repair/reinstall as a safer reset path.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Forms Routing Service Error Log Location?",
        url: "https://answers.laserfiche.com/questions/206162/Forms-Routing-Service-Error-Log-Location",
        note: "Samuel Carson from Laserfiche says both Routing Service and IIS app write to LFForms App/Admin and App/Operational, and suggests reboot/repair/reinstall for listener reset.",
      },
    ],
  },
  {
    id: "forms-http-500-19-0x800700b7",
    code: "HTTP 500.19 / 0x800700b7",
    message: "Forms returns HTTP Error 500.19 with error code 0x800700b7.",
    product: "Forms",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Forms can fail immediately after installation with IIS HTTP 500.19 and 0x800700b7. The reviewed thread documents the symptom but only points to support escalation.",
    symptoms: [
      "Forms application fails to run after installation.",
      "IIS displays HTTP Error 500.19 with error code 0x800700b7.",
      "Microsoft duplicate-reference guidance does not reveal an obvious duplicate in the attached web configuration.",
    ],
    likelyFixes: [
      "Review the IIS detailed error and Forms web.config for duplicate or invalid configuration sections.",
      "Collect the Forms web.config and IIS detailed error screenshot for a support case.",
      "No confirmed public fix was posted in the reviewed Answers thread.",
    ],
    notes: "Laserfiche employee reply recommends opening a support case; this entry is included for recognition and evidence gathering.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Forms HTTP error 500.19/Error code: 0x800700b7",
        url: "https://answers.laserfiche.com/questions/157969/Forms-HTTP-error-50019Error-code-0x800700b7",
        note: "Jared Rechnitz from Laserfiche recommends opening a support case for troubleshooting.",
      },
    ],
  },
  {
    id: "weblink-6502-lfe-shortcut",
    code: "6502",
    message: "Unable to find the specified Laserfiche repository.",
    product: "WebLink",
    versions: ["Version 9", "Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Error 6502 can appear when a user tries to open a .lfe Laserfiche Client shortcut through Web Access/WebLink instead of through the installed Windows Client.",
    symptoms: [
      "Opening a Laserfiche .lfe shortcut from email returns 6502.",
      "The shortcut does not open in Web Access or WebLink.",
      "OWA may strip XML data from .lfe attachments, leaving the shortcut empty.",
    ],
    likelyFixes: [
      "Use Web Access/Web Client URLs for browser links instead of .lfe files.",
      "Install and use the Windows Client for .lfe shortcuts.",
      "If .lfe files are sent through Outlook Web App, allow .xml and .lfe attachment content in the mailbox policy.",
    ],
    notes: "Laserfiche employee replies clarify that .lfe files are Windows Client shortcuts and provide the OWA attachment-policy path.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "I am getting an error code 6502",
        url: "https://answers.laserfiche.com/questions/50156/I-am-getting-an-error-code-6502",
        note: "Laserfiche replies say .lfe files require the Windows Client and Web Access links should be URLs; OWA may strip XML data from .lfe attachments.",
      },
    ],
  },
  {
    id: "full-text-search-io-1117-flush-failed",
    code: "FTS-IO-1117",
    message: "The search engine encountered an internal error.",
    product: "Full Text Search",
    versions: ["Version 10", "Version 11", "Version 12"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink and other clients can surface a search-engine internal error when Full Text Search cannot write to index files, including Error 1117 I/O device failures.",
    symptoms: [
      "Searches in WebLink return The search engine encountered an internal error.",
      "Search Engine logs show failed flush operations for SEARCH index files.",
      "The detailed error may include Error 1117: The request could not be performed because of an I/O device error.",
    ],
    likelyFixes: [
      "Restart the Laserfiche Full Text Search service to clear the immediate failure.",
      "Check antivirus, backup, storage, and disk I/O health for the SEARCH folder.",
      "Exclude the Full Text Search index folder from backup/AV operations if they interfere; the index can be regenerated from repository data.",
    ],
    notes: "The selected answer is community-confirmed rather than a Laserfiche employee public reply.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "The search engine encountered an internal error. Please check the search engine error log for more details.",
        url: "https://answers.laserfiche.com/questions/159034/The-search-engine-encountered-an-internal-error-Please-check-the-search-engine-error-log-for-more-details",
        note: "Community answer attributes the issue to the full text engine being unable to write to the index folder and suggests service restart and AV/backup exclusions.",
      },
    ],
  },
  {
    id: "full-text-search-9479-offline",
    code: "9479",
    message: "Error connecting to the search engine.",
    product: "Full Text Search",
    versions: ["Version 9", "Version 10", "Version 11", "Version 12"],
    confidence: "high",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink search error 9479 usually indicates that Laserfiche Full Text Search is stopped, unreachable, or misconfigured rather than a WebLink-only failure.",
    symptoms: [
      "WebLink search returns Error connecting to the search engine. [9479].",
      "The same text-search failure may also appear in the Windows Client or other applications.",
      "Some users may also lack search feature rights.",
    ],
    likelyFixes: [
      "Verify the Laserfiche Full Text Search service is installed and running.",
      "Check the repository search-engine connection settings.",
      "If only some users are affected, check their Assigned Feature Rights for search.",
    ],
    notes: "Laserfiche employee guidance states the error is not WebLink-specific and starts with LFFTS service state.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Unable to search useing Weblink",
        url: "https://answers.laserfiche.com/questions/83807/Unable-to-search-useing-Weblink",
        note: "Brian McKeever from Laserfiche says the LFFTS service is likely stopped and the error should occur from any text-searching application.",
      },
    ],
  },
  {
    id: "weblink-9-lost-connection-tiles",
    code: "WEBLINK-LOST-CONNECTION",
    message: "A lost connection condition has been detected.",
    product: "WebLink",
    versions: ["Version 9"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink 9 can show lost-connection prompts and broken tiles for specific files. The reviewed thread only identifies where to find WebLink event logs.",
    symptoms: [
      "Some WebLink documents show broken tile images.",
      "The browser reports A lost connection condition has been detected.",
      "The issue can happen immediately on load and only for certain files.",
    ],
    likelyFixes: [
      "Check Applications and Services Logs > Laserfiche > Portal for WebLink events.",
      "Compare failing documents against working documents for annotations, page count, image type, and permissions.",
      "No confirmed public fix was posted in the reviewed thread.",
    ],
    notes: "Published as unresolved because the thread provides a useful WebLink log location but no confirmed fix.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Weblink 9 - random tiles not loading, connection error",
        url: "https://answers.laserfiche.com/questions/216301/Weblink-9--random-tiles-not-loading-connection-error",
        note: "Community reply points to Applications and Services Logs > Laserfiche > Portal for WebLink events.",
      },
    ],
  },
  {
    id: "weblink-9091-search-url",
    code: "9091",
    message: "Unexpected end-of-file or end-of-input in WebLink search URL.",
    product: "WebLink",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink 10.2 can return 9091 for encoded search URLs that worked in earlier versions. The reviewed thread does not include a confirmed product fix.",
    symptoms: [
      "A previously working WebLink search.aspx URL returns 9091 after upgrade.",
      "The message says an end-of-file or end-of-input was encountered unexpectedly.",
      "The URL contains an encoded searchcommand parameter.",
    ],
    likelyFixes: [
      "Rebuild the same search in WebLink 10.2 and compare the generated URL.",
      "Confirm repository/dbid parameters and URL encoding match the new WebLink-generated format.",
      "No confirmed public fix was posted in the reviewed thread.",
    ],
    notes: "Laserfiche employee reply gives a comparison step; the public thread ends without a confirmed fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Weblink Error 9091",
        url: "https://answers.laserfiche.com/questions/170443/Weblink-Error-9091",
        note: "Samuel Carson from Laserfiche recommends rebuilding the search from scratch in WebLink 10.2 and comparing URLs.",
      },
    ],
  },
  {
    id: "weblink-500-19-config-utility",
    code: "HTTP 500.19 / 0x800700b7",
    message: "WebLink HTTP 500.19 or Object reference error.",
    product: "WebLink",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink 8.2.2 configuration pages can return HTTP 500.19 and object-reference errors when IIS/default-document configuration is inconsistent; running WebLink Configuration Utility resolved the reviewed case.",
    symptoms: [
      "Opening /weblink8/ returns HTTP 500.19 with 0x800700b7.",
      "Removing a duplicate Welcome.aspx default-document entry leads to Object reference not set.",
      "The public-facing WebLink site may still load while configuration pages fail.",
    ],
    likelyFixes: [
      "Review IIS default-document duplication and the WebLink web.config entry identified in the detailed IIS error.",
      "Run the WebLink Configuration Utility for the affected public WebLink/WebLink8 site.",
      "If reinstalling does not clear it, open a support case with the IIS detailed error and WebLink event entry.",
    ],
    notes: "Laserfiche employee follow-up says the case was resolved through the WebLink configuration utility.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Weblink HTTP error 500.19/Object reference error",
        url: "https://answers.laserfiche.com/questions/64586/Weblink-HTTP-error-50019Object-reference-error",
        note: "Raymond Cruz from Laserfiche reports the 500.19 issue was resolved by going through the WebLink configuration utility.",
      },
    ],
  },
  {
    id: "weblink-child-request-browse-rights",
    code: "WEBLINK-CHILD-REQUEST",
    message: "Error Executing Child Request for /Weblink/DocView.aspx.",
    product: "WebLink",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Direct WebLink DocView links can fail with Error Executing Child Request when the public or auto-login account has Read but lacks Browse rights needed to discover the target entry.",
    symptoms: [
      "Certain direct WebLink links fail after migration.",
      "The error names /Weblink/DocView.aspx.",
      "Adding Browse permissions allowed the links to work in the reviewed case.",
    ],
    likelyFixes: [
      "Grant the WebLink public/auto-login account Browse rights where direct links must resolve documents or folders.",
      "Verify Read and Browse on the target entry and necessary parent/child locations.",
      "Retest the same direct DocView URL after permission changes.",
    ],
    notes: "The accepted answer clarifies why Browse can matter even when Read is present.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Weblink- Error Executing Child request-Login",
        url: "https://answers.laserfiche.com/questions/168358/Weblink-Error-Executing-Child-requestLogin",
        note: "Community answer explains Browse gives the right to see whether a folder or document exists; requester confirmed Browse fixed the links.",
      },
    ],
  },
  {
    id: "weblink-page1-single-search-result",
    code: "WEBLINK-PAGE1",
    message: "WebLink Page1.aspx error after a single search result.",
    product: "WebLink",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "WebLink 8.2.2 can error on Page1.aspx when a search URL returns exactly one image-document result and WebLink opens the viewer automatically.",
    symptoms: [
      "Search URLs returning one hit redirect to Page1.aspx and then Error.aspx.",
      "The same search pattern works when it returns multiple results.",
      "Export to PDF and print may also fail for the same WebLink site.",
    ],
    likelyFixes: [
      "Compare a working multi-result URL with the failing single-result URL and capture matching IIS log rows.",
      "Check whether the returned item is image pages or an electronic document.",
      "As a test, set AllowImageEnable=false on the WebLink search results browser control and retest.",
      "Open a support case if no more detailed event-log message is available.",
    ],
    notes: "Laserfiche employee reply frames this as not search-related and asks for document type and event details.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "WebLink8.2.2 Page1.aspx error",
        url: "https://answers.laserfiche.com/questions/68657/WebLink822-Page1aspx-error",
        note: "Laserfiche reply says the issue is not related to searching; community workaround suggests disabling image opening in Search.aspx.",
      },
    ],
  },
  {
    id: "api-server-powerautomate-file-not-found",
    code: "API-FILE-NOT-FOUND",
    message: "Invalid Request. Property file not found in the request body.",
    product: "API Server",
    versions: ["Version 11", "Version 12"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Self-hosted API Server document import from Power Automate can fail when the multipart request body does not send the uploaded file part in the expected shape.",
    symptoms: [
      "API calls from Power Automate can download and browse entries but fail when uploading documents.",
      "The API response says Invalid Request. Property file not found in the request body.",
      "The same upload may work from Postman.",
    ],
    likelyFixes: [
      "Confirm the multipart file part includes a filename with the correct extension.",
      "Compare the Power Automate multipart body with Laserfiche's Power Automate API guide and a working Postman request.",
      "Verify the file part name and request metadata part match the API upload endpoint requirements.",
    ],
    notes: "Laserfiche employee replies point to multipart filename/content-disposition and the Power Automate API guide.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "API Call from PowerAutomate to self hosted API Server returns error",
        url: "https://answers.laserfiche.com/questions/222083/API-Call-from-PowerAutomate-to-self-hosted-API-Server-returns-error",
        note: "Laserfiche replies recommend checking filename extension in Content-Disposition and following the Power Automate upload guide.",
      },
    ],
  },
  {
    id: "forms-dcom-old-lf-server",
    code: "DCOM-OLD-SERVER",
    message: "DCOM was unable to communicate with an old Laserfiche server.",
    product: "Forms",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Forms user sync or routing activity can log DCOM communication attempts to an old Laserfiche Server after a server move, suggesting stale Forms database or configuration references.",
    symptoms: [
      "Forms user sync spins or hangs.",
      "System logs show DCOM was unable to communicate with an old server IP or name.",
      "Forms Config appears pointed at the new Laserfiche Server.",
    ],
    likelyFixes: [
      "Confirm the Routing Service configuration file points at the correct Forms database.",
      "Check the Forms database cf_lfdb table for the expected lf_server value.",
      "Restart the Forms Routing Service after changing the Laserfiche Server used by Forms.",
      "Try configuring the Laserfiche Server by IP address on the FormsConfig page as a diagnostic step.",
    ],
    notes: "Laserfiche employee replies provide configuration checks but the public thread does not show one universal final fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "DCOM was unable to communicate with the computer x.x.x.x",
        url: "https://answers.laserfiche.com/questions/123014/DCOM-was-unable-to-communicate-with-the-computer-xxxx",
        note: "Rui Deng from Laserfiche recommends checking Routing Service database settings, cf_lfdb, Forms Config, and restarting Routing Service.",
      },
    ],
  },
  {
    id: "forms-dmz-submission-recovery",
    code: "FORMS-DMZ-SUBMISSION-RECOVERY",
    message: "Forms DMZ submissions need recovery after internal server outage.",
    product: "Forms",
    versions: ["Version 10", "Version 11"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Forms DMZ submissions during an internal Forms outage can be recovered from RoutingError files before Forms 11 or from submission_recovery table rows in Forms 11.",
    symptoms: [
      "Anonymous/public submissions were accepted on the DMZ Forms server while the internal server was down.",
      "Submissions do not appear in the internal Forms instance after service recovery.",
      "The deployment uses the high-security two Forms servers/two SQL servers variation.",
    ],
    likelyFixes: [
      "For Forms versions before 11, copy files from C:\\ProgramData\\Laserfiche Forms\\RoutingError on the DMZ machine to the internal Forms machine and restart Routing Service.",
      "For Forms 11, copy date_saved, unique_id, and xml_content rows from the DMZ submission_recovery table into the internal database submission_recovery table.",
      "Let the internal Forms Routing Service process the recovery items automatically.",
    ],
    notes: "Laserfiche employee answer was confirmed by the requester.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Forms DMZ Submissions - Failed Submission Handling",
        url: "https://answers.laserfiche.com/questions/193432/Forms-DMZ-Submissions--Failed-Submission-Handling",
        note: "Xiuhong Xiang from Laserfiche provides version-specific DMZ recovery steps; requester confirmed it worked.",
      },
    ],
  },
  {
    id: "forms-internal-error-log-location",
    code: "FORMS-INTERNAL-ERROR",
    message: "Laserfiche Forms has encountered an internal error.",
    product: "Forms",
    versions: ["Version 9", "Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Generic Forms internal errors during submit require checking the version-specific Forms Windows event logs at the same timestamp.",
    symptoms: [
      "Submitting a form displays Laserfiche Forms has encountered an internal error. Please try again.",
      "The browser error does not identify a cause.",
      "The issue may be tied to email/submission handling in the process.",
    ],
    likelyFixes: [
      "For Forms 9.2.1 or earlier, check Windows Logs > Application on the Forms server.",
      "For Forms 10, check Applications and Services Logs > LFForms.",
      "Use the matching timestamp to find the detailed backend error before changing the process.",
    ],
    notes: "The requester reports the issue was resolved with VAR help, but the public thread does not include the final root cause.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Forms email error",
        url: "https://answers.laserfiche.com/questions/96085/Forms-email-error",
        note: "Alexander Huang from Laserfiche gives version-specific Forms event-log locations for internal submit errors.",
      },
    ],
  },
  {
    id: "forms-lff2105-form-loading",
    code: "LFF2105",
    message: "An error occurred while retrieving your form.",
    product: "Forms",
    versions: ["Version 10", "Version 11"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Forms LFF2105 is a public-facing form loading error that intentionally hides details; Forms 11 added more detailed event logging for troubleshooting.",
    symptoms: [
      "Public users see An error occurred while retrieving your form.",
      "Event Viewer logs LFF2105-FormLoadingError.",
      "The issue may clear after a period of time without an obvious public-facing explanation.",
    ],
    likelyFixes: [
      "If reproducible, open the same form as an authenticated user to get a more detailed error.",
      "Check Forms event logs for detailed form-loading errors, especially in Forms 11 and later.",
      "If using an older build with insufficient logging, collect timestamps and open a support case.",
    ],
    notes: "Laserfiche employee replies say detail logging was added in Forms 11.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "LFF2105-FormLoadingError",
        url: "https://answers.laserfiche.com/questions/182051/LFF2105FormLoadingError",
        note: "Ziyan Chen explains the public message is intentionally general; Xiuhong Xiang later says detail logging was added in Forms 11.",
      },
    ],
  },
  {
    id: "forms-lff502-event-viewer",
    code: "LFF502",
    message: "An unexpected error has occurred.",
    product: "Forms",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Forms LFF502 during process execution is a generic wrapper; Laserfiche employee guidance starts with the LFForms event log and the detailed exception trace.",
    symptoms: [
      "A process result displays An unexpected error has occurred. [LFF502-UnexpectedError].",
      "Lookup rules and validation may pass before the process fails.",
      "The same process may still save to the repository while showing a Forms problem message.",
    ],
    likelyFixes: [
      "Use Windows Event Viewer on the Forms server, under Applications and Services Logs > LFForms, to find the matching detailed exception.",
      "Provide the General tab details from the Windows event entry rather than a third-party event-log summary.",
      "Check for missing variables or invalid expanded-name errors when the detailed trace points that way.",
    ],
    notes: "Laserfiche employee replies are diagnostic; the public thread does not end with one final confirmed fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "My process result has An unexpected error has occurred.",
        url: "https://answers.laserfiche.com/questions/112544/My-process-result-has-An-unexpected-error-has-occurred",
        note: "Ming Tan from Laserfiche asks for the detailed LFForms Event Viewer exception and points to related invalid-expanded-name guidance.",
      },
    ],
  },
  {
    id: "forms-offline-submission-failed",
    code: "FORMS-OFFLINE-SUBMISSION-FAILED",
    message: "The submission failed due to an error with the form.",
    product: "Forms",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Forms Mobile offline draft submission can fail with a generic form error. The reviewed thread documents the Version 10.4.1 symptom but has no public replies.",
    symptoms: [
      "Offline Form draft save reports The submission failed due to an error with the form.",
      "The user is working in the field without VPN/network connectivity.",
      "The environment is Forms Mobile Version 10.4.1.",
    ],
    likelyFixes: [
      "Check whether the environment can upgrade beyond 10.4.1 to a version with improved offline submission recovery.",
      "Collect device, mobile app, Forms version, and whether the form can be reopened from the outbox.",
      "No confirmed public fix was posted in the reviewed Answers thread.",
    ],
    notes: "Published as unresolved because the exact message and version context are useful for recognition.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Forms: Offline Form Draft Save Error The submission failed due to an error with the form",
        url: "https://answers.laserfiche.com/questions/191205/Forms-Offline-Form-Draft-Save-Error-The-submission-failed-due-to-an-error-with-the-form",
        note: "Thread documents Forms Mobile Version 10.4.1 offline submission failure but has no public replies.",
      },
    ],
  },
  {
    id: "directory-server-9357-lfds-sql-access",
    code: "9357",
    message: "LDAP query could not be completed.",
    product: "Directory Server",
    versions: ["Version 11"],
    confidence: "medium",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Adding LFDS users or groups to a repository can fail with 9357 when the LFDS application pool identity cannot access the SQL database needed for the lookup.",
    symptoms: [
      "Administration Console object picker returns LDAP query could not be completed. [9357].",
      "The stack references CLFDirectorySearcher::ThrowLastError and LFCommonDialogs.",
      "The problem appears while adding LFDS users/groups to a repository.",
    ],
    likelyFixes: [
      "Verify LFDS application pool identities have the required SQL database access.",
      "Test with a normal AD service account that has SQL access to isolate gMSA or permission issues.",
      "If only one new LFDS group fails, delete and recreate that group in LFDS and retest in Administration Console and Web Client Administration.",
      "Retest adding the LFDS group/user after correcting SQL access.",
    ],
    notes: "The selected answer is community-confirmed; a related Laserfiche employee reply suggests testing whether the issue affects one group or all groups.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Adding LFDS Group/User to Repository - Error 9357",
        url: "https://answers.laserfiche.com/questions/215118/Adding-LFDS-GroupUser-to-Repository--Error-9357",
        note: "Requester reports the app pool user lacked SQL database access to perform the lookup.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "LF 11 Admin Console Error: LDAP query could not be completed. [9357] when querying LFDS Users/Groups",
        url: "https://answers.laserfiche.com/questions/206964/LF-11-Admin-Console-Error-LDAP-query-could-not-be-completed-9357-when-querying-LFDS-UsersGroups",
        note: "Samuel Carson from Laserfiche suggests determining whether the error affects only the new group or all LFDS groups, then recreating the group and testing Web Client Administration.",
      },
    ],
  },
  {
    id: "directory-server-forms-lfds-503",
    code: "HTTP 503 / LFDS-ENDPOINT",
    message: "Forms configuration cannot reach LFDS LicenseManager service.",
    product: "Directory Server",
    versions: ["Version 11"],
    confidence: "low",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Forms configuration can fail while saving LFDS settings with HTTP 503 for the LFDS LicenseManager endpoint. The reviewed thread provides endpoint checks but no final fix.",
    symptoms: [
      "Forms configuration save reports The remote server returned an error: (503) Server Unavailable.",
      "The detail names http://<LFDSServerFQDN>:5048/LicenseManager/service2.",
      "Forms and LFDS are on separate servers in the same domain.",
    ],
    likelyFixes: [
      "Run the LFDS EndpointUtility and confirm the LFDS server/FQDN settings.",
      "Check whether LFDS alternate service or custom endpoint settings are enabled.",
      "Run the Forms endpoint utility and confirm the LFDS FQDN, certificate, and STS settings.",
    ],
    notes: "Laserfiche employee reply asks about EndpointUtility and custom LFDS endpoint settings; no public final resolution is posted.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Forms Configuration LFDS Error: The remote server returned an error: (503) Server Unavailable.",
        url: "https://answers.laserfiche.com/questions/207499/Forms-Configuration-LFDS-Error-The-remote-server-returned-an-error-503-Server-Unavailable",
        note: "Rui Deng from Laserfiche asks whether EndpointUtility was run and whether alternate service or customizations are in use.",
      },
    ],
  },
  {
    id: "full-text-search-9294-no-catalog",
    code: "9294 / 0xc004244e",
    message: "Repository has no search catalog.",
    product: "Full Text Search",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "After reattaching a repository, full-text search can fail with 9294 when no valid search catalog is attached or the copied index files are incomplete.",
    symptoms: [
      "Full-text search fails after repository reattach.",
      "The client reports You cannot perform full text searches in a repository with no search catalog.",
      "The detailed error includes [9294:0xc004244e].",
    ],
    likelyFixes: [
      "Use the Administration Console Index node to attach the associated catalog or create a new one.",
      "If backup index files were copied while Search Engine was running, delete the incomplete index files and recreate the catalog.",
      "Stop the search engine before copying index files for future backups.",
      "Reindex the repository after creating a new catalog.",
    ],
    notes: "Laserfiche employee reply explains why the copied index backup was incomplete and points to recreating the catalog.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Creating or attaching catalog for fulltext searches",
        url: "https://answers.laserfiche.com/questions/77320/Creating-or-attaching-catalog-for-fulltext-searches",
        note: "Cangfei Xiang from Laserfiche says copying index files while Search Engine is running is unsupported and recommends deleting/recreating the catalog.",
      },
    ],
  },
  {
    id: "full-text-search-9288-associated-catalog",
    code: "9288",
    message: "This repository does not have an associated catalog.",
    product: "Full Text Search",
    versions: ["Version 9", "Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "A new repository can report 9288 when it lacks a search catalog, and catalog creation can then fail with 9479 if the Laserfiche Full Text Search service is missing or stopped.",
    symptoms: [
      "Repository setup or search reports This repository does not have an associated catalog. [9288].",
      "Creating the catalog returns Error connecting to the search engine. [9479].",
      "The Laserfiche Full Text Search service may not appear in Services.",
    ],
    likelyFixes: [
      "Install or reinstall Laserfiche Full Text Search from the Laserfiche Server installer.",
      "Start the Laserfiche Full Text Search service.",
      "Create the search catalog in Administration Console and reindex the repository.",
    ],
    notes: "Laserfiche employee reply identifies the missing/stopped Full Text Search service and the requester confirmed reinstalling worked.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error 9288 : This repository does not have an associated catalog .",
        url: "https://answers.laserfiche.com/questions/88948/Error-9288--This-repository-does-not-have-an-associated-catalog-",
        note: "Raymond Cruz from Laserfiche says to install/start Laserfiche Full Text Search, then create the catalog and reindex; requester confirmed reinstall worked.",
      },
    ],
  },
  {
    id: "full-text-search-9421-invalid-status",
    code: "9421",
    message: "Invalid search catalog status.",
    product: "Full Text Search",
    versions: ["Version 9", "Version 10", "Version 11", "Version 12"],
    confidence: "medium",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Invalid search catalog status usually indicates corrupt or unavailable Full Text Search index files; restarting LFFTS may clear it, otherwise rebuild the index.",
    symptoms: [
      "Laserfiche Client search returns Invalid search catalog status. [9421].",
      "Administration Console Index node may show an unknown catalog status.",
      "The issue can follow volume or index reconfiguration.",
    ],
    likelyFixes: [
      "Restart the Laserfiche Full Text Search service and retest search.",
      "If restart does not help, delete/recreate the catalog and reindex the repository.",
      "Confirm no index files remain in the catalog folder after deleting the catalog before recreating it.",
    ],
    notes: "The accepted answer is community-confirmed, and a later user reported the service restart fixed 9421 in 2024.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "error 9421 : Invalid search catalog status ?",
        url: "https://answers.laserfiche.com/questions/60923/error-9421--Invalid-search-catalog-status-",
        note: "Community answer recommends restarting LFFTS first, then deleting/recreating and reindexing the search catalog if needed.",
      },
    ],
  },
  {
    id: "web-client-scanning-9013-custom-url",
    code: "9013",
    message: "Web Scanning access denied through custom URL.",
    product: "Web Client Scanning",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Web Client Scanning can return Access denied 9013 only when launched from a custom scanning URL after moving Web Client to a separate server.",
    symptoms: [
      "Default Web Client Scan button works, but a custom lfwa80://scanning URL returns Access denied. [9013].",
      "The event log names /laserfiche/App_Services/ScanningService.asmx and ScanningService.Negotiate.",
      "The failure appears after migrating Web Client/Forms to a new server.",
    ],
    likelyFixes: [
      "Compare Web Client authentication mode and repository auto-logon behavior between the old and new server.",
      "Check Windows Integrated Authentication, delegation, and repository login behavior for ScanningService.asmx.",
      "No confirmed public fix was posted in the reviewed thread.",
    ],
    notes: "Published as unresolved because the exact scanning custom-URL stack is useful for administrators to recognize.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Web Scanning - Access Denied Error [9013]",
        url: "https://answers.laserfiche.com/questions/162282/Web-Scanning--Access-Denied-Error-9013",
        note: "Thread documents the Web Client Scanning custom URL 9013 stack but has no public replies.",
      },
    ],
  },
  {
    id: "web-client-scanning-9039-date-field",
    code: "9039",
    message: "Multistatus response when storing from Web Scan URL shortcut.",
    product: "Web Client Scanning",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Web Client Scanning can return 9039 when storing documents launched from a custom scan URL, especially when a required Date field is prefilled with a token.",
    symptoms: [
      "Scanning client launched from a URL shortcut loads the correct folder, template, and field values.",
      "Clicking Store returns Multistatus response. [9039].",
      "The same metadata can store when launched from the normal Web Client Scan button.",
    ],
    likelyFixes: [
      "Test whether required Date fields and token casing such as %(Date) versus %(date) are involved.",
      "Compare the failing custom scan URL against a working custom scan URL using different storage paths/templates.",
      "No confirmed public fix was posted in the reviewed thread.",
    ],
    notes: "Published as unresolved for a Web Client Scanning URL-shortcut-specific 9039 pattern.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Multistatus response.[9039] Using Web Scan URL shortcut",
        url: "https://answers.laserfiche.com/questions/126452/Multistatus-response9039-Using-Web-Scan-URL-shortcut",
        note: "Requester narrowed the issue to a required Date field and token/default-value behavior; no confirmed fix was posted.",
      },
    ],
  },
  {
    id: "web-client-scanning-scanconnect-failed-load",
    code: "SCANCONNECT-FAILED-LOAD",
    message: "Rotate: Document Untitled, Page 1: Failed to load image.",
    product: "Web Client Scanning",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche Scanning with ScanConnect can fail to load images for a scanner while TWAIN may work directly.",
    symptoms: [
      "Using ScanConnect returns Rotate: Document Untitled, Page 1: Failed to load image.",
      "Removing image processing options may result in no output.",
      "The issue is tied to ScanConnect and a specific scanner/driver combination.",
    ],
    likelyFixes: [
      "Confirm whether the scanner has a TWAIN driver available.",
      "Configure the scanner directly through Laserfiche Scanning with TWAIN instead of ScanConnect as a workaround.",
      "Review scanner driver versions and image-processing settings if ScanConnect is required.",
    ],
    notes: "Community reply suggests using the TWAIN driver directly; no Laserfiche employee public reply was posted.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Failed to Load Image ScanConnect Only",
        url: "https://answers.laserfiche.com/questions/158476/Failed-to-Load-Image-ScanConnect-Only",
        note: "Community reply recommends configuring the scanner directly with TWAIN where available instead of ScanConnect.",
      },
    ],
  },
  {
    id: "forms-mobile-illegal-character-offline",
    code: "FORMS-ILLEGAL-CHARACTER",
    message: "Illegal character error when submitting an offline mobile form.",
    product: "Forms",
    versions: ["Version 11"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Forms Mobile offline submissions can report illegal-character errors when submitted data contains XML-like strings or hidden/offline data is transformed unexpectedly.",
    symptoms: [
      "Users submit a form after filling it out offline in Forms Mobile.",
      "The submission reports an illegal character error even though users did not knowingly type the character sequence.",
      "Reopening the form from the outbox may show a blank form.",
    ],
    likelyFixes: [
      "Inspect fields populated while offline, especially hidden fields and lookup-driven values.",
      "Look for submitted values containing XML-like strings such as <a></a>.",
      "Use Forms builds with submitted-data logging where available to troubleshoot the exact offline payload.",
    ],
    notes: "Laserfiche employee reply says submitted data logging was planned for a self-hosted Forms release after the thread date.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Illegal character error on mobile form in offline mode. Hard to reproduce",
        url: "https://answers.laserfiche.com/questions/209806/Illegal-character-error-on-mobile-form-in-offline-mode-Hard-to-reproduce",
        note: "Shengyao Que from Laserfiche explains the error usually indicates submitted form data contains illegal XML-like characters and mentions new submitted-data logging.",
      },
    ],
  },
  {
    id: "forms-lff6010-team-filter-timeout",
    code: "LFF6010",
    message: "Filter returned a script error: Timeout for Javascript Engine.",
    product: "Forms",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Forms team-filter task assignment can suspend intermittently with LFF6010 when the JavaScript team filter times out.",
    symptoms: [
      "Tasks are randomly suspended while assigning to a team filter.",
      "The error is LFF6010-FilterReturnedScriptError with HTTP 500.",
      "The filter uses JavaScript calls such as team.findTeamMembersByDisplayName or team.findMembersByRole.",
    ],
    likelyFixes: [
      "Review team-filter JavaScript for expensive lookups or missing guards.",
      "Check whether failures correlate with many Forms instances being invoked at once.",
      "No confirmed public fix was posted in the reviewed Answers thread.",
    ],
    notes: "Published as unresolved documentation for an intermittent Forms 10 team-filter timeout pattern.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Laserfiche Error when Assigning task based on Team Filter",
        url: "https://answers.laserfiche.com/questions/155257/Laserfiche-Error-when-Assigning-task-based-on-Team-Filter",
        note: "Community thread documents repeated intermittent LFF6010 team-filter timeouts, especially when several processes are invoked at once.",
      },
    ],
  },
  {
    id: "audit-trail-sql-shrinkdatabase",
    code: "42000",
    message: "DBCC SHRINKDATABASE could not adjust space allocation for the Audit Trail database.",
    product: "Audit Trail",
    versions: ["Version 9"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Audit Trail database purging can log SQL Native Client 42000 and 01000 messages while running DBCC SHRINKDATABASE.",
    symptoms: [
      "Laserfiche Audit Service logs an error from AuditDBService.Purger.ShrinkDatabase.",
      "SQL reports that a database file was skipped because it does not have enough free space to reclaim.",
      "The public thread contains a Laserfiche employee recommendation to handle the issue through Support.",
    ],
    likelyFixes: [
      "Open a Laserfiche Support case when this appears during Audit Trail purge/shrink activity.",
      "Review SQL free space, database growth settings, and Audit Trail purge behavior before attempting manual database changes.",
      "Do not treat this thread as a confirmed self-service fix; no public resolution was posted.",
    ],
    notes: "Published as unresolved because the Laserfiche employee reply directed the issue to Support; the thread does not expose an exact product version.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Audit Trail: Error EDBCC SHRINKDATABASE",
        url: "https://answers.laserfiche.com/questions/74521/Audit-Trail-Error-EDBCC-SHRINKDATABASE-",
        note: "Justin Pava from Laserfiche recommends opening a Support case for the Audit Trail shrink database error.",
      },
    ],
  },
  {
    id: "audit-trail-sql-native-client-08001",
    code: "08001",
    message: "SQL Server Native Client could not open a connection to SQL Server.",
    product: "Audit Trail",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Audit Trail configuration can fail with SQL Native Client 10.0 connection errors when it cannot reach the SQL Server instance.",
    symptoms: [
      "Audit Trail repository wizard fails while verifying database server connection information.",
      "The stack includes Named Pipes Provider: Could not open a connection to SQL Server [2].",
      "The same stack may include HYT00 login timeout expired and a network-related or instance-specific error.",
    ],
    likelyFixes: [
      "Verify the SQL Server instance name in Audit Trail configuration.",
      "Confirm SQL Server allows remote connections and the relevant SQL network protocols are enabled.",
      "If Audit Trail and SQL Server are on different machines, check firewall rules between the servers.",
    ],
    notes: "Laserfiche employee reply says the configuration should be possible and points to firewall/connectivity as a likely cause; the thread does not expose an exact product version.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Audit Trail using Native Client 10.0 but SQL has Native Client 11.0",
        url: "https://answers.laserfiche.com/questions/85867/Audit-Trail-using-Native-Client-100-but-SQL-has-Native-Client-110",
        note: "Ashley Hutchison from Laserfiche suggests checking whether Audit Trail is remote from SQL Server and whether a firewall is blocking the connection.",
      },
    ],
  },
  {
    id: "audit-trail-install-2343-empty-path",
    code: "2343",
    message: "Specified path is empty during Audit Trail installation.",
    product: "Audit Trail",
    versions: ["Version 11"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Audit Trail 11 installation can fail with MSI error 2343 when IIS path information points to a missing physical folder.",
    symptoms: [
      "Laserfiche 11 Audit Trail installer fails with error code 2343.",
      "The install log contains DEBUG: Error 2343: Specified path is empty.",
      "The issue was observed on Windows Server 2022 with IIS installed.",
    ],
    likelyFixes: [
      "Run the Audit Trail installer with logging, for example SetupLf.exe -log c:\\temp\\logs, to identify the empty path.",
      "Check the IIS Default Web Site path and confirm the physical folder exists.",
      "Recreate the missing wwwroot folder or correct the IIS path, then rerun the installer.",
    ],
    notes: "Requester confirmed recreating the missing wwwroot folder allowed installation to complete.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Laserfiche 11 Audit Trail Install Error",
        url: "https://answers.laserfiche.com/questions/209630/Laserfiche-11-Audit-Trail-Install-Error",
        note: "Jiajun Hu from Laserfiche identifies 2343 as an empty installation path and recommends installer logs; requester confirmed a missing wwwroot folder caused the failure.",
      },
    ],
  },
  {
    id: "audit-trail-sql-deadlock-40001",
    code: "40001",
    message: "Audit Trail database purge transaction was chosen as the deadlock victim.",
    product: "Audit Trail",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Audit Trail database growth can coincide with SQL deadlock errors when the Audit Trail purger cannot delete loaded events.",
    symptoms: [
      "Audit Trail SQL database grows rapidly while event log files appear much smaller.",
      "Event Viewer logs SQL Native Client 40001 deadlock victim messages from AuditDBService.Purger.DeleteEvents.",
      "Stopping Audit Trail services stops the repeated purge errors.",
    ],
    likelyFixes: [
      "Determine whether growth is in the SQL log file or data file and reclaim log space if repeated deadlocks inflated the log.",
      "Investigate which events are currently loaded into the Audit Trail database and whether retention deletion is succeeding.",
      "If using an older Audit Trail build, consider upgrading because Laserfiche improved event deletion efficiency around Audit Trail 9.1.",
      "If the database contains far more data than intended and reports are not critical, consider rebuilding the Audit Trail database after appropriate backups and review.",
    ],
    notes: "Laserfiche employee replies provide troubleshooting direction but do not guarantee upgrade or rebuild as a universal fix; the thread does not expose an exact product version.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "audit trail database increasing",
        url: "https://answers.laserfiche.com/questions/75349/audit-trail-database-increasing",
        note: "Brian McKeever from Laserfiche explains the deadlock indicates failed purge/delete behavior and suggests checking database/log growth, loaded events, and upgrade status.",
      },
    ],
  },
  {
    id: "web-client-9013-getsecurity-informational-log",
    code: "9013",
    message: "Access Denied from /laserfiche/DocumentService.ashx/GetSecurity.",
    product: "Windows Client/Desktop Client",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Web Client operational logs can show GetSecurity 9013 access-denied messages at Informational or Debug log level even when they do not indicate a user-facing error.",
    symptoms: [
      "Laserfiche Web Client Server Operational log records Access Denied [9013] for DocumentService.ashx/GetSecurity.",
      "The messages appear frequently after detailed logging is enabled.",
      "Users may not report a corresponding failure.",
    ],
    likelyFixes: [
      "Check the Web Client configuration log level.",
      "If the log level is Informational or Debug and no user impact exists, treat these messages as debugging noise.",
      "If you need to identify real failed access attempts, enable Audit Trail failed-attempt logging and run a report filtered to Succeeded = False.",
    ],
    notes: "The reviewed thread is tagged Web Client Version 10; product placement follows the closest available product list item.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Access Denied [9013] /laserfiche/DocumentService.ashx/GetSecurity",
        url: "https://answers.laserfiche.com/questions/198742/Access-Denied-9013-laserficheDocumentServiceashxGetSecurity",
        note: "Robert Strickland from Laserfiche says Informational/Debug log-level messages can be ignored; Samuel Carson suggests Audit Trail failed-attempt reporting for investigation.",
      },
    ],
  },
  {
    id: "fts-9451-check-lfs-event-log",
    code: "9451",
    message: "The search catalog could not be created or failed to start.",
    product: "Full Text Search",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Desktop Client search error 9451 requires checking the Laserfiche Server Application event log for the underlying LFS source event.",
    symptoms: [
      "Desktop Client search bar returns error 9451.",
      "The message says the search catalog could not be created or failed to start.",
      "The client user may not have access to the server event log.",
    ],
    likelyFixes: [
      "Have a server administrator check the Application event log on the Laserfiche Server machine.",
      "Look for an event with Source set to LFS around the time of the 9451 error.",
      "Use that server-side event to troubleshoot the catalog startup or creation failure.",
    ],
    notes: "Laserfiche employee guidance is diagnostic-only; no final catalog fix was posted.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error Code 9451",
        url: "https://answers.laserfiche.com/questions/84547/Error-Code-9451",
        note: "Robert Strickland from Laserfiche directs the requester to the Application event log on the Laserfiche Server machine and the LFS source event.",
      },
    ],
  },
  {
    id: "audit-trail-null-source-saved-reports",
    code: "AUDITTRAIL-NULL-SOURCE",
    message: "Value cannot be null. Parameter name: source.",
    product: "Audit Trail",
    versions: ["Version 11"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Audit Trail 11 Reporting can stop showing saved reports and log Value cannot be null when the saved report storage is corrupted.",
    symptoms: [
      "Audit Trail Reporting shows No Saved Report.",
      "Opening the reporting home page or saving a report returns an unknown error with changing OperationID values.",
      "Event Viewer logs Value cannot be null. Parameter name: source.",
    ],
    likelyFixes: [
      "Back up %ProgramData%\\Laserfiche\\AuditAnalytics\\report_templates\\.",
      "Restart Laserfiche Audit Trail Reporting Service and Laserfiche Audit Trail Importing Service.",
      "If the problem persists, move the report_templates folder aside, then stop and start both Audit Trail services to recreate the saved report storage.",
      "Recover existing saved reports from backup if possible after restoring service.",
    ],
    notes: "Requester confirmed reports_metadata.json was blank and clearing the saved report storage recreated the files/folders.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Audit Trail Error - Value cannot be null. Parameter name: source",
        url: "https://answers.laserfiche.com/questions/205303/Audit-Trail-Error--Value-cannot-be-null-Parameter-name-source",
        note: "Jiajun Hu from Laserfiche identifies likely saved report storage corruption and gives backup/restart/reset steps; requester confirmed the fix.",
      },
    ],
  },
  {
    id: "audit-trail-export-access-denied",
    code: "AUDITTRAIL-EXPORT-ACCESS-DENIED",
    message: "Audit Trail Export-AuditReport.ps1 fails with Access Denied or export permission errors.",
    product: "Audit Trail",
    versions: ["Version 11", "Version 12"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Audit Trail report export scripts can fail when the export path, web.config ExportFolder, app pool identity permissions, report ID, or invocation format is incorrect.",
    symptoms: [
      "Export-AuditReport.ps1 ends with a Write-Error or Access Denied style message.",
      "Earlier output may say the user does not have permissions to run the report or the report does not exist, with errorCode 267.",
      "The script works from the reporting UI but fails from PowerShell or Task Scheduler.",
    ],
    likelyFixes: [
      "Use an ExportFile path under the configured ExportFolder; if ExportFolder is blank, start with %ProgramData%\\Laserfiche\\AuditAnalytics\\Export.",
      "Grant the Audit Trail application pool identity write rights to the export folder.",
      "Avoid UNC export paths; export locally and copy the file afterward if needed.",
      "Review the FAQ guidance for BaseUrl, Repository, ReportId, execution policy, and using an explicit PowerShell command path for Task Scheduler.",
      "Open a Support case if the path and app pool permission checks pass but authentication or report permission errors remain.",
    ],
    notes: "Laserfiche employee guidance focused on ExportFolder permissions; the requester later posted support-confirmed command and permission corrections.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Audit Trail Export via Powershell Failing: Access Denied",
        url: "https://answers.laserfiche.com/questions/226447/Audit-Trail-Export-via-Powershell-Failing-Access-Denied",
        note: "Samuel Carson from Laserfiche explains ExportFolder constraints and app pool permissions; requester later posted support-assisted corrections.",
      },
    ],
  },
  {
    id: "audit-log-9237-could-not-enable",
    code: "9237",
    message: "Could not enable audit log.",
    product: "Audit Trail",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Repository access can fail with 9237 when Laserfiche Server cannot enable the repository audit log.",
    symptoms: [
      "End users cannot log into or use the repository.",
      "The visible error is could not enable audit log, with code 9237.",
      "The issue involves the repository AuditLog path and audit log file used by Laserfiche Server.",
    ],
    likelyFixes: [
      "Confirm the Laserfiche Server service account has read/write permissions to the Audit Log path.",
      "Check the AuditLog value under HKLM\\SOFTWARE\\Laserfiche\\Engine\\8.0\\Repositories\\[Repository_Name].",
      "If the path and permissions are valid, back up the [Repository_Name].log file from the AUDIT folder, delete it, and restart the Laserfiche Server service.",
      "Use Support if database objects such as auditlogs are missing and script-level repair is required.",
    ],
    notes: "Laserfiche employee answer provides a recovery path but asks for exact Laserfiche Server version; version was not public in the thread.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Audit trail problem resulting in 9237 error for end users",
        url: "https://answers.laserfiche.com/questions/81944/Audit-trail-problem-resulting-in-9237-error-for-end-users",
        note: "Alexander Huang from Laserfiche recommends validating audit log path permissions, backing up and deleting the repository audit log file, then restarting Laserfiche Server.",
      },
    ],
  },
  {
    id: "lfs-lffts-service-1053-windows-updates",
    code: "1053",
    message: "Windows could not start the Laserfiche Server or LFFTS service in a timely fashion.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "On Windows Server 2012 R2, Laserfiche Server and LFFTS services can fail immediately with error 1053 until prerequisite Windows updates are installed.",
    symptoms: [
      "A new Laserfiche Avante 10.1 Update 2 installation finishes but cannot start Laserfiche Server or LFFTS.",
      "Audit Trail service starts successfully with the same service account.",
      "Starting Laserfiche Server or LFFTS returns Windows service error 1053 immediately.",
    ],
    likelyFixes: [
      "Fully update Windows Server and reboot as required.",
      "On Windows Server 2012 R2, install prerequisite KB2975061, then KB2919355, then KB2999226 as applicable.",
      "Retry starting Laserfiche Server and LFFTS after the updates and reboots.",
    ],
    notes: "Requester confirmed services started after installing the missing Windows update chain.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error 1053: The Service did not respond o the start request",
        url: "https://answers.laserfiche.com/questions/111616/Error-1053-The-Service-did-not-respond-o-the-start-request",
        note: "Alexander Huang from Laserfiche recommends Windows updates including KB2919355 and KB2999226; requester confirmed installing prerequisites resolved the service startup failure.",
      },
    ],
  },
  {
    id: "audit-trail-config-sql-rights",
    code: "AUDITTRAIL-CONFIGURATION-ERROR",
    message: "Error while configuring Audit Trail date ranges or repository settings.",
    product: "Audit Trail",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Audit Trail configuration errors while setting date ranges or repository settings can be caused by insufficient SQL rights for the Audit Trail service account.",
    symptoms: [
      "Audit Trail configuration shows an error when applying date range settings.",
      "The issue occurs with a local SQL Server installation.",
      "Retrying after correcting account/SQL access may allow configuration to complete.",
    ],
    likelyFixes: [
      "Identify the account running the Audit Trail service.",
      "If using Local System with local SQL Server, confirm the corresponding NT AUTHORITY account has appropriate SQL sysadmin rights.",
      "If using a named service account, confirm that account has equivalent SQL rights for Audit Trail configuration.",
    ],
    notes: "Requester later reported configuration was working; the public thread does not show a detailed root-cause confirmation or exact product version.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error while configuring Audit Trail",
        url: "https://answers.laserfiche.com/questions/98480/Error-while-configuring-Audit-Trail",
        note: "Raymond Cruz from Laserfiche asks which service account is used and recommends SQL sysadmin rights for Local System or the named account.",
      },
    ],
  },
  {
    id: "workflow-audit-trail-9010-invalid-connection-profile",
    code: "9010",
    message: "Audit Trail shows Workflow invalid username or password failures.",
    product: "Workflow",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Audit Trail can show 9010 failures from the Laserfiche Workflow LFRA user agent when Workflow repository connection credentials are invalid or activities attempt repository connections.",
    symptoms: [
      "Audit Trail shows many 9010 invalid username or password events for the Workflow repository connection user.",
      "Workflow current error logs may not show a matching activity failure.",
      "The user agent appears as Laserfiche Workflow LFRA.",
    ],
    likelyFixes: [
      "Check Workflow Subscriber Trace, especially the repository tab, for current repository connection warnings.",
      "Review Workflow repository connection profiles and confirm the password was not changed outside Workflow.",
      "Inspect running workflow designs for repository activities inside loops or Try/Catch blocks that could hide activity errors.",
      "Open a Support case if Workflow logs and Audit Trail logs disagree or the connection source is unclear.",
    ],
    notes: "Laserfiche employee guidance treats the events as plausible Workflow connection attempts rather than necessarily bad Audit Trail data; the thread does not expose an exact product version.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "How can Audit Trail show a 9010 error from Workflow without it being logged as an activity error?",
        url: "https://answers.laserfiche.com/questions/184740/How-can-Audit-Trail-show-a-9010-error-from-Workflow-without-it-being-logged-as-an-activity-error",
        note: "Miruna Babatie from Laserfiche explains Workflow makes repository connections as needed and an invalid connection profile or workflow design can produce repeated 9010 events.",
      },
    ],
  },
  {
    id: "forms-audit-trail-lff9906-send-timeout",
    code: "LFF9906-AuditTrailTmeoutSendEventToATHub",
    message: "Forms timed out sending audit events to Audit Trail Hub Service.",
    product: "Forms",
    versions: ["Version 11"],
    confidence: "high",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Forms can log LFF9906 when sending audit events to the Audit Trail Event Hub exceeds the built-in timeout.",
    symptoms: [
      "Laserfiche-Forms-App/Admin logs SendEventTimeOut or OnFlyEventTimeOut.",
      "The error includes LFF9906-AuditTrailTmeoutSendEventToATHub.",
      "Events may appear in bursts, roughly consistent with a 30-second timeout.",
    ],
    likelyFixes: [
      "Verify connectivity from Forms to the Audit Trail Event Hub and Configuration Site.",
      "Use Forms Configuration Site, Auditing tab, to confirm the Audit Trail connection is verified.",
      "If errors continue, re-enter the Audit Trail server address on the Forms Auditing tab and save to reset the connection.",
      "Check whether recent Forms audit events are visible in Audit Trail and whether the proper Audit Trail search catalog date range exists.",
      "Do not expect a configurable timeout; Laserfiche employee replies state the timeout is not currently configurable.",
    ],
    notes: "Laserfiche employees state Forms writes audit events to local files and retries, so no audit data loss is expected while Audit Trail is temporarily unreachable.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Possible causes for LFF9906-AuditTrailTmeoutSendEventToATHub",
        url: "https://answers.laserfiche.com/questions/209553/Possible-causes-for-LFF9906AuditTrailTmeoutSendEventToATHub",
        note: "Shengyao Que and Jiajun Hu from Laserfiche describe Forms local audit event retry behavior, the 30-second timeout, and connection verification.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Recurring LFForms Audit Trail Error (LFF9906-AuditTrailTmeoutSendEventToATHub)",
        url: "https://answers.laserfiche.com/questions/222240/Recurring-LFForms-Audit-Trail-Error-LFF9906AuditTrailTmeoutSendEventToATHub",
        note: "Jiajun Hu from Laserfiche recommends resetting the Forms Auditing connection and checking Audit Trail catalog availability for recent events.",
      },
    ],
  },
  {
    id: "lfs-sql-connection-9008",
    code: "9008",
    message: "Repository operations fail while Laserfiche Server loses SQL connectivity.",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Users can see 9008 while Laserfiche Server logs database connection failures caused by SQL restart, shutdown, remote connection closure, or heavy SQL load.",
    symptoms: [
      "Users see 9008 while browsing, uploading, or opening documents.",
      "Laserfiche Server Application logs SQL Native Client connection errors around the same time.",
      "Messages may include Named Pipes Provider connection failures, semaphore timeout, or existing connection forcibly closed by the remote host.",
    ],
    likelyFixes: [
      "Correlate Laserfiche Server event times with SQL Server service restarts, shutdowns, or load spikes.",
      "Review SQL CPU and memory usage, SQL Activity Monitor, and SQL logs during the failure window.",
      "If using VSS backups, verify the Laserfiche VSS Writer service state; if not using VSS, the service does not need to run.",
      "Open a Support case if the failures recur and the SQL-side cause is not clear.",
    ],
    notes: "The thread mentions Audit Trail sharing the SQL Server, but the actionable error pattern is Laserfiche Server to SQL connectivity.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Several Database Connection error on LF Server",
        url: "https://answers.laserfiche.com/questions/62879/Several-Database-Connection-error-on-LF-Server",
        note: "Miruna Babatie from Laserfiche explains SQL restart/shutdown or heavy SQL load as likely causes and recommends correlating SQL metrics and logs.",
      },
    ],
  },
  {
    id: "audit-trail-addsearchabledata-permissions",
    code: "AUDITTRAIL-ADDSEARCHABLEDATA",
    message: "There was an error while applying Audit Trail repository configuration changes.",
    product: "Audit Trail",
    versions: ["Version 9", "Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Audit Trail repository wizard errors at AddSearchableData/AddRepositoryWizardData can involve SQL login permissions, database ownership, or older Audit Trail bugs.",
    symptoms: [
      "Audit Trail configuration fails while applying repository settings or date range settings.",
      "The stack includes WebAuditConfig.ConfigurationService.AddSearchableData and AddRepositoryWizardData.",
      "The same pattern was reported across Audit Trail 9.x and 10.x environments.",
    ],
    likelyFixes: [
      "Check the Windows Application event log for SQL login failures at the time of configuration.",
      "Grant the configuring account and Audit Trail service account the required SQL rights to create or update the Audit Trail database.",
      "For SQL Express/local installs, align the Audit Trail database owner with the account used by the Audit Trail service, such as NT AUTHORITY\\SYSTEM for the default Local System service account.",
      "If running a pre-9.1 Audit Trail build and logs match the known bug pattern, upgrade Audit Trail.",
      "Open a Support case when permissions are correct but the wizard still fails.",
    ],
    notes: "The thread contains multiple scenarios; this entry intentionally keeps confidence at medium and lists diagnostic branches rather than one universal fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "There was an error while applying your changes. at WebAuditConfig.ConfigurationService.AddSearchableData",
        url: "https://answers.laserfiche.com/questions/56032/There-was-an-error-while-applying-your-changes-at-WebAuditConfigConfigurationServiceAddSearchableDataRangeType-type-Object-parameters-at-WebAuditConfigConfigurationServiceAddRepositoryWizardDataRepositoryWizardInfo-repositoryWizardInfo-",
        note: "Raymond Cruz and Brian McKeever from Laserfiche point to SQL login failures, Support review, and a bug fixed in Audit Trail 9.1; later community replies describe database owner/service account alignment.",
      },
    ],
  },
  {
    id: "quick-fields-agent-license-missing-0101",
    code: "0101-QF0",
    message: "The license is missing.",
    product: "Quick Fields",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields Agent can report 0101-QF0 when an unlicensed Agent installation is also running the session.",
    symptoms: [
      "Quick Fields Agent logs The license is missing. [0101-QF0].",
      "The same session runs manually or through Quick Fields Agent on another server.",
      "Multiple Quick Fields Agent installations may be pointed at the same session.",
    ],
    likelyFixes: [
      "Identify which server is actually running the Agent session when the error is logged.",
      "Confirm the Quick Fields Agent feature is included in the license on that machine.",
      "Check for ActivationKey and license files under C:\\ProgramData\\Laserfiche\\Quick Fields\\Licenses.",
      "Stop the duplicate or unlicensed Agent from running the session, or license that machine for Quick Fields Agent.",
    ],
    notes: "Requester confirmed stopping the Agent on the unlicensed Laserfiche Server machine stopped the 0101-QF0 reports.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Quick Fields Agent Error : The license is missing. [0101-QF0]",
        url: "https://answers.laserfiche.com/questions/89242/Quick-Fields-Agent-Error---The-license-is-missing-0101QF0",
        note: "Alexander Huang from Laserfiche points to the Agent machine's license feature; requester confirmed an unlicensed Agent was running the session.",
      },
    ],
  },
  {
    id: "quick-fields-activation-0109",
    code: "0109-QF0",
    message: "License activation failed.",
    product: "Quick Fields",
    versions: ["Version 11"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields activation can fail with 0109-QF0 when online activation does not complete successfully.",
    symptoms: [
      "Quick Fields activation returns activation error code 0109-QF0.",
      "The product does not explain the underlying activation failure in the activation screen.",
      "The reviewed thread occurred during broader Laserfiche activation/security changes.",
    ],
    likelyFixes: [
      "Treat 0109-QF0 as License activation failed.",
      "Try activation through the Laserfiche activation tool by creating a text file and importing it on the Quick Fields activation screen.",
      "If online activation continues to fail, open a Support case with the activation error and product build.",
    ],
    notes: "Laserfiche employee identified the meaning of 0109; the workaround was reported by the requester.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Can we get documentation for the activation error code 0109-QF0",
        url: "https://answers.laserfiche.com/questions/233369/Can-we-get-documentation-for-the-activation-error-code-0109QF0",
        note: "Miruna Babatie from Laserfiche states 0109 means License activation failed; requester reports file-based activation worked.",
      },
    ],
  },
  {
    id: "full-text-search-page-search-784-timeout",
    code: "784",
    message: "Operation timed out.",
    product: "Full Text Search",
    versions: ["Version 9"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Advanced page/image searches can time out with 784, requiring search syntax, rights, and indexing checks.",
    symptoms: [
      "A page or image-size search hangs and eventually returns Operation timed out. [784].",
      "Other searches may work.",
      "The issue was seen in Laserfiche Version 9 search behavior, not specifically Quick Fields.",
    ],
    likelyFixes: [
      "Test a simpler search to verify that Full Text and Indexing services are functioning.",
      "Run the search from another workstation and with an administrative user that has Bypass Browse.",
      "Test the same search without the within-folder parameter.",
      "Open a Support case if the search still times out after narrowing syntax and permissions.",
    ],
    notes: "This was discovered from a Quick Fields search query but belongs to repository/search troubleshooting.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Page Search Broken?",
        url: "https://answers.laserfiche.com/questions/53800/Page-Search-Broken",
        note: "Alexander Huang from Laserfiche recommends testing with Bypass Browse and removing the within-folder clause, then opening Support if unresolved.",
      },
    ],
  },
  {
    id: "quick-fields-scanning-cloud-9010-saml-token",
    code: "9010",
    message: "The user account name or password is incorrect when storing from Quick Fields Scanning.",
    product: "Quick Fields",
    versions: ["Version 12"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields Scanning against Laserfiche Cloud can return 9010 when the selected document class uses expired SAML/SSO credentials.",
    symptoms: [
      "Quick Fields Scanning stores to a Laserfiche Cloud repository.",
      "Scanning works, but Store All Documents returns 9010.",
      "The session does not prompt users to log in because credentials come from the selected published document class.",
    ],
    likelyFixes: [
      "Open Quick Fields, modify or recreate the document class with correct repository login information, and publish it again.",
      "For a stable Cloud connection, use account/password authentication instead of an expiring SAML token.",
      "Select the corrected published document class in Quick Fields Scanning.",
    ],
    notes: "Cloud-specific entry retained for documentation but it may not apply to self-hosted repositories.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "LF Cloud and Quick Fields Scanning",
        url: "https://answers.laserfiche.com/questions/232245/LF-Cloud-and-Quick-Fields-Scanning",
        note: "Yankai Chen from Laserfiche explains Quick Fields Scanning uses the selected document class login and recommends account/password authentication for stable Cloud access.",
      },
    ],
  },
  {
    id: "quick-fields-agent-scheduled-9013-service-account",
    code: "9013",
    message: "Scheduled Quick Fields Agent sessions throw Permission Denied.",
    product: "Quick Fields",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Scheduled Quick Fields Agent sessions can fail immediately with 9013 when the service account used by the scheduled run lacks repository rights.",
    symptoms: [
      "Scheduled sessions in Quick Fields Agent Admin Console start and fail in less than a second.",
      "Running the same session manually with Quick Fields Agent succeeds.",
      "Changing the service to a domain service account with document rights stops the 9013 error.",
    ],
    likelyFixes: [
      "Confirm whether the session logs into Laserfiche with Windows Authentication.",
      "Check the account running the Quick Fields Server/Agent service for repository rights to source documents, destination folders, and metadata.",
      "Change the Quick Fields service to a domain service account that has the needed repository rights.",
      "Use Audit Trail failed attempts to identify the repository action that is denied.",
    ],
    notes: "Requester confirmed changing the service to a domain service account with document rights removed the 9013 error.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "QF Agent Admin Console: Scheduled Sessions throwing Permission Denied [9013] error",
        url: "https://answers.laserfiche.com/questions/195277/QF-Agent-Admin-Console-Scheduled-Sessions-throwing-Permission-Denied-9013-error",
        note: "Miruna Babatie from Laserfiche explains service account relevance and suggests Audit Trail; requester confirmed a domain service account resolved 9013.",
      },
    ],
  },
  {
    id: "quick-fields-qf1001-invalid-database-connection",
    code: "QF1001",
    message: "An error has occurred. HTTP 500.",
    product: "Quick Fields",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields Administration Console can return QF1001/HTTP 500 when the Quick Fields Server SQL database connection has not been configured.",
    symptoms: [
      "Opening or using Quick Fields Administration Console returns An error has occurred. (HTTP 500) [QF1001].",
      "Windows Event Viewer says The database connection information is invalid.",
      "The issue appears after installation before post-installation database configuration is complete.",
    ],
    likelyFixes: [
      "Run the Quick Fields Configuration Utility.",
      "Configure the SQL database connection for Quick Fields Server.",
      "Retry the Quick Fields Administration Console after saving the connection.",
    ],
    notes: "Requester confirmed configuring the SQL connection removed the QF1001 error.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "An error has occurred. (statut HTTP 500) [QF1001]",
        url: "https://answers.laserfiche.com/questions/126604/An-error-has-occurred-statut-HTTP-500-QF1001",
        note: "Brianna Blanchard from Laserfiche asks whether the Quick Fields Configuration Utility database connection was configured; requester confirmed that was the fix.",
      },
    ],
  },
  {
    id: "quick-fields-file-input-output-volume-permissions",
    code: "QF-FILE-INPUT-OUTPUT",
    message: "File input/output error when storing from Quick Fields.",
    product: "Quick Fields",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields storing can fail with a file input/output error when the repository volume path is unavailable, full, deleted, or not writable by the Laserfiche Server service account.",
    symptoms: [
      "Quick Fields extracts metadata correctly but fails when storing to Laserfiche.",
      "The error only says input/output error or file input/output error.",
      "The issue may be tied to the selected repository volume.",
    ],
    likelyFixes: [
      "Check whether the disk holding the destination Laserfiche volume is full.",
      "Verify the Laserfiche Server service account has write permissions to the volume path on the Windows file system.",
      "Confirm the selected test or production volume still exists.",
      "Correct the volume path or permissions, then retry storing from Quick Fields.",
    ],
    notes: "The source mentions Quick Fields 8.0.2 and Laserfiche 9.0.2; Version 9 is used because the site version filter starts at Version 9.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "input/output error when storing in quickfields",
        url: "https://answers.laserfiche.com/questions/128595/inputoutput-error-when-storing-in-quickfields",
        note: "Alexander Huang from Laserfiche identifies volume disk/permission causes; later requester confirms a deleted test volume also caused the error.",
      },
    ],
  },
  {
    id: "quick-fields-error-log-locations",
    code: "QF-ERROR-LOGS",
    message: "Where to review Quick Fields error details.",
    product: "Quick Fields",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields errors should be checked in different panes depending on whether the failure is scan/session output, application-level, or Agent history.",
    symptoms: [
      "Administrator needs to find error logs or details for a Quick Fields problem.",
      "The error may relate to image enhancement, metadata, application behavior, or Quick Fields Agent.",
    ],
    likelyFixes: [
      "For scan history, image enhancement, and metadata errors, check the tasks pane or output pane.",
      "For application errors that may indicate an application bug or installation issue, check the application errors pane.",
      "For Quick Fields Agent, check the Agent instance history.",
    ],
    notes: "This is diagnostic guidance rather than a specific error-code fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Log error configuraton on quickfields",
        url: "https://answers.laserfiche.com/questions/162793/Log-error-configuraton-on-quickfields",
        note: "Tessa Kohl from Laserfiche explains where Quick Fields and Quick Fields Agent errors appear.",
      },
    ],
  },
  {
    id: "quick-fields-agent-rpc-invalidcast-hotfix",
    code: "QF-INVALIDCAST-COM",
    message: "Unable to cast COM object to BPINTERFACES81Lib.IBPEngineEx; RPC server is unavailable.",
    product: "Quick Fields",
    versions: ["Version 11"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields Agent 11 can fail scheduled large-page sessions with an InvalidCastException/RPC server unavailable COM error fixed by Quick Fields 11 Update 3 Hotfix 1014569.",
    symptoms: [
      "Quick Fields Agent scheduled session logs Unable to cast COM object of type System.__ComObject to BPINTERFACES81Lib.IBPEngineEx.",
      "The same session may run manually inside Quick Fields without issue.",
      "Large page counts may stop partway through and duplicate already-processed pages on the next run.",
      "A companion COMException may show The RPC server is unavailable, HRESULT 0x800706BA.",
    ],
    likelyFixes: [
      "Confirm the exact Quick Fields build from Help > About.",
      "If on Quick Fields 11 Update 3 or an affected build, apply Quick Fields 11 Update 3 Hotfix 1014569.",
      "Open a Support case and provide the session file/logs if the first InvalidCastException persists after updating.",
    ],
    notes: "Laserfiche later posted that Hotfix 1014569 includes a fix for related Bug 566238.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Quick Field Agent Error - Unable to Cast COM Object",
        url: "https://answers.laserfiche.com/questions/207710/Quick-Field-Agent-Error--Unable-to-Cast-COM-Object",
        note: "Shengyao Que from Laserfiche asks for logs/session details; Caili Zhong from Laserfiche points to Quick Fields 11 Update 3 Hotfix 1014569.",
      },
    ],
  },
  {
    id: "quick-fields-field-error-reselect-template",
    code: "QF-FIELD-ERROR",
    message: "Field Error appears for Quick Fields metadata assignments.",
    product: "Quick Fields",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields 10.3 sessions can show intermittent field assignment errors that temporarily clear after reselecting the template.",
    symptoms: [
      "Quick Fields shows Field Error for a mapped field before the session runs.",
      "Values may come from Zone OCR pattern matching or classification assignment.",
      "Reselecting the template allows the session to run, but the error may return after saving and reopening.",
    ],
    likelyFixes: [
      "Reselect the affected template in the Quick Fields session as a temporary workaround.",
      "Check whether the field value is entered by a user, Zone OCR, pattern matching, or classification.",
      "If the error returns after saving/reopening, open a Support case with the Quick Fields session and affected field examples.",
    ],
    notes: "The reviewed thread has a Laserfiche employee diagnostic question but no confirmed permanent fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Quick Fields - Field Error Errors",
        url: "https://answers.laserfiche.com/questions/169108/Quick-Fields--Field-Error-Errors",
        note: "Miruna Babatie from Laserfiche asks how values are assigned; requester reports reselecting the template temporarily clears the error.",
      },
    ],
  },
  {
    id: "quick-fields-agent-nullreference-hotfix",
    code: "QF-NULLREFERENCE",
    message: "Object reference not set to an instance of an object.",
    product: "Quick Fields",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields Agent 10 can log a NullReferenceException after running, processing, and storing documents successfully; Laserfiche fixed this in a hotfix referenced by KB 1013873.",
    symptoms: [
      "Quick Fields Agent 10 logs Object reference not set to an instance of an object.",
      "The stack includes QFSessionManager.UpdateRecentSessionList or SaveSessionSafe.",
      "Running directly in Quick Fields 10.1 does not show the error.",
    ],
    likelyFixes: [
      "Apply the Quick Fields hotfix referenced in KB 1013873 for the NullReferenceException.",
      "If manual sessions work but Agent fails, also check the service account, repository authentication, and network share access used by Agent.",
      "Retest the same session in Quick Fields Agent after applying the hotfix.",
    ],
    notes: "Requester confirmed applying the hotfixes stopped the error messages.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Quick Fields Agent Error",
        url: "https://answers.laserfiche.com/questions/133500/Quick-Fields-Agent-Error",
        note: "Alexander Huang from Laserfiche cites KB 1013873 and recommends the hotfix; requester confirms the hotfixes resolved the messages.",
      },
    ],
  },
  {
    id: "quick-fields-session-xml-unclosed-literal",
    code: "QF-UNCLOSED-LITERAL-STRING",
    message: "System.Xml.XmlException: There is an unclosed literal string.",
    product: "Quick Fields",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields session files are XML, so a damaged .qfx file can fail to open with an unclosed literal string error after upgrade.",
    symptoms: [
      "Quick Fields cannot open a session after upgrade.",
      "The error is System.Xml.XmlException: There is an unclosed literal string with a line and position.",
      "The stack includes PatternMatchingProcessProxy or session XML reading methods.",
    ],
    likelyFixes: [
      "Open a Support case and provide the affected .qfx session file.",
      "Inspect the .qfx file with an XML editor such as XML Marker to locate malformed or truncated XML.",
      "Restore a backup copy of the session if available.",
      "If Support repairs the XML enough to reopen it, plan to reconfigure the affected session/process settings.",
    ],
    notes: "Requester reports Support found XML cut off near a pattern matching activity, repaired the tags enough to open the session, and recommended backup restore or reconfiguration.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Upgraded to Quick Fields 9, now unable to view Quick Fields Session and receiving an unclosed literal string error",
        url: "https://answers.laserfiche.com/questions/98028/Upgraded-to-Quick-Fields-9-now-unable-to-view-Quick-Fields-Session-and-receiving-the-following-error-There-is-an-unclosed-literal-string",
        note: "Alexander Huang from Laserfiche explains .qfx files are XML and recommends Support review; requester reports Support repaired truncated XML enough to reopen the session.",
      },
    ],
  },
  {
    id: "quick-fields-agent-document-class-9013",
    code: "9013",
    message: "Quick Fields Agent gets Permission denied while updating document class metadata.",
    product: "Quick Fields",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields Agent can get 9013 during metadata update when the document class uses Windows Authentication and Agent runs as a service account without repository rights.",
    symptoms: [
      "Quick Fields Agent picks up documents and runs processes but does not store automatically.",
      "The error log shows LFSOException Permission denied [9013] and LFConnectionClass.Create.",
      "Manually selecting Store works for the user.",
    ],
    likelyFixes: [
      "Check the document class repository authentication settings.",
      "Change the document class from Windows Authentication to Laserfiche Authentication when appropriate.",
      "If Windows Authentication is required, run Quick Fields Agent under a domain account with the needed repository rights.",
      "Retest through the scheduled Agent workflow rather than only manual Quick Fields processing.",
    ],
    notes: "Requester confirmed changing the document class authentication resolved the issue.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "When running a session in Quick Fields user gets LF error 9013",
        url: "https://answers.laserfiche.com/questions/99835/When-running-a-session-in-Quick-Fields-user-gets-LF-error-9013",
        note: "Miruna Babatie from Laserfiche explains Agent uses the service user for Windows Authentication; requester fixed the issue by changing the document class to Laserfiche Authentication.",
      },
    ],
  },
  {
    id: "workflow-sdk-script-http-request-server",
    code: "WORKFLOW-HTTP-REQUEST-SDKSCRIPT",
    message: "Error sending HTTP request to server from a Workflow SDK script.",
    product: "Workflow",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "A Workflow SDK script can fail with Error sending HTTP request to server when the script inherits an older Repository Access base class that does not match the Workflow Server repository access version.",
    symptoms: [
      "A Workflow script activity fails while deleting or changing an electronic document.",
      "The activity error says Error sending HTTP request to server.",
      "The script inherits a RAScriptClass version such as RAScriptClass100 while the server expects a newer version.",
    ],
    likelyFixes: [
      "Use an SDK Script activity instead of a general Script activity when accessing Laserfiche so Workflow manages the repository connection.",
      "Confirm the generated Inherits RAScriptClass### value matches the Workflow Server Repository Access version.",
      "If the script was carried forward from an older version, recreate or update the SDK Script activity so the base class is regenerated correctly.",
      "Review the activity errors log for the full stack trace if the message persists.",
    ],
    notes:
      "The reviewed support case was resolved by changing the inherited Repository Access class from RAScriptClass100 to RAScriptClass102.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error sending HTTP request to server",
        url: "https://answers.laserfiche.com/questions/143446/Error-sending-HTTP-request-to-server",
        note: "Alexander Huang from Laserfiche reports the resolved fix; Miruna Babatie from Laserfiche explains why SDK Script activities should be used for Laserfiche access.",
      },
    ],
  },
  {
    id: "workflow-forms-no-entry-specified",
    code: "WORKFLOW-NO-ENTRY-SPECIFIED",
    message: "No entry was specified.",
    product: "Workflow",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "A Workflow launched directly from Forms has no Laserfiche starting entry unless the form first saves a document to the repository or the workflow is started by a repository event.",
    symptoms: [
      "Workflow reports No entry was specified after being invoked from Forms.",
      "The workflow expects a starting entry, entry ID, or Read Forms Content context.",
      "The issue may appear after publishing with mismatched Workflow Designer and Workflow Server versions.",
    ],
    likelyFixes: [
      "If the workflow needs a Laserfiche document or folder, have Forms save the submission to Laserfiche first and let that repository event start Workflow.",
      "Store the Forms instance ID or submission ID as field values on the saved document, then read those fields in Workflow.",
      "In Read Forms Content, specify the saved instance/submission values in the advanced properties when needed.",
      "Keep Workflow Designer and Workflow Server on compatible versions before republishing the workflow.",
    ],
    notes:
      "Community follow-up reported a Designer/Server version mismatch workaround; Laserfiche employee replies clarify the starting-entry model for Forms-launched workflows.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error No entry was specified",
        url: "https://answers.laserfiche.com/questions/74204/Error-No-entry-was-specified",
        note: "Miruna Babatie from Laserfiche explains that Forms-started workflows do not automatically have a repository entry and recommends using the Forms save-to-repository path when an entry is required.",
      },
    ],
  },
  {
    id: "workflow-briefcase-noncritical-warning",
    code: "WORKFLOW-BRIEFCASE-NONCRITICAL",
    message: "Briefcase transfer failure is not treated as a critical Workflow error.",
    product: "Workflow",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow task error handling can classify some briefcase transfer failures as non-critical, so a Try-Catch or termination path may not run unless server error-handler settings or explicit verification steps are added.",
    symptoms: [
      "A briefcase activity fails but the workflow continues.",
      "Expected critical-error handling does not trigger.",
      "Administrators need a way to alert or terminate when the destination entry was not created.",
    ],
    likelyFixes: [
      "Review Workflow Administration Console > Server Configuration > Task Error Handlers for the related activity error code.",
      "Only change critical-error classification after considering other workflows that may use the same activity and code.",
      "Add a Find Entry or other verification step after briefcase transfer to confirm the expected destination entry exists.",
      "If the verification fails, send an alert and terminate the workflow explicitly.",
    ],
    notes:
      "This is community guidance and should be tested carefully because changing task error handler behavior is server-wide for that activity/code combination.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Failure of briefcase is not a critical error",
        url: "https://answers.laserfiche.com/questions/160215/Failure-of-briefcase-is-not-a-critical-error",
        note: "Community guidance points to Task Error Handlers and recommends verifying the destination entry after transfer.",
      },
    ],
  },
  {
    id: "workflow-invalid-mail-header-token",
    code: "WORKFLOW-INVALID-MAIL-HEADER",
    message: "Invalid character was found in the mail header.",
    product: "Workflow",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow email activities can report an invalid mail header when a token used in the address, subject, or header-related field is missing or resolves unexpectedly at runtime.",
    symptoms: [
      "Workflow fails on an email activity with Invalid character was found in the mail header.",
      "The error may include an unexpected character such as <.",
      "The email activity uses tokens for recipients, subject, or other email fields.",
    ],
    likelyFixes: [
      "Enable Track Tokens before the email activity and inspect the resolved token values.",
      "Check whether any token used by the email activity does not exist in the running instance.",
      "Republish the workflow so active instances use the current activity/token structure.",
      "If the workflow waits before sending email, confirm that the token-producing activity ran in that same instance before the wait.",
    ],
    notes:
      "Laserfiche employee follow-up describes a case where a token added before a wait did not exist in older waiting instances after republishing.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Invalid character was found in the mail header",
        url: "https://answers.laserfiche.com/questions/52070/Invalid-character-was-found-in-the-mail-header-",
        note: "Miruna Babatie from Laserfiche says a token that does not exist when the email activity runs can produce this header error; Matt Weaver recommends Track Tokens.",
      },
    ],
  },
  {
    id: "workflow-servicechannel-faulted-0604-wfso0",
    code: "0604-WFSO0",
    message: "The communication object ServiceChannel cannot be used because it is in the Faulted state.",
    product: "Workflow",
    versions: ["Version 11"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow Subscriber can log 0604-WFSO0 and a WCF ServiceChannel fault when it cannot communicate with Workflow Server, but the reviewed public thread does not include a confirmed root cause.",
    symptoms: [
      "Workflow Subscriber logs a WFSOException while communicating with Workflow Server.",
      "The message includes ServiceChannel cannot be used for communication because it is in the Faulted state.",
      "Errors may recur after the subscriber attempts to reconnect.",
    ],
    likelyFixes: [
      "Review the full Workflow Server and Subscriber logs around the first failure, not only the repeated reconnect messages.",
      "Check whether Workflow Server restarted, became unreachable, or logged a separate exception at the same time.",
      "If the issue continues, open a Support case with the surrounding logs from both services.",
    ],
    notes:
      "Laserfiche employee guidance says the rest of the logs are needed to determine what happened to Workflow Server; no public fix was posted.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "The communication object System.ServiceModel.Channels.ServiceChannel cannot be used because it is in the Faulted state",
        url: "https://answers.laserfiche.com/questions/223668/The-communication-object-SystemServiceModelChannelsServiceChannel-cannot-be-used-for-communication-because-it-is-in-the-Faulted-state",
        note: "Miruna Babatie from Laserfiche explains that Subscriber reconnect messages are secondary and the earlier Workflow Server logs are needed.",
      },
    ],
  },
  {
    id: "workflow-query-data-null-collection",
    code: "WORKFLOW-QUERYDATA-COLLECTION-NULL",
    message: "Value cannot be null. Parameter name: collection.",
    product: "Workflow",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow Query Data activity configuration can become corrupted enough to throw Value cannot be null, Parameter name: collection; recreating the activity has resolved the issue in community-confirmed cases.",
    symptoms: [
      "A Query Data activity fails with Value cannot be null. Parameter name: collection.",
      "The workflow log references Workflow 10.2 or a Workflow Query Data activity.",
      "The same query text may look valid in Designer.",
    ],
    likelyFixes: [
      "Copy the SQL/query text and activity configuration details for reference.",
      "Delete the affected Query Data activity from the workflow.",
      "Add a new Query Data activity and re-enter the same configuration.",
      "Republish and rerun the workflow instance.",
    ],
    notes:
      "The public thread has Laserfiche employee diagnostic questions; the confirmed fix came from community users deleting and recreating the Query Data activity.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Value cannot be null Parameter name collection",
        url: "https://answers.laserfiche.com/questions/134334/Value-cannot-be-null-Parameter-name-collection",
        note: "Community users report that deleting and recreating the Query Data activity resolved the error.",
      },
    ],
  },
  {
    id: "workflow-field-access-denied-9013",
    code: "9013",
    message: "Access denied while Workflow updates a field value.",
    product: "Workflow",
    versions: ["Version 11"],
    confidence: "medium",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow can report 9013 Access denied while updating a date field when the Workflow connection profile user does not have rights to the target field.",
    symptoms: [
      "Workflow fails when adding days or writing a calculated date to a metadata field.",
      "The activity log includes Access Denied [9013] and 0265-WF10.",
      "Other repository operations may work under the same connection profile.",
    ],
    likelyFixes: [
      "Identify the Workflow connection profile or service account used to update metadata.",
      "Grant that account the necessary field-level rights for the target metadata field.",
      "Rerun the workflow after confirming the account can manually update the same field.",
    ],
    notes: "The public confirmation comes from the requester, not a Laserfiche employee reply.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Workflow Error Adding Days",
        url: "https://answers.laserfiche.com/questions/216578/Workflow-Error-Adding-Days",
        note: "Requester confirmed the Workflow user lacked access to the field being updated.",
      },
    ],
  },
  {
    id: "workflow-subscriber-797-server-connection",
    code: "797",
    message: "Workflow Subscriber could not connect to Laserfiche Server.",
    product: "Workflow",
    versions: ["Version 9", "Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow Subscriber Event ID 100 can include Laserfiche error 797 when Subscriber temporarily or continuously cannot connect to Laserfiche Server.",
    symptoms: [
      "Windows Event Viewer logs Workflow Subscriber Event ID 100.",
      "The details say Could not connect to Laserfiche Server and include ErrorCode 797.",
      "The message may repeat after Workflow Subscriber timestamp or connection warnings.",
    ],
    likelyFixes: [
      "Check whether the Laserfiche Server service was down or restarted at the same time.",
      "If the event is sporadic, verify Subscriber reconnects and later processes events successfully.",
      "If the event is continuous, troubleshoot network connectivity between Workflow Subscriber and Laserfiche Server.",
      "Review the full event message instead of relying on Event ID 100 alone.",
    ],
    notes:
      "Laserfiche employee reply says the Event ID alone is not diagnostic; the embedded error message determines whether this is a transient reconnect or a server/network problem.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Workflow Event Viewer Error Event 100 Laserfiche Workflow Subscriber Timestamp off",
        url: "https://answers.laserfiche.com/questions/91483/Workflow-Event-Viewer-Error-Event-100--Laserfiche-Workflow-Subscriber-Timestamp-off",
        note: "Miruna Babatie from Laserfiche explains 797 means Subscriber lost connection to Laserfiche Server and will reconnect unless the failure is continuous.",
      },
    ],
  },
  {
    id: "workflow-subscriber-9001-deleted-entry",
    code: "9001",
    message: "Workflow Subscriber cannot process an entry that no longer exists.",
    product: "Workflow",
    versions: ["Version 9", "Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Workflow Subscriber can log 9001 when a starting rule or wait condition is satisfied for an entry that is deleted before Subscriber processes the event.",
    symptoms: [
      "Workflow Subscriber logs LFSOException with ErrorCode 9001.",
      "The stack includes LFDatabaseClass.GetEntryByID.",
      "The error appears repeatedly in Event Viewer or subscriber_error.log for starting or waiting rules.",
    ],
    likelyFixes: [
      "Review starting rules and wait conditions for broad triggers that create a large Subscriber backlog.",
      "Check whether entries are being deleted shortly after satisfying a workflow condition.",
      "If these errors are expected and harmless in the environment, treat them as diagnostics rather than failed workflow instances.",
      "To stop all Subscriber errors from being written to the Windows Workflow event log, update the Subscriber config listener only after confirming that central log monitoring is handled elsewhere.",
    ],
    notes:
      "Laserfiche employee reply says the condition is a real error, but it may be safely ignored when the deleted entry no longer matters; logging changes affect all Subscriber errors, not only 9001.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "workflow subscriber errors in event logs",
        url: "https://answers.laserfiche.com/questions/50718/workflow-subscriber-errors-in-event-logs",
        note: "Miruna Babatie from Laserfiche explains the deleted-entry timing cause and the limits of changing Subscriber error logging.",
      },
    ],
  },
  {
    id: "directory-server-ldap-credential-invalid",
    code: "LFDS-LDAP-CREDENTIAL-INVALID",
    message: "The supplied credential is invalid when saving or using an LFDS LDAP connection.",
    product: "Directory Server",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Directory Server can reject LDAP credentials even when Administration Console can use the same username and password; the reviewed discussion did not publish a final root cause.",
    symptoms: [
      "Directory Server reports The supplied credential is invalid for an LDAP server connection.",
      "Administration Console can connect to the LDAP server with the same credentials.",
      "The Directory Server configuration may save successfully, but adding users still fails.",
    ],
    likelyFixes: [
      "Collect Directory Server event logs and a screen recording of the failing save/search path.",
      "Compare the LDAP method, host, port, SSL/TLS, and credential format used by Directory Server with the working Administration Console path.",
      "Open a Support case if no event-log detail is written, because the public thread has no confirmed fix.",
    ],
    notes:
      "Laserfiche employee replies say the applications likely use different LDAP methods/libraries and recommend Support review when logs do not expose the cause.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Directory Server - False Error on LDAP Connection?",
        url: "https://answers.laserfiche.com/questions/190818/Directory-Server---False-Error-on-LDAP-Connection",
        note: "Samuel Carson from Laserfiche asks for event-log stack details; Chase Hill recommends a Support case when the error has no useful log detail.",
      },
    ],
  },
  {
    id: "directory-server-lfds3-cannot-get-user-information",
    code: "LFDS3",
    message: "Cannot get user information.",
    product: "Directory Server",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "LFDS 10.1 can fail to open a user with LFDS3/Cannot get user information when synced AD properties reference an object that no longer exists, such as an obsolete manager SID.",
    symptoms: [
      "Opening a specific LFDS user returns LFDS3 or Cannot get user information.",
      "The event log includes System.DirectoryServices.DirectoryServicesCOMException: There is no such object on the server.",
      "The user may still consume a license but cannot be opened to remove or inspect it.",
    ],
    likelyFixes: [
      "Check whether the affected AD account has stale linked properties, such as a manager account that no longer exists.",
      "Correct the stale AD property and run LFDS synchronization again.",
      "Keep LFDS user synchronization on a regular schedule so removed AD objects are reflected in LFDS.",
      "If direct database inspection is needed, involve Support because the public workaround referenced LFDS database tables.",
    ],
    notes:
      "The requester identified incorrect manager SIDs in LFDS data; Brianna Blanchard from Laserfiche filed bug 148908 for the LFDS project.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Directory Server 10.1, LFDS3, Cannot get user information",
        url: "https://answers.laserfiche.com/questions/105795/Directory-Server-101-LFDS3-Cannot-get-user-information",
        note: "Requester traced the issue to stale manager SIDs for AD accounts; Laserfiche acknowledged it as LFDS bug 148908.",
      },
    ],
  },
  {
    id: "directory-server-8333-0000208d-no-object",
    code: "8333 / 0000208D",
    message: "NameErr NO_OBJECT while Forms or LFDS synchronizes users.",
    product: "Directory Server",
    versions: ["Version 11"],
    confidence: "low",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "LFDS operational logs can show ExtendedErrorCode 8333 / 0000208D when an LDAP object referenced during Forms synchronization no longer exists or was renamed.",
    symptoms: [
      "Forms user synchronization makes no user changes.",
      "LFDS operational trace logs Event ID 28 with ExtendedErrorCode 8333 and ExtendedErrorMessage 0000208D.",
      "The stack includes System.DirectoryServices.DirectoryServicesCOMException: There is no such object on the server.",
    ],
    likelyFixes: [
      "Look for AD or LDAP OUs, groups, or users that were imported into LFDS and then deleted or renamed.",
      "Review LFDS synchronization configuration and Forms user authentication settings for references to removed directory objects.",
      "Open a Support case with full LFDS operational logs when the error does not include the missing distinguished name.",
    ],
    notes:
      "The reviewed thread has employee guidance to open Support plus community analysis that the LDAP object reference may be missing or renamed; no confirmed universal fix was posted.",
    sources: [
      {
        sourceType: "answers-community",
        title: "ExtendedErrorCode: 8333 ExtendedErrorMessage: 0000208D When Syncing Users in Forms",
        url: "https://answers.laserfiche.com/questions/201653/ExtendedErrorCode-8333-ExtendedErrorMessage-0000208D-When-Syncing-Users-in-Forms",
        note: "Thread ties the LFDS Event ID 28 error to a missing LDAP object during Forms synchronization, but no confirmed final fix is posted.",
      },
    ],
  },
  {
    id: "directory-server-lmo28-identity-provider-missing",
    code: "LMO28",
    message: "SQL foreign key error while creating or opening a Directory Server licensing site.",
    product: "Directory Server",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Directory Server 10 can report LMO28 with a directory_objects_providers_fk SQL constraint error when the licensing-site database exists but the default identity provider was not created.",
    symptoms: [
      "Creating or opening a Directory Server licensing site fails with A SQL error has occurred.",
      "The INSERT statement conflicted with FOREIGN KEY constraint directory_objects_providers_fk.",
      "The conflict references dbo.identity_providers and the code LMO28.",
    ],
    likelyFixes: [
      "Confirm the SQL Server service pack/build and whether this is a new Directory Server database or an existing database.",
      "Check the identity_providers table to see whether a default identity provider row exists.",
      "Open a Support case with event logs to determine why automatic identity-provider creation failed.",
      "Only with Support guidance, create the missing default identity provider record and then verify it has the expected ID.",
    ],
    notes:
      "Laserfiche employee guidance includes a SQL workaround, but this helper intentionally frames database writes as Support-guided recovery rather than routine troubleshooting.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Getting an error when creating Directory Server licensing site",
        url: "https://answers.laserfiche.com/questions/87354/Getting-an-error-when-creating-Directory-Server-licensing-site",
        note: "Brianna Blanchard from Laserfiche suspects failed default identity-provider creation and provides a manual SQL workaround while requesting Support evidence.",
      },
    ],
  },
  {
    id: "forms-lff3022-invalid-lfds-ad-domain",
    code: "LFF3022 / InvalidLfdsADDomain",
    message: "An invalid dn syntax has been specified during Forms user sync.",
    product: "Forms",
    versions: ["Version 11", "Version 12"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Forms user synchronization can fail with LFF3022/InvalidLfdsADDomain when LFDS returns an account that Forms treats as a Windows group but AD lookup fails because of invalid DN syntax or problematic account data.",
    symptoms: [
      "Forms user sync logs An invalid dn syntax has been specified.",
      "The message includes LFF3022-InvalidLfdsADDomain and GetUserDescendantsInAD.",
      "The environment may primarily use SAML users/groups, but Forms still attempts an AD group lookup.",
    ],
    likelyFixes: [
      "Review LFDS groups allowed for Forms and verify whether any returned account is typed as a Windows group.",
      "Check affected AD accounts for unusual escaped characters in name or CN fields, such as an unexpected backslash.",
      "Provide Forms sync event logs plus Forms authentication and LFDS group configuration screenshots to Support.",
      "Ask Support whether the related hotfix mentioned in the source applies to the installed Forms/LFDS build.",
    ],
    notes:
      "The source includes employee diagnostic guidance, a community-confirmed account-data workaround, and a later note that Support provided a hotfix planned for a Laserfiche 12 2026H1 release.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "LF Forms User Sync error - An invalid dn syntax has been specified",
        url: "https://answers.laserfiche.com/questions/199725/LF-Forms-User-Sync-error--An-invalid-dn-syntax-has-been-specified",
        note: "Xiuhong Xiang from Laserfiche points to LFDS-returned account type issues; community replies identify escaped-character account data and a Support hotfix path.",
      },
    ],
  },
  {
    id: "directory-server-lfds19-cross-domain-search",
    code: "LFDS19",
    message: "No user found when adding a user to Directory Server.",
    product: "Directory Server",
    versions: ["Version 9"],
    confidence: "low",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Directory Server can return LFDS19/No user found for cross-domain user searches even when Administration Console can find the same user with the same apparent account.",
    symptoms: [
      "Searching for a user in LFDS returns No user found. (LFDS19).",
      "The user is in a different domain.",
      "Administration Console can find and add the user.",
    ],
    likelyFixes: [
      "Confirm which Windows identity is logged in to LFDS and whether that identity can query the target domain.",
      "Check whether an Access Denied prompt should appear for cross-domain searches but is not appearing.",
      "Collect Directory Server event logs and open a Support case if cross-domain search returns no useful diagnostics.",
    ],
    notes:
      "Laserfiche employee guidance explains that AD searches are performed with the logged-in user's Windows credentials impersonated by the service user; the public thread has no final fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "LFDS19 error when trying to add user into Laserfiche Directory Server",
        url: "https://answers.laserfiche.com/questions/73935/LFDS19-error-when-trying-to-add-user-into-Laserfiche-Directory-Server",
        note: "Brianna Blanchard from Laserfiche explains the credential model for AD searches and asks about missing Access Denied prompting.",
      },
    ],
  },
  {
    id: "directory-server-8335-lookup-nested-group-membership",
    code: "8335 / 0000208F",
    message: "Invalid DN syntax during LookupNestedGroupMembership.",
    product: "Directory Server",
    versions: ["Version 12"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche Server can log an unexpected LFDS error for LookupNestedGroupMembership while LFDS logs ExtendedErrorCode 8335 / 0000208F invalid DN syntax during AD group membership lookup.",
    symptoms: [
      "ContentRepository-Service/Admin logs Event ID 144: LFS received an unrecognized or unexpected error from LFDS.",
      "The LFDS operational log at the same time shows ExtendedErrorCode 8335 and ExtendedErrorMessage 0000208F.",
      "The stack includes QueryADGroupMembership and LookupNestedGroupMembership.",
    ],
    likelyFixes: [
      "Check whether the Active Directory identity provider service account can query the affected user and group membership.",
      "Run LFDS interactively as an administrator for a controlled test to isolate service-account permissions.",
      "Set an explicit service account for the Active Directory identity provider in LFDS.",
      "Set the identity provider host to a specific domain controller when domain-controller discovery or DN handling appears to be part of the failure.",
    ],
    notes:
      "The source includes a SQL update for setting the default identity-provider host when the UI cannot edit it; use that only with appropriate change control or Support guidance.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "LFS received an unrecognized or unexpected error from LFDS. Service Call=LookupNestedGroupMembership",
        url: "https://answers.laserfiche.com/questions/233325/LFS-received-an-unrecognized-or-unexpected-error-from-LFDS-Service-CallLookupNestedGroupMembership",
        note: "Ting Sang from Laserfiche points to AD IdP service-account permission and domain-controller host settings as troubleshooting steps.",
      },
    ],
  },
  {
    id: "mobile-lfds-wcf-handshake-dmz",
    code: "LFDS-WCF-HANDSHAKE",
    message: "Mobile cannot configure Directory Server access from a DMZ server.",
    product: "Mobile",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche Mobile Server in a DMZ can fail Directory Server configuration because LFDS WCF endpoint security defaults to Kerberos/NTLM or uses an SPN that does not fit the DMZ authentication path.",
    symptoms: [
      "Mobile access can add repositories or Forms but Directory Server settings fail.",
      "The Mobile server is outside the AD domain or in a DMZ.",
      "LDAPS to internal AD may test successfully, but LFDS configuration still fails.",
    ],
    likelyFixes: [
      "Treat the error as Mobile Server to LFDS communication first, not just AD/LDAPS connectivity.",
      "Review LFDS web.config WCF endpoint security settings for Kerberos/NTLM assumptions.",
      "Check SPN configuration if Windows authentication is expected across the boundary.",
      "Open a Support case for endpoint-security changes because this depends on the network and authentication design.",
    ],
    notes:
      "Laserfiche employee reply says LFMS uses the endpoints presented by LFDS and recommends Support for detailed endpoint-security troubleshooting.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Unable to configure Mobile Access",
        url: "https://answers.laserfiche.com/questions/105833/Unable-to-configure-Mobile-Access",
        note: "Barna Zajzon from Laserfiche identifies an LFMS-to-LFDS WCF handshake/security settings issue in a DMZ scenario.",
      },
    ],
  },
  {
    id: "directory-server-windows-auth-0xc0000064",
    code: "0xC0000064",
    message: "Windows Authentication validation says the account does not exist.",
    product: "Directory Server",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "LFDS Windows Authentication can surface Windows security audit error 0xC0000064, which indicates the account name being validated was not found, often because the wrong domain is being used.",
    symptoms: [
      "Windows security logs show MICROSOFT_AUTHENTICATION_PACKAGE_V1_0 and Error Code 0xC0000064.",
      "The user believes the account exists and has previously accessed LFDS.",
      "Restarting LFDS, IIS, or Netlogon does not resolve the authentication failure.",
    ],
    likelyFixes: [
      "Check whether multiple domains or trusts are involved and whether LFDS is validating against the wrong domain.",
      "Verify the exact username format being submitted, including domain prefix or UPN.",
      "Review domain controller/security logs to confirm which domain rejected the account lookup.",
    ],
    notes:
      "The public thread has Laserfiche employee diagnostic guidance but no confirmed final fix from the requester.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Windows Authentication error accessing LFDS",
        url: "https://answers.laserfiche.com/questions/139289/Windows-Authentication-error-accessing-LFDS",
        note: "Brian McKeever from Laserfiche explains 0xC0000064 means the user does not exist and suggests checking for wrong-domain authentication.",
      },
    ],
  },
  {
    id: "windows-client-scanning-cannot-store-field-data-92",
    code: "SCANNING-CANNOT-STORE-FIELD-DATA",
    message: "Cannot store field data while scanning with a template.",
    product: "Windows Client/Desktop Client",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche Scanning 9.2.0.343 could fail to store field data when using a specific template; the requester confirmed upgrading server and client to 9.2.1.562 resolved it.",
    symptoms: [
      "Scanning with a specific template returns Cannot store field data.",
      "The same users can store documents without the template and assign the template afterward.",
      "The issue appears after upgrading from Laserfiche 9.1 to 9.2.0.343.",
    ],
    likelyFixes: [
      "Upgrade both Laserfiche Server and the Windows Client/Scanning components from 9.2.0.343 to 9.2.1.562 or later.",
      "As a temporary workaround, store the document without the template and assign the template after storage.",
      "Open a Support case if the same error persists on later 9.2 builds or only affects one template.",
    ],
    notes:
      "A Laserfiche employee asked the requester to open a Support case; the requester later confirmed the server/client upgrade fixed the issue.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "cannot store field data error in 9.2",
        url: "https://answers.laserfiche.com/questions/79050/cannot-store-field-data-error-in-92",
        note: "Requester reports upgrading LF Server and client from 9.2.0.343 to 9.2.1.562 resolved the template scanning store error.",
      },
    ],
  },
  {
    id: "web-client-ocr-queue-dcc-configuration",
    code: "WEBCLIENT-OCR-QUEUE",
    message: "Documents could not be sent to the OCR queue.",
    product: "Web Client Scanning",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Web Client OCR depends on Distributed Computing Cluster rather than the local OCR engine used by the Windows Client, so OCR queue errors should be checked against Web Client/DCC configuration.",
    symptoms: [
      "Generating text through OCR in Web Client reports that documents could not be sent to the OCR queue.",
      "OCR works from the Windows Client on the same document because that client can use a local OCR engine.",
      "Repository permissions and document settings may appear correct.",
    ],
    likelyFixes: [
      "Confirm Web Client is configured to use Distributed Computing Cluster for OCR.",
      "Verify DCC services, workers, and OCR task routing are available from the Web Client server.",
      "Compare Windows Client OCR success carefully because it does not prove the web OCR queue path is configured.",
    ],
    notes:
      "The public thread provides employee diagnostic direction but no requester-confirmed final configuration change.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error Message - OCR Queue",
        url: "https://answers.laserfiche.com/questions/172658/Error-Message--OCR-Queue",
        note: "Laserfiche employee response explains that Web Access/Web Client OCR uses DCC while the Windows Client can OCR locally.",
      },
    ],
  },
  {
    id: "windows-client-scanning-com-class-factory-ocr",
    code: "80080005 / 0x80040154",
    message: "COM class factory or Universal Capture class not registered while scanning.",
    product: "Windows Client/Desktop Client",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche Scanning 9.1.1 on Windows 7 x64 can throw COM class factory and class-not-registered errors when OCR or Universal Capture components are missing or need a known patch.",
    symptoms: [
      "Scanning returns Exception has been thrown by the target of an invocation.",
      "Technical details include COM class factory failed with 80080005.",
      "Basic mode may report a Universal Capture class-not-registered error 0x80040154.",
    ],
    likelyFixes: [
      "Verify the Laserfiche OCR engine is installed on the scanning workstation.",
      "Apply the Laserfiche Scanning/OCR patch referenced by the Laserfiche employee reply for the affected 9.1.1 environment.",
      "If the issue is scanner-specific, test TWAIN/ISIS drivers and reproduce with a simple scan profile before opening Support.",
    ],
    notes:
      "The selected guidance references Laserfiche KB articles for OCR engine installation and the Scanning issue; the public thread does not include a single universal root cause.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "LF 9.1.1 Scanning error on 64 bit Windows 7",
        url: "https://answers.laserfiche.com/questions/97333/LF-911-Scanning-error-on-64-bit-Windows-7",
        note: "Laserfiche employee guidance points to OCR installation and a related Scanning patch for the class factory/class-not-registered stack.",
      },
    ],
  },
  {
    id: "web-client-scanning-keepalive-timeout",
    code: "WEBSCAN-KEEPALIVE-TIMEOUT",
    message: "Web Client Scanning KeepAlive timeout.",
    product: "Web Client Scanning",
    versions: ["Version 11"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Long Web Client Scanning sessions can repeatedly relaunch or timeout when KeepAlive calls take too long; Laserfiche employee replies point to cumulative Scanning and WebTools Agent patches.",
    symptoms: [
      "Users scanning for a long time from Web Client see timeout behavior or repeated Scanning relaunch prompts.",
      "Signing out may not clear the condition, while rebooting the workstation sometimes does.",
      "The behavior may be more visible with load-balanced Web Client instances.",
    ],
    likelyFixes: [
      "Confirm the workstation has the latest Laserfiche Scanning patches for the installed major version.",
      "Update WebTools Agent and Web Client components together using the latest available Laserfiche 11 installer package.",
      "Check load balancer persistence/session affinity for Web Client if multiple Web Client instances are involved.",
      "Collect Web Client, WebTools Agent, and Scanning logs if the timeout continues after patching.",
    ],
    notes:
      "The thread includes employee guidance that timeout fixes were split across Scanning and WebTools Agent patches; exact build requirements depend on the installed Laserfiche 11 package.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Laserfiche Scanning timeout from web client",
        url: "https://answers.laserfiche.com/questions/199349/Laserfiche-Scanning-timeout-from-web-client",
        note: "Laserfiche employee response recommends the latest Scanning and WebTools Agent patches and calls out load-balanced Web Client behavior as a possible factor.",
      },
    ],
  },
  {
    id: "import-agent-ocr-license-check-failed-1158",
    code: "OCR-LICENSE-CHECK-FAILED / 1158",
    message: "OCR license check failed, followed by Error reading file.",
    product: "Import Agent",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Import Agent can move files to IAError after an OCR license check failure followed by error 1158; employee guidance points to image enhancement settings and the latest Import Agent hotfix.",
    symptoms: [
      "Import Agent logs OCR license check failed while OCRing a TIFF.",
      "The next error says there was an error executing the file import task, Error reading file, 1158.",
      "The scanned file is moved to the IAError folder but may import if moved back later.",
    ],
    likelyFixes: [
      "Check whether Perform image enhancement is enabled for the Import Agent profile and test with it disabled.",
      "Apply the latest Import Agent hotfix for the affected 9.x build.",
      "Verify OCR licensing and OCR components on the Import Agent machine.",
      "Open a Support case if the hotfix and image enhancement test do not resolve the failure.",
    ],
    notes:
      "The reviewed thread is Import Agent-focused even though it was discovered from a scanning query.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "OCR License Check Failed",
        url: "https://answers.laserfiche.com/questions/76951/OCR-License-Check-Failed",
        note: "Laserfiche employee response recommends checking image enhancement and applying the latest Import Agent hotfix for the OCR license check failure.",
      },
    ],
  },
  {
    id: "quick-fields-failed-to-load-image-qf9",
    code: "QF-FAILED-TO-LOAD-IMAGE",
    message: "Quick Fields failed to load image.",
    product: "Quick Fields",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields 9 can report failed to load image during scanning, page removal, OCR, or storing; reviewed threads point to a Quick Fields patch, scanner/image validity checks, and one workstation registry cleanup case.",
    symptoms: [
      "Quick Fields repeatedly displays Failed to load image.",
      "Metadata may populate correctly while the image preview or store step fails.",
      "The error may follow scanning, page removal, zone OCR, or a scanner feed problem.",
    ],
    likelyFixes: [
      "Apply the latest Quick Fields 9 patch referenced by Laserfiche Support for failed-load-image issues.",
      "Test whether the problem is scanner-specific by using another scan source or importing a known-good image.",
      "Check for paper jams, double feeds, invalid images, and scanner driver issues before treating it as a repository problem.",
      "If the issue is isolated to one workstation after reinstalling, review leftover Windows registration or profile state with Support.",
    ],
    notes:
      "Two reviewed threads describe similar symptoms; one has employee patch guidance and the other ended with a workstation registry/state resolution.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "QF 9: failed to load image",
        url: "https://answers.laserfiche.com/questions/74580/QF-9-failed-to-load-image",
        note: "Laserfiche employee guidance points to applying a Quick Fields patch and checking scan source or invalid image conditions.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "multiple failed to load image message",
        url: "https://answers.laserfiche.com/questions/105327/multiple-failed-to-load-image-message",
        note: "Requester reports the resolution appeared tied to leftover Windows registry or machine state after reinstall attempts.",
      },
    ],
  },
  {
    id: "quick-fields-permission-denied-store-document-class",
    code: "QF-PERMISSION-DENIED-STORE",
    message: "Permission denied when storing from Quick Fields.",
    product: "Quick Fields",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Quick Fields can retrieve documents successfully through one repository connection but fail with Permission denied on Store All when the document class storage connection uses an account without sufficient rights.",
    symptoms: [
      "Quick Fields retrieves source documents with Laserfiche Capture Engine.",
      "Clicking Store All returns Permission denied in the output pane.",
      "The scanning/source connection and the storage/document class connection may use different Laserfiche logins.",
    ],
    likelyFixes: [
      "Open the Quick Fields document class options and verify the repository connection profile used for storage.",
      "Grant the storage user create-document rights in the destination folder and rights to set the target template/fields.",
      "Migrate or update the document class connection profile if it is still using an old or insufficient account.",
      "Retest Store All after confirming both source and destination repository permissions.",
    ],
    notes:
      "Community replies identify separate Quick Fields repository logins and insufficient document class field/template permissions as the likely cause.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Permission denied was showed up on output screen when clicked store button.( Quickfield 9.0 )",
        url: "https://answers.laserfiche.com/questions/76088/-Permission-denied-was-showed-up-on-output-screen-when-clicked-store-button-Quickfield-90-",
        note: "Community guidance explains checking the document class repository connection profile and confirms insufficient metadata/field permissions can cause the store failure.",
      },
    ],
  },
  {
    id: "web-client-scanning-metadata-template-fields-1021",
    code: "WEBSCAN-METADATA-FIELDS",
    message: "Web Client Scanning metadata error when scanning into existing documents.",
    product: "Web Client Scanning",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Web Client 10.2 could fail when scanning pages into existing documents that have both a template and independent fields; Laserfiche confirmed the issue was fixed in Web Client 10.2.1.",
    symptoms: [
      "The error only occurs when scanning into an existing document from Web Client.",
      "Affected documents contain both a template and independent fields.",
      "Scanning into a separate file and merging later works as a workaround.",
    ],
    likelyFixes: [
      "Upgrade Web Client to 10.2.1 or later.",
      "Until upgraded, scan to a separate file and merge the pages into the existing document.",
      "Confirm the failing document has both template fields and independent fields before applying this fix pattern.",
    ],
    notes:
      "The fix is specific to the Web Client 10.2 scanning metadata bug confirmed by Laserfiche.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Scanning Error - Web Client & Metadata",
        url: "https://answers.laserfiche.com/questions/118750/Scanning-Error--Web-Client--Metadata",
        note: "Laserfiche employee response says the issue is fixed in Web Client 10.2.1.",
      },
    ],
  },
  {
    id: "web-client-scanning-invalid-connection-tags",
    code: "WEBSCAN-INVALID-CONNECTION",
    message: "Invalid connection when launching Web Client Scanning.",
    product: "Web Client Scanning",
    versions: ["Version 11"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Web Client Scanning 11 can fail at launch with repeated Invalid connection messages and a NullReferenceException while reading repository tags; the public thread has employee follow-up but no confirmed fix.",
    symptoms: [
      "Launching Basic or Standard Web Client Scanning returns Invalid connection several times.",
      "Technical details include NullReferenceException in RetrieveAllTags or ScanSettings.ReadTags.",
      "Reinstalling Scanning, WebTools Agent, Office Integration, and Visual C++ redistributables may not resolve it.",
    ],
    likelyFixes: [
      "Check whether the latest Web Client, WebTools Agent, and Desktop Scanning updates are installed together.",
      "Review repository tag configuration and whether the Web Client service can retrieve all tags.",
      "Collect Web Client Scanning logs and open a Support case because no confirmed public fix was posted.",
    ],
    notes:
      "This entry is intentionally unresolved so administrators can match the NullReferenceException/RetrieveAllTags stack.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Web Client Scanning gives Invalid connection error",
        url: "https://answers.laserfiche.com/questions/212027/Web-Client-Scanning-gives-Invalid-connection-error",
        note: "Thread includes Laserfiche employee follow-up for a Web Client 11 Update 7 scanning launch failure, but no confirmed final fix is public.",
      },
    ],
  },
  {
    id: "web-client-scanning-temp-file-not-found",
    code: "WEBSCAN-TEMP-FILE-NOT-FOUND",
    message: "Could not find file in the Laserfiche Scanning temp folder.",
    product: "Web Client Scanning",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Web Client Scanning can intermittently report that a temporary TIFF file under AppData\\Local\\Temp\\Laserfiche Scanning cannot be found; the reviewed thread has no public replies.",
    symptoms: [
      "Users scanning through Web Access/Web Client see Could Not Find File.",
      "The missing path points to C:\\Users\\username\\AppData\\Local\\Temp\\Laserfiche Scanning\\*.tif.",
      "Restarting may temporarily clear the issue, and scanning can work before and after the failure.",
    ],
    likelyFixes: [
      "Check antivirus, endpoint protection, or cleanup tools that may remove files from the Laserfiche Scanning temp folder.",
      "Confirm the user can write to the local temp folder and that the path is not redirected or cleaned during scanning.",
      "Collect Web Client Scanning logs and reproduce with a simple scan job because no confirmed public fix was posted.",
    ],
    notes:
      "Published as unresolved because the temp-file path is a recognizable Web Client Scanning failure pattern.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Web Scan Error : Could Not Find File",
        url: "https://answers.laserfiche.com/questions/183391/Web-Scan-Error--Could-Not-Find-File",
        note: "Thread documents the intermittent AppData temp-file-not-found error but has no public replies.",
      },
    ],
  },
  {
    id: "installer-sidebyside-common-controls",
    code: "INSTALLER-SIDEBYSIDE-COMMON-CONTROLS",
    message: "SideBySide event for Laserfiche Server Setup.exe common controls.",
    product: "Laserfiche Installer",
    versions: ["Version 9", "Version 10"],
    confidence: "medium",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche Server can log a Windows SideBySide common-controls conflict for Setup.exe; Laserfiche employee guidance says it can be ignored and was fixed for Version 10.",
    symptoms: [
      "Windows Application event log records a SideBySide error for Common Files\\Laserfiche\\Server\\Setup.exe.",
      "The event mentions conflicting x64 and x86 Microsoft.Windows.Common-Controls manifests.",
      "The event appears during normal server operation or after installation rather than as a current setup failure.",
    ],
    likelyFixes: [
      "Do not treat this SideBySide event as the cause of unrelated Workflow or integration hangs.",
      "If the environment is still on Laserfiche 9.x, document the event and focus troubleshooting on the actual failing process.",
      "Upgrade to Version 10 or later if this benign event needs to be eliminated.",
    ],
    notes:
      "Laserfiche employee replies explicitly say the event can be ignored and does not affect installation or normal server operation.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "SideBySide Error in Application event log",
        url: "https://answers.laserfiche.com/questions/87873/SideBySide-Error-in-Application-event-log",
        note: "Miruna Babatie from Laserfiche says the SideBySide event can be ignored and was fixed for Version 10.",
      },
    ],
  },
  {
    id: "installer-client-0x643-install-state",
    code: "0x00000643",
    message: "Failed to install Laserfiche Client because installation state cannot be retrieved.",
    product: "Laserfiche Installer",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche Client 9.1.1 installation can fail with 0x00000643 after a prior install/uninstall leaves Windows Installer state behind, especially if the original install was performed by another user.",
    symptoms: [
      "Client setup reports Unable to retrieve information about the installation state of Laserfiche Client.",
      "The log says Failed to install Laserfiche Client (lf_en.msi). Error code: 0x00000643.",
      "A previous Client install was removed but reinstall still fails.",
    ],
    likelyFixes: [
      "Run the Microsoft Program Install and Uninstall troubleshooter to clean leftover Windows Installer state.",
      "Reboot the workstation after cleanup before rerunning Laserfiche Client setup.",
      "If cleanup does not resolve it, collect setup logs and open a Support case rather than continuing manual registry deletion.",
    ],
    notes:
      "The reviewed case involved Windows XP and Laserfiche Client 9.1.1.548; use this as a Windows Installer state cleanup pattern, not as a version-specific patch.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Failed to install Laserfiche Client",
        url: "https://answers.laserfiche.com/questions/69857/Failed-to-install-Laserfiche-Client",
        note: "Alexander Huang from Laserfiche recommends Microsoft's install/uninstall cleanup utility for residual install state.",
      },
    ],
  },
  {
    id: "installer-log-file-open-error",
    code: "INSTALLER-LOG-FILE-OPEN",
    message: "Error opening installation log file.",
    product: "Laserfiche Installer",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche Scanning setup can surface the Windows Installer error opening installation log file; Laserfiche employee guidance treats it as a Windows Installer/log path issue rather than a Laserfiche-specific installer defect.",
    symptoms: [
      "Laserfiche Scanning installer reports Error opening installation log file.",
      "The issue appears while installing Cloud scanning components.",
      "The error text asks to verify the specified log file location exists and is writable.",
    ],
    likelyFixes: [
      "Run setup from a local path with a writable temp/log location.",
      "Clear stale Windows Installer temp/log state and confirm the installing account has write access to the log folder.",
      "Follow Microsoft guidance for Windows Installer error opening installation log file if Laserfiche setup logs do not start.",
    ],
    notes:
      "The public thread points to Microsoft Windows Installer remediation and does not include Laserfiche-specific steps.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Cloud scanning installation throws Error opening installation log file.",
        url: "https://answers.laserfiche.com/questions/163490/Cloud-scanning-installation-throws-Error-opening-installation-log-file",
        note: "Robert Strickland from Laserfiche says this is a Windows Installer error, not a Laserfiche-specific installer issue.",
      },
    ],
  },
  {
    id: "installer-1316-account-already-exists",
    code: "1316",
    message: "The specified account already exists.",
    product: "Laserfiche Installer",
    versions: ["Version 9", "Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche Client upgrades can fail with Windows Installer error 1316 when leftover installation state or mixed component versions remain after an uninstall.",
    symptoms: [
      "Installing Laserfiche Client 9.2 over an earlier 9.x client returns Error 1316. The specified account already exists.",
      "The installer then reports that installation failed and will be rolled back.",
      "Uninstalling from Programs and Features alone may not clear the condition.",
    ],
    likelyFixes: [
      "Run the Microsoft Program Install and Uninstall cleanup utility first.",
      "If cleanup is insufficient, remove leftover Laserfiche application folders and Laserfiche-related registry state using normal change-control precautions.",
      "Reboot before rerunning the Laserfiche installer.",
      "Check for mixed Laserfiche component versions, such as OCR at a newer build than the Client.",
    ],
    notes:
      "The requester confirmed manual cleanup plus reboot fixed the Laserfiche 9.2 installation; a later community reply describes mixed 9.1/10.4.1 components as another trigger.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error 1316: The specified account already exists when installing LF 9.2",
        url: "https://answers.laserfiche.com/questions/69676/Error-1316-The-specified-account-already-exists-when-installing-LF-92",
        note: "Justin Pava from Laserfiche recommends Microsoft's installation cleanup utility; requester confirmed deeper cleanup and reboot resolved the install.",
      },
    ],
  },
  {
    id: "installer-1935-icu-commit-0x800700c1",
    code: "1935 / 1712 / 0x800700C1",
    message: "Error while committing system changes during Windows Client installation.",
    product: "Laserfiche Installer",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Windows Client 10.2.1 installation can fail while committing system changes with a Laserfiche.ICU assembly error; community replies suggest local installation media and elevated setup execution.",
    symptoms: [
      "Laserfiche Rio 10.2.1 module installation reports Error 1935.",
      "The assembly details mention Laserfiche.ICU.Release and 0x800700C1.",
      "After acknowledging the error, repeated 1712 errors appear and setup says rollback may not complete automatically.",
    ],
    likelyFixes: [
      "Copy the Support, Client, and OCR folders from installation media to a local folder before running setup.",
      "Run setup as administrator from the local folder.",
      "If the issue persists on a clean workstation, collect setup logs and open a Support case because no employee-confirmed final fix was posted.",
    ],
    notes:
      "The public thread has community workaround suggestions but no requester-confirmed or employee-confirmed final resolution.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Error while Committing System Changes during Windows Client 10.2.1 installation",
        url: "https://answers.laserfiche.com/questions/129200/Error-while-Committing-System-Changes-during--Windows-Client-1021-installation",
        note: "Community replies suggest copying installer folders locally and running setup with elevated rights for the 1935/1712 install failure.",
      },
    ],
  },
  {
    id: "installer-lf10-lang-xml-missing",
    code: "INSTALLER-LANG-XML-MISSING",
    message: "Laserfiche 10 setup fails to launch because lang.xml is missing.",
    product: "Laserfiche Installer",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche 10 setup can fail to launch when the Setup directory is missing lang.xml; Laserfiche employee guidance provides the missing language file workaround.",
    symptoms: [
      "Autorun or setup for Laserfiche 10 fails immediately during launch.",
      "The installer media's Setup directory is missing lang.xml.",
      "The problem appears before normal component selection or installation logs are useful.",
    ],
    likelyFixes: [
      "Check whether lang.xml exists in the Setup directory shown by the installer error.",
      "Restore lang.xml from known-good Laserfiche 10 installation media or the file provided by Support.",
      "Re-extract or recopy the installation media if other setup files are missing.",
    ],
    notes:
      "The reviewed thread does not include the exact screenshot text, but employee guidance centers on the missing lang.xml file.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error while launching LF 10 setup",
        url: "https://answers.laserfiche.com/questions/101980/Error-while-launching-LF-10-setup",
        note: "Justin Pava from Laserfiche asks whether lang.xml is present and provides a replacement file renamed from lang.txt.",
      },
    ],
  },
  {
    id: "windows-client-text-extractor-load-failed",
    code: "TEXT-EXTRACTOR-LOAD-FAILED",
    message: "Failed to load Text Extractor.",
    product: "Windows Client/Desktop Client",
    versions: ["Version 9"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "The Windows Client can fail to load the Text Extractor while OCR/text extraction works on another workstation; the public thread has diagnostic guidance but no confirmed fix.",
    symptoms: [
      "A workstation reports Failed to load Text Extractor.",
      "The issue may affect all OCR/text extraction attempts on that workstation.",
      "Another workstation with a similar Laserfiche installation may not reproduce the error.",
    ],
    likelyFixes: [
      "Test the same document on another workstation to distinguish document-specific issues from local installation issues.",
      "Compare OS, Laserfiche Client/OCR components, and installed text extraction components between working and failing machines.",
      "Repair or reinstall the client/OCR components if the failure is isolated to one workstation.",
      "Open a Support case with a sample document if the failure is document-specific.",
    ],
    notes:
      "Published as unresolved because the employee reply provides useful diagnostic questions but no final public resolution.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Failed to Load Text Extractor",
        url: "https://answers.laserfiche.com/questions/61140/Failed-to-Load-Text-Extractor",
        note: "Alexander Huang from Laserfiche recommends isolating document-specific versus workstation-specific causes and opening Support with a reproducible sample.",
      },
    ],
  },
  {
    id: "federated-search-endpoint-mismatch-103",
    code: "FEDSEARCH-ENDPOINT-MISMATCH",
    message: "The search service has not been started, or the endpoint does not match.",
    product: "Federated Search",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Federated Search 10.3 admin can report that the search service has not started or the endpoint does not match when SSL/FQDN endpoint values remain set to localhost or a wildcard certificate name.",
    symptoms: [
      "Federated Search installs and activates, but the admin page reports the search service has not been started or the endpoint does not match.",
      "Federated Search services are running.",
      "Config files contain https://localhost/FederatedSearchApi or a wildcard host such as https://*.client.com.",
    ],
    likelyFixes: [
      "Bind a valid SSL certificate on port 443 before changing endpoint values.",
      "Stop the FederatedSearch service.",
      "Restart the FederatedSearchAdminAppPool and FederatedSearchAppPool in IIS.",
      "Replace localhost or wildcard endpoint values with the server FQDN in the SearchSite, AdminSite, SearchService, FederatedSearch.json, and ServiceContainer.json configuration files.",
      "Start the FederatedSearch service and retest the admin page.",
    ],
    notes:
      "The source calls this a Federated Search 10.3 issue and includes a requester confirmation for wildcard SSL endpoint replacement.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Federated Search Setup Error",
        url: "https://answers.laserfiche.com/questions/136138/Federated-Search-Setup-Error",
        note: "Yuhao Gu from Laserfiche provides the SSL/FQDN endpoint workaround; requester later confirms replacing wildcard endpoint values fixed repository add behavior.",
      },
    ],
  },
  {
    id: "installer-lf11-rollback-generic",
    code: "INSTALLER-ROLLBACK-FAILED",
    message: "Installation failed and the system may not be able to roll back automatically.",
    product: "Laserfiche Installer",
    versions: ["Version 11"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche 11 setup can fail with a generic rollback warning on a new workstation; the reviewed public thread has no replies, so this entry is for recognition and evidence gathering.",
    symptoms: [
      "Laserfiche 11 installer reports Installation failed.",
      "A follow-up warning says the system may not be able to roll back the installation automatically.",
      "The installer was downloaded locally and run by an administrator.",
    ],
    likelyFixes: [
      "Rerun setup with logging enabled and capture the component MSI log that fails before the rollback warning.",
      "Confirm the installer files are local, unblocked, and run elevated.",
      "Check Windows Event Viewer and Programs and Features for partially installed Laserfiche components before retrying.",
      "Open a Support case with setup logs because the public thread has no confirmed fix.",
    ],
    notes:
      "This is intentionally unresolved; the generic rollback message by itself is not enough to identify the failing MSI component.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Installation Error: Installation failed. The system may not be able to roll back the installation automatically",
        url: "https://answers.laserfiche.com/questions/224245/Installation-Error-Installation-failed-The-system-may-not-be-able-to-roll-back-the-installation-automatically",
        note: "Thread documents the Laserfiche 11 rollback warning on a new computer but has no public replies.",
      },
    ],
  },
  {
    id: "installer-aspnet45-server2016-prerequisite",
    code: "ASPNET45-PREREQUISITE",
    message: "ASP.NET 4.5 prerequisite is not detected on Windows Server 2016.",
    product: "Laserfiche Installer",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche 10-era web component installers can fail prerequisite detection for ASP.NET 4.5 on Windows Server 2016, where ASP.NET is exposed through newer .NET/IIS feature names.",
    symptoms: [
      "Laserfiche web component setup asks for ASP.NET 4.5 on Windows Server 2016.",
      "ASP.NET 4.6 is installed under .NET Framework features but setup still does not pass prerequisites.",
      "The issue is reported while installing LFDS, Forms Essentials, or Web Client components.",
    ],
    likelyFixes: [
      "Enable ASP.NET under the IIS Web Server > Application Development role services, not only under .NET Framework features.",
      "On Server 2016/2019-style systems, run DISM from an elevated command prompt: dism /online /enable-feature /featurename:IIS-ASPNET45 /all.",
      "After enabling IIS ASP.NET features, rerun the Laserfiche prerequisite check.",
      "Avoid bypassing the prerequisite without enabling the IIS ASP.NET dependency because the site may fail with HTTP errors afterward.",
    ],
    notes:
      "Laserfiche employee guidance identifies ASP.NET as a Windows/IIS feature on Server 2016; community replies confirm the DISM feature-enable command worked where checkbox-only approaches did not.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Unable to install ASP.NET 4.5 in Windows DataCenter 2016",
        url: "https://answers.laserfiche.com/questions/114458/Unable-to-install-ASPNET-45-in-Windows-DataCenter-2016",
        note: "Miruna Babatie from Laserfiche points to ASP.NET under Windows/IIS features; community replies confirm enabling IIS-ASPNET45 with DISM resolved prerequisite detection.",
      },
    ],
  },
  {
    id: "workflow-sdk83-uninstall-prerequisite",
    code: "WORKFLOW-SDK83-UNINSTALL",
    message: "Uninstall Workflow SDK 8.3 Failed.",
    product: "Workflow",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "During a Workflow 8.3 to 9.2.1 upgrade, the prerequisite step can fail to uninstall Workflow SDK 8.3 until the SDK is repaired or reinstalled from the old media.",
    symptoms: [
      "Workflow 9.2.1 prerequisites report Uninstall Workflow SDK 8.3 Failed.",
      "Workflow SDK 8.3 may have already been manually removed from Control Panel.",
      "Running the wrong installer from the old media may only launch .NET Framework setup.",
    ],
    likelyFixes: [
      "Locate the Workflow SDK 8.3 installer in the old media, usually under the x86 folder as WorkflowSDKSetup.msi.",
      "Reinstall or repair Workflow SDK 8.3.",
      "Rerun the Workflow 9.2.1 installer so its prerequisite handling can uninstall the SDK cleanly.",
      "If the SDK still appears stuck in Add/Remove Programs, use the Microsoft install/uninstall cleanup utility as Laserfiche suggested.",
    ],
    notes:
      "The requester confirmed reinstalling Workflow SDK 8.3 allowed the 9.2.1 install process to handle the upgrade without needing MS Fixit.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Uninstall Workflow SDK 8.3 Failed",
        url: "https://answers.laserfiche.com/questions/73497/Uninstall-Workflow-SDK-83-Failed",
        note: "Raymond Cruz and Miruna Babatie from Laserfiche guide the requester to reinstall Workflow SDK 8.3 from the correct x86 MSI before rerunning setup.",
      },
    ],
  },
  {
    id: "full-text-search-9493-swap-tag-corrupted",
    code: "9493",
    message: "The search catalog failed to start. The catalog settings are mis-configured.",
    product: "Full Text Search",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "A storage or server crash can leave a Full Text Search catalog unable to start with SWAP tag corrupted and 9493; Laserfiche employee guidance is to remove the catalog registration and rebuild from clean index files.",
    symptoms: [
      "LFFTS Event Viewer logs say the search catalog failed to start.",
      "A related event says SWAP tag corrupted.",
      "Administration Console Indexing Properties returns 9493 and cannot display the catalog settings.",
    ],
    likelyFixes: [
      "Back up the registry before making changes.",
      "Stop the Laserfiche Full Text Search and Indexing service.",
      "Delete the registry key for the affected catalog under HKEY_LOCAL_MACHINE\\SOFTWARE\\Laserfiche\\LFFTS\\Database.",
      "Delete the old catalog index files, usually from the SEARCH folder under the repository path.",
      "Restart LFFTS, create a new catalog, and reindex the repository.",
    ],
    notes:
      "This is an employee-confirmed registry and index-file rebuild path for a catalog that cannot be removed through Administration Console.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Search Catalog Failed to Start - SWAP Tag Corrupted",
        url: "https://answers.laserfiche.com/questions/55622/Search-Catalog-Failed-to-Start--SWAP-Tag-Corrupted",
        note: "Alexander Huang from Laserfiche recommends deleting the affected catalog registry key, deleting old index files, and recreating the catalog.",
      },
    ],
  },
  {
    id: "audit-trail-fts-invalid-catalog-status",
    code: "LFFTS-INVALID-CATALOG-STATUS",
    message: "Failed to retrieve audit data because the Audit Trail search catalog has invalid status.",
    product: "Audit Trail",
    versions: ["Version 11"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "After upgrading Audit Trail 11, searches can fail when the underlying Audit Trail Full Text Search catalog is stopped or has invalid catalog status; Laserfiche recommends recreating the Audit Trail catalog.",
    symptoms: [
      "Audit Trail search reports Failed to retrieve audit data and shows an OperationID.",
      "Event or stack traces include STR_WARN_LFFTS_FAILED_SEARCH.",
      "The stack mentions Invalid catalog status for the LfAudit search catalog.",
    ],
    likelyFixes: [
      "Open the Audit Trail configuration interface and delete/recreate the Audit Trail search catalog.",
      "Allow Audit Trail to repopulate the catalog from in-scope Laserfiche Server or Forms audit data.",
      "Check LFFTS warnings first when Audit Trail has no direct Event Viewer error for the OperationID.",
    ],
    notes:
      "Although the visible product is Audit Trail, employee replies identify the failure as an LFFTS catalog-status problem.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error When Searching Audit Trail After Upgrading to 11.0.2306.3549",
        url: "https://answers.laserfiche.com/questions/216591/Error-When-Searching-Audit-Trail-After-Upgrading-to-11023063549",
        note: "Samuel Carson from Laserfiche says the stack is LFFTS-side invalid catalog status and recommends deleting/recreating the Audit Trail catalog.",
      },
    ],
  },
  {
    id: "full-text-search-event172-invalid-catalog-status",
    code: "C00080A9 / 9421",
    message: "There was an error sending an HTTP request to LFFTS.",
    product: "Full Text Search",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Repository event ID 172 can report HTTP 500 from LFFTS with invalid catalog status when search index files are on a DFS share or otherwise locked.",
    symptoms: [
      "Repository server logs repeated Event Viewer errors for HTTP requests to LFFTS.",
      "The message includes Invalid catalog status for the operation for the search catalog.",
      "Administration Console may show Invalid Search Catalog Status 9421.",
    ],
    likelyFixes: [
      "Detach and reattach the search catalog as a temporary recovery step.",
      "Move search index files off DFS or other storage that locks index files.",
      "Point the search index to a non-DFS drive and reindex if catalog status continues to flip.",
    ],
    notes:
      "This entry is community-confirmed. The reviewed thread has no Laserfiche employee response.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Event Viewer Error clarification ID:172",
        url: "https://answers.laserfiche.com/questions/161571/Event-Viewer-Error-clarification-ID172",
        note: "Community reply ties the invalid catalog status to search files stored on DFS and recommends moving the index files to non-DFS storage.",
      },
    ],
  },
  {
    id: "full-text-search-9498-session-reset",
    code: "9498",
    message: "Failed to find the full-text search session. The connection to the search engine might have been reset.",
    product: "Full Text Search",
    versions: ["Version 9"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Search can fail with 9498 when the client loses or cannot find its Full Text Search session; the public thread has only community suggestions to check or rebuild the search index.",
    symptoms: [
      "Client search fails with 9498.",
      "The message says the connection to the search engine might have been reset.",
      "Changing SearchDeleteTime did not resolve the reviewed case.",
    ],
    likelyFixes: [
      "Check whether the Laserfiche Full Text Search service is stable and reachable.",
      "Review catalog status in Administration Console.",
      "Regenerate the search index files if the catalog appears corrupt or unstable.",
      "Open a Support case if 9498 repeats because no public employee-confirmed fix was posted.",
    ],
    notes:
      "Published as unresolved because the thread lacks a confirmed final fix or Laserfiche employee response.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Laserfiche Error 9498",
        url: "https://answers.laserfiche.com/questions/80739/Laserfiche-Error-9498",
        note: "Community replies suggest checking or regenerating search index files; the requester did not post a confirmed resolution.",
      },
    ],
  },
  {
    id: "full-text-search-7801-crash-readonly",
    code: "7801",
    message: "General failure in the search engine while catalog switches to read-only.",
    product: "Full Text Search",
    versions: ["Version 9", "Version 10", "Version 12"],
    confidence: "medium",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "LFFTS can crash during optimization or hit corrupt index data, then restart the catalog in read-only mode with 7801; reviewed guidance points to Support dump review or deleting and rebuilding the search index.",
    symptoms: [
      "LFFTS writes dump files and logs fatal errors during optimization.",
      "Logs include Search catalog idx err: 7801.",
      "The catalog is switched to read-only mode and indexing stops.",
      "Workflow or other processes that rely on indexing may fail while the catalog is read-only.",
    ],
    likelyFixes: [
      "If dump files are created, open a Support case and attach the .MDMP and .XML files named in the event log.",
      "Delete the search index and reindex the repository when corruption is confirmed.",
      "Upgrade from older 9.x builds when Support indicates the issue is fixed or mitigated in later versions.",
      "Exclude search index files from backup or antivirus processes that may lock or corrupt IDX files.",
    ],
    notes:
      "Version 12 is included because 7801 is in the official current error listing; the reviewed crash/read-only threads are older 9.x/10.x environments.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 7801 as General failure in the search engine.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "LFFTS Crashing and setting repository in read only mode.",
        url: "https://answers.laserfiche.com/questions/113278/LFFTS-Crashing-and-setting-repository-in-read-only-mode",
        note: "Laserfiche employee responses request LFFTS dump files and later report the end user deleted the search index and reindexed the repository.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Prop tree failed to get record.",
        url: "https://answers.laserfiche.com/questions/117309/Prop-tree-failed-to-get-record",
        note: "Miruna Babatie from Laserfiche explains LFFTS may only fail when it reaches a corrupted part of the catalog and recommends regenerating the catalog.",
      },
    ],
  },
  {
    id: "full-text-search-memory-usage-config-cap",
    code: "LFFTS-MEMORY-USAGE",
    message: "LFFTS uses most available server memory.",
    product: "Full Text Search",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "LFFTS may use all available memory for performance, even when no searches or queued indexing tasks are visible; Laserfiche guidance is to use the Search Engine Configuration Utility to cap memory when other services share the server.",
    symptoms: [
      "LFFTS process memory grows to several gigabytes while queues show no active work.",
      "Server memory pressure can prevent users from accessing Laserfiche.",
      "Restarting the service or server temporarily clears memory use.",
    ],
    likelyFixes: [
      "Run the Search Engine Configuration Utility and review showmem output.",
      "Set an LFFTS memory cap appropriate for the server and other services running on it.",
      "Confirm the exact LFFTS.exe build when asking Support to review abnormal memory behavior.",
      "If memory remains uncontrolled or the catalog becomes read-only, investigate indexing/catalog corruption separately.",
    ],
    notes:
      "Employee guidance says high memory use can be expected behavior, but later community replies suggest some environments still needed deeper indexing/catalog troubleshooting.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "LFFTS Memory Usage",
        url: "https://answers.laserfiche.com/questions/139331/LFFTS-Memory-Usage",
        note: "Yiping Chi from Laserfiche explains LFFTS memory management and recommends using the config utility to cap memory when other services need RAM.",
      },
    ],
  },
  {
    id: "full-text-search-max-pages-lfword",
    code: "LFFTS-MAX-PAGES",
    message: "Reached max pages in page system for lfword.idx.",
    product: "Full Text Search",
    versions: ["Version 11"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "LFFTS can crash with Reached max pages in page system for lfword.idx when the dictionary file reaches its supported page limit; Laserfiche employee guidance is to increase DictionaryFileExpansionOption.",
    symptoms: [
      "LFFTS logs Reached max pages in page system for lfword.idx.",
      "A related error says Required invalid page 4294967293 in page system.",
      "The LFFTS service crashes.",
    ],
    likelyFixes: [
      "Stop the Laserfiche Full Text Indexing and Search service.",
      "In HKEY_LOCAL_MACHINE\\SOFTWARE\\Laserfiche\\LFFTS\\Config, set DictionaryFileExpansionOption to a multiplier such as 4.",
      "Restart the Laserfiche Full Text Indexing and Search service.",
      "Open a Support case when the environment is new or the error seems unrelated to catalog size.",
    ],
    notes:
      "The employee reply clarifies that pages refer to pages in lfword.idx, not repository document pages.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "LFFTS: Reached max pages in page system",
        url: "https://answers.laserfiche.com/questions/197162/LFFTS-Reached-max-pages-in-page-system",
        note: "Alexander Huang from Laserfiche explains DictionaryFileExpansionOption and the lfword.idx page limit.",
      },
    ],
  },
  {
    id: "full-text-search-index-mirror-not-supported",
    code: "LFFTS-INDEX-MIRROR",
    message: "Mirroring search index files is not a supported corruption failover strategy.",
    product: "Full Text Search",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche does not provide a mirrored search-index copy that automatically takes over when index files become corrupt; LFFTS failover can switch between service instances but shares one set of index files.",
    symptoms: [
      "Administrators want a mirror index to reduce downtime when catalog state becomes unknown or corrupt.",
      "Rebuilding the index is disruptive for large repositories.",
      "LFFTS failover is available but does not protect against corrupt index files.",
    ],
    likelyFixes: [
      "Use LFFTS failover for service-instance availability, understanding both instances share the same index files.",
      "Do not rely on a replicated stale index copy unless Support has approved the architecture.",
      "Increase Windows service shutdown timeout if service-control termination is contributing to index rollback events.",
      "Plan index rebuild procedures and maintenance windows for corruption recovery.",
    ],
    notes:
      "This is not an error code, but it documents a common recovery-design misconception for Full Text Search.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Mirror Laserfiche Search Index",
        url: "https://answers.laserfiche.com/questions/59905/Mirror-Laserfiche-Search-Index",
        note: "Laserfiche employee replies state mirrored index failover is not available, LFFTS failover shares index files, and LFFTS can roll back IDX files on restart.",
      },
    ],
  },
  {
    id: "full-text-search-9491-readonly-optimization",
    code: "9491",
    message: "The search catalog is in read-only mode.",
    product: "Full Text Search",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Full Text Search 10.3 can put a catalog into read-only mode with 9491 during optimization or text-provider failures; Laserfiche employee guidance points to disabling optimization, recreating the catalog, and checking IFilters/problematic file types.",
    symptoms: [
      "Administration Console reports 9491 and says full-text search is available but indexing and stop-word updating are disabled.",
      "Event Viewer reports Failed to modify the read-only search catalog.",
      "TextProvider warnings mention an unhandled exception while extracting text from Office documents such as xlsx.",
    ],
    likelyFixes: [
      "Check for problematic IFilters or corrupted electronic documents named in TextProvider warnings.",
      "Install a proper IFilter for the file type or add problematic extensions to the BlockedExtensions registry list.",
      "For the known 10.3 issue, disable optimization using the Laserfiche-provided registry value, restart LFFTS, and recreate the catalog.",
      "Upgrade to the next 10.3 release or later if the environment matches the known optimization issue.",
      "Open Support if TRACE WordTree.cpp messages or read-only behavior continue after the workaround.",
    ],
    notes:
      "Cangfei Xiang from Laserfiche says the issue would be resolved in the next 10.3 release and confirms the registry workaround approach.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Search Catalog Error 9491",
        url: "https://answers.laserfiche.com/questions/134494/Search-Catalog-Error-9491",
        note: "Cangfei Xiang from Laserfiche discusses the 10.3 optimization workaround and confirms the registry-key approach before recreating the catalog.",
      },
    ],
  },
  {
    id: "office-integration-request-entity-too-large-word",
    code: "REQUEST-ENTITY-TOO-LARGE",
    message: "Request Entity Too Large when viewing a large Word document.",
    product: "Office Integration",
    versions: ["Version 12"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Large Word documents can show Request Entity Too Large in Web Client while the same document opens in the desktop client; the reviewed thread has no public replies.",
    symptoms: [
      "Opening a large Word document in Web Client reports Request Entity Too Large.",
      "The same document can be viewed from the desktop client.",
      "Server logs include a corresponding large request error.",
    ],
    likelyFixes: [
      "Check Web Client and reverse-proxy/IIS request size limits for document preview and Office rendering paths.",
      "Compare with Office Online Server or Web Client document display configuration if in use.",
      "Collect Web Client server logs and open Support because no confirmed public fix was posted.",
    ],
    notes:
      "Published as unresolved for recognition; this is Web Client document viewing with Office documents rather than the desktop Office add-in.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Request Entity Too Large error on large size Word document",
        url: "https://answers.laserfiche.com/questions/235453/Request-Entity-Too-Large-error-on-large-size-Word-document",
        note: "Thread documents the Version 12 large Word document error but has no public replies.",
      },
    ],
  },
  {
    id: "office-integration-webtools-invisible-form",
    code: "OFFICE-INVISIBLE-FORM",
    message: "This form is invisible while opening Office documents through WebTools Agent.",
    product: "Office Integration",
    versions: ["Version 11", "Version 12"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Office Integration can repeatedly prompt to download the integration or show this form is invisible when WebTools Agent is not connected to the local browser/Office integration endpoint.",
    symptoms: [
      "Opening a document in local Word from Laserfiche repeatedly prompts to download Office Integration.",
      "A this form is invisible message appears after boot or during Office Integration startup.",
      "WebTools Agent may show disconnected or plugin.laserfichelocalhost.com on port 18437 may not respond locally.",
    ],
    likelyFixes: [
      "In the repository user options, Advanced details, check whether WebTools Agent reports connected.",
      "Confirm WebTools Agent is running and matches the Office Integration/Web Client version expectations.",
      "Check local firewall or endpoint protection rules for plugin.laserfichelocalhost.com and port 18437.",
      "Open Support if WebTools Agent is running but cannot connect locally.",
    ],
    notes:
      "The thread is Cloud-originated, but the WebTools Agent connectivity pattern is useful for self-hosted Office Integration troubleshooting.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "this form is invisible error for Laserfiche Office Integration",
        url: "https://answers.laserfiche.com/questions/235016/this-form-is-invisible-error-for-Laserfiche-Office-Integration",
        note: "Laserfiche employee asks for Support review; community troubleshooting identifies WebTools Agent connectivity and localhost port 18437 as likely factors.",
      },
    ],
  },
  {
    id: "office-integration-outlook-datetime-field",
    code: "OFFICE-DATETIME-FIELD / 9017",
    message: "Bad field value when saving Outlook received time to a date/time field.",
    product: "Office Integration",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Office Integration 10.2.1 can throw a bad field value error when saving Outlook received time or a default date/time value into a Laserfiche template field.",
    symptoms: [
      "Saving an Outlook email through Office Integration fails when mapping received time to a template date/time field.",
      "The same default date/time field works when creating a new document directly in the repository.",
      "The environment is Laserfiche Avante 10.2.1 with Office 365.",
    ],
    likelyFixes: [
      "Apply the Laserfiche hotfix/knowledge base fix for Office Integration 10.2.1 bad field value errors.",
      "Verify the target Laserfiche field type and regional date/time format after patching.",
      "Retest saving from Outlook with the same template and received-time mapping.",
    ],
    notes:
      "The requester self-reported the KB fix; this entry is separate from generic repository 9017 date-format guidance because it is Office Integration-specific.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Got Error message when setting receive time from MS Outlook to a template field.",
        url: "https://answers.laserfiche.com/questions/127007/Got-Error-message-when-setting-receive-time-from-MS-Outlook-to-a-template-field",
        note: "Requester says the issue was resolved by the Laserfiche KB fix for Office Integration 10.2.1 bad field value errors.",
      },
    ],
  },
  {
    id: "office-integration-repository-not-found",
    code: "OFFICE-REPOSITORY-NOT-FOUND",
    message: "Office plugin cannot find the repository.",
    product: "Office Integration",
    versions: ["Version 9"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Office Integration can fail to locate a repository on a new workstation when the user has not configured the repository connection for the Office plugin.",
    symptoms: [
      "Uploading from Outlook prompts for a repository and then says it cannot find the repository.",
      "The issue appears on new PCs for users who previously used Office Integration.",
      "The users are connecting through Web Access/Web Client.",
    ],
    likelyFixes: [
      "Configure the Office Integration repository connection on the workstation before saving from Outlook.",
      "Compare repository attachment settings with a working workstation.",
      "Collect screenshots and Support logs if repository configuration looks correct but the plugin still cannot find it.",
    ],
    notes:
      "The public thread has employee diagnostic guidance but no final confirmed fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Office plugin error - cannot find the repository",
        url: "https://answers.laserfiche.com/questions/59039/Office-plugin-error--cannot-find-the-repository",
        note: "Alan Chan from Laserfiche says the users likely need to configure which repository the Office Integration should connect to.",
      },
    ],
  },
  {
    id: "office-integration-com-ienumerable-checkout",
    code: "OFFICE-COM-IENUMERABLE",
    message: "Unable to cast COM object to System.Collections.IEnumerable during Word checkout.",
    product: "Office Integration",
    versions: ["Version 12"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche 12 Word checkout can fail with a COM object cast error from the Office Integration plugin, possibly due to missing Microsoft Visual C++ runtime components or a damaged Office Integration install.",
    symptoms: [
      "Checking out a Word document immediately fails.",
      "The error says Unable to cast COM object of type System.__ComObject to System.Collections.IEnumerable.",
      "Restarting the client does not resolve the issue.",
    ],
    likelyFixes: [
      "Repair or reinstall Laserfiche Office Integration.",
      "Repair or install the required Microsoft Visual C++ runtimes on the workstation.",
      "Open a Support case if the error persists after repairing Office Integration.",
    ],
    notes:
      "Laserfiche employee guidance frames this as a lower-level Office Integration plugin component failure.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Unable to Check out a Word file in Laserfiche 12 Error Unable to cast COM object",
        url: "https://answers.laserfiche.com/questions/230334/Unable-to-Check-out-a-Word-file-in-Laserfiche-12-Error-Unable-to-cast-COM-object-of-typeSystemComObject-to-interface-type-SystemCollectionIEnumerable",
        note: "Samuel Carson from Laserfiche recommends repairing or reinstalling Office Integration and checking for missing VC++ runtime components.",
      },
    ],
  },
  {
    id: "connector-docusign-web-import-405",
    code: "DOCUSIGN-WIS-405",
    message: "HTTP 405 when opening DocuSign Web Import Services endpoint.",
    product: "Connector",
    versions: ["Version 11"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "DocuSign Web Import Services can return HTTP 405 when the IIS endpoint or method handling is misconfigured; Laserfiche employee guidance points to IIS logs and IIS 405 troubleshooting.",
    symptoms: [
      "Opening /DocuSignConnectService/ReceivePDF returns HTTP ERROR 405.",
      "DocuSign logs only show that the endpoint cannot be reached.",
      "The server is internet-accessible or in a DMZ but the import-service endpoint still fails.",
    ],
    likelyFixes: [
      "Review IIS logs for the exact method, substatus, and module returning 405.",
      "Confirm the Web Import Services endpoint is installed under the expected IIS application and supports the DocuSign callback method.",
      "Verify public URL, SSL certificate, and firewall rules from DocuSign to the service.",
      "Apply updated files or guidance from Support if the installed service package is outdated.",
    ],
    notes:
      "The thread concerns DocuSign Web Import Services rather than the desktop Connector runtime, but it was discovered from Connector research.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "405 Error when installing DocuSign Web Import Services",
        url: "https://answers.laserfiche.com/questions/222130/405-Error-when-installing-DocuSign-Web-Import-Services",
        note: "Miruna Babatie from Laserfiche identifies 405 as an IIS configuration error and recommends IIS logs.",
      },
    ],
  },
  {
    id: "connector-9013-import-content-rights",
    code: "9013",
    message: "Access denied when Connector inserts document content.",
    product: "Connector",
    versions: ["Version 10", "Version 12"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Connector can create a document shell but fail with 9013 when adding the file content if the user lacks modify-content or volume access rights.",
    symptoms: [
      "Connector reports Multistatus response. Access denied. [9013].",
      "The document briefly appears locked in Laserfiche, then disappears after Connector fails.",
      "The same user may be able to create metadata in the target folder outside Connector.",
    ],
    likelyFixes: [
      "Confirm the Connector user has Modify Contents rights, not only Create Documents or field/template rights.",
      "Check volume access rights for the volume Connector imports into.",
      "Confirm the Connector profile imports to the expected folder and volume.",
      "Use effective rights or Audit Trail to identify the denied repository operation.",
    ],
    notes:
      "Version 12 is included because 9013 is in the official current error listing; the reviewed Connector thread is Version 10-era.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9013 as Access Denied.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Access Denied error when inserting using Connector",
        url: "https://answers.laserfiche.com/questions/175659/Access-Denied-error-when-inserting-using-Connector",
        note: "Justin Pava from Laserfiche explains Connector creates the document shell first, then adds content, so modify-content and volume rights matter.",
      },
    ],
  },
  {
    id: "connector-control-value-invalid",
    code: "CONNECTOR-CONTROL-VALUE-INVALID",
    message: "Writing the value to the target application control failed because the value is not valid.",
    product: "Connector",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Connector write-to-application profiles can fail when the selected analysis/write method cannot set a value into the target application control.",
    symptoms: [
      "Testing a Connector profile reports that writing the token value to the control failed because the value is not valid.",
      "The profile reads a field value from an open Laserfiche document and writes it to another program.",
      "The affected target application/control may need a different Connector analysis method.",
    ],
    likelyFixes: [
      "Try alternate target application analysis methods, including JavaScript where supported.",
      "Confirm the value being written matches what the target control accepts.",
      "Collect screenshots and target application details for Support or a product enhancement request when the control is unsupported.",
    ],
    notes:
      "The public thread has Laserfiche employee follow-up but no final confirmed fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Connector Profile Error - Writing the value to the control token failed because the value is not valid",
        url: "https://answers.laserfiche.com/questions/181928/Connector-Profile-Error--Writing-the-value-to-the-control-token-name-failed-because-the-value-is-not-valid",
        note: "Laserfiche employee replies ask about the target application and analysis method and note similar requests may guide future support.",
      },
    ],
  },
  {
    id: "connector-pdf-import-method-not-found-102",
    code: "CONNECTOR-PDF-IMPORT-METHOD-NOT-FOUND",
    message: "Method not found: PdfExtractor.ImportPDFStream while importing PDFs.",
    product: "Connector",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Connector 10.2.0.400 could fail to import PDFs with a PdfExtractor.ImportPDFStream method-not-found error; Laserfiche released a hotfix in KB1013833.",
    symptoms: [
      "Connector imports RTF files but fails to import PDFs.",
      "The error says Method not found: Void Laserfiche.PdfServices.PdfExtractor.ImportPDFStream.",
      "Importing the same PDF through the Windows Client works.",
    ],
    likelyFixes: [
      "Install the Laserfiche Connector 10.2 hotfix from KB1013833.",
      "Confirm the matching Windows Client components are installed on the Connector workstation.",
      "Retest PDF import through the same Connector profile after patching.",
    ],
    notes:
      "Laserfiche confirmed the released Connector 10.2 issue and posted the hotfix reference.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Laserfiche Connector 10.2 Error Importing PDF",
        url: "https://answers.laserfiche.com/questions/115601/Laserfiche-Connector-102-Error-Importing-PDF",
        note: "Jie Zhang confirms a released Connector 10.2 issue; Qinmei Zou says the hotfix is available in KB1013833.",
      },
    ],
  },
  {
    id: "connector-i18n-dll-missing",
    code: "CONNECTOR-I18N-MISSING",
    message: "Could not load Laserfiche.i18n.dll or one of its dependencies.",
    product: "Connector",
    versions: ["Version 12"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Connector can fail for one workstation/user when the local Connector runtime is missing Laserfiche.i18n.dll or another dependency.",
    symptoms: [
      "One user can run a Connector profile but another user receives a Laserfiche.i18n.dll load error.",
      "Connector profile location and Edge shortcut parameters appear identical.",
      "The error occurs on the machine where the runtime dependency is missing or damaged.",
    ],
    likelyFixes: [
      "Repair the Connector runtime installation on the failing workstation.",
      "If repair does not restore the dependency, reinstall Connector.",
      "Compare installed Connector runtime versions and local file paths with a working workstation.",
    ],
    notes:
      "Employee guidance identifies Laserfiche.i18n.dll as a needed local dependency file.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Laserfiche Connector error Could not load file or assembly Laserfiche.i18n.dll",
        url: "https://answers.laserfiche.com/questions/232345/Laserfiche-Connector-error-Could-not-load-file-or-assembly-Laserfichei18ndll-or-one-of-its-dependencies",
        note: "Justin Pava from Laserfiche recommends repairing the Connector runtime installation on the affected machine.",
      },
    ],
  },
  {
    id: "connector-profile-delete-0x78",
    code: "0x78",
    message: "You do not have the security setting required to access the Connector profile.",
    product: "Connector",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Connector profile deletion can fail with 0x78 when UAC blocks profile access or the profile is saved under the all-users ProgramData profile folder.",
    symptoms: [
      "Deleting a Connector profile reports that the user does not have the security setting required to access the profile.",
      "The error code is 0x78.",
      "The user may be a local administrator but UAC is enabled.",
    ],
    likelyFixes: [
      "Run LFC.exe as administrator and retry deleting the profile.",
      "Look under C:\\ProgramData\\Laserfiche\\Connector\\Profiles for all-users profiles.",
      "Search by profile name if the profile is not visible in the expected folder.",
      "Delete the stale profile file and reinstall Connector only if profile cleanup does not work.",
    ],
    notes:
      "The requester confirmed finding and deleting the profile in ProgramData resolved the issue.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "LF Connector error 0x78",
        url: "https://answers.laserfiche.com/questions/77302/LF-Connector-error-0x78",
        note: "Jie Zhang from Laserfiche points to UAC and C:\\ProgramData\\Laserfiche\\Connector\\Profiles; requester confirmed profile deletion worked.",
      },
    ],
  },
  {
    id: "ricoh-connector-accented-field-name",
    code: "RICOH-CONNECTOR-ACCENTED-FIELD",
    message: "Failed to communicate with Laserfiche Server when scanning TIFF/JPG with templates.",
    product: "Connector",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Ricoh Connector can fail to scan TIFF or JPG documents with templates when template field names include accented characters.",
    symptoms: [
      "Ricoh Connector can browse repositories and print documents.",
      "Scanning with a template to TIFF or JPG reports Failed to communicate with Laserfiche Server.",
      "PDF scans or TIFF/JPG scans without a template work.",
    ],
    likelyFixes: [
      "Check target template field names for accented or special characters.",
      "Rename fields to plain ASCII equivalents, for example Cedula instead of Cedula with an accent.",
      "Retest TIFF/JPG scanning with the same template after renaming fields.",
    ],
    notes:
      "The requester confirmed the accented field name caused the Ricoh Connector failure.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "LF Ricoh Connector Failed to communicate with Laserfiche Server",
        url: "https://answers.laserfiche.com/questions/103715/LF-Ricoh-Connector-Failed-to-communicate-with-Laserfiche-Server",
        note: "Requester confirms Ricoh Connector did not handle accented field names correctly for TIFF/JPG template scans.",
      },
    ],
  },
  {
    id: "records-destruction-6000-multiple-documents",
    code: "6000",
    message: "Invalid pointer while destroying multiple Records Management documents.",
    product: "Records Management",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Records Management destruction can return 6000 Invalid pointer when attempting to destroy multiple individual records together. A confirmed requester resolution was to destroy a whole record folder or one individual record at a time.",
    symptoms: [
      "Destroying one document works, but selecting multiple documents for destruction returns Invalid pointer [6000:0x80004003].",
      "The call stack includes CRMDestroyPropPage::OnBnClickedBtnDestroy or CEntryStatus::ApplyDisposition.",
      "Records are otherwise due for destruction.",
    ],
    likelyFixes: [
      "Destroy the entire record folder when all records in the folder are eligible for destruction.",
      "If only some records should be preserved, place Records Management holds on the records to keep, then destroy the folder.",
      "If destroying individual records, process one individual record at a time.",
      "Confirm the records are cutoff and eligible for destruction before retrying.",
    ],
    notes:
      "The public resolution came from the requester after Laserfiche instructions; no separate Laserfiche employee reply is visible in the thread.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Records Destruction",
        url: "https://answers.laserfiche.com/questions/157311/Records-Destruction",
        note: "Requester reports the resolved destruction pattern: folder-level destruction, one individual file, or holds for files that must be preserved.",
      },
      {
        sourceType: "answers-community-confirmed",
        title: "Records Management - Destroy folders not deleting",
        url: "https://answers.laserfiche.com/questions/191860/Records-Management--Destroy-folders-not-deleting",
        note: "A later commenter saw the 6000 error while manually destroying records in 10.4.2 and found the record had been destroyed after closing the Records Management actions window.",
      },
    ],
  },
  {
    id: "records-9013-delete-record-series-rights",
    code: "9013",
    message: "Access denied deleting a record series.",
    product: "Records Management",
    versions: ["Version 9", "Version 12"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Records Management deletion can return 9013 Access denied when the user lacks effective rights to one or more records or record folders inside the record series, even when the top-level series appears removable.",
    symptoms: [
      "Deleting a record series returns Access denied. [9013].",
      "The user has administrative rights or checked security tags but the series still will not delete.",
      "The case is specific to Records Management record series cleanup.",
    ],
    likelyFixes: [
      "Check effective rights on every child record and record folder in the series, not only the parent series.",
      "Try deleting individual records, then individual record folders, then the parent series to isolate the entry that denies deletion.",
      "Review inherited rights and security tags on the child entries.",
      "Open a Support case if rights look correct but deletion still returns 9013.",
    ],
    notes:
      "Version 12 is included because 9013 is in the official current error listing; the reviewed Records Management thread is Version 9-era and has no public final resolution.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 9013 as Access Denied.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error Access denied. [9013]",
        url: "https://answers.laserfiche.com/questions/72907/Error-Access-denied-9013",
        note: "Laserfiche employee replies ask about repository version and whether the user has rights to delete specific child records or record folders.",
      },
    ],
  },
  {
    id: "records-9193-uncutoff-blocked",
    code: "9193",
    message: "The record or record folder cannot be uncutoff at this point.",
    product: "Records Management",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "A Records Management thread documents 9193 when trying to uncutoff a folder that has already been cutoff, but it has no public replies or confirmed fix.",
    symptoms: [
      "Trying to uncutoff a cutoff folder returns 9193.",
      "The user suspects retention state may be involved.",
      "The public thread does not include a resolution.",
    ],
    likelyFixes: [
      "Verify whether the record or record folder is in retention, has disposition activity, or is otherwise in a state that prevents uncutoff.",
      "Review cutoff instructions, record folder status, and retention schedule state before attempting to reverse cutoff.",
      "Escalate to Support when the record state does not explain the block.",
    ],
    notes:
      "Included as an unresolved documented Records Management error so administrators can recognize the code and collect the right state details.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Error Message: The record or record folder cannot be uncutoff at this point. [9193]",
        url: "https://answers.laserfiche.com/questions/163653/Error-Message-The-record-or-record-folder-cannot-be-uncutoff-at-this-point-9193",
        note: "Thread documents the exact Records Management 9193 message but has no public replies.",
      },
    ],
  },
  {
    id: "records-9196-cycle-definition-in-use",
    code: "9196",
    message: "Cannot delete or modify calendar cycle because it is currently in use.",
    product: "Records Management",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Records Management returns 9196 when a calendar cycle definition is still referenced by cutoff instructions or other records management objects.",
    symptoms: [
      "Changing a fiscal-year cycle definition returns 9196.",
      "The message says the calendar cycle is currently referenced by a Records Management object.",
      "Searching records and the recycle bin may not reveal the remaining reference.",
    ],
    likelyFixes: [
      "Find cutoff instructions that reference the cycle definition.",
      "Temporarily change the cutoff instruction period away from the fiscal-year cycle, then update the cycle definition.",
      "Alternatively create a new cycle definition and move cutoff instructions to it.",
      "After correcting the cycle, restore the intended cutoff-instruction references.",
    ],
    notes:
      "Community replies provide the workaround and a later commenter confirmed the specific cutoff-instruction period dependency.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Changing cycle definitions",
        url: "https://answers.laserfiche.com/questions/135036/Changing-cycle-definitions",
        note: "Community answer points to cutoff instructions; later commenter confirmed changing the cutoff instruction period allowed the cycle update.",
      },
    ],
  },
  {
    id: "records-9234-filing-date-after-cutoff",
    code: "9234",
    message: "The filing date cannot be changed after cutoff or confirming a record transfer.",
    product: "Records Management",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "A Version 10 Records Management and Workflow scenario documents 9234 when changing a filing date, even though the requester believed the record was not cutoff. The public thread has no replies.",
    symptoms: [
      "Workflow receives 9234 while trying to change a filing date.",
      "Changing the filing date from the desktop client returns a similar error.",
      "The record appears not to be cutoff to the requester.",
    ],
    likelyFixes: [
      "Verify the record, parent record folder, transfer state, and cutoff state directly in Records Management.",
      "Check whether a prior cutoff, transfer confirmation, or inherited record-folder state blocks filing-date changes.",
      "Collect the full LFSO stack and record status details for Support if the UI state appears inconsistent.",
    ],
    notes:
      "This is intentionally documented without a confirmed fix because the public Answers thread contains no replies.",
    sources: [
      {
        sourceType: "answers-community",
        title: "Receiving \"Filing date cannot be changed after cutoff\" on record that is not cutoff",
        url: "https://answers.laserfiche.com/questions/205479/Receiving-Filing-date-cannot-be-changed-after-cutoff-on-record-that-is-not-cutoff",
        note: "Thread documents the Version 10 Workflow/Records Management 9234 stack with no public response.",
      },
    ],
  },
  {
    id: "records-delete-after-1041-bug-178876",
    code: "RECORDS-DELETE-CUTOFF-BLOCKED",
    message: "A request to move, delete, or modify a record was blocked after upgrading to 10.4.1.",
    product: "Records Management",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche 10.4.1 could incorrectly block record deletion with a cutoff/retention/final-disposition message; Laserfiche identified it as bug 178876 and said it was fixed in 10.4.3.",
    symptoms: [
      "After upgrading to 10.4.1, deleting a duplicate document in a record folder is blocked.",
      "The message says the record is cutoff, in retention, has undergone final disposition, or the parent folder is closed.",
      "The user has effective delete rights and the visible record state does not appear to match the block.",
    ],
    likelyFixes: [
      "Upgrade Laserfiche to 10.4.3 or later.",
      "Reference bug ID 178876 when working with Support.",
      "Before upgrading, verify the document is not permanent, cutoff, in retention, under final disposition, or in a closed parent folder.",
    ],
    notes:
      "Laserfiche employee confirmation gives this entry higher confidence than the other Records Management Answers-only items.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error deleting a document after upgrade to 10.4.1",
        url: "https://answers.laserfiche.com/questions/160811/Error-deleting-a-document-after-upgrade-to-1041",
        note: "Miruna Babatie from Laserfiche identifies bug 178876 and says it was fixed in Laserfiche 10.4.3.",
      },
    ],
  },
  {
    id: "mobile-forms-network-failure-url",
    code: "MOBILE-NETWORK-FAILURE-FORMS",
    message: "Network failure when opening Fill out a form in Laserfiche Mobile.",
    product: "Mobile",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Laserfiche Mobile can show a generic Network failure message when it cannot communicate with the configured Forms server. Laserfiche employee replies point first to the Forms URL in Mobile Configuration, including exact casing.",
    symptoms: [
      "Users can browse the repository in Mobile.",
      "Opening Fill out a form waits for about a minute, then reports Network failure.",
      "The Forms site is reachable in a browser, but Mobile fails to reach it.",
    ],
    likelyFixes: [
      "Verify the Forms URL in the Laserfiche Mobile Configuration page.",
      "Match the Forms application path casing exactly, for example /Forms if the web application is named Forms.",
      "Test whether pending tasks and history also fail, or only starting a new form.",
      "Collect Mobile, Forms, and Windows application/system event logs if the URL is correct.",
    ],
    notes:
      "Laserfiche called this a generic mobile HTTP client network error; the public thread does not include a final confirmed fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "\"Network failure\" error when trying to fill out a form on LF Mobile",
        url: "https://answers.laserfiche.com/questions/77760/Network-failure-error-when-trying-to-fill-out-a-form-on-LF-Mobile",
        note: "Laserfiche employee replies recommend checking the Forms URL and case sensitivity, then opening Support with version and event-log details.",
      },
    ],
  },
  {
    id: "mobile-1366-wrong-mobile-virtual-directory",
    code: "1366",
    message: "Internal SSL error when logging into a repository from the Mobile app.",
    product: "Mobile",
    versions: ["Version 9", "Version 12"],
    confidence: "medium",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Mobile app login can return 1366 when the Mobile virtual directory or installed path is wrong, even if Web Access works over SSL.",
    symptoms: [
      "The Mobile app reports Internal SSL error [1366].",
      "The certificate common name appears to match the entered URL.",
      "Web Access works, but Mobile uses a different virtual directory or physical path.",
    ],
    likelyFixes: [
      "Use the Mobile-specific URL, typically https://server/mobile, not the Web Access URL.",
      "Check IIS virtual directories for both Web Access and Mobile.",
      "Confirm the Mobile virtual directory physical path points to the correct Mobile installation files.",
      "Repair or correct the Mobile IIS application path if it was installed to a different drive/location than Web Access.",
    ],
    notes:
      "Version 12 is included because 1366 is in the official current error listing; the Mobile-specific thread is Version 9-era.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: Error Codes",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-codes.htm?tocpath=Laserfiche%20User%20Guide%7CSupport%252C%20Monitoring%252C%20and%20Troubleshooting%7CError%20Codes%7C_____0",
        note: "Lists 1366 as Internal SSL error.",
      },
      {
        sourceType: "answers-laserfiche-employee",
        title: "Internal SSL error [1366] when trying to log into repository using mobile app",
        url: "https://answers.laserfiche.com/questions/65502/Internal-SSL-error-1366-when-trying-to-log-into-repository-using-mobile-app",
        note: "Laserfiche employee guidance to check Mobile/Web Access virtual directories led to the requester finding the Mobile path mismatch.",
      },
    ],
  },
  {
    id: "mobile-40314-configuration-page-url",
    code: "403.14",
    message: "HTTP Error 403.14 when browsing to /mobile.",
    product: "Mobile",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Browsing directly to the Mobile virtual directory can show IIS 403.14 because /mobile is not the configuration page; use /mobile/Configuration.aspx instead.",
    symptoms: [
      "After installing Mobile 9, browsing to http://server/mobile shows HTTP Error 403.14.",
      "IIS says directory browsing is not enabled or a default document is not configured.",
      "The administrator is trying to reach the Mobile configuration page.",
    ],
    likelyFixes: [
      "Browse to http://server/mobile/Configuration.aspx.",
      "Use the Windows Start screen/menu shortcut for Laserfiche Mobile Server Configuration.",
      "Do not enable directory browsing solely to make /mobile list content.",
    ],
    notes:
      "Laserfiche confirmed that /mobile returning 403.14 can be normal for a correctly configured Mobile installation.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Cannot access Laserfiche Mobile 9.0 home (start) page (Windows 8.1 IIS 8.5)",
        url: "https://answers.laserfiche.com/questions/47126/Cannot-access-Laserfiche-Mobile-90-home-start-page-Windows-81-IIS-85",
        note: "Brianna Blanchard from Laserfiche explains that the configuration page is /mobile/Configuration.aspx, not /mobile.",
      },
    ],
  },
  {
    id: "mobile-windows-auth-lfauth-service-9010",
    code: "9010",
    message: "The user account or password is incorrect when using Windows authentication in Mobile.",
    product: "Mobile",
    versions: ["Version 9"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Mobile Windows authentication can report 9010 incorrect credentials when Mobile cannot connect to the Laserfiche Authentication Service endpoint on localhost:8188.",
    symptoms: [
      "Repository users can sign in, but Windows users receive user account or password is incorrect.",
      "Event logs show Mobile cannot connect to net.tcp://localhost:8188/lfauth.",
      "The TCP error is 10061 connection actively refused.",
    ],
    likelyFixes: [
      "Confirm Windows authentication is enabled in the Mobile Configuration page.",
      "Start or repair the Laserfiche Authentication Service 9.2 on the Mobile server.",
      "If Mobile, Web Access, and Laserfiche Server are split across servers, confirm Kerberos is configured correctly.",
      "Retest with domain\\username after the authentication service is reachable.",
    ],
    notes:
      "The public thread has Laserfiche diagnostic guidance but no final requester confirmation.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Cannot Access Laserfiche Mobile with Windows Account",
        url: "https://answers.laserfiche.com/questions/71683/Cannot-Access-Laserfiche-Mobile-with-Windows-Account",
        note: "Laserfiche replies point to Windows authentication settings, Kerberos context, and confirming the Laserfiche Authentication Service is running.",
      },
    ],
  },
  {
    id: "mobile-10-domain-config-login-incorrect",
    code: "MOBILE-LOGIN-INCORRECT",
    message: "The user login or password is incorrect for repository users in Mobile 10.",
    product: "Mobile",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Mobile Server 10 had a bug where a configured domain could be prepended to repository-user logins, causing incorrect-login errors; Laserfiche said Update 1 fixed issue 137879.",
    symptoms: [
      "Android Mobile reports the user login or password is incorrect even though credentials were verified.",
      "Event Viewer may show LFS received an unexpected error from LFDS, GetUnsignedTokenEx, LFDS error code 0.",
      "Removing SSL or the configured domain may allow login as a workaround.",
    ],
    likelyFixes: [
      "Install Laserfiche Mobile Server 10 Update 1 or later.",
      "For an immediate workaround, remove the domain from Mobile Configuration and have Windows users enter domain\\username manually.",
      "Do not enable SSL in repository configuration unless SSL is actually configured end to end.",
      "Avoid entering a domain suffix when the repository server name is already fully qualified.",
    ],
    notes:
      "Laserfiche employee replies identify the Mobile 10 domain-prepending bug and the Update 1 fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Error signing in to repository. The user login or password is incorrect",
        url: "https://answers.laserfiche.com/questions/90577/Error-signing-in-to-repository--The-user-login-or-password-is-incorrect",
        note: "Laserfiche identifies the Mobile Server 10 domain configuration issue and says Update 1 addressed issue 137879.",
      },
    ],
  },
  {
    id: "mobile-certificate-invalid-trust",
    code: "MOBILE-CERTIFICATE-INVALID",
    message: "The certificate for this server is invalid in the Mobile app.",
    product: "Mobile",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Mobile can reject an HTTPS endpoint when the device does not trust the issuing root certificate or when the certificate does not match the Mobile endpoint.",
    symptoms: [
      "iOS or Android reports that the certificate for the server is invalid.",
      "The warning repeats after accepting, preventing login.",
      "Other web applications on the same server may appear to use HTTPS successfully.",
    ],
    likelyFixes: [
      "Inspect the certificate chain on the Mobile endpoint from a browser.",
      "If the certificate was generated internally, install or distribute the trusted root certificate to mobile devices.",
      "For external or BYOD devices, use a publicly trusted certificate whose subject/SAN matches the Mobile URL.",
      "Confirm whether Mobile, repository, and Forms URLs are all configured consistently for HTTPS.",
    ],
    notes:
      "The thread contains Laserfiche troubleshooting guidance but no public final resolution.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Laserfiche Mobile Certificate Error",
        url: "https://answers.laserfiche.com/questions/94673/Laserfiche-Mobile-Certificate-Error",
        note: "Laserfiche employee replies discuss internal root certificates, trusted device stores, and checking Mobile/Forms/repository HTTPS configuration.",
      },
    ],
  },
  {
    id: "mobile-forms-server-unable-connect",
    code: "MOBILE-FORMS-REMOTE-SERVER",
    message: "Unable to connect to the Forms server from Mobile Server.",
    product: "Mobile",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Mobile Server 10.3 can access the repository while Forms integration reports that it cannot connect to the Laserfiche Forms server or remote server.",
    symptoms: [
      "The Mobile app can access the repository.",
      "Mobile Configuration warns that it cannot connect to the Laserfiche Forms server.",
      "The Forms URL opens in a browser, but Mobile reports Error signing in to the Forms URL or Unable connect to Remote Server.",
    ],
    likelyFixes: [
      "Install and configure Web Client before importing settings into Mobile Server Configuration.",
      "Use the exact Forms base URL that the Mobile server can reach from the server side.",
      "Check firewall, DNS, and proxy routing from the Mobile server to the Forms server, not only from a workstation browser.",
      "If the issue persists, open Support with Mobile, Forms, Web Client, and IIS logs.",
    ],
    notes:
      "The public thread includes community reports and a partial workaround, but no Laserfiche employee-confirmed root cause.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "LFMobile Server v10.3- Error Unable to connect to Forms server v10.3",
        url: "https://answers.laserfiche.com/questions/134754/LFMobile-Server-v103-Error--Unable-to-connect-to-Forms-server-v103",
        note: "Thread documents Mobile 10.3 Forms connectivity errors and community troubleshooting around Web Client/imported configuration.",
      },
    ],
  },
  {
    id: "mobile-database-not-found-repository-config",
    code: "MOBILE-DATABASE-NOT-FOUND",
    message: "Database Not Found, Please Check the Name of the Database.",
    product: "Mobile",
    versions: ["Version 10"],
    confidence: "medium",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "In Mobile, Database Not Found usually refers to the Laserfiche repository reference, not a SQL database on the device.",
    symptoms: [
      "Selecting a repository in the Mobile app returns Database Not Found, Please Check the Name of the Database.",
      "Mobile configuration and event logs may not show an obvious SQL database error.",
      "Web Client access may work while Mobile fails.",
    ],
    likelyFixes: [
      "Check the repository configuration in the Laserfiche Mobile Configuration page.",
      "Confirm the repository name, repository ID/reference, and server address match the repository users select in Mobile.",
      "Test from the same network path used by the mobile device.",
      "Open Support when repository configuration looks correct but Mobile still cannot resolve the repository.",
    ],
    notes:
      "Laserfiche employee guidance clarifies that the message is likely using database as an internal reference to repository.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Mobile - database not found, baffled",
        url: "https://answers.laserfiche.com/questions/171969/Mobile--database-not-found-baffled",
        note: "Samuel Carson from Laserfiche explains that database likely means repository and recommends checking Mobile repository configuration.",
      },
    ],
  },
  {
    id: "import-agent-9013-port80-ssl-schedule",
    code: "9013",
    message: "Access denied when a scheduled Import Agent profile runs after port 80 is blocked.",
    product: "Import Agent",
    versions: ["Version 10", "Version 12"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "A Version 10 Import Agent thread documents 9013 access denied after inbound port 80 was blocked, even though the user could connect to the repository with SSL enabled. The public thread has no replies.",
    symptoms: [
      "Scheduled Import Agent profile fails with Access denied [9013].",
      "Manual connection to the repository with SSL enabled works.",
      "The service account can log in and browse the target repository folder.",
    ],
    likelyFixes: [
      "Verify the Import Agent profile uses the intended SSL/TLS repository endpoint when running as a service.",
      "Confirm firewall rules allow the actual repository ports required by the configured connection.",
      "Check whether the scheduled profile runs under the expected service account and uses the expected repository connection.",
      "Collect Import Agent event logs and repository connection settings for Support if rights and connectivity look correct.",
    ],
    notes:
      "Documented as unresolved because the Answers thread contains the symptom but no public solution.",
    sources: [
      {
        sourceType: "answers-community",
        title: "import agent - access denied error after disabling pot 80 on the firewall to laserfiche server",
        url: "https://answers.laserfiche.com/questions/131696/import-agent--access-denied-error-after-disabling-pot-80-on-the-firewall-to-laserfiche-server",
        note: "Thread documents Import Agent scheduled-profile 9013 after a firewall change, with no public replies.",
      },
    ],
  },
  {
    id: "import-agent-9133-large-text-file",
    code: "9133",
    message: "Page text out of range while importing large text files.",
    product: "Import Agent",
    versions: ["Version 12"],
    confidence: "low",
    fixStatus: "unresolved",
    reviewedDate: "2026-06-27",
    summary:
      "Import Agent can fail with 9133 Page text out of range when importing large .txt files; the reviewed thread was locked as a duplicate and did not publish the duplicate thread's resolution.",
    symptoms: [
      "Import Agent does not import .txt files larger than roughly 10,000 KB.",
      "The related error code is 9133.",
      "The Answers thread points to Page text out of range [9133].",
    ],
    likelyFixes: [
      "Review the linked Page text out of range [9133] duplicate thread if available.",
      "Test whether splitting the text file or importing it as an electronic document avoids page-text limits.",
      "Collect the source text file and Import Agent profile for Support if the import must preserve full text extraction.",
    ],
    notes:
      "Laserfiche locked the thread as a duplicate but the public page does not include a direct fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Import Agent - Maximum file size - Error Code: 9133",
        url: "https://answers.laserfiche.com/questions/205490/Import-Agent--Maximum-file-size--Error-Code-9133",
        note: "Laserfiche locked the post as a duplicate of Page text out of range [9133].",
      },
    ],
  },
  {
    id: "import-agent-compare-two-elements-array",
    code: "IMPORT-AGENT-COMPARE-ARRAY",
    message: "Failed to compare two elements in the array while executing an Import Agent profile.",
    product: "Import Agent",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Import Agent can report Failed to compare two elements in the array for one profile/folder. Laserfiche asked first whether the path in the error is valid, then recommended Support review of the profile and files.",
    symptoms: [
      "Only one Import Agent profile fails while similar profiles continue to work.",
      "The failing folder contains PDFs, JPEGs, and TIFFs.",
      "Recreating the profile does not clear the error.",
    ],
    likelyFixes: [
      "Confirm the import-from path shown in the error exists and is reachable by the Import Agent service account.",
      "Move files out and reintroduce them in smaller sets to isolate a file that breaks sorting or comparison.",
      "Open a Support case with the Import Agent profile and representative files if the path is valid.",
    ],
    notes:
      "The public thread did not identify a confirmed root cause.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Import Agent (Error: Failed to compare two elements in the array.)",
        url: "https://answers.laserfiche.com/questions/159981/Import-Agent-Error-Failed-to-compare-two-elements-in-the-array",
        note: "Raymond Cruz from Laserfiche asks whether the path is valid and recommends a Support case with Import Agent and the files.",
      },
    ],
  },
  {
    id: "import-agent-1031-temp-file-hotfix-94394",
    code: "IMPORT-AGENT-TEMP-FILE-MISSING",
    message: "The system cannot find the temp text file while importing an image.",
    product: "Import Agent",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Import Agent 10.3.1.470 could fail during OCR/image import because a temp text file under the service account profile could not be found; a 10.3.1 hotfix resolved the issue for multiple commenters.",
    symptoms: [
      "Import Agent logs The system cannot find the file specified for a C:\\Users\\service-account\\AppData\\Local\\Temp\\tmp*.txt file.",
      "The stack includes ExecuteProfileImageFile.OCRImportImageFile.",
      "The source image is not imported.",
    ],
    likelyFixes: [
      "Apply the Import Agent 10.3.1 hotfix that updates 10.3.1.470 to 10.3.1.479.",
      "Retest the same monitored-folder profile after patching.",
      "If the hotfix is unavailable, open Support and reference bug 94394.",
    ],
    notes:
      "Two community replies confirmed the hotfix resolved the issue after Laserfiche identified it as bug 94394.",
    sources: [
      {
        sourceType: "answers-community-confirmed",
        title: "Import Agent Error",
        url: "https://answers.laserfiche.com/questions/147136/Import-Agent-Error",
        note: "Laserfiche identified bug 94394; later comments report the 10.3.1.479 hotfix fixed the temp-file import failure.",
      },
    ],
  },
  {
    id: "import-agent-event8-access-denied-files",
    code: "EVENT-8",
    message: "Access is denied in Import Agent Event ID 8 for a small subset of files.",
    product: "Import Agent",
    versions: ["Version 10"],
    confidence: "low",
    fixStatus: "diagnostic-only",
    reviewedDate: "2026-06-27",
    summary:
      "Import Agent can log Event ID 8 Access is denied for individual files even when most files import and the account appears to have file/repository access.",
    symptoms: [
      "A small number of files fail out of a large import run.",
      "Event Viewer reports Access is denied with Event ID 8.",
      "Manual drag-and-drop of similar files works.",
    ],
    likelyFixes: [
      "Check the full path and file name length for failing files, keeping under legacy path-length limits.",
      "Retry failed files from the monitor folder to determine whether failures are persistent or transient.",
      "Provide the profile, failed file examples, full error logs, and version details to Support when files repeatedly fail.",
    ],
    notes:
      "Laserfiche employees suggested path-length checks and Support review; no public final fix is listed.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "import agent error access is denied (event id 8)",
        url: "https://answers.laserfiche.com/questions/190256/import-agent-error-access-is-denied-event-id-8",
        note: "Laserfiche replies ask about full error details, path length, reproducibility, failed files, profiles, and logs.",
      },
    ],
  },
  {
    id: "import-agent-iaerror-email-notifications",
    code: "IMPORT-AGENT-IAERROR-NOTIFICATION",
    message: "Import Agent moves failed files to IAError without email notification.",
    product: "Import Agent",
    versions: ["Version 11", "Version 12"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Older Import Agent releases did not send built-in email notifications when files moved to IAError; Laserfiche says email notification support was added in Import Agent 2026 H1, 12.0.2603.833.",
    symptoms: [
      "Import Agent creates an IAError folder and moves failed files there.",
      "No built-in notification alerts staff that a scan/import failed.",
      "Administrators resort to scripts or scheduled tasks to monitor IAError folders.",
    ],
    likelyFixes: [
      "Upgrade Import Agent to the 2026 H1 release, version 12.0.2603.833, or later.",
      "Configure the new Import Agent email notification feature using the online help.",
      "Before upgrading, use a scheduled script or monitoring tool to watch IAError folders and notify staff.",
    ],
    notes:
      "This thread is a discussion rather than a failure stack, but it documents a missing notification behavior and the later product fix.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Import Agent Failure Notifications",
        url: "https://answers.laserfiche.com/questions/227212/Import-Agent-Failure-Notifications",
        note: "Laserfiche first created backlog item 577709, then said email notification is supported in Import Agent 2026 H1 12.0.2603.833.",
      },
    ],
  },
  {
    id: "import-agent-ocr-engine-postrequisite",
    code: "IMPORT-AGENT-OCR-POSTREQUISITE",
    message: "OCR Engine installer warning when installing Import Agent on a machine with OCR already installed.",
    product: "Import Agent",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "workaround",
    reviewedDate: "2026-06-27",
    summary:
      "Import Agent 10.3 installation can show an OCR Engine error when OCR is already installed because the OCR version bundled with Import Agent is older.",
    symptoms: [
      "Import Agent installer stops or prompts around OCR Engine even though OCR is already installed.",
      "The machine already has a newer OCR Engine installed.",
      "Other Laserfiche installers may skip already-installed prerequisites, but Import Agent does not in this case.",
    ],
    likelyFixes: [
      "Click through the OCR Engine message.",
      "Bypass OCR Engine as a post-requisite when prompted.",
      "Continue the Import Agent installation and verify OCR behavior afterward.",
    ],
    notes:
      "Laserfiche identified this as a known issue due to the older OCR version in Import Agent.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "OCR Engine Error When Installing Import Agent",
        url: "https://answers.laserfiche.com/questions/163435/OCR-Engine-Error-When-Installing-Import-Agent",
        note: "Miruna Babatie from Laserfiche says to click through the known issue and bypass OCR as a post-requisite.",
      },
    ],
  },
  {
    id: "import-agent-file-exists-iaerror-service-account",
    code: "IMPORT-AGENT-FILE-EXISTS",
    message: "The file exists while Import Agent moves every file to IAError.",
    product: "Import Agent",
    versions: ["Version 9"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Import Agent can move all files to IAError with The file exists even when the destination appears empty; the confirmed fix was changing the Import Agent service logon from Local System to an AD account.",
    symptoms: [
      "All files are moved to IAError.",
      "Event log reports The file exists for the file being imported.",
      "Manual import as the intended user works.",
    ],
    likelyFixes: [
      "Repair the Import Agent installation if components may be damaged.",
      "Run the Import Agent service under a dedicated Windows AD account instead of Local System.",
      "Reconfigure the profile/service account after repair.",
      "If needed, place the service account in Local Administrators on the Import Agent server and recreate monitored folders.",
    ],
    notes:
      "The original thread was Import Agent 8.1.1, but this helper catalogs it under Version 9 because the site version filter starts at Version 9.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Unable to Import Files",
        url: "https://answers.laserfiche.com/questions/60081/Unable-to-Import-Files",
        note: "Laserfiche recommends repair and service account reconfiguration; requester confirmed changing the service account to an AD account resolved it.",
      },
    ],
  },
  {
    id: "api-server-property-file-request-body",
    code: "API-PROPERTY-FILE-NOT-FOUND",
    message: "Invalid Request. Property file not found in the request body.",
    product: "API Server",
    versions: ["Version 11"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Self-hosted API Server v1 document creation can fail when a multipart request names the file part file instead of electronicDocument.",
    symptoms: [
      "Swagger succeeds but the same request from a C#/.NET integration fails.",
      "API Server trace.log reports Property file not found in the request body.",
      "The request is creating a document with an electronic document and metadata.",
    ],
    likelyFixes: [
      "Name the multipart form-data file property electronicDocument for v1 API requests.",
      "Match the Swagger schema exactly, including casing expected by the generated request.",
      "Ignore MaxRequestBodySize warnings if they also appear for successful requests and are not the failing condition.",
    ],
    notes:
      "This is a second API Server source for an error pattern already seen from Power Automate integrations.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "LF API Server - Property file not found in the request body",
        url: "https://answers.laserfiche.com/questions/213721/LF-API-Server--Property-file-not-found-in-the-request-body",
        note: "Samad Paydar from Laserfiche says the v1 request body property name is electronicDocument, not file.",
      },
    ],
  },
  {
    id: "api-server-9010-access-denied-version-11",
    code: "9010",
    message: "Access denied after generating a token with the self-hosted API Server.",
    product: "API Server",
    versions: ["Version 10"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "Self-hosted API Server could return 9010 Access denied after token generation; Laserfiche said the issue was resolved in Self-Hosted Laserfiche API Server version 1.1.",
    symptoms: [
      "Token creation succeeds through Postman or Swagger.",
      "A subsequent Entries request with Authorization: Bearer {token} returns 9010.",
      "The user has rights to the entry and can reproduce the issue in Swagger.",
    ],
    likelyFixes: [
      "Install Self-Hosted Laserfiche API Server version 1.1 or later.",
      "Test domain username escaping formats such as DOMAIN\\username, escaped DOMAIN\\\\username, or username@domain.",
      "If the issue persists after version 1.1, open a Support case through the reseller.",
    ],
    notes:
      "Laserfiche employee replies first suggested username escaping, then confirmed version 1.1 resolved the issue.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Self Hosted Rest API 9010 Access Denied",
        url: "https://answers.laserfiche.com/questions/203765/Self-Hosted-Rest-API-9010-Access-Denied",
        note: "Jason Chan from Laserfiche says the issue should be resolved in Self-Hosted Laserfiche API Server 1.1.",
      },
    ],
  },
  {
    id: "api-server-sample-project-json-v1-branch",
    code: "API-SAMPLE-JSON-VERSION",
    message: "JSON exception from the self-hosted API Server .NET sample project.",
    product: "API Server",
    versions: ["Version 11"],
    confidence: "high",
    fixStatus: "known-fix",
    reviewedDate: "2026-06-27",
    summary:
      "The self-hosted API Server supports v1 of the Laserfiche API, so using the wrong branch of the .NET sample project can cause JSON exceptions when listing repositories.",
    symptoms: [
      "CreateFromUsernamePassword creates a client successfully.",
      "ListRepositoriesAsync throws a JSON exception.",
      "Swagger works directly against the self-hosted API Server.",
    ],
    likelyFixes: [
      "Use the v1 branch of the lf-sample-repository-api-dotnet-srv repository.",
      "Confirm the sample project targets the API version supported by the installed self-hosted API Server.",
      "Retest repository listing and other retrieval methods after switching branches.",
    ],
    notes:
      "The requester confirmed switching to the v1 branch removed the JSON error.",
    sources: [
      {
        sourceType: "answers-laserfiche-employee",
        title: "Self-hosted LF Web API Server sample project JSON error",
        url: "https://answers.laserfiche.com/questions/216401/Selfhosted-LF-Web-API-Server-sample-project-JSON-error",
        note: "Alexandria Gomez from Laserfiche says current self-hosted API Server supports API v1; requester confirmed the v1 branch fixed the JSON error.",
      },
    ],
  },
];

const curatedCodes = new Set(curatedErrorEntries.map((entry) => entry.code));

export const errorEntries = [
  ...curatedErrorEntries,
  ...officialDocumentationErrorEntries.filter((entry) => !curatedCodes.has(entry.code)),
].sort((a, b) => a.code.localeCompare(b.code, undefined, { numeric: true }) || a.id.localeCompare(b.id));
