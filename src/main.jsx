import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AlertTriangle,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Filter,
  HelpCircle,
  Info,
  MessageSquare,
  RefreshCw,
  Search,
  Share2,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  errorEntries,
  productOptions,
  sourcePriority,
  sourceTypeOptions,
  versionOptions,
} from "./data/errors.js";
import { reviewedSources } from "./data/reviewedSources.js";
import "./styles.css";

const allOption = "All";

function uniqueSorted(values) {
  return [allOption, ...Array.from(new Set(values.filter(Boolean))).sort()];
}

function withAll(values) {
  return [allOption, ...values];
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function sourceRank(entry) {
  return Math.min(...entry.sources.map((source) => sourcePriority[source.sourceType] ?? 99));
}

function confidenceLabel(value) {
  if (value === "high") return "High confidence";
  if (value === "medium") return "Medium confidence";
  return "Needs validation";
}

function sourceTypeLabel(sourceType) {
  return sourceTypeOptions.find((option) => option.value === sourceType)?.label ?? sourceType;
}

function fixStatusLabel(value) {
  if (value === allOption) return allOption;
  const labels = {
    "known-fix": "Known fix",
    workaround: "Workaround",
    "diagnostic-only": "Diagnostic only",
    unresolved: "Unresolved",
    "needs-review": "Needs review",
  };
  return labels[value] ?? labels["needs-review"];
}

function scenarioFilterLabel(value) {
  if (value === allOption) return allOption;
  const labels = {
    "has-scenarios": "Has multiple scenarios",
    "single-scenario": "No scenario variants",
  };
  return labels[value] ?? value;
}

function researchFilterLabel(value) {
  if (value === allOption) return allOption;
  const labels = {
    "needs-fix-research": "Needs fix research",
    "has-fix-guidance": "Has fix/workaround",
  };
  return labels[value] ?? value;
}

function fixStatusValue(entry) {
  if (entry.fixStatus) return entry.fixStatus;
  if (entry.confidence === "low") return "needs-review";
  return "diagnostic-only";
}

function sourceIcon(sourceType) {
  if (sourceType === "official-docs") return BookOpen;
  if (sourceType === "answers-search") return Search;
  return MessageSquare;
}

function filterOptionLabel(value, label) {
  if (value !== allOption) return value;
  if (label === "Product") return "All Products";
  if (label === "Version") return "All Versions";
  if (label === "Source Confidence") return "All Confidence";
  if (label === "Fix Status") return "All Fix Statuses";
  if (label === "Source") return "All Sources";
  return value;
}

function initialSelectedErrorId() {
  const url = new URL(window.location.href);
  const requestedId = url.searchParams.get("error");
  return errorEntries.some((entry) => entry.id === requestedId) ? requestedId : null;
}

function setErrorUrl(entryId) {
  const url = new URL(window.location.href);
  url.searchParams.set("error", entryId);
  url.hash = "";
  window.history.replaceState({}, "", url);
}

function errorShareUrl(entryId) {
  const url = new URL(window.location.href);
  url.searchParams.set("error", entryId);
  url.hash = "";
  return url.toString();
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}

function reviewStatusLabel(value) {
  const labels = {
    curated: "Curated",
    "curated-partial": "Curated partial",
    "curated-unresolved": "Curated unresolved",
    candidate: "Candidate",
    "cross-product": "Cross-product",
    "not-actionable": "Not actionable",
    "no-matching-posts": "No matching posts",
  };
  return labels[value] ?? value;
}

function App() {
  const [query, setQuery] = useState("");
  const [product, setProduct] = useState(allOption);
  const [version, setVersion] = useState(allOption);
  const [source, setSource] = useState(allOption);
  const [confidence, setConfidence] = useState(allOption);
  const [fixStatus, setFixStatus] = useState(allOption);
  const [scenarioFilter, setScenarioFilter] = useState(allOption);
  const [researchFilter, setResearchFilter] = useState(allOption);
  const [sortBy, setSortBy] = useState("relevance");
  const [ledgerSource, setLedgerSource] = useState(allOption);
  const [isLedgerExpanded, setIsLedgerExpanded] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState({});
  const [selectedId, setSelectedId] = useState(initialSelectedErrorId);
  const [notification, setNotification] = useState("");
  const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(false);
  const [infoDialog, setInfoDialog] = useState(null);

  useEffect(() => {
    if (!notification) return undefined;
    const timeout = window.setTimeout(() => setNotification(""), 2600);
    return () => window.clearTimeout(timeout);
  }, [notification]);

  const filters = useMemo(
    () => ({
      products: withAll(productOptions),
      versions: withAll(versionOptions),
      sources: [
        allOption,
        ...sourceTypeOptions
          .filter((option) =>
            errorEntries.some((entry) => entry.sources.some((item) => item.sourceType === option.value)) ||
            reviewedSources.some((item) => item.sourceType === option.value),
          )
          .map((option) => option.value),
      ],
      confidences: uniqueSorted(errorEntries.map((entry) => confidenceLabel(entry.confidence))),
      fixStatuses: withAll(["known-fix", "workaround", "diagnostic-only", "unresolved", "needs-review"]),
      scenarioStates: withAll(["has-scenarios", "single-scenario"]),
      researchStates: withAll(["needs-fix-research", "has-fix-guidance"]),
    }),
    [],
  );

  const filteredEntries = useMemo(() => {
    const term = normalize(query);
    return errorEntries
      .filter((entry) => {
        const haystack = normalize(
          [
            entry.code,
            entry.message,
            entry.product,
            entry.summary,
            ...entry.symptoms,
            ...entry.likelyFixes,
            ...entry.versions,
            ...(entry.scenarios ?? []).flatMap((scenario) => [
              scenario.title,
              scenario.summary,
              ...(scenario.versions ?? []),
              ...(scenario.symptoms ?? []),
              ...(scenario.causes ?? []),
              ...(scenario.fixes ?? []),
            ]),
            fixStatusLabel(fixStatusValue(entry)),
            ...entry.sources.map((item) => item.title),
          ].join(" "),
        );
        return !term || haystack.includes(term);
      })
      .filter((entry) => product === allOption || entry.product === product)
      .filter((entry) => version === allOption || entry.versions.includes(version))
      .filter((entry) => source === allOption || entry.sources.some((item) => item.sourceType === source))
      .filter((entry) => confidence === allOption || confidenceLabel(entry.confidence) === confidence)
      .filter((entry) => fixStatus === allOption || fixStatusValue(entry) === fixStatus)
      .filter((entry) => {
        if (scenarioFilter === "has-scenarios") return (entry.scenarios?.length ?? 0) > 0;
        if (scenarioFilter === "single-scenario") return (entry.scenarios?.length ?? 0) === 0;
        return true;
      })
      .filter((entry) => {
        const status = fixStatusValue(entry);
        if (researchFilter === "needs-fix-research") {
          return status === "diagnostic-only" || status === "unresolved" || status === "needs-review";
        }
        if (researchFilter === "has-fix-guidance") return status === "known-fix" || status === "workaround";
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "code") return a.code.localeCompare(b.code, undefined, { numeric: true });
        if (sortBy === "confidence") return confidenceWeight(a.confidence) - confidenceWeight(b.confidence);
        if (sortBy === "product") return a.product.localeCompare(b.product) || a.code.localeCompare(b.code);
        return sourceRank(a) - sourceRank(b) || a.code.localeCompare(b.code, undefined, { numeric: true });
      });
  }, [query, product, version, source, confidence, fixStatus, scenarioFilter, researchFilter, sortBy]);

  const selectedEntry = selectedId ? errorEntries.find((entry) => entry.id === selectedId) : null;

  function selectEntry(entryId) {
    setSelectedId(entryId);
    setErrorUrl(entryId);
  }

  async function shareEntry(entry) {
    const shareUrl = errorShareUrl(entry.id);
    await copyToClipboard(shareUrl);
    setNotification(`Copied link for ${entry.code}.`);
  }

  const groupedEntries = useMemo(() => {
    return filteredEntries.reduce((groups, entry) => {
      groups[entry.product] ||= [];
      groups[entry.product].push(entry);
      return groups;
    }, {});
  }, [filteredEntries]);

  const sortedGroupedEntries = useMemo(
    () => Object.entries(groupedEntries).sort(([productA], [productB]) => productA.localeCompare(productB)),
    [groupedEntries],
  );

  const displayedReviewedSources = reviewedSources.filter(
    (sourceItem) => ledgerSource === allOption || sourceItem.sourceType === ledgerSource,
  );
  const ledgerRows = isLedgerExpanded ? displayedReviewedSources : displayedReviewedSources.slice(0, 5);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand-row">
            <img
              className="brand-logo"
              src={`${import.meta.env.BASE_URL}fichebait-logo.png`}
              alt="FicheBait"
              width="168"
              height="36"
            />
            <h1>Laserfiche Self-Hosted Error Helper</h1>
          </div>
          <nav className="top-actions" aria-label="Utility links">
            <span>Sources updated Jun 27, 2026</span>
            <RefreshCw aria-hidden="true" size={16} />
            <button className="utility-link" onClick={() => setInfoDialog("how")} type="button">
              <HelpCircle aria-hidden="true" size={16} />
              How it works
            </button>
            <button className="utility-link" onClick={() => setInfoDialog("about")} type="button">
              <Info aria-hidden="true" size={16} />
              About
            </button>
          </nav>
        </div>
      </header>

      <main className="app-shell">
        <section className="toolbar" aria-label="Search and filters">
          <label className="search-control">
            <Search aria-hidden="true" size={20} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search code, message, symptom, product, or fix"
              type="search"
            />
            {query && (
              <button aria-label="Clear search" className="clear-search" onClick={() => setQuery("")} type="button">
                <X aria-hidden="true" size={19} />
              </button>
            )}
          </label>
          <FilterSelect label="Product" value={product} onChange={setProduct} options={filters.products} />
          <FilterSelect label="Version" value={version} onChange={setVersion} options={filters.versions} />
          <FilterSelect
            label="Source Confidence"
            value={confidence}
            onChange={setConfidence}
            options={filters.confidences}
          />
          <FilterSelect
            label="Source"
            value={source}
            onChange={setSource}
            options={filters.sources}
            formatOption={sourceTypeLabel}
          />
          <FilterSelect
            label="Fix Status"
            value={fixStatus}
            onChange={setFixStatus}
            options={filters.fixStatuses}
            formatOption={fixStatusLabel}
          />
          <button
            aria-controls="advanced-filters"
            aria-expanded={isMoreFiltersOpen}
            className={`more-filters ${isMoreFiltersOpen ? "active" : ""}`}
            onClick={() => setIsMoreFiltersOpen((current) => !current)}
            type="button"
          >
            <Filter aria-hidden="true" size={17} />
            More Filters
          </button>
          <button
            className="reset-button"
            onClick={() => {
              setQuery("");
              setProduct(allOption);
              setVersion(allOption);
              setSource(allOption);
              setConfidence(allOption);
              setFixStatus(allOption);
              setScenarioFilter(allOption);
              setResearchFilter(allOption);
              setSortBy("relevance");
              setLedgerSource(allOption);
              setIsLedgerExpanded(false);
              setIsMoreFiltersOpen(false);
            }}
            type="button"
          >
            Reset
          </button>
        </section>

        {isMoreFiltersOpen && (
          <section className="advanced-filters" id="advanced-filters" aria-label="More filters">
            <div className="advanced-filter-summary">
              <h2>More Filters</h2>
              <p>Use these filters to narrow results by fix maturity or reviewed-source ledger type.</p>
            </div>
            <FilterSelect
              label="Fix Status"
              value={fixStatus}
              onChange={setFixStatus}
              options={filters.fixStatuses}
              formatOption={fixStatusLabel}
            />
            <FilterSelect
              label="Reviewed Ledger Source"
              value={ledgerSource}
              onChange={setLedgerSource}
              options={filters.sources}
              formatOption={sourceTypeLabel}
            />
            <FilterSelect
              label="Scenario Coverage"
              value={scenarioFilter}
              onChange={setScenarioFilter}
              options={filters.scenarioStates}
              formatOption={scenarioFilterLabel}
            />
            <FilterSelect
              label="Fix Research"
              value={researchFilter}
              onChange={setResearchFilter}
              options={filters.researchStates}
              formatOption={researchFilterLabel}
            />
            <label className="filter-control">
              <span>Result Sort</span>
              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                <option value="relevance">Relevance</option>
                <option value="code">Error code</option>
                <option value="confidence">Confidence</option>
                <option value="product">Product</option>
              </select>
            </label>
          </section>
        )}

      <section className="workspace">
        <aside className="results-pane" aria-label="Error results">
          <div className="pane-heading">
            <div>
              <h2>{filteredEntries.length} results</h2>
            </div>
            <div className="sort-control">
              <label>
                <span>Sort by:</span>
                <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                  <option value="relevance">Relevance</option>
                  <option value="code">Error code</option>
                  <option value="confidence">Confidence</option>
                  <option value="product">Product</option>
                </select>
              </label>
              <Filter aria-hidden="true" size={18} />
            </div>
          </div>
          {filteredEntries.length === 0 ? (
            <div className="empty-state">
              <AlertTriangle aria-hidden="true" size={22} />
              <p>No curated entries match the current filters.</p>
            </div>
          ) : (
            sortedGroupedEntries.map(([groupProduct, entries]) => {
              const isCollapsed = collapsedGroups[groupProduct] ?? true;

              return (
                <div className="result-group" key={groupProduct}>
                  <button
                    aria-expanded={!isCollapsed}
                    className="group-toggle"
                    onClick={() =>
                      setCollapsedGroups((current) => ({
                        ...current,
                        [groupProduct]: !isCollapsed,
                      }))
                    }
                    type="button"
                  >
                    {isCollapsed ? (
                      <ChevronRight aria-hidden="true" size={17} />
                    ) : (
                      <ChevronDown aria-hidden="true" size={17} />
                    )}
                    <span>{groupProduct}</span>
                    <small>{entries.length}</small>
                  </button>
                  {!isCollapsed &&
                    entries.map((entry) => (
                      <button
                        className={`result-row ${selectedEntry?.id === entry.id ? "selected" : ""}`}
                        key={entry.id}
                        onClick={() => selectEntry(entry.id)}
                        type="button"
                      >
                        <span className="code">{entry.code}</span>
                        <span>
                          <strong>{entry.message}</strong>
                          <small>{entry.summary}</small>
                        </span>
                        <span className="result-badges">
                          {entry.scenarios?.length > 0 && <span className="scenario-count">{entry.scenarios.length} scenarios</span>}
                          <FixStatusBadge value={fixStatusValue(entry)} />
                          <ConfidenceBadge value={entry.confidence} />
                        </span>
                      </button>
                    ))}
                </div>
              );
            })
          )}
        </aside>

        {selectedEntry ? (
          <ErrorDetail
            entry={selectedEntry}
            onShare={shareEntry}
          />
        ) : (
          <InstructionsPane />
        )}
      </section>

      <section className="ledger-panel" aria-label="Reviewed source ledger">
        <div className="ledger-heading">
          <div>
            <h2>Reviewed Source Ledger</h2>
            <span>{reviewedSources.length} sources</span>
          </div>
          <div className="ledger-actions">
            <span>Showing:</span>
            <select value={ledgerSource} onChange={(event) => setLedgerSource(event.target.value)}>
              {filters.sources.map((option) => (
                <option key={option} value={option}>
                  {filterOptionLabel(sourceTypeLabel(option), "Source")}
                </option>
              ))}
            </select>
            <button type="button" onClick={() => setIsLedgerExpanded((current) => !current)}>
              {isLedgerExpanded ? "Show fewer" : "View full ledger"}
            </button>
          </div>
        </div>
        <div className="ledger-table" role="table" aria-label="Reviewed source ledger table">
          <div className="ledger-row ledger-head" role="row">
            <span>Source</span>
            <span>Type</span>
            <span>Priority</span>
            <span>Last Reviewed</span>
            <span>Review Status</span>
            <span>Notes</span>
          </div>
          {ledgerRows.map((sourceItem) => (
            <a className="ledger-row" href={sourceItem.url} key={sourceItem.id} rel="noreferrer" target="_blank">
              <span className="ledger-source-name">
                <SourceTypeIcon sourceType={sourceItem.sourceType} />
                <strong>{sourceItem.title}</strong>
              </span>
              <span>{sourceTypeLabel(sourceItem.sourceType)}</span>
              <span>{sourcePriority[sourceItem.sourceType] ?? "Review"}</span>
              <span>{sourceItem.reviewedDate}</span>
              <span>
                <ReviewStatusBadge value={sourceItem.reviewStatus} />
              </span>
              <span>{sourceItem.extractedErrorCodes.join(", ") || sourceItem.reviewStatus}</span>
            </a>
          ))}
        </div>
      </section>
      </main>
      {infoDialog && <InfoDialog type={infoDialog} onClose={() => setInfoDialog(null)} />}
      <div className={`toast ${notification ? "visible" : ""}`} role="status" aria-live="polite">
        {notification}
      </div>
    </>
  );
}

