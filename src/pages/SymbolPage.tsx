import { useParams, Link } from "react-router-dom";
import { symbols } from "../data/symbols";
import SymbolDetail from "../components/SymbolDetail";

export default function SymbolPage() {
  const { id } = useParams<{ id: string }>();
  const symbol = symbols.find((s) => s.id === id);

  if (!symbol) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-ink mb-4">Symbol Not Found</h1>
        <p className="text-muted mb-6">
          The symbol you're looking for doesn't exist in our catalog.
        </p>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-accent text-white rounded-lg"
        >
          Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent mb-6"
      >
        &larr; Back to Catalog
      </Link>
      <SymbolDetail symbol={symbol} />
    </div>
  );
}
