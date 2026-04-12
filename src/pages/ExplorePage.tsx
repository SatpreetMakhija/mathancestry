import { equations } from "../data/symbols";
import EquationExplorer from "../components/EquationExplorer";

export default function ExplorePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-2">
          Equation Explorer
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Hover over any symbol in a famous equation to discover its historical
          origin.
        </p>
      </div>

      <EquationExplorer equations={equations} />
    </div>
  );
}
