import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { renderLatex, getSymbolFromEvent } from "../lib/katex-helpers";
import type { Equation } from "../types";
import type { MathSymbol } from "../types";
import { CATEGORY_COLORS, CATEGORY_LABELS } from "../types";

interface EquationExplorerProps {
  equations: Equation[];
}

export default function EquationExplorer({
  equations,
}: EquationExplorerProps) {
  const [selectedEq, setSelectedEq] = useState(equations[0]);
  const [hoveredSymbol, setHoveredSymbol] = useState<MathSymbol | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const symbol = getSymbolFromEvent(e);
    if (symbol) {
      setHoveredSymbol(symbol);
    }
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const symbol = getSymbolFromEvent(e);
    if (symbol) {
      setHoveredSymbol(symbol);
    }
  }, []);

  const html = renderLatex(selectedEq.latex, true);

  return (
    <div>
      {/* Equation selector */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {equations.map((eq) => (
          <button
            key={eq.id}
            onClick={() => {
              setSelectedEq(eq);
              setHoveredSymbol(null);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
              selectedEq.id === eq.id
                ? "bg-accent text-white border-accent"
                : "bg-white text-ink border-border hover:border-accent"
            }`}
          >
            {eq.name}
          </button>
        ))}
      </div>

      {/* Equation + info panel wrapper — onMouseLeave here so panel stays while moving to it */}
      <div onMouseLeave={() => setHoveredSymbol(null)}>
        {/* Equation display */}
        <div
          className="bg-white border border-border rounded-xl p-8 sm:p-12 text-center"
          onMouseMove={handleMouseMove}
          onClick={handleClick}
        >
          <div
            className="text-2xl sm:text-3xl"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <p className="text-sm text-muted mt-4 mb-0">
            {selectedEq.description}
          </p>

          <p className="text-xs text-muted mt-2 mb-0">
            <span className="hidden sm:inline">Hover over</span>
            <span className="sm:hidden">Tap</span> any symbol to see its
            history. Click to learn more.
          </p>
        </div>

        {/* Symbol info panel — fixed below the equation, never overlaps */}
        <div className="mt-4" style={{ minHeight: 120 }}>
        <AnimatePresence mode="wait">
          {hoveredSymbol ? (
            <motion.div
              key={hoveredSymbol.id}
              className="bg-ink text-white rounded-xl p-5 shadow-lg"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl font-serif shrink-0">
                  {hoveredSymbol.symbol}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-base">
                      {hoveredSymbol.name}
                    </span>
                    <span
                      className="inline-block px-2 py-0.5 rounded text-[10px] font-medium text-white"
                      style={{
                        backgroundColor:
                          CATEGORY_COLORS[hoveredSymbol.category],
                      }}
                    >
                      {CATEGORY_LABELS[hoveredSymbol.category]}
                    </span>
                  </div>
                  <div className="text-sm text-white/70 mt-0.5">
                    {hoveredSymbol.inventor},{" "}
                    {hoveredSymbol.yearBCE
                      ? `${hoveredSymbol.year} BCE`
                      : hoveredSymbol.year}
                  </div>
                  <p className="text-sm text-white/80 mt-2 m-0 leading-relaxed">
                    {hoveredSymbol.description}
                  </p>
                  <Link
                    to={`/symbol/${hoveredSymbol.id}`}
                    className="inline-block mt-2 text-xs font-medium text-white/60 hover:text-white underline"
                  >
                    View full history &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              className="flex items-center justify-center h-[120px] rounded-xl border-2 border-dashed border-border text-muted text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <span className="hidden sm:inline">Hover over</span>
              <span className="sm:hidden">Tap</span> a symbol in the equation above to explore its origins
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
}
