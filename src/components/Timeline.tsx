import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { MathSymbol } from "../types";
import { CATEGORY_COLORS, CATEGORY_LABELS } from "../types";

interface TimelineProps {
  symbols: MathSymbol[];
}

const NODE_SIZE = 36;
const MIN_GAP = 6;
const NODE_STEP = NODE_SIZE + MIN_GAP;
const TIMELINE_Y = 180;
const TOP_LANE_BASE = 80;
const BOTTOM_LANE_BASE = TIMELINE_Y + 30;

// Map year to pixel position — non-linear, with more space in the dense era
function yearToPosition(year: number, isBCE?: boolean): number {
  const y = isBCE ? -year : year;

  if (y < 500) return ((y + 300) / 800) * 120;
  if (y < 1400) return 120 + ((y - 500) / 900) * 120;
  // 1400–1950 gets the bulk of space
  return 240 + ((y - 1400) / 550) * 1800;
}

const TOTAL_WIDTH = 2100;

interface EraMarker {
  year: number;
  label: string;
}

// Only show era markers where they won't collide
const eras: EraMarker[] = [
  { year: 0, label: "0 CE" },
  { year: 1400, label: "1400" },
  { year: 1500, label: "1500" },
  { year: 1600, label: "1600" },
  { year: 1650, label: "1650" },
  { year: 1700, label: "1700" },
  { year: 1750, label: "1750" },
  { year: 1800, label: "1800" },
  { year: 1850, label: "1850" },
  { year: 1900, label: "1900" },
  { year: 1950, label: "1950" },
];

interface PositionedNode {
  symbol: MathSymbol;
  x: number;
  lane: 0 | 1; // 0 = above, 1 = below
  laneOffset: number; // extra offset within the lane for stacking
}

// Assign lanes and handle overlaps
function layoutNodes(symbols: MathSymbol[]): PositionedNode[] {
  const sorted = [...symbols].sort((a, b) => {
    const ya = a.yearBCE ? -a.year : a.year;
    const yb = b.yearBCE ? -b.year : b.year;
    return ya - yb;
  });

  const result: PositionedNode[] = [];

  // Track occupied x-ranges per lane, per stack level
  // For each lane, store the rightmost x used at each stack depth
  const laneRightEdge: [number[], number[]] = [[], []]; // [top lanes depths, bottom lanes depths]

  for (let i = 0; i < sorted.length; i++) {
    const s = sorted[i];
    const x = yearToPosition(s.year, s.yearBCE);

    // Try the preferred lane (alternate) first, then the other
    const preferredLane: 0 | 1 = i % 2 === 0 ? 0 : 1;
    const otherLane: 0 | 1 = preferredLane === 0 ? 1 : 0;

    let bestLane: 0 | 1 = preferredLane;
    let bestDepth = findDepth(laneRightEdge[preferredLane], x);
    const otherDepth = findDepth(laneRightEdge[otherLane], x);

    // Prefer the lane with less stacking
    if (otherDepth < bestDepth) {
      bestLane = otherLane;
      bestDepth = otherDepth;
    }

    // Record this node's right edge at its depth
    while (laneRightEdge[bestLane].length <= bestDepth) {
      laneRightEdge[bestLane].push(-Infinity);
    }
    laneRightEdge[bestLane][bestDepth] = x + NODE_STEP;

    result.push({
      symbol: s,
      x,
      lane: bestLane,
      laneOffset: bestDepth * (NODE_SIZE + 4),
    });
  }

  return result;
}

// Find the first depth where x doesn't overlap
function findDepth(rightEdges: number[], x: number): number {
  for (let d = 0; d < rightEdges.length; d++) {
    if (x >= rightEdges[d]) return d;
  }
  return rightEdges.length;
}

