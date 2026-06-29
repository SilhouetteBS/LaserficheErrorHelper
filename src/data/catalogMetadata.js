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
  "Web Client",
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

export const productAliases = {
  "Directory Server": ["LFDS", "Directory Service"],
  "Federated Search": ["Federated Search Service"],
  Forms: ["LF Forms", "Forms Server"],
  "Laserfiche Server/Repository Server": ["Laserfiche Server", "Repository Server"],
  WebLink: ["Web Link"],
  "Web Client": ["Web Access", "Web Scanning", "Web Client Scanning"],
  "Webtools Agent": ["Webtools"],
  "Windows Client/Desktop Client": ["Desktop Client", "Windows Client"],
  Workflow: ["LF Workflow"],
};
