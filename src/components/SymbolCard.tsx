import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { MathSymbol } from "../types";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "../types";

interface SymbolCardProps {
  symbol: MathSymbol;
  index: number;
}

export default function SymbolCard({ symbol, index }: SymbolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      <Link
        to={`/symbol/${symbol.id}`}
        className="block bg-white rounded-lg border border-border p-5 hover:shadow-md transition-shadow no-underline group"
      >
        <div className="text-4xl font-serif text-ink mb-3 group-hover:text-accent transition-colors">
          {symbol.symbol}
        </div>
        <h3 className="text-base font-semibold text-ink m-0 mb-1 font-serif">
          {symbol.name}
        </h3>
        <p className="text-sm text-muted m-0 mb-2">
          {symbol.inventor}, {symbol.yearBCE ? `${symbol.year} BCE` : symbol.year}
        </p>
        <span
          className="inline-block px-2 py-0.5 rounded-full text-xs font-medium text-white"
          style={{ backgroundColor: CATEGORY_COLORS[symbol.category] }}
        >
          {CATEGORY_LABELS[symbol.category]}
        </span>
      </Link>
    </motion.div>
  );
}