export default function Timeline({ symbols: allSymbols }: TimelineProps) {
  const [activeSymbol, setActiveSymbol] = useState<MathSymbol | null>(null);
  const navigate = useNavigate();

  const nodes = layoutNodes(allSymbols);

  // Calculate total height needed based on max stacking
  const maxTopOffset = Math.max(0, ...nodes.filter((n) => n.lane === 0).map((n) => n.laneOffset));
  const maxBottomOffset = Math.max(0, ...nodes.filter((n) => n.lane === 1).map((n) => n.laneOffset));
  const totalHeight = TIMELINE_Y + 60 + maxBottomOffset + 40;

  return (
    <div className="relative">
      <div className="timeline-scroll overflow-x-auto pb-4">
        <div
          className="relative"
          style={{ width: TOTAL_WIDTH, height: Math.max(totalHeight, 340) }}
        >
          {/* Era markers */}
          {eras.map((era) => {
            const x = yearToPosition(era.year);
            return (
              <div
                key={era.year}
                className="absolute"
                style={{ left: x, top: 0, bottom: 30 }}
              >
                <div className="h-full border-l border-dashed border-border" />
                <div className="absolute bottom-[-24px] -translate-x-1/2 text-xs text-muted whitespace-nowrap">
                  {era.label}
                </div>
              </div>
            );
          })}

          {/* Main timeline line */}
          <div
            className="absolute left-0 right-0 h-0.5 bg-accent/30"
            style={{ top: TIMELINE_Y }}
          />

          {/* Symbol nodes */}
          {nodes.map(({ symbol: s, x, lane, laneOffset }, i) => {
            const nodeTop =
              lane === 0
                ? TOP_LANE_BASE - laneOffset
                : BOTTOM_LANE_BASE + laneOffset;

            // Connector line from node to the timeline axis
            const connectorTop =
              lane === 0 ? nodeTop + NODE_SIZE : TIMELINE_Y + 2;
            const connectorHeight =
              lane === 0
                ? TIMELINE_Y - nodeTop - NODE_SIZE
                : nodeTop - TIMELINE_Y - 2;

            return (
              <motion.div
                key={s.id}
                className="absolute cursor-pointer"
                style={{
                  left: x - NODE_SIZE / 2,
                  top: nodeTop,
                  width: NODE_SIZE,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.015 * i }}
                onClick={() => {
                  if (activeSymbol?.id === s.id) {
                    navigate(`/symbol/${s.id}`);
                  } else {
                    setActiveSymbol(s);
                  }
                }}
                onMouseEnter={() => setActiveSymbol(s)}
              >
                {/* Connector line */}
                {connectorHeight > 0 && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-px bg-accent/15"
                    style={{
                      top: lane === 0 ? NODE_SIZE : undefined,
                      bottom: lane === 1 ? NODE_SIZE : undefined,
                      height: connectorHeight,
                    }}
                  />
                )}

                {/* Node circle */}
                <div
                  className="rounded-full flex items-center justify-center text-white font-bold shadow-sm hover:scale-110 transition-transform relative z-10"
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

                {/* Year label — only show for non-stacked nodes to avoid collision */}
                {laneOffset === 0 && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
                    style={
                      lane === 0
                        ? { bottom: -16 }
                        : { top: NODE_SIZE + 2 }
                    }
                  >
                    <div className="text-[10px] font-semibold text-ink">
                      {s.yearBCE ? `${s.year} BCE` : s.year}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Tooltip — positioned in the opposite region from the hovered node */}
          <AnimatePresence>
            {activeSymbol && (() => {
              const node = nodes.find((n) => n.symbol.id === activeSymbol.id);
              if (!node) return null;

              const tooltipX = Math.max(
                8,
                Math.min(node.x - 120, TOTAL_WIDTH - 260),
              );
              // Place tooltip in the lane opposite the node to avoid occlusion
              const tooltipTop = node.lane === 0 ? BOTTOM_LANE_BASE + maxBottomOffset + 50 : 0;

              return (
                <motion.div
                  key={activeSymbol.id}
                  className="absolute z-20 bg-white border border-border rounded-lg shadow-lg p-3 w-60 pointer-events-none"
                  style={{ left: tooltipX, top: tooltipTop }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-2xl font-serif">
                      {activeSymbol.symbol}
                    </span>
                    <div>
                      <div className="font-semibold text-sm text-ink">
                        {activeSymbol.name}
                      </div>
                      <div className="text-xs text-muted">
                        {activeSymbol.inventor},{" "}
                        {activeSymbol.yearBCE
                          ? `${activeSymbol.year} BCE`
                          : activeSymbol.year}
                      </div>
                      <span
                        className="inline-block mt-1 px-1.5 py-0.5 rounded text-[10px] font-medium text-white"
                        style={{
                          backgroundColor:
                            CATEGORY_COLORS[activeSymbol.category],
                        }}
                      >
                        {CATEGORY_LABELS[activeSymbol.category]}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted mt-2 m-0 leading-relaxed line-clamp-2">
                    {activeSymbol.description}
                  </p>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </div>
      <p className="text-xs text-muted text-center mt-2">
        Click a symbol to see details. Scroll horizontally to explore the
        timeline.
      </p>
    </div>
  );
}
