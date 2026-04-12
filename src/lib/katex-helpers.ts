import katex from "katex";
import { symbols } from "../data/symbols";
import type { MathSymbol } from "../types";

export function renderLatex(latex: string, displayMode = false): string {
  return katex.renderToString(latex, {
    displayMode,
    trust: true,
    throwOnError: false,
    strict: false,
  });
}

export function getSymbolFromEvent(
  event: React.MouseEvent | React.PointerEvent,
): MathSymbol | null {
  const target = event.target as HTMLElement;

  // KaTeX nests \htmlClass and \htmlData as separate spans.
  // The data-symbol-id may be on the target itself, an ancestor, or a child
  // of the .math-symbol wrapper. Search upward first, then check children.
  const dataEl = target.closest("[data-symbol-id]") as HTMLElement | null;
  if (dataEl) {
    const symbolId = dataEl.dataset.symbolId;
    return symbols.find((s) => s.id === symbolId) ?? null;
  }

  // If we hit the .math-symbol wrapper, check its children for data attrs
  const wrapperEl = target.closest(".math-symbol") as HTMLElement | null;
  if (wrapperEl) {
    const child = wrapperEl.querySelector(
      "[data-symbol-id]",
    ) as HTMLElement | null;
    if (child) {
      return symbols.find((s) => s.id === child.dataset.symbolId) ?? null;
    }
  }

  return null;
}
