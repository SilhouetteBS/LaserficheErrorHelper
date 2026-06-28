import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AlertTriangle,
  BookOpen,
  Bookmark,
  Check,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  FileSearch,
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
  const [sortBy, setSortBy] = useState("relevance");
  const [ledgerSource, setLedgerSource] = useState(allOption);
  const [collapsedGroups, setCollapsedGroups] = useState({});
  const [selectedId, setSelectedId] = useState(errorEntries[0]?.id);
  const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(false);
  const [infoDialog, setInfoDialog] = useState(null);

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
      .sort((a, b) => {
        if (sortBy === "code") return a.code.localeCompare(b.code, undefined, { numeric: true });
        if (sortBy === "confidence") return confidenceWeight(a.confidence) - confidenceWeight(b.confidence);
        if (sortBy === "product") return a.product.localeCompare(b.product) || a.code.localeCompare(b.code);
        return sourceRank(a) - sourceRank(b) || a.code.localeCompare(b.code, undefined, { numeric: true });
      });
  }, [query, product, version, source, confidence, fixStatus, sortBy]);

  const selectedEntry =
    filteredEntries.find((entry) => entry.id === selectedId) ?? filteredEntries[0] ?? errorEntries[0];

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

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand-row">
            <FileSearch aria-hidden="true" size={28} />
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
              setSortBy("relevance");
              setLedgerSource(allOption);
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
                        onClick={() => setSelectedId(entry.id)}
                        type="button"
                      >
                        <span className="code">{entry.code}</span>
                        <span>
                          <strong>{entry.message}</strong>
                          <small>{entry.summary}</small>
                        </span>
                        <span className="result-badges">
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

        {selectedEntry && <ErrorDetail entry={selectedEntry} />}
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
            <button type="button">View full ledger</button>
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
          {displayedReviewedSources.slice(0, 5).map((sourceItem) => (
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

function ErrorDetail({ entry }) {
  return (
    <article className="detail-pane">
      <div className="detail-main">
        <div className="detail-header">
          <div>
            <span className="selected-label">Selected error</span>
            <h2>
              {entry.code} <span>{entry.message}</span>
            </h2>
          </div>
          <div className="detail-actions">
            <button type="button">
              <Bookmark aria-hidden="true" size={17} />
              Save
            </button>
            <button type="button">
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
                <span>{sourceItem.title}</span>
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

