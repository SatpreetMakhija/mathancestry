import { useState, useMemo } from "react";
import { symbols } from "../data/symbols";
import type { Category } from "../types";
import SymbolCard from "../components/SymbolCard";
import CategoryFilter from "../components/CategoryFilter";

type SortKey = "year" | "name";

export default function CatalogPage() {
  const [category, setCategory] = useState<Category | null>(null);
  const [sortBy, setSortBy] = useState<SortKey>("year");

  const filtered = useMemo(() => {
    let result = category
      ? symbols.filter((s) => s.category === category)
      : [...symbols];

    result.sort((a, b) => {
      if (sortBy === "year") {
        const ya = a.yearBCE ? -a.year : a.year;
        const yb = b.yearBCE ? -b.year : b.year;
        return ya - yb;
      }
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [category, sortBy]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-2">
          The Symbol Catalog
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Explore the origins of {symbols.length} mathematical symbols — who
          invented them, when, and what came before.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <CategoryFilter selected={category} onSelect={setCategory} />

        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted">Sort:</span>
          <button
            onClick={() => setSortBy("year")}
            className={`px-2 py-1 rounded text-sm cursor-pointer ${
              sortBy === "year"
                ? "bg-accent text-white"
                : "text-muted hover:text-ink"
            }`}
          >
            Year
          </button>
          <button
            onClick={() => setSortBy("name")}
            className={`px-2 py-1 rounded text-sm cursor-pointer ${
              sortBy === "name"
                ? "bg-accent text-white"
                : "text-muted hover:text-ink"
            }`}
          >
            Name
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 min-[416px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filtered.map((s, i) => (
          <SymbolCard key={s.id} symbol={s} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted">
          No symbols found in this category.
        </div>
      )}
    </div>
  );
}
