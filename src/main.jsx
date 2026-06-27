import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileSearch,
  Filter,
  Search,
  ShieldCheck,
} from "lucide-react";
import { errorEntries, sourcePriority } from "./data/errors.js";
import { reviewedSources } from "./data/reviewedSources.js";
import "./styles.css";

const allOption = "All";

function uniqueSorted(values) {
  return [allOption, ...Array.from(new Set(values.filter(Boolean))).sort()];
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

function App() {
  const [query, setQuery] = useState("");
  const [product, setProduct] = useState(allOption);
  const [version, setVersion] = useState(allOption);
  const [source, setSource] = useState(allOption);
  const [confidence, setConfidence] = useState(allOption);
  const [selectedId, setSelectedId] = useState(errorEntries[0]?.id);

  const filters = useMemo(
    () => ({
      products: uniqueSorted(errorEntries.map((entry) => entry.product)),
      versions: uniqueSorted(errorEntries.flatMap((entry) => entry.versions)),
      sources: uniqueSorted(errorEntries.flatMap((entry) => entry.sources.map((item) => item.sourceType))),
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
    <main className="app-shell">
      <header className="topbar">
        <div>
          <div className="brand-row">
            <FileSearch aria-hidden="true" size={28} />
            <h1>Laserfiche Self-Hosted Error Helper</h1>
          </div>
          <p>
            Curated error-code guidance from Laserfiche documentation and reviewed Laserfiche Answers
            threads.
          </p>
        </div>
        <div className="source-summary" aria-label="Source summary">
          <span>{errorEntries.length} curated entries</span>
          <span>{reviewedSources.length} reviewed sources</span>
          <span>{employeeSourceCount} employee-sourced entries</span>
        </div>
      </header>

      <section className="notice">
        <ShieldCheck aria-hidden="true" size={20} />
        <p>
          Validate guidance against the affected self-hosted environment before changing production
          systems. Source links are retained so every recommendation can be checked against the original
          context.
        </p>
      </section>

      <section className="toolbar" aria-label="Search and filters">
        <label className="search-control">
          <Search aria-hidden="true" size={20} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search code, message, symptom, product, or fix"
            type="search"
          />
        </label>
        <FilterSelect label="Product" value={product} onChange={setProduct} options={filters.products} />
        <FilterSelect label="Version" value={version} onChange={setVersion} options={filters.versions} />
        <FilterSelect label="Source" value={source} onChange={setSource} options={filters.sources} />
        <FilterSelect
          label="Confidence"
          value={confidence}
          onChange={setConfidence}
          options={filters.confidences}
        />
      </section>

      <section className="workspace">
        <aside className="results-pane" aria-label="Error results">
          <div className="pane-heading">
            <div>
              <h2>Errors by product</h2>
              <p>{filteredEntries.length} matching entries</p>
            </div>
            <Filter aria-hidden="true" size={18} />
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
        <div>
          <h2>Reviewed-source ledger</h2>
          <p>Checked-in research list used to prevent duplicate Answers/doc review passes.</p>
        </div>
        <div className="ledger-grid">
          {reviewedSources.slice(0, 5).map((sourceItem) => (
            <a href={sourceItem.url} key={sourceItem.id} rel="noreferrer" target="_blank">
              <span>{sourceItem.reviewedDate}</span>
              <strong>{sourceItem.title}</strong>
              <small>{sourceItem.extractedErrorCodes.join(", ") || "No code extracted"}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function FilterSelect({ label, options, value, onChange }) {
  return (
    <label className="filter-control">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
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
    "official-docs": "Official docs",
    "answers-laserfiche-employee": "Laserfiche employee",
    "answers-community-confirmed": "Community confirmed",
    "answers-community": "Community",
  };
  return <span className={`source-badge ${sourceType}`}>{labels[sourceType] ?? sourceType}</span>;
}

function ErrorDetail({ entry }) {
  return (
    <article className="detail-pane">
      <div className="detail-header">
        <div>
          <span className="product">{entry.product}</span>
          <h2>
            {entry.code} <span>{entry.message}</span>
          </h2>
          <p>{entry.summary}</p>
        </div>
        <ConfidenceBadge value={entry.confidence} />
      </div>

      <div className="meta-strip">
        <span>Versions: {entry.versions.join(", ")}</span>
        <span>Last reviewed: {entry.reviewedDate}</span>
        <span>Source rank: {sourceRank(entry)}</span>
      </div>

      <DetailSection title="Symptoms">
        <ul>
          {entry.symptoms.map((symptom) => (
            <li key={symptom}>{symptom}</li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection title="Potential fixes and checks">
        <ol>
          {entry.likelyFixes.map((fix) => (
            <li key={fix}>{fix}</li>
          ))}
        </ol>
      </DetailSection>

      <DetailSection title="Evidence and source priority">
        <div className="source-list">
          {entry.sources.map((sourceItem, index) => (
            <a
              className="source-card"
              href={sourceItem.url}
              key={`${sourceItem.sourceType}-${sourceItem.url}-${index}`}
              rel="noreferrer"
              target="_blank"
            >
              <div>
                <SourceBadge sourceType={sourceItem.sourceType} />
                <strong>{sourceItem.title}</strong>
                <p>{sourceItem.note}</p>
              </div>
              <ExternalLink aria-hidden="true" size={18} />
            </a>
          ))}
        </div>
      </DetailSection>

      {entry.notes && (
        <div className="caution">
          <AlertTriangle aria-hidden="true" size={18} />
          <p>{entry.notes}</p>
        </div>
      )}
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
