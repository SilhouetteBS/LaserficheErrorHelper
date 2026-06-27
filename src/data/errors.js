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
