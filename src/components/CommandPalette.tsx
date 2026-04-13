import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { symbols } from "../data/symbols";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "../types";
import type { MathSymbol } from "../types";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const filtered = filterSymbols(query);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      // Focus after animation starts
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Scroll selected item into view
  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll("[data-result-item]");
    items[selectedIndex]?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const goToSymbol = useCallback(
    (symbol: MathSymbol) => {
      onClose();
      navigate(`/symbol/${symbol.id}`);
    },
    [navigate, onClose],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        goToSymbol(filtered[selectedIndex]);
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    },
    [filtered, selectedIndex, goToSymbol, onClose],
  );

  // Refs so the document-level listener always reads fresh values
  const filteredRef = useRef(filtered);
  const selectedIndexRef = useRef(selectedIndex);
  filteredRef.current = filtered;
  selectedIndexRef.current = selectedIndex;

  // Document-level listener so Escape/arrows work even when input loses focus
  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => {
      // Don't double-handle events already caught by the input's onKeyDown
      if (e.target === inputRef.current) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) =>
          Math.min(i + 1, filteredRef.current.length - 1),
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const sym = filteredRef.current[selectedIndexRef.current];
        if (sym) goToSymbol(sym);
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose, goToSymbol]);

  if (!open) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          data-testid="command-palette-backdrop"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            data-testid="command-palette-overlay"
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg mx-4 bg-white rounded-xl shadow-2xl overflow-hidden border border-border"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            data-testid="command-palette"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <svg
                className="w-5 h-5 text-muted shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search symbols..."
                className="flex-1 bg-transparent outline-none text-ink placeholder:text-muted text-base"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                data-testid="command-palette-input"
              />
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-xs text-muted bg-parchment rounded border border-border">
                esc
              </kbd>
            </div>

            {/* Results */}
            <div
              ref={listRef}
              className="max-h-80 overflow-y-auto"
              data-testid="command-palette-results"
            >
              {filtered.length === 0 ? (
                <div className="px-4 py-8 text-center text-muted text-sm">
                  No symbols found for "{query}"
                </div>
              ) : (
                filtered.map((sym, i) => (
                  <button
                    key={sym.id}
                    data-result-item
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors cursor-pointer ${
                      i === selectedIndex
                        ? "bg-accent/10"
                        : "hover:bg-parchment"
                    }`}
                    onClick={() => goToSymbol(sym)}
                    onMouseEnter={() => setSelectedIndex(i)}
                  >
                    <span className="text-xl w-8 text-center font-serif shrink-0">
                      {sym.symbol}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-ink text-sm truncate">
                          {sym.name}
                        </span>
                        <span
                          className="text-[10px] px-1.5 py-0.5 rounded-full text-white shrink-0"
                          style={{
                            backgroundColor: CATEGORY_COLORS[sym.category],
                          }}
                        >
                          {CATEGORY_LABELS[sym.category]}
                        </span>
                      </div>
                      <div className="text-xs text-muted truncate">
                        {sym.inventor} · {sym.year}
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div className="px-4 py-2 border-t border-border text-xs text-muted flex gap-3">
              <span>↑↓ navigate</span>
              <span>↵ open</span>
              <span>esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function filterSymbols(query: string): MathSymbol[] {
  if (!query.trim()) return symbols;
  const q = query.toLowerCase();
  return symbols.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.inventor.toLowerCase().includes(q) ||
      s.symbol.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      CATEGORY_LABELS[s.category].toLowerCase().includes(q),
  );
}
