import type { MathSymbol, Equation } from "../types";

export const symbols: MathSymbol[] = [
  {
    id: "plus",
    symbol: "+",
    latex: "+",
    name: "Plus Sign",
    year: 1489,
    inventor: "Johannes Widmann",
    nationality: "German",
    inventorWiki: "https://en.wikipedia.org/wiki/Johannes_Widmann",
    work: "Mercantile Arithmetic (Behende und hubsche Rechenung auff allen Kaufmanschafft)",
    description:
      "Johannes Widmann introduced + and - in his 1489 commercial arithmetic textbook. The symbols likely evolved from Latin abbreviations: 'et' (and) was shortened in merchant manuscripts, with the 't' gradually stylized into +.",
    beforeThis:
      "The letter 'p' (from Latin 'plus') or the word 'et' was written out. Italian merchants used 'p̄' with a tilde.",
    adoptionYear: 1550,
    category: "arithmetic",
    funFact:
      "Widmann used + and - not for addition and subtraction, but to indicate surplus and deficit in warehouse inventories.",
    connections: ["minus", "equals"],
  },
  {
    id: "minus",
    symbol: "\u2212",
    latex: "-",
    name: "Minus Sign",
    year: 1489,
    inventor: "Johannes Widmann",
    nationality: "German",
    inventorWiki: "https://en.wikipedia.org/wiki/Johannes_Widmann",
    work: "Mercantile Arithmetic",
    description:
      "Appearing alongside the plus sign in Widmann's 1489 text, the minus sign likely derived from the tilde (~) that scribes placed over the letter 'm' as an abbreviation of 'minus'. Over time, only the dash remained.",
    beforeThis:
      "The letter 'm' (from Latin 'minus') or 'm̄' with a tilde was used to indicate subtraction.",
    adoptionYear: 1550,
    category: "arithmetic",
    funFact:
      "For decades after Widmann, different regions used different subtraction symbols. The obelus (÷) meant subtraction in some European countries.",
    connections: ["plus", "plus-minus"],
  },
  {
    id: "times",
    symbol: "\u00d7",
    latex: "\\times",
    name: "Multiplication Sign",
    year: 1631,
    inventor: "William Oughtred",
    nationality: "English",
    inventorWiki: "https://en.wikipedia.org/wiki/William_Oughtred",
    work: "Clavis Mathematicae (The Key of Mathematics)",
    description:
      "Oughtred chose the rotated cross \u00d7 for multiplication in his influential algebra textbook. Leibniz later objected, arguing it was too easily confused with the letter x, and proposed the centered dot (\u00b7) instead.",
    beforeThis:
      "Juxtaposition (placing numbers next to each other) or the word 'in' (Latin) was used. Some writers used 'M' for multiplication.",
    adoptionYear: 1700,
    category: "arithmetic",
    funFact:
      "Oughtred also invented the slide rule, one of the most important calculation tools before electronic calculators.",
    connections: ["division", "product"],
    inventorImage: "/inventors/william-oughtred.jpg",
  },
  {
    id: "division",
    symbol: "\u00f7",
    latex: "\\div",
    name: "Division Sign (Obelus)",
    year: 1659,
    inventor: "Johann Rahn",
    nationality: "Swiss",
    inventorWiki: "https://en.wikipedia.org/wiki/Johann_Rahn",
    work: "Teutsche Algebra",
    description:
      "Rahn introduced the obelus \u00f7 for division in his algebra text, likely with guidance from John Pell. The symbol may represent a fraction with dots replacing the numerator and denominator. It remains standard in English-speaking countries but is rarely used in higher mathematics.",
    beforeThis:
      "Division was written as a fraction, or indicated by the words 'divided by'. Some used a closing parenthesis or the letter 'D'.",
    adoptionYear: 1700,
    category: "arithmetic",
    funFact:
      "In Scandinavia and parts of Europe, \u00f7 historically meant subtraction, not division \u2014 a source of confusion for international students.",
    connections: ["times", "equals"],
  },
  {
    id: "equals",
    symbol: "=",
    latex: "=",
    name: "Equals Sign",
    year: 1557,
    inventor: "Robert Recorde",
    nationality: "Welsh",
    inventorWiki: "https://en.wikipedia.org/wiki/Robert_Recorde",
    work: "The Whetstone of Witte",
    description:
      "Recorde chose two parallel lines because 'no two things can be more equal.' His original equals sign was much longer than today's version \u2014 about five times as wide. It took over a century for the symbol to be widely adopted.",
    beforeThis:
      "Mathematicians wrote out words like 'aequalis', 'est', or used abbreviations like 'ae'. Some used a single horizontal dash or other ad hoc marks.",
    adoptionYear: 1700,
    category: "arithmetic",
    funFact:
      "Recorde was a physician to King Edward VI and Queen Mary. He died in debtor's prison in 1558, just a year after publishing the book that immortalized him.",
    connections: ["not-equal", "less-than", "greater-than"],
    inventorImage: "/inventors/robert-recorde.jpg",
  },
  {
    id: "not-equal",
    symbol: "\u2260",
    latex: "\\neq",
    name: "Not Equal Sign",
    year: 1659,
    inventor: "Leonhard Euler",
    nationality: "Swiss",
    inventorWiki: "https://en.wikipedia.org/wiki/Leonhard_Euler",
    work: "Various manuscripts",
    description:
      "While inequality had been expressed in various ways, the modern \u2260 notation with a slash through the equals sign became standardized through usage in the 18th century. Euler helped popularize many mathematical notations including inequality symbols.",
    beforeThis:
      "Writers used words or phrases like 'non aequalis'. Some used different ad hoc symbols to indicate inequality.",
    category: "arithmetic",
    funFact:
      "The concept of 'not equal' is fundamental to proof by contradiction \u2014 one of the most powerful techniques in all of mathematics.",
    connections: ["equals", "less-than", "greater-than"],
    inventorImage: "/inventors/leonhard-euler.jpg",
  },
  {
    id: "less-than",
    symbol: "<",
    latex: "<",
    name: "Less Than Sign",
    year: 1631,
    inventor: "Thomas Harriot",
    nationality: "English",
    inventorWiki: "https://en.wikipedia.org/wiki/Thomas_Harriot",
    work: "Artis Analyticae Praxis (published posthumously)",
    description:
      "Harriot's inequality symbols were published after his death by his editors. His original symbols were more ornate \u2014 the simplified < and > we use today were likely the editors' cleaner versions. The visual logic is elegant: the smaller end points to the smaller quantity.",
    beforeThis:
      "Mathematicians wrote out phrases or used ad hoc notation. Some used symbols like \\] for 'less than'.",
    adoptionYear: 1750,
    category: "arithmetic",
    funFact:
      "Harriot was also a famous explorer and astronomer \u2014 he mapped the Moon through a telescope months before Galileo, but never published his observations.",
    connections: ["greater-than", "less-equal", "greater-equal"],
    inventorImage: "/inventors/thomas-harriot.jpg",
  },
  {
    id: "greater-than",
    symbol: ">",
    latex: ">",
    name: "Greater Than Sign",
    year: 1631,
    inventor: "Thomas Harriot",
    nationality: "English",
    inventorWiki: "https://en.wikipedia.org/wiki/Thomas_Harriot",
    work: "Artis Analyticae Praxis (published posthumously)",
    description:
      "Published alongside <, the greater-than sign completes Harriot's paired inequality notation. Together, < and > replaced a variety of verbal and symbolic conventions across European mathematics.",
    beforeThis:
      "Same as less-than: words, abbreviations, or ad hoc symbols were used to express ordering relationships.",
    adoptionYear: 1750,
    category: "arithmetic",
    funFact:
      "Harriot was sent to the New World by Sir Walter Raleigh and became one of the first Englishmen to learn an Algonquian language.",
    connections: ["less-than", "less-equal", "greater-equal"],
    inventorImage: "/inventors/thomas-harriot.jpg",
  },
  {
    id: "less-equal",
    symbol: "\u2264",
    latex: "\\leq",
    name: "Less Than or Equal To",
    year: 1734,
    inventor: "Pierre Bouguer",
    nationality: "French",
    inventorWiki: "https://en.wikipedia.org/wiki/Pierre_Bouguer",
    work: "Sur de nouvelles courbes auxquelles on peut donner le nom de lignes de poursuite",
    description:
      "Bouguer combined the less-than sign with an underline to create \u2264. The notation elegantly merges two concepts: 'less than' (the angled line) and 'equal to' (the horizontal line beneath).",
    beforeThis:
      "People wrote 'less than or equal to' in words or used non-standard combinations of symbols.",
    category: "arithmetic",
    funFact:
      "Bouguer is also known as the 'father of photometry' \u2014 the science of measuring light. He invented the first instrument for precisely measuring light intensity.",
    connections: ["greater-equal", "less-than", "equals"],
    inventorImage: "/inventors/pierre-bouguer.jpg",
  },
  {
    id: "greater-equal",
    symbol: "\u2265",
    latex: "\\geq",
    name: "Greater Than or Equal To",
    year: 1734,
    inventor: "Pierre Bouguer",
    nationality: "French",
    inventorWiki: "https://en.wikipedia.org/wiki/Pierre_Bouguer",
    work: "Sur de nouvelles courbes auxquelles on peut donner le nom de lignes de poursuite",
    description:
      "The companion to \u2264, introduced in the same work by Bouguer. Like its counterpart, it merges the greater-than angle with an equality line.",
    beforeThis:
      "Verbal descriptions or ad hoc notations combined with inequality symbols.",
    category: "arithmetic",
    funFact:
      "The curved variants \u2266 and \u2267 are sometimes used in East Asian mathematical typography.",
    connections: ["less-equal", "greater-than", "equals"],
    inventorImage: "/inventors/pierre-bouguer.jpg",
  },
  {
    id: "plus-minus",
    symbol: "\u00b1",
    latex: "\\pm",
    name: "Plus-Minus Sign",
    year: 1628,
    inventor: "William Oughtred",
    nationality: "English",
    inventorWiki: "https://en.wikipedia.org/wiki/William_Oughtred",
    work: "Clavis Mathematicae (early usage context)",
    description:
      "Oughtred stacked the plus and minus signs to create a single symbol indicating 'either positive or negative.' It's now ubiquitous in the quadratic formula and error margins.",
    beforeThis:
      "Writers would spell out both cases separately or use verbal descriptions to indicate two possible values.",
    category: "arithmetic",
    funFact:
      "The reverse sign \u2213 (minus-plus) also exists and is used when two \u00b1 symbols in the same equation should take opposite signs.",
    connections: ["plus", "minus"],
    inventorImage: "/inventors/william-oughtred.jpg",
  },
  {
    id: "radical",
    symbol: "\u221a",
    latex: "\\sqrt{}",
    name: "Radical Sign (Square Root)",
    year: 1525,
    inventor: "Christoph Rudolff",
    nationality: "German",
    inventorWiki: "https://en.wikipedia.org/wiki/Christoph_Rudolff",
    work: "Coss",
    description:
      "Rudolff introduced a symbol resembling a lowercase 'r' with a tail for square roots. The symbol may derive from a stylized 'r' for 'radix' (Latin for root). The vinculum (the bar over the radicand) was added later by Ren\u00e9 Descartes in 1637.",
    beforeThis:
      "The Latin word 'radix' or its abbreviation 'Rx' was written before the number. Some used the letter 'l' for 'latus' (side).",
    adoptionYear: 1637,
    category: "algebra",
    funFact:
      "Rudolff's book 'Coss' gets its name from the Italian 'cosa' (thing), which was the word for the unknown in equations \u2014 making algebra literally 'the art of the thing'.",
    connections: ["exponent", "variable-x"],
  },
  {
    id: "variable-x",

    symbol: "x",
    latex: "x",
    name: "Variable x",
    year: 1637,
    inventor: "Ren\u00e9 Descartes",
    nationality: "French",
    work: "La G\u00e9om\u00e9trie",
    description:
      "Descartes established the convention of using letters from the end of the alphabet (x, y, z) for unknowns and letters from the beginning (a, b, c) for known quantities. This single convention unified algebraic notation across Europe.",
    beforeThis:
      "Various letters and words were used inconsistently. Vi\u00e8te used vowels (A, E, I) for unknowns and consonants for known quantities. Earlier algebraists used 'cosa', 'res', or 'coss' for the unknown.",
    adoptionYear: 1650,
    category: "algebra",
    funFact:
      "One popular legend claims 'x' was chosen because a French printer ran low on the less-used letter x, but this is almost certainly a myth. Descartes made a deliberate systematic choice.",
    connections: ["exponent", "function-notation", "radical"],
    inventorImage: "/inventors/rene-descartes.jpg",
  },
  {
    id: "exponent",
    symbol: "x\u00b2",
    latex: "x^2",
    name: "Superscript Exponent",
    year: 1637,
    inventor: "Ren\u00e9 Descartes",
    nationality: "French",
    work: "La G\u00e9om\u00e9trie",
    description:
      "Descartes introduced the modern superscript notation for powers in the same groundbreaking work where he standardized variable naming. Before this, powers were written with abbreviations or repeated multiplication.",
    beforeThis:
      "Powers were written as abbreviations: 'sq' or 'Q' for square, 'C' for cube. Cossists wrote special symbols for each power. Bombelli used a semicircle notation.",
    adoptionYear: 1650,
    category: "algebra",
    funFact:
      "Curiously, Descartes often wrote 'xx' instead of 'x\u00b2' in his own work, reserving the superscript for cubes and higher powers.",
    connections: ["variable-x", "radical"],
    inventorImage: "/inventors/rene-descartes.jpg",
  },
  {
    id: "integral",
    symbol: "\u222b",
    latex: "\\int",
    name: "Integral Sign",
    year: 1675,
    inventor: "Gottfried Wilhelm Leibniz",
    nationality: "German",
    inventorWiki: "https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz",
    work: "Unpublished manuscript (published 1686 in Acta Eruditorum)",
    description:
      "Leibniz chose an elongated 'S' for 'summa' (sum), reflecting that integration is a continuous summation. He wrote in his notebook on October 29, 1675: 'It will be useful to write \u222b for omn.' (omnia = all).",
    beforeThis:
      "Newton used a system of dots (fluxion notation) placed above variables. Before both, areas were described geometrically in words.",
    adoptionYear: 1700,
    category: "calculus",
    funFact:
      "We know the exact date Leibniz invented this symbol \u2014 October 29, 1675 \u2014 because he meticulously dated his notebooks. This is rare in the history of notation.",
    connections: ["derivative", "partial-derivative", "summation"],
    inventorImage: "/inventors/gottfried-wilhelm-leibniz.jpg",
  },
  {
    id: "derivative",
    symbol: "d/dx",
    latex: "\\frac{d}{dx}",
    name: "Derivative Notation",
    year: 1675,
    inventor: "Gottfried Wilhelm Leibniz",
    nationality: "German",
    inventorWiki: "https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz",
    work: "Nova Methodus pro Maximis et Minimis (1684)",
    description:
      "Leibniz introduced dy/dx notation for derivatives, treating them as ratios of infinitesimals. This notation proved more versatile than Newton's dot notation and eventually won out in most of mathematics, especially for chain rule and integration applications.",
    beforeThis:
      "Newton's dot notation (\u1e8b) was used in England. Before calculus, rates of change were described geometrically using tangent lines.",
    adoptionYear: 1700,
    category: "calculus",
    funFact:
      "The 'war' between Newton's and Leibniz's notation lasted over a century. England's stubborn loyalty to Newton's dots held back British mathematics for generations.",
    connections: ["integral", "partial-derivative", "limit"],
    inventorImage: "/inventors/gottfried-wilhelm-leibniz.jpg",
  },
  {
    id: "partial-derivative",
    symbol: "\u2202",
    latex: "\\partial",
    name: "Partial Derivative",
    year: 1770,
    inventor: "Marquis de Condorcet",
    nationality: "French",
    inventorWiki: "https://en.wikipedia.org/wiki/Marquis_de_Condorcet",
    work: "Various mathematical publications",
    description:
      "The curly-d symbol \u2202 was first used by Condorcet and later adopted by Legendre and Jacobi for partial differentiation. It distinguishes partial derivatives (where other variables are held constant) from ordinary derivatives.",
    beforeThis:
      "Various notations were used, including d with subscripts or primes. Euler used parenthetical notation with variable subscripts.",
    adoptionYear: 1840,
    category: "calculus",
    funFact:
      "The symbol \u2202 is sometimes called 'del', 'dee', 'partial dee', or 'dabba' depending on the country and mathematical tradition.",
    connections: ["derivative", "integral"],
    inventorImage: "/inventors/marquis-de-condorcet.jpg",
  },
  {
    id: "summation",
    symbol: "\u2211",
    latex: "\\sum",
    name: "Summation (Sigma)",
    year: 1755,
    inventor: "Leonhard Euler",
    nationality: "Swiss",
    inventorWiki: "https://en.wikipedia.org/wiki/Leonhard_Euler",
    work: "Institutiones Calculi Differentialis",
    description:
      "Euler chose the capital Greek letter sigma (\u03a3) for summation, as 'S' is the first letter of 'summa'. This compact notation replaced lengthy verbal descriptions and made series and sequences far easier to manipulate algebraically.",
    beforeThis:
      "Sums were written out in words or as long expressions with ellipses (...). There was no standard compact notation for finite or infinite sums.",
    adoptionYear: 1800,
    category: "calculus",
    funFact:
      "Euler was so prolific that there's a joke in mathematics: 'To avoid naming everything after Euler, discoveries are often attributed to the first person after Euler to rediscover them.'",
    connections: ["product", "integral", "limit"],
    inventorImage: "/inventors/leonhard-euler.jpg",
  },
  {
    id: "product",
    symbol: "\u220f",
    latex: "\\prod",
    name: "Product (Pi Notation)",
    year: 1812,
    inventor: "Carl Friedrich Gauss",
    nationality: "German",
    inventorWiki: "https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss",
    work: "Disquisitiones generales circa seriem infinitam",
    description:
      "Gauss introduced the capital pi \u220f for products, mirroring Euler's sigma \u03a3 for sums. The choice of pi is natural: \u03a0 is the Greek equivalent of 'P' for 'product'.",
    beforeThis:
      "Products were written out explicitly or described in words. Long products used ellipsis notation.",
    category: "calculus",
    funFact:
      "Gauss could multiply large numbers in his head as a child. By age 3, he reportedly corrected an arithmetic error in his father's payroll calculations.",
    connections: ["summation", "times", "factorial"],
    inventorImage: "/inventors/carl-friedrich-gauss.jpg",
  },
  {
    id: "limit",
    symbol: "lim",
    latex: "\\lim",
    name: "Limit Notation",
    year: 1786,
    inventor: "Simon Antoine Jean L'Huilier",
    nationality: "Swiss",
    inventorWiki: "https://en.wikipedia.org/wiki/Simon_Antoine_Jean_L%27Huilier",
    work: "Exposition \u00e9l\u00e9mentaire des principes des calculs sup\u00e9rieurs",
    description:
      "L'Huilier introduced the 'lim' abbreviation for limits, though the concept had been used informally for over a century. The rigorous epsilon-delta definition came later from Weierstrass in the 1860s.",
    beforeThis:
      "Limits were described verbally as quantities 'approaching' or 'tending to' a value. Newton spoke of 'ultimate ratios'.",
    adoptionYear: 1850,
    category: "calculus",
    funFact:
      "The arrow notation lim_{x\u2192a} wasn't standard until the early 20th century. Before that, subscript notation like lim_{x=a} was common.",
    connections: ["derivative", "integral", "infinity"],
  },
  {
    id: "infinity",
    symbol: "\u221e",
    latex: "\\infty",
    name: "Infinity",
    year: 1655,
    inventor: "John Wallis",
    nationality: "English",
    inventorWiki: "https://en.wikipedia.org/wiki/John_Wallis",
    work: "De Sectionibus Conicis (On Conic Sections)",
    description:
      "Wallis introduced the lemniscate \u221e for infinity without explaining his choice. It may derive from the Roman numeral for 1000 (CI\u2180, sometimes written as a sideways 8), or from the last Greek letter omega (\u03c9), or it may simply be an intuitive loop suggesting endlessness.",
    beforeThis:
      "There was no standard symbol. Mathematicians used words like 'infinitum' or phrases like 'greater than any assigned quantity'.",
    adoptionYear: 1700,
    category: "constants",
    funFact:
      "The shape \u221e is called a lemniscate (from Latin 'lemniscatus', meaning 'decorated with ribbons'). It's technically a specific algebraic curve, not just a vague figure-eight.",
    connections: ["limit", "integral", "pi-constant"],
    inventorImage: "/inventors/john-wallis.jpg",
  },
  {
    id: "pi-constant",
    symbol: "\u03c0",
    latex: "\\pi",
    name: "Pi",
    year: 1706,
    inventor: "William Jones",
    nationality: "Welsh",
    inventorWiki: "https://en.wikipedia.org/wiki/William_Jones_(mathematician)",
    work: "Synopsis Palmariorum Matheseos",
    description:
      "Jones was the first to use the Greek letter \u03c0 for the ratio of a circle's circumference to its diameter. Euler's adoption of it in 1737 cemented its universal use. Jones chose \u03c0 as the first letter of the Greek word '\u03c0\u03b5\u03c1\u03b9\u03c6\u03ad\u03c1\u03b5\u03b9\u03b1' (periphery).",
    beforeThis:
      "The ratio was described verbally or with cumbersome phrases. Some used 'c/d' or the letter 'p'. Oughtred used \u03b4/\u03c0 for the ratio.",
    adoptionYear: 1737,
    category: "constants",
    funFact:
      "Pi Day (March 14, or 3/14) coincides with Albert Einstein's birthday. In 2015, it was extra special: 3/14/15 at 9:26:53 matched pi to 10 digits.",
    connections: ["euler-e", "imaginary-i", "infinity"],
    inventorImage: "/inventors/william-jones.jpg",
  },
  {
    id: "euler-e",
    symbol: "e",
    latex: "e",
    name: "Euler's Number",
    year: 1731,
    inventor: "Leonhard Euler",
    nationality: "Swiss",
    inventorWiki: "https://en.wikipedia.org/wiki/Leonhard_Euler",
    work: "Letter to Goldbach / Mechanica (1736)",
    description:
      "Euler first used 'e' for the base of natural logarithms in a letter to Goldbach in 1731, then in his published work. While it's often said 'e' stands for 'Euler', he likely chose it simply as the next available vowel after 'a', which he was already using.",
    beforeThis:
      "The constant was known but not given a standard symbol. Napier and others worked with it through logarithmic tables. Some used 'b' or 'c'.",
    adoptionYear: 1760,
    category: "constants",
    funFact:
      "e appears in compound interest (discovered by Bernoulli), probability (derangements), number theory (prime distribution), and physics (radioactive decay) \u2014 it's arguably the most 'natural' number in mathematics.",
    connections: ["pi-constant", "imaginary-i", "integral"],
    inventorImage: "/inventors/leonhard-euler.jpg",
  },
  {
    id: "imaginary-i",
    symbol: "i",
    latex: "i",
    name: "Imaginary Unit",
    year: 1777,
    inventor: "Leonhard Euler",
    nationality: "Swiss",
    inventorWiki: "https://en.wikipedia.org/wiki/Leonhard_Euler",
    work: "M\u00e9moire (published posthumously in 1794)",
    description:
      "Euler introduced 'i' for \u221a(-1) in a 1777 memoir. The symbol elegantly tamed 'impossible' numbers that had troubled mathematicians for centuries, enabling complex analysis and eventually quantum mechanics.",
    beforeThis:
      "Mathematicians wrote \u221a(-1) in full, or used various ad hoc notations. Many simply avoided imaginary numbers, calling them 'fictitious' or 'impossible'.",
    adoptionYear: 1800,
    category: "constants",
    funFact:
      "Euler discovered the most beautiful equation in mathematics: e^{i\u03c0} + 1 = 0, connecting five fundamental constants (e, i, \u03c0, 1, 0) in one elegant identity.",
    connections: ["euler-e", "pi-constant", "radical"],
    inventorImage: "/inventors/leonhard-euler.jpg",
  },
  {
    id: "zero",
    symbol: "0",
    latex: "0",
    name: "Zero",
    year: 628,
    inventor: "Brahmagupta",
    nationality: "Indian",
    inventorWiki: "https://en.wikipedia.org/wiki/Brahmagupta",
    work: "Br\u0101hmasphu\u1e6dasiddh\u0101nta",
    description:
      "While placeholder zeros existed in Babylon and Maya civilizations, Brahmagupta was the first to treat zero as a number in its own right, defining rules for arithmetic with zero (addition, subtraction, multiplication). His work was transmitted to the Islamic world and then to Europe.",
    beforeThis:
      "The Babylonians used a placeholder space (later a symbol) in their base-60 system. The Greeks had no zero. Romans had no zero in their numeral system.",
    adoptionYear: 1200,
    category: "number-theory",
    funFact:
      "Brahmagupta incorrectly stated that 0/0 = 0. The true nature of division by zero remained controversial for over a millennium and led to key developments in calculus and limits.",
    connections: ["infinity", "equals"],
  },
  {
    id: "element-of",
    symbol: "\u2208",
    latex: "\\in",
    name: "Element Of",
    year: 1889,
    inventor: "Giuseppe Peano",
    nationality: "Italian",
    inventorWiki: "https://en.wikipedia.org/wiki/Giuseppe_Peano",
    work: "Arithmetices principia, nova methodo exposita",
    description:
      "Peano introduced \u2208 as a stylized epsilon (\u03b5), the first letter of the Greek word '\u03b5\u03c3\u03c4\u03af' (esti), meaning 'is'. It denotes set membership: a \u2208 S means 'a is an element of S'.",
    beforeThis:
      "Set membership was expressed in words or with ad hoc notation. The formal concept of sets was still relatively new (Cantor's work began in the 1870s).",
    category: "set-theory",
    funFact:
      "Peano created an entire symbolic language for mathematics (his 'Formulario Mathematico'), but it was so dense that few mathematicians could read it fluently.",
    connections: ["empty-set", "for-all", "there-exists"],
    inventorImage: "/inventors/giuseppe-peano.jpg",
  },
  {
    id: "empty-set",
    symbol: "\u2205",
    latex: "\\emptyset",
    name: "Empty Set",
    year: 1939,
    inventor: "Andr\u00e9 Weil (Bourbaki group)",
    nationality: "French",
    work: "Bourbaki's \u00c9l\u00e9ments de math\u00e9matique",
    description:
      "Andr\u00e9 Weil proposed using the Norwegian/Danish letter \u00d8 (modified to \u2205) for the empty set, inspired by his knowledge of Scandinavian alphabets. It was adopted by the Bourbaki group, the influential collective that sought to reformulate all of mathematics on rigorous foundations.",
    beforeThis:
      "The empty set was denoted by 0, \u039b (Lambda), or simply described as 'the null class' in words.",
    category: "set-theory",
    funFact:
      "Bourbaki was not a real person but a pseudonym for a secret group of French mathematicians. They even published a fake biography and wedding announcement for 'Nicolas Bourbaki'.",
    connections: ["element-of", "for-all", "zero"],
    inventorImage: "/inventors/andre-weil.jpg",
  },
  {
    id: "for-all",
    symbol: "\u2200",
    latex: "\\forall",
    name: "Universal Quantifier (For All)",
    year: 1935,
    inventor: "Gerhard Gentzen",
    nationality: "German",
    inventorWiki: "https://en.wikipedia.org/wiki/Gerhard_Gentzen",
    work: "Untersuchungen \u00fcber das logische Schlie\u00dfen",
    description:
      "Gentzen introduced \u2200 (an inverted A) for 'for all' in his groundbreaking work on natural deduction and sequent calculus. The choice of an upside-down 'A' from 'All' is a simple mnemonic.",
    beforeThis:
      "Logicians used parenthetical notation like (x) to mean 'for all x', or wrote out the universal quantification in words. Peano had used different symbols.",
    category: "logic",
    funFact:
      "Gentzen also proved the consistency of arithmetic \u2014 but tragically died in 1945 in a prisoner-of-war camp at age 35, cutting short one of the most brilliant careers in mathematical logic.",
    connections: ["there-exists", "element-of", "logical-and", "logical-not"],
    inventorImage: "/inventors/gerhard-gentzen.jpg",
  },
  {
    id: "there-exists",
    symbol: "\u2203",
    latex: "\\exists",
    name: "Existential Quantifier (There Exists)",
    year: 1897,
    inventor: "Giuseppe Peano",
    nationality: "Italian",
    inventorWiki: "https://en.wikipedia.org/wiki/Giuseppe_Peano",
    work: "Formulaire de Math\u00e9matiques",
    description:
      "Peano introduced a backwards 'E' for 'there exists.' The mnemonic mirrors \u2200: just as \u2200 is an inverted 'A' for 'All', \u2203 is a reversed 'E' for 'Exists'. Together they form the foundation of quantified predicate logic.",
    beforeThis:
      "Existence was stated in words within proofs, or using ad hoc notations that varied between authors and schools.",
    category: "logic",
    funFact:
      "Adding a slash through \u2203 gives \u2204 ('there does not exist'), which is surprisingly rare in published mathematics \u2014 most authors prefer to write \u00ac\u2203 or 'no such ... exists'.",
    connections: ["for-all", "element-of", "logical-or"],
    inventorImage: "/inventors/giuseppe-peano.jpg",
  },
  {
    id: "logical-and",
    symbol: "∧",
    latex: "\\land",
    name: "Logical AND (Conjunction)",
    year: 1930,
    inventor: "Arend Heyting",
    nationality: "Dutch",
    inventorWiki: "https://en.wikipedia.org/wiki/Arend_Heyting",
    work: "Die formalen Regeln der intuitionistischen Logik",
    description:
      "Heyting introduced the ∧ symbol for logical conjunction in his 1930 paper formalizing intuitionistic logic, published in the Sitzungsberichte der preussischen Akademie der Wissenschaften. The symbol appears on page 43 of the paper, alongside ¬ for negation.",
    beforeThis:
      "Boole used multiplication (pq) for 'p and q.' Peano used the intersection symbol ∩ for conjunction. Russell and Whitehead used the dot (·) in Principia Mathematica (1910).",
    category: "logic",
    funFact:
      "Heyting introduced both ∧ and ¬ on the same page of the same paper. His formalization of intuitionistic logic was originally submitted as a prize essay in 1928 — and won. His advisor Brouwer had deliberately refused to formalize his own intuitionistic ideas, so Heyting did what his teacher wouldn't.",
    connections: ["logical-or", "logical-not", "for-all"],
    inventorImage: "/inventors/arend-heyting.jpg",
  },
  {
    id: "logical-or",
    symbol: "∨",
    latex: "\\lor",
    name: "Logical OR (Disjunction)",
    year: 1906,
    inventor: "Bertrand Russell",
    nationality: "British",
    inventorWiki: "https://en.wikipedia.org/wiki/Bertrand_Russell",
    work: "The Theory of Implication (American Journal of Mathematics, vol. 28)",
    description:
      "Russell introduced ∨ for logical disjunction in his 1906 paper 'The Theory of Implication.' He created ∨ to distinguish propositional disjunction from Peano's ∪ (class union), which Peano had used for both purposes.",
    beforeThis:
      "Peano used the union symbol ∪ for both class union and propositional disjunction. Boole used addition (+) for 'or.' There was no dedicated symbol for propositional disjunction alone.",
    category: "logic",
    funFact:
      "A common myth claims ∨ stands for the Latin word 'vel' (meaning 'or'). A 2023 paper by Elkind and Zach debunked this — Russell actually despised Latin, writing: 'I hated Latin and Greek, and thought it merely foolish to learn a language that nobody speaks.' He chose ∨ as a visual sharpening of Peano's ∪.",
    connections: ["logical-and", "there-exists", "implication"],
    inventorImage: "/inventors/bertrand-russell.jpg",
  },
  {
    id: "logical-not",
    symbol: "¬",
    latex: "\\lnot",
    name: "Logical NOT (Negation)",
    year: 1930,
    inventor: "Arend Heyting",
    nationality: "Dutch",
    inventorWiki: "https://en.wikipedia.org/wiki/Arend_Heyting",
    work: "Die formalen Regeln der intuitionistischen Logik",
    description:
      "Heyting introduced the ¬ symbol for logical negation in the same 1930 paper where he introduced ∧ for conjunction. Both symbols appear on page 43 of his formalization of intuitionistic logic.",
    beforeThis:
      "Frege used a small vertical stroke attached to his content stroke for negation in Begriffsschrift (1879). Peano introduced the tilde ~ for negation in 1897. Russell and Whitehead adopted ~ in Principia Mathematica (1910).",
    category: "logic",
    funFact:
      "Heyting had eleven children and was described as 'retiring and modest' with interests spanning music, literature, linguistics, philosophy, astronomy, and botany — a Renaissance man who happened to revolutionize the notation of logic.",
    connections: ["logical-and", "not-equal", "for-all"],
    inventorImage: "/inventors/arend-heyting.jpg",
  },
  {
    id: "implication",
    symbol: "→",
    latex: "\\to",
    name: "Logical Implication",
    year: 1922,
    inventor: "David Hilbert",
    nationality: "German",
    inventorWiki: "https://en.wikipedia.org/wiki/David_Hilbert",
    work: "Neubegründung der Mathematik (Abhandlungen aus dem Mathematischen Seminar der Hamburger Universität)",
    description:
      "Hilbert introduced the arrow → for logical implication in his 1922 paper, where the symbol appears on page 166. The arrow was a cleaner, more intuitive replacement for Peano's horseshoe symbol ⊃, visually suggesting directionality from hypothesis to conclusion.",
    beforeThis:
      "Peano used the horseshoe ⊃ for implication, which Russell and Whitehead adopted in Principia Mathematica (1910). Frege used a two-dimensional conditional stroke in his Begriffsschrift (1879).",
    category: "logic",
    funFact:
      "Hilbert's tombstone bears the inscription 'Wir müssen wissen — wir werden wissen' ('We must know — we will know'). The paper containing the → symbol was based on talks that were a direct rebuttal to his former student Hermann Weyl, who had defected to Brouwer's intuitionism.",
    connections: ["logical-or", "logical-and"],
    inventorImage: "/inventors/david-hilbert.jpg",
  },
  {
    id: "factorial",
    symbol: "!",
    latex: "!",
    name: "Factorial",
    year: 1808,
    inventor: "Christian Kramp",
    nationality: "French (Alsatian)",
    inventorWiki: "https://en.wikipedia.org/wiki/Christian_Kramp",
    work: "\u00c9l\u00e9ments d'arithm\u00e9tique universelle",
    description:
      "Kramp introduced the exclamation mark for factorial, writing n! for the product 1\u00d72\u00d73\u00d7...\u00d7n. He explicitly stated he chose '!' for its typographic convenience, as it was easy to print and visually distinctive.",
    beforeThis:
      "Various notations existed: \u230an (with a floor bracket), n with an underline, or the product written out in full. Euler used \u0393(n+1) via the Gamma function.",
    adoptionYear: 1830,
    category: "number-theory",
    funFact:
      "70! is approximately 10^100 (a googol). 170! exceeds what most calculators can display. And 1000! has 2,568 digits.",
    connections: ["product", "summation"],
  },
  {
    id: "function-notation",
    symbol: "f(x)",
    latex: "f(x)",
    name: "Function Notation",
    year: 1734,
    inventor: "Leonhard Euler",
    nationality: "Swiss",
    inventorWiki: "https://en.wikipedia.org/wiki/Leonhard_Euler",
    work: "Various publications, formalized in Introductio in analysin infinitorum (1748)",
    description:
      "Euler standardized writing f(x) to denote a function of x, though earlier mathematicians like Johann Bernoulli had used similar ideas. Euler's consistent use across his enormous body of work made it the universal standard.",
    beforeThis:
      "Functions were described verbally or with cumbersome phrases. Leibniz used terms like 'function' but without the f(x) notation. Bernoulli used the Greek letter \u03c6.",
    adoptionYear: 1750,
    category: "algebra",
    funFact:
      "Euler wrote more mathematical papers than any other individual in history \u2014 over 800 publications. New works of his continued to be published for nearly 50 years after his death.",
    connections: ["variable-x", "derivative", "euler-e"],
    inventorImage: "/inventors/leonhard-euler.jpg",
  },
  {
    id: "similarity",
    symbol: "~",
    latex: "\\sim",
    name: "Similarity / Tilde",
    year: 1698,
    inventor: "Gottfried Wilhelm Leibniz",
    nationality: "German",
    inventorWiki: "https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz",
    work: "Letter to Johann Bernoulli",
    description:
      "Leibniz proposed the tilde ~ for geometric similarity. It later became one of the most versatile symbols in mathematics, used for equivalence relations, approximation, probability distributions, and more.",
    beforeThis:
      "Similarity was described in words: 'figure A is similar to figure B.' There was no compact symbolic representation.",
    category: "geometry",
    funFact:
      "The word 'tilde' comes from Spanish, where it refers to the ~ mark over the letter \u00f1. In Spanish, it originally indicated a following 'n' that was suppressed in writing.",
    connections: ["equals", "congruence", "angle"],
    inventorImage: "/inventors/gottfried-wilhelm-leibniz.jpg",
  },
  {
    id: "angle",
    symbol: "∠",
    latex: "\\angle",
    name: "Angle Symbol",
    year: 1657,
    inventor: "William Oughtred",
    nationality: "English",
    inventorWiki: "https://en.wikipedia.org/wiki/William_Oughtred",
    work: "Trigonometria (published posthumously by John Wallis)",
    description:
      "Oughtred introduced the ∠ symbol for angles in his Trigonometria, published posthumously in 1657 by John Wallis. Pierre Herigone had used the less-than sign < for angles in 1634, but Oughtred's modified form ∠ became the standard notation.",
    beforeThis:
      "Angles were described in words or abbreviated as 'ang.' Pierre Herigone used the < symbol for angles in 1634, but this caused confusion with inequality.",
    category: "geometry",
    funFact:
      "Oughtred died in 1660, reportedly from joy upon hearing the news of the Restoration of Charles II. His Trigonometria was published three years before his death by his student John Wallis.",
    connections: ["similarity", "perpendicular", "degree"],
    inventorImage: "/inventors/william-oughtred.jpg",
  },
  {
    id: "perpendicular",
    symbol: "⊥",
    latex: "\\perp",
    name: "Perpendicular Symbol",
    year: 1634,
    inventor: "Pierre Herigone",
    nationality: "French",
    inventorWiki: "https://en.wikipedia.org/wiki/Pierre_H%C3%A9rigone",
    work: "Cursus mathematicus",
    description:
      "Herigone introduced ⊥ to denote perpendicularity in his six-volume Cursus mathematicus (1634–1642). This was part of his broader effort to create a complete symbolic language for mathematics, replacing verbal descriptions with compact notation.",
    beforeThis:
      "Perpendicularity was stated in words: 'line AB is perpendicular to line CD.' There was no dedicated symbol for the relationship.",
    category: "geometry",
    funFact:
      "Herigone's Cursus mathematicus was one of the first attempts to create an entirely symbolic mathematical language. He also introduced ∠ (as <) for angles, though Oughtred's version won out.",
    connections: ["angle", "parallel"],
  },
  {
    id: "parallel",
    symbol: "∥",
    latex: "\\parallel",
    name: "Parallel Symbol",
    year: 1673,
    inventor: "John Kersey",
    nationality: "English",
    inventorWiki: "https://en.wikipedia.org/wiki/John_Kersey_the_elder",
    work: "Algebra (edition of Wingate's Arithmétique)",
    description:
      "The parallel symbol ∥ first appeared in print in John Kersey's 1673 edition of Wingate's Arithmétique. William Oughtred also used the symbol in his work published posthumously in 1677, leading to some dispute over its origin. Kersey's published use predates Oughtred's by four years.",
    beforeThis:
      "Parallelism was described verbally: 'line AB is parallel to line CD.' Euclid's Elements discussed parallel lines extensively without any symbolic shorthand.",
    category: "geometry",
    funFact:
      "The symbol's visual design is elegantly literal — two parallel vertical lines representing two parallel lines. It is one of the most pictographic symbols in mathematical notation.",
    connections: ["perpendicular", "similarity"],
  },
  {
    id: "congruence",
    symbol: "≅",
    latex: "\\cong",
    name: "Congruence Symbol",
    year: 1679,
    inventor: "Gottfried Wilhelm Leibniz",
    nationality: "German",
    inventorWiki: "https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz",
    work: "Unpublished manuscripts (concept described 1679, published 1710)",
    description:
      "Leibniz conceived the idea of combining the equality sign = with the similarity sign ~ to express geometric congruence (same shape and size). He described this in manuscripts around 1679, though the notation was not published until 1710. The modern symbol ≅ directly reflects his concept of 'similar and equal.'",
    beforeThis:
      "Congruence was expressed verbally or with the simple equality sign, which failed to distinguish between numerical equality and geometric congruence.",
    category: "geometry",
    funFact:
      "Leibniz invented both the similarity (~) and congruence (≅) symbols, making him perhaps the most influential figure in the notation of geometric relationships.",
    connections: ["similarity", "equals"],
    inventorImage: "/inventors/gottfried-wilhelm-leibniz.jpg",
  },
  {
    id: "triangle",
    symbol: "△",
    latex: "\\triangle",
    name: "Triangle Symbol",
    year: 150,
    inventor: "Heron of Alexandria",
    nationality: "Greek",
    inventorWiki: "https://en.wikipedia.org/wiki/Hero_of_Alexandria",
    work: "Metrica",
    description:
      "Heron of Alexandria used the triangle symbol △ as a shorthand for the word 'triangle' in his Metrica (c. AD 150), one of the earliest known uses of a geometric shape as its own mathematical symbol. The practice became widespread in European mathematics by the 17th century.",
    beforeThis:
      "The word 'triangle' or its Greek equivalent 'trigonon' (τρίγωνον) was written out in full. Euclid's Elements always spelled out triangle names like 'triangle ABC.'",
    category: "geometry",
    funFact:
      "Heron is best known for Heron's formula for the area of a triangle given its side lengths, and for the aeolipile — an early steam engine. His Metrica was lost for centuries and only rediscovered in 1896 in Constantinople.",
    connections: ["angle", "degree"],
  },
  {
    id: "degree",
    symbol: "°",
    latex: "^{\\circ}",
    name: "Degree Symbol",
    year: 1558,
    inventor: "Jacques Peletier du Mans",
    nationality: "French",
    inventorWiki: "https://en.wikipedia.org/wiki/Jacques_Pelletier_du_Mans",
    work: "De l'usage de la géométrie",
    description:
      "The small raised circle ° for degrees appeared in Jacques Peletier du Mans' 1558 work on geometry. The symbol likely evolved from the practice of marking degrees with a small zero or 'o' as a superscript, derived from the Latin 'nulla' (nothing) used in the sexagesimal (base-60) system inherited from Babylonian astronomy.",
    beforeThis:
      "Degrees were abbreviated as 'deg.' or 'gr.' (from Latin 'gradus'). The Babylonians used a sexagesimal system but without a dedicated degree symbol.",
    category: "geometry",
    funFact:
      "Peletier was also a poet and humanist of the French Renaissance. His mathematical works were notable for being written in French rather than Latin, helping to democratize mathematical knowledge.",
    connections: ["angle", "triangle"],
  },
];

