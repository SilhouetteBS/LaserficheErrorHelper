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
  if (label === "Source") return "All Sources";
  return value;
}

function App() {
  const [query, setQuery] = useState("");
  const [product, setProduct] = useState(allOption);
  const [version, setVersion] = useState(allOption);
  const [source, setSource] = useState(allOption);
  const [confidence, setConfidence] = useState(allOption);
  const [sortBy, setSortBy] = useState("relevance");
  const [ledgerSource, setLedgerSource] = useState(allOption);
  const [collapsedGroups, setCollapsedGroups] = useState({});
  const [selectedId, setSelectedId] = useState(errorEntries[0]?.id);

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
            ...entry.sources.map((item) => item.title),
          ].join(" "),
        );
        return !term || haystack.includes(term);
      })
      .filter((entry) => product === allOption || entry.product === product)
      .filter((entry) => version === allOption || entry.versions.includes(version))
      .filter((entry) => source === allOption || entry.sources.some((item) => item.sourceType === source))
      .filter((entry) => confidence === allOption || confidenceLabel(entry.confidence) === confidence)
      .sort((a, b) => {
        if (sortBy === "code") return a.code.localeCompare(b.code, undefined, { numeric: true });
        if (sortBy === "confidence") return confidenceWeight(a.confidence) - confidenceWeight(b.confidence);
        if (sortBy === "product") return a.product.localeCompare(b.product) || a.code.localeCompare(b.code);
        return sourceRank(a) - sourceRank(b) || a.code.localeCompare(b.code, undefined, { numeric: true });
      });
  }, [query, product, version, source, confidence, sortBy]);

  const selectedEntry =
    filteredEntries.find((entry) => entry.id === selectedId) ?? filteredEntries[0] ?? errorEntries[0];

  const groupedEntries = useMemo(() => {
    return filteredEntries.reduce((groups, entry) => {
      groups[entry.product] ||= [];
      groups[entry.product].push(entry);
      return groups;
    }, {});
  }, [filteredEntries]);

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
            <span className="utility-link">
              <HelpCircle aria-hidden="true" size={16} />
              How it works
            </span>
            <span className="utility-link">
              <Info aria-hidden="true" size={16} />
              About
            </span>
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
                ×
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
          <button className="more-filters" type="button">
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
              setSortBy("relevance");
              setLedgerSource(allOption);
            }}
            type="button"
          >
            Reset
          </button>
        </section>

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
            Object.entries(groupedEntries).map(([groupProduct, entries]) => {
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
                        <ConfidenceBadge value={entry.confidence} />
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
              <span>{sourceItem.extractedErrorCodes.join(", ") || sourceItem.reviewStatus}</span>
            </a>
          ))}
        </div>
      </section>
      </main>
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

createRoot(document.getElementById("root")).render(<App />);
