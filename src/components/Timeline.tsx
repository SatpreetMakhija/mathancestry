import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { MathSymbol } from "../types";
import { CATEGORY_COLORS, CATEGORY_LABELS } from "../types";

interface TimelineProps {
  symbols: MathSymbol[];
}

interface Era {
  label: string;
  range: string;
  filter: (s: MathSymbol) => boolean;
}

const ERAS: Era[] = [
  {
    label: "Ancient & Medieval",
    range: "before 1500",
    filter: (s) => {
      const y = s.yearBCE ? -s.year : s.year;
      return y < 1500;
    },
  },
  {
    label: "Renaissance",
    range: "1500–1599",
    filter: (s) => {
      const y = s.yearBCE ? -s.year : s.year;
      return y >= 1500 && y < 1600;
    },
  },
  {
    label: "Scientific Revolution",
    range: "1600–1699",
    filter: (s) => {
      const y = s.yearBCE ? -s.year : s.year;
      return y >= 1600 && y < 1700;
    },
  },
  {
    label: "Enlightenment",
    range: "1700–1799",
    filter: (s) => {
      const y = s.yearBCE ? -s.year : s.year;
      return y >= 1700 && y < 1800;
    },
  },
  {
    label: "Modern Era",
    range: "1800–present",
    filter: (s) => {
      const y = s.yearBCE ? -s.year : s.year;
      return y >= 1800;
    },
  },
];

const NODE_SIZE = 36;

// Non-linear: log-compressed for huge gaps, generous for small ones
function yearGapToPixels(gap: number): number {
  if (gap <= 0) return 12;
  return Math.min(96, Math.max(24, Math.log(gap + 1) * 16));
}

type TimelineItem =
  | { kind: "era"; label: string; range: string }
  | {
      kind: "node";
      symbol: MathSymbol;
      gapPx: number;
      animIndex: number;
      showYear: boolean;
    };

export default function Timeline({ symbols: allSymbols }: TimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const sorted = [...allSymbols].sort((a, b) => {
    const ya = a.yearBCE ? -a.year : a.year;
    const yb = b.yearBCE ? -b.year : b.year;
    return ya - yb;
  });

  // Build render list: era headers interleaved with symbol nodes
  const items: TimelineItem[] = [];
  let currentEra = "";
  let prevYear: number | null = null;
  let animIdx = 0;

  for (let i = 0; i < sorted.length; i++) {
    const s = sorted[i];
    const y = s.yearBCE ? -s.year : s.year;

    const era = ERAS.find((e) => e.filter(s));
    if (era && era.label !== currentEra) {
      currentEra = era.label;
      items.push({ kind: "era", label: era.label, range: era.range });
    }

    let gapPx = 0;
    if (prevYear !== null) {
      gapPx = yearGapToPixels(y - prevYear);
    }

    // Only show year label for the first symbol at each unique year
    const showYear = prevYear === null || y !== prevYear;
    prevYear = y;

    items.push({
      kind: "node",
      symbol: s,
      gapPx,
      animIndex: animIdx++,
      showYear,
    });
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        {/* ── Continuous vertical line down the center ── */}
        <div
          className="absolute left-1/2 -translate-x-[1.5px] top-0 bottom-0 w-[3px] rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-accent) 0%, var(--color-accent-light) 50%, var(--color-accent) 100%)",
            opacity: 0.3,
          }}
        />

        {items.map((item) => {
          // ── Era header: centered pill over the line ──
          if (item.kind === "era") {
            return (
              <div
                key={item.label}
                className="relative flex justify-center py-5 first:pt-0"
              >
                <div className="bg-parchment border border-border px-5 py-1.5 rounded-full z-10 text-center">
                  <div className="text-sm font-bold text-ink leading-tight">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-muted leading-tight">
                    {item.range}
                  </div>
                </div>
              </div>
            );
          }

          // ── Symbol node row ──
          const s = item.symbol;
          const yearText = s.yearBCE ? `${s.year} BCE` : String(s.year);
          const isExpanded = expandedId === s.id;

          return (
            <motion.div
              key={s.id}
              className="relative"
              style={{ paddingTop: item.gapPx }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.025 * item.animIndex }}
            >
              {/* ── Main row: [year] ● [name] ── */}
              <div
                className="flex items-center cursor-pointer group"
                onClick={() => setExpandedId(isExpanded ? null : s.id)}
              >
                {/* Year — left column */}
                <div className="flex-1 text-right pr-3 min-w-0">
                  {item.showYear && (
                    <span className="text-xs font-mono font-semibold text-accent/70 tabular-nums">
                      {yearText}
                    </span>
                  )}
                </div>

                {/* Node circle — centered on the line */}
                <div
                  className="relative z-10 shrink-0 rounded-full flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform ring-2 ring-white"
                  style={{
                    width: NODE_SIZE,
                    height: NODE_SIZE,
                    backgroundColor: CATEGORY_COLORS[s.category],
                    fontSize: s.symbol.length > 2 ? 10 : 14,
                  }}
                  title={s.name}
                >
                  {s.symbol}
                </div>

                {/* Name — right column */}
                <div className="flex-1 pl-3 min-w-0">
                  <span className="text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                    {s.name}
                  </span>
                </div>
              </div>

              {/* ── Expandable info card (right side) ── */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex">
                      <div className="flex-1" />
                      <div style={{ width: NODE_SIZE }} className="shrink-0" />
                      <div className="flex-1 pl-3 pt-2 pb-1">
                        <div className="bg-white border border-border rounded-lg shadow-sm p-4">
                          <div className="flex items-start gap-3">
                            <span className="text-3xl font-serif shrink-0">
                              {s.symbol}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-semibold text-sm text-ink">
                                  {s.name}
                                </span>
                                <span
                                  className="inline-block px-1.5 py-0.5 rounded text-[10px] font-medium text-white"
                                  style={{
                                    backgroundColor:
                                      CATEGORY_COLORS[s.category],
                                  }}
                                >
                                  {CATEGORY_LABELS[s.category]}
                                </span>
                              </div>
                              <div className="text-xs text-muted mt-0.5 flex items-center gap-1.5">
                                {s.inventorImage ? (
                                  <img
                                    src={s.inventorImage}
                                    alt={s.inventor}
                                    className="w-5 h-5 rounded-full object-cover shrink-0 inline-block"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = "none";
                                    }}
                                  />
                                ) : (
                                  <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent text-[9px] font-bold shrink-0">
                                    {s.inventor.charAt(0)}
                                  </span>
                                )}
                                <span>{s.inventor}, {yearText}</span>
                              </div>
                              <p className="text-xs text-muted mt-2 m-0 leading-relaxed line-clamp-3">
                                {s.description}
                              </p>
                              <Link
                                to={`/symbol/${s.id}`}
                                className="inline-block mt-2 text-xs font-medium text-accent hover:underline"
                              >
                                View full history &rarr;
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {/* End cap */}
        <div className="flex justify-center pt-6">
          <div className="w-3 h-3 rounded-full bg-accent/30 z-10" />
        </div>
      </div>
    </div>
  );
}
