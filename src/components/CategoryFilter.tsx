import type { Category } from "../types";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "../types";

interface CategoryFilterProps {
  selected: Category | null;
  onSelect: (category: Category | null) => void;
}

const categories = Object.keys(CATEGORY_LABELS) as Category[];

export default function CategoryFilter({
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
          selected === null
            ? "bg-accent text-white border-accent"
            : "bg-white text-muted border-border hover:border-accent hover:text-accent"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(selected === cat ? null : cat)}
          className="px-3 py-1 rounded-full text-sm font-medium border transition-colors cursor-pointer"
          style={
            selected === cat
              ? {
                  backgroundColor: CATEGORY_COLORS[cat],
                  color: "white",
                  borderColor: CATEGORY_COLORS[cat],
                }
              : {
                  backgroundColor: "white",
                  color: CATEGORY_COLORS[cat],
                  borderColor: "#e5e2d9",
                }
          }
        >
          {CATEGORY_LABELS[cat]}
        </button>
      ))}
    </div>
  );
}
