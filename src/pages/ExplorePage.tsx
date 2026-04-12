import { equations } from "../data/symbols";
import EquationExplorer from "../components/EquationExplorer";

export default function ExplorePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-2">
          Equation Explorer
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto mb-3">
          <span className="hidden sm:inline">Hover over</span>
          <span className="sm:hidden">Tap</span> any symbol in a famous
          equation to discover its historical origin.
        </p>
        <p className="text-sm text-accent font-medium">
          <span className="hidden sm:inline">Hover</span>
          <span className="sm:hidden">Tap</span> a symbol, then click
          &ldquo;View full history&rdquo; to learn more.
        </p>
      </div>

      <EquationExplorer equations={equations} />
    </div>
  );
}
