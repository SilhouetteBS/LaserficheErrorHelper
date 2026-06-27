import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileSearch,
  Filter,
  HelpCircle,
  Info,
  RefreshCw,
  Search,
  ShieldCheck,
  SlidersHorizontal,
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
  const [selectedId, setSelectedId] = useState(errorEntries[0]?.id);

  const filters = useMemo(
    () => ({
      products: withAll(productOptions),
      versions: withAll(versionOptions),
      sources: [
        allOption,
        ...sourceTypeOptions
          .filter((option) =>
            errorEntries.some((entry) => entry.sources.some((item) => item.sourceType === option.value)),
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
      .sort((a, b) => sourceRank(a) - sourceRank(b) || a.code.localeCompare(b.code));
  }, [query, product, version, source, confidence]);

  const selectedEntry =
    filteredEntries.find((entry) => entry.id === selectedId) ?? filteredEntries[0] ?? errorEntries[0];

  const groupedEntries = useMemo(() => {
    return filteredEntries.reduce((groups, entry) => {
      groups[entry.product] ||= [];
      groups[entry.product].push(entry);
      return groups;
    }, {});
  }, [filteredEntries]);

  const employeeSourceCount = errorEntries.filter((entry) =>
    entry.sources.some((item) => item.sourceType === "answers-laserfiche-employee"),
  ).length;

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
            <SlidersHorizontal aria-hidden="true" size={17} />
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
              <span>Sort by:</span>
              <button type="button">Relevance</button>
              <Filter aria-hidden="true" size={18} />
            </div>
          </div>
          {filteredEntries.length === 0 ? (
            <div className="empty-state">
              <AlertTriangle aria-hidden="true" size={22} />
              <p>No curated entries match the current filters.</p>
            </div>
          ) : (
            Object.entries(groupedEntries).map(([groupProduct, entries]) => (
              <div className="result-group" key={groupProduct}>
                <h3>{groupProduct}</h3>
                {entries.map((entry) => (
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
            ))
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
            <button type="button">All Sources</button>
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
          {reviewedSources.slice(0, 5).map((sourceItem) => (
            <a className="ledger-row" href={sourceItem.url} key={sourceItem.id} rel="noreferrer" target="_blank">
              <strong>{sourceItem.title}</strong>
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
            <button type="button">Save</button>
            <button type="button">Share</button>
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
          <h3>Source Confidence</h3>
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
                  <CheckCircle2 aria-hidden="true" size={15} />
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