export const equations: Equation[] = [
  {
    id: "euler-identity",
    name: "Euler's Identity",
    latex:
      "\\htmlClass{math-symbol}{\\htmlData{symbol-id=euler-e}{e}}^{\\htmlClass{math-symbol}{\\htmlData{symbol-id=imaginary-i}{i}}\\htmlClass{math-symbol}{\\htmlData{symbol-id=pi-constant}{\\pi}}} \\htmlClass{math-symbol}{\\htmlData{symbol-id=plus}{+}} \\htmlClass{math-symbol}{\\htmlData{symbol-id=zero}{1}} \\htmlClass{math-symbol}{\\htmlData{symbol-id=equals}{=}} \\htmlClass{math-symbol}{\\htmlData{symbol-id=zero}{0}}",
    description:
      "Often called the most beautiful equation in mathematics, it connects five fundamental constants: e, i, pi, 1, and 0.",
  },
  {
    id: "quadratic-formula",
    name: "Quadratic Formula",
    latex:
      "\\htmlClass{math-symbol}{\\htmlData{symbol-id=variable-x}{x}} \\htmlClass{math-symbol}{\\htmlData{symbol-id=equals}{=}} \\frac{\\htmlClass{math-symbol}{\\htmlData{symbol-id=minus}{-}}b \\htmlClass{math-symbol}{\\htmlData{symbol-id=plus-minus}{\\pm}} \\htmlClass{math-symbol}{\\htmlData{symbol-id=radical}{\\sqrt{b^{2} - 4ac}}}}{2a}",
    description:
      "The universal formula for solving any quadratic equation ax\u00b2 + bx + c = 0.",
  },
  {
    id: "pythagorean-theorem",
    name: "Pythagorean Theorem",
    latex:
      "a\\htmlClass{math-symbol}{\\htmlData{symbol-id=exponent}{^2}} \\htmlClass{math-symbol}{\\htmlData{symbol-id=plus}{+}} b\\htmlClass{math-symbol}{\\htmlData{symbol-id=exponent}{^2}} \\htmlClass{math-symbol}{\\htmlData{symbol-id=equals}{=}} c\\htmlClass{math-symbol}{\\htmlData{symbol-id=exponent}{^2}}",
    description:
      "The fundamental relationship between the sides of a right triangle, known for over 3,000 years.",
  },
  {
    id: "fundamental-theorem-calculus",
    name: "Fundamental Theorem of Calculus",
    latex:
      "\\htmlClass{math-symbol}{\\htmlData{symbol-id=integral}{\\int}}_a^b \\htmlClass{math-symbol}{\\htmlData{symbol-id=function-notation}{f(x)}} \\, dx \\htmlClass{math-symbol}{\\htmlData{symbol-id=equals}{=}} F(b) \\htmlClass{math-symbol}{\\htmlData{symbol-id=minus}{-}} F(a)",
    description:
      "Connects differentiation and integration, showing they are inverse operations.",
  },
  {
    id: "euler-product",
    name: "Euler Product Formula",
    latex:
      "\\htmlClass{math-symbol}{\\htmlData{symbol-id=summation}{\\sum}}_{n\\htmlClass{math-symbol}{\\htmlData{symbol-id=equals}{=}}1}^{\\htmlClass{math-symbol}{\\htmlData{symbol-id=infinity}{\\infty}}} \\frac{1}{n\\htmlClass{math-symbol}{\\htmlData{symbol-id=exponent}{^s}}} \\htmlClass{math-symbol}{\\htmlData{symbol-id=equals}{=}} \\htmlClass{math-symbol}{\\htmlData{symbol-id=product}{\\prod}}_p \\frac{1}{1 \\htmlClass{math-symbol}{\\htmlData{symbol-id=minus}{-}} p^{\\htmlClass{math-symbol}{\\htmlData{symbol-id=minus}{-}}s}}",
    description:
      "Connects an infinite sum over natural numbers to an infinite product over primes \u2014 a bridge between analysis and number theory.",
  },
];