function FilterSelect({ label, options, value, onChange, formatOption = (option) => option }) {
  return (
    <label className="filter-control">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {filterOptionLabel(formatOption(option), label)}
          </option>
        ))}
      </select>
    </label>
  );
}

function ConfidenceBadge({ value }) {
  return <span className={`confidence ${value}`}>{confidenceLabel(value)}</span>;
}

function FixStatusBadge({ value }) {
  return <span className={`fix-status ${value}`}>{fixStatusLabel(value)}</span>;
}

function ReviewStatusBadge({ value }) {
  return <span className={`review-status ${value}`}>{reviewStatusLabel(value)}</span>;
}

function confidenceWeight(value) {
  if (value === "high") return 1;
  if (value === "medium") return 2;
  return 3;
}

function SourceTypeIcon({ sourceType }) {
  const Icon = sourceIcon(sourceType);
  return <Icon aria-hidden="true" size={17} />;
}

function SourceBadge({ sourceType }) {
  const labels = {
    "official-docs": "Official Docs",
    "answers-laserfiche-employee": "Answers - Laserfiche Employee",
    "answers-community-confirmed": "Answers - Community Confirmed",
    "answers-community": "Answers - Community",
  };
  return <span className={`source-badge ${sourceType}`}>{labels[sourceType] ?? sourceType}</span>;
}

