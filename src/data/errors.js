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

export const errorEntries = [
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
    product: "Windows Client/Desktop Client",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary: "Imports can fail when the destination folder does not have a default volume configured.",
    symptoms: [
      "The Windows Client output log reports Volume not found. [9006] during import.",
      "Scanned or imported documents fail before being stored in the repository.",
    ],
    likelyFixes: [
      "Configure the destination folder used for scanned or imported documents.",
      "In the Windows Client, check Tools > Options > New Documents > Import Profiles and set the client destination folder.",
      "Confirm the target volume exists and is mounted on the repository server.",
    ],
    notes: "Seeded from official documentation only.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9006 Volume not found",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9006.htm",
        note: "Identifies a missing default volume for the destination folder as the documented cause.",
      },
    ],
  },
  {
    id: "lf-server-9008-general-database-error",
    code: "9008",
    message: "General database error",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "low",
    reviewedDate: "2026-06-27",
    summary: "Laserfiche Server returned a generic failure while performing an action on SQL Server.",
    symptoms: [
      "A repository action fails with General database error. [9008].",
      "The accompanying message may say Error executing SQL command.",
    ],
    likelyFixes: [
      "Review Windows Event Viewer on the Laserfiche Server for the more specific database error.",
      "Confirm the Laserfiche Server service runs as a Windows account that can access the DBMS.",
      "Verify the service account has required disk permissions.",
      "If using MSDE or SQL Server Express, confirm all expansion databases are attached.",
    ],
    notes: "Seeded from official documentation only.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9008 General database error",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9008.htm",
        note: "Directs administrators to Event Viewer and service-account/database checks.",
      },
    ],
  },
  {
    id: "lf-server-9010-account-password-incorrect",
    code: "9010",
    message: "The User Account or Password is Incorrect",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 10", "Version 12"],
    confidence: "low",
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
      "If Import Agent shows the error, review Import Agent's username/password troubleshooting guidance.",
    ],
    notes: "Seeded from official documentation only.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9010 User Account or Password Incorrect",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9010.htm",
        note: "Lists credential, time synchronization, Directory Server channel, and Import Agent scenarios.",
      },
    ],
  },
  {
    id: "lf-server-9011-account-locked",
    code: "9011",
    message: "Account locked",
    product: "Laserfiche Server/Repository Server",
    versions: ["Version 12"],
    confidence: "low",
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
    ],
    notes: "Seeded from official documentation only.",
    sources: [
      {
        sourceType: "official-docs",
        title: "Laserfiche 12 User Guide: 9011 Account locked",
        url: "https://doc.laserfiche.com/laserfiche.documentation/12/userguide/en-us/content/support-error-9011.htm",
        note: "Explains disabled accounts and password-attempt lockouts.",
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
    product: "Directory Server",
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
    ],
  },
  {
    id: "lf-server-6508-incorrect-credentials",
    code: "6508",
    message: "The user name or password is incorrect",
    product: "Laserfiche Server/Repository Server",
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
    id: "lf-server-9128-briefcase-import-failed",
    code: "9128",
    message: "The briefcase failed to import",
    product: "Windows Client/Desktop Client",
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
];
