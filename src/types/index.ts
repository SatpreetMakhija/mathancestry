export type Category =
  | "arithmetic"
  | "algebra"
  | "calculus"
  | "constants"
  | "logic"
  | "set-theory"
  | "geometry"
  | "number-theory";

export interface MathSymbol {
  id: string;
  symbol: string;
  latex: string;
  name: string;
  year: number;
  yearBCE?: boolean;
  inventor: string;
  nationality: string;
  work: string;
  description: string;
  beforeThis: string;
  adoptionYear?: number;
  category: Category;
  funFact: string;
  connections: string[];
  inventorImage?: string;
  inventorWiki?: string;
}

export interface Equation {
  id: string;
  name: string;
  latex: string;
  description: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  arithmetic: "Arithmetic",
  algebra: "Algebra",
  calculus: "Calculus",
  constants: "Constants",
  logic: "Logic",
  "set-theory": "Set Theory",
  geometry: "Geometry",
  "number-theory": "Number Theory",
};

export const CATEGORY_COLORS: Record<Category, string> = {
  arithmetic: "#e74c3c",
  algebra: "#3498db",
  calculus: "#2ecc71",
  constants: "#9b59b6",
  logic: "#e67e22",
  "set-theory": "#1abc9c",
  geometry: "#f39c12",
  "number-theory": "#8e44ad",
};
