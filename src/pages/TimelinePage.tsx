import { symbols } from "../data/symbols";
import Timeline from "../components/Timeline";

export default function TimelinePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-2">
          Timeline of Notation
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          From ancient India to 20th-century France — see when each symbol
          entered the mathematical lexicon.
        </p>
      </div>

      <Timeline symbols={symbols} />
    </div>
  );
}
