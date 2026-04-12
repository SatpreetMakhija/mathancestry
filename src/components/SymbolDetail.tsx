import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { MathSymbol } from "../types";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "../types";
import { symbols } from "../data/symbols";

interface SymbolDetailProps {
  symbol: MathSymbol;
}

export default function SymbolDetail({ symbol }: SymbolDetailProps) {
  const relatedSymbols = symbol.connections
    .map((id) => symbols.find((s) => s.id === id))
    .filter(Boolean) as MathSymbol[];

  const yearDisplay = symbol.yearBCE
    ? `${symbol.year} BCE`
    : String(symbol.year);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-5xl min-[400px]:text-7xl sm:text-8xl font-serif text-ink mb-4">
          {symbol.symbol}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink m-0 mb-2">
          {symbol.name}
        </h1>
        <p className="text-lg text-muted">
          Introduced in{" "}
          <span className="font-semibold text-ink">{yearDisplay}</span> by{" "}
          <span className="font-semibold text-ink">{symbol.inventor}</span>
        </p>
        <span
          className="inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium text-white"
          style={{ backgroundColor: CATEGORY_COLORS[symbol.category] }}
        >
          {CATEGORY_LABELS[symbol.category]}
        </span>
      </motion.div>

      {/* The Story */}
      <motion.section
        className="mb-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-xl font-bold text-ink mb-3 border-b border-border pb-2">
          The Story
        </h2>
        <p className="text-base leading-relaxed mb-3">{symbol.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-parchment rounded-lg p-4">
            <div className="text-xs text-muted uppercase tracking-wide mb-1">
              Creator
            </div>
            <div className="flex items-center gap-3 mt-1">
              {symbol.inventorImage ? (
                <img
                  src={symbol.inventorImage}
                  alt={symbol.inventor}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                  }}
                />
              ) : null}
              <div
                className={`w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm shrink-0 ${symbol.inventorImage ? "hidden" : ""}`}
              >
                {symbol.inventor.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-ink flex items-center gap-1.5">
                  {symbol.inventor}
                  {symbol.inventorWiki && (
                    <a
                      href={symbol.inventorWiki}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                      title="Wikipedia"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                </div>
                <div className="text-sm text-muted">{symbol.nationality}</div>
              </div>
            </div>
          </div>
          <div className="bg-parchment rounded-lg p-4">
            <div className="text-xs text-muted uppercase tracking-wide mb-1">
              Published In
            </div>
            <div className="font-semibold text-ink text-sm">{symbol.work}</div>
          </div>
          <div className="bg-parchment rounded-lg p-4">
            <div className="text-xs text-muted uppercase tracking-wide mb-1">
              Year
            </div>
            <div className="font-semibold text-ink">{yearDisplay}</div>
            {symbol.adoptionYear && (
              <div className="text-sm text-muted">
                Widely adopted ~{symbol.adoptionYear}
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Before This */}
      <motion.section
        className="mb-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-ink mb-3 border-b border-border pb-2">
          Before This Symbol
        </h2>
        <div className="bg-white border border-border rounded-lg p-5">
          <p className="text-base leading-relaxed m-0">{symbol.beforeThis}</p>
        </div>
      </motion.section>

      {/* Fun Fact */}
      <motion.section
        className="mb-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-5">
          <h3 className="text-sm font-bold text-accent uppercase tracking-wide mb-2 font-sans m-0">
            Fun Fact
          </h3>
          <p className="text-base leading-relaxed m-0">{symbol.funFact}</p>
        </div>
      </motion.section>

      {/* Related Symbols */}
      {relatedSymbols.length > 0 && (
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-bold text-ink mb-3 border-b border-border pb-2">
            Related Symbols
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedSymbols.map((rel) => (
              <Link
                key={rel.id}
                to={`/symbol/${rel.id}`}
                className="flex items-center gap-2 bg-white border border-border rounded-lg px-4 py-2 hover:shadow-sm transition-shadow no-underline"
              >
                <span className="text-2xl font-serif text-ink">
                  {rel.symbol}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">
                    {rel.name}
                  </div>
                  <div className="text-xs text-muted">{rel.year}</div>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
}