function InstructionsPane() {
  return (
    <article className="detail-pane instructions-pane">
      <div className="instructions-content">
        <span className="selected-label">Get started</span>
        <h2>
          Search or browse Laserfiche errors
          <span>Select a result to view troubleshooting details.</span>
        </h2>
        <div className="instruction-grid">
          <section>
            <Search aria-hidden="true" size={19} />
            <div>
              <h3>Search by what you have</h3>
              <p>Use an error code, product name, message text, symptom, or source detail.</p>
            </div>
          </section>
          <section>
            <Filter aria-hidden="true" size={19} />
            <div>
              <h3>Narrow the results</h3>
              <p>Filter by product, version, source type, confidence, fix status, or scenario coverage.</p>
            </div>
          </section>
          <section>
            <BookOpen aria-hidden="true" size={19} />
            <div>
              <h3>Check the source trail</h3>
              <p>Review official documentation and Laserfiche Answers links before making system changes.</p>
            </div>
          </section>
        </div>
        <div className="notice inline-notice">
          <ShieldCheck aria-hidden="true" size={18} />
          <p>Guidance is a research aid. Validate fixes in a test or maintenance window before changing production systems.</p>
        </div>
      </div>
    </article>
  );
}

function ErrorDetail({ entry, onShare }) {
  return (
    <article className="detail-pane">
      <div className="detail-main">
        <div className="detail-header">
          <div>
            <span className="selected-label">Selected error</span>
            {entry.scenarios?.length > 0 && <span className="scenario-count detail-scenario-count">{entry.scenarios.length} scenarios</span>}
            <h2>
              {entry.code} <span>{entry.message}</span>
            </h2>
          </div>
          <div className="detail-actions">
            <button onClick={() => onShare(entry)} type="button">
              <Share2 aria-hidden="true" size={17} />
              Share
            </button>
          </div>
        </div>

        <div className="meta-strip">
          <span>
            <strong>Product</strong>
            {entry.product}
          </span>
          <span>
            <strong>Versions</strong>
            {entry.versions.join(", ")}
          </span>
          <span>
            <strong>Last reviewed</strong>
            {entry.reviewedDate}
          </span>
          <span>
            <strong>Fix status</strong>
            {fixStatusLabel(fixStatusValue(entry))}
          </span>
        </div>

        <DetailSection title="Symptoms">
          <ul>
            {entry.symptoms.map((symptom) => (
              <li key={symptom}>{symptom}</li>
            ))}
          </ul>
        </DetailSection>

        <DetailSection title="Likely Fixes">
          <ol>
            {entry.likelyFixes.map((fix) => (
              <li key={fix}>{fix}</li>
            ))}
          </ol>
        </DetailSection>

        {entry.scenarios?.length > 0 && (
          <DetailSection title="Possible Scenarios">
            <div className="scenario-list">
              {entry.scenarios.map((scenario) => (
                <section className="scenario-card" key={scenario.title}>
                  <div className="scenario-heading">
                    <div>
                      <h4>{scenario.title}</h4>
                      {scenario.summary && <p>{scenario.summary}</p>}
                    </div>
                    {scenario.versions?.length > 0 && (
                      <span className="scenario-versions">{scenario.versions.join(", ")}</span>
                    )}
                  </div>
                  <ScenarioList title="Symptoms" items={scenario.symptoms} />
                  <ScenarioList title="Likely Causes" items={scenario.causes} />
                  <ScenarioList title="Fixes / Next Steps" items={scenario.fixes} ordered />
                  {scenario.sourceUrls?.length > 0 && (
                    <div className="scenario-sources">
                      <strong>Scenario sources</strong>
                      <ul>
                        {scenario.sourceUrls.map((url) => {
                          const sourceItem = entry.sources.find((source) => source.url === url);
                          return (
                            <li key={url}>
                              {sourceItem ? (
                                <a href={url} rel="noreferrer" target="_blank">
                                  {sourceItem.title}
                                </a>
                              ) : (
                                <a href={url} rel="noreferrer" target="_blank">
                                  {url}
                                </a>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </section>
              ))}
            </div>
          </DetailSection>
        )}

        <div className="notice inline-notice">
          <ShieldCheck aria-hidden="true" size={18} />
          <p>Validate guidance in a test or maintenance window before changing production systems.</p>
        </div>
      </div>

      <aside className="detail-sidebar" aria-label="Evidence and source details">
        <section className="side-card">
          <h3 className="with-tooltip">
            Source Confidence
            <span className="tooltip-anchor" tabIndex={0}>
              <HelpCircle aria-hidden="true" size={15} />
              <span className="tooltip-text">
                Confidence is based on source authority, whether a Laserfiche employee replied, and whether
                the fix was confirmed.
              </span>
            </span>
          </h3>
          <ConfidenceBadge value={entry.confidence} />
          <p>{entry.summary}</p>
        </section>
        <section className="side-card">
          <h3>Fix Status</h3>
          <FixStatusBadge value={fixStatusValue(entry)} />
          <p>
            {fixStatusValue(entry) === "known-fix" &&
              "A source-backed fix is documented for at least one matching scenario."}
            {fixStatusValue(entry) === "workaround" &&
              "A source-backed workaround is documented, but it may not be a permanent product fix."}
            {fixStatusValue(entry) === "diagnostic-only" &&
              "Sources provide troubleshooting direction, but no single confirmed fix is documented."}
            {fixStatusValue(entry) === "unresolved" &&
              "The error is documented, but no confirmed public fix has been identified yet."}
            {fixStatusValue(entry) === "needs-review" &&
              "This entry needs additional source review before a fix status can be assigned."}
          </p>
        </section>
        <section className="side-card">
          <h3>Source Priority</h3>
          <ol className="priority-list">
            {[...entry.sources]
              .sort((a, b) => (sourcePriority[a.sourceType] ?? 99) - (sourcePriority[b.sourceType] ?? 99))
              .map((sourceItem) => (
                <li key={`${sourceItem.sourceType}-${sourceItem.title}`}>
                  <span>{sourceTypeLabel(sourceItem.sourceType)}</span>
                  <span className="check-dot">
                    <Check aria-hidden="true" size={11} strokeWidth={3.5} />
                  </span>
                </li>
              ))}
          </ol>
        </section>
        <section className="side-card">
          <h3>Links to Sources</h3>
          <div className="source-list">
            {entry.sources.map((sourceItem, index) => (
              <a
                className="source-card"
                href={sourceItem.url}
                key={`${sourceItem.sourceType}-${sourceItem.url}-${index}`}
                rel="noreferrer"
                target="_blank"
              >
                <span className="source-card-content">
                  <span>{sourceItem.title}</span>
                  <SourceBadge sourceType={sourceItem.sourceType} />
                </span>
                <ExternalLink aria-hidden="true" size={16} />
              </a>
            ))}
          </div>
        </section>
        {entry.notes && (
          <div className="caution">
            <AlertTriangle aria-hidden="true" size={18} />
            <p>{entry.notes}</p>
          </div>
        )}
      </aside>
    </article>
  );
}

function DetailSection({ title, children }) {
  return (
    <section className="detail-section">
      <div className="section-label">
        <BookOpen aria-hidden="true" size={17} />
        <h3>{title}</h3>
      </div>
      {children}
    </section>
  );
}

function ScenarioList({ title, items = [], ordered = false }) {
  if (!items.length) return null;

  const ListTag = ordered ? "ol" : "ul";

  return (
    <div className="scenario-block">
      <strong>{title}</strong>
      <ListTag>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ListTag>
    </div>
  );
}

function InfoDialog({ type, onClose }) {
  const isHow = type === "how";

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        aria-labelledby="info-dialog-title"
        aria-modal="true"
        className="info-dialog"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="dialog-heading">
          <h2 id="info-dialog-title">{isHow ? "How It Works" : "About"}</h2>
          <button aria-label="Close dialog" onClick={onClose} type="button">
            <X aria-hidden="true" size={17} />
          </button>
        </div>
        {isHow ? (
          <div className="dialog-content">
            <p>
              Search and filters narrow a curated list of Laserfiche self-hosted errors from official
              documentation and reviewed Answers posts.
            </p>
            <ol>
              <li>Official documentation establishes the baseline error code and product context.</li>
              <li>Answers posts add scenario-specific symptoms, fixes, and version notes.</li>
              <li>Laserfiche employee replies are prioritized above community-only guidance.</li>
              <li>Unresolved entries stay visible when they document an error but no confirmed fix exists yet.</li>
            </ol>
          </div>
        ) : (
          <div className="dialog-content">
            <p>
              This helper is a self-hosted Laserfiche troubleshooting index for administrators and support
              teams. It is intended to speed up triage, not replace Laserfiche Support or environment-specific
              validation.
            </p>
            <p>
              Each entry links back to its reviewed sources so users can inspect the original documentation or
              Answers thread before changing a production system.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

