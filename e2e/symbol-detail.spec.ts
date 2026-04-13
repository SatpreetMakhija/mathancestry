import { test, expect } from "@playwright/test";

const SYMBOLS_TO_TEST = [
  { id: "equals", name: "Equals Sign", inventor: "Robert Recorde", year: "1557" },
  { id: "plus", name: "Plus Sign", inventor: "Johannes Widmann", year: "1489" },
  { id: "integral", name: "Integral Sign", inventor: "Gottfried Wilhelm Leibniz", year: "1675" },
  { id: "zero", name: "Zero", inventor: "Brahmagupta", year: "628" },
  { id: "pi-constant", name: "Pi", inventor: "William Jones", year: "1706" },
  { id: "empty-set", name: "Empty Set", inventor: "André Weil", year: "1939" },
  { id: "angle", name: "Angle Symbol", inventor: "William Oughtred", year: "1657" },
  { id: "perpendicular", name: "Perpendicular Symbol", inventor: "Pierre Herigone", year: "1634" },
  { id: "parallel", name: "Parallel Symbol", inventor: "John Kersey", year: "1673" },
  { id: "congruence", name: "Congruence Symbol", inventor: "Gottfried Wilhelm Leibniz", year: "1679" },
  { id: "triangle", name: "Triangle Symbol", inventor: "Heron of Alexandria", year: "150" },
  { id: "degree", name: "Degree Symbol", inventor: "Jacques Peletier du Mans", year: "1558" },
  { id: "logical-and", name: "Logical AND (Conjunction)", inventor: "Arend Heyting", year: "1930" },
  { id: "logical-or", name: "Logical OR (Disjunction)", inventor: "Bertrand Russell", year: "1906" },
  { id: "logical-not", name: "Logical NOT (Negation)", inventor: "Arend Heyting", year: "1930" },
  { id: "implication", name: "Logical Implication", inventor: "David Hilbert", year: "1922" },
  { id: "union", name: "Union", inventor: "Giuseppe Peano", year: "1888" },
  { id: "intersection", name: "Intersection", inventor: "Giuseppe Peano", year: "1888" },
  { id: "subset", name: "Subset", inventor: "Ernst Schröder", year: "1890" },
  { id: "superset", name: "Superset", inventor: "Ernst Schröder", year: "1890" },
  { id: "not-element-of", name: "Not Element Of", inventor: "Nicolas Bourbaki", year: "1939" },
  { id: "aleph", name: "Aleph Number", inventor: "Georg Cantor", year: "1893" },
  { id: "modular-congruence", name: "Modular Congruence", inventor: "Carl Friedrich Gauss", year: "1801" },
  { id: "euler-totient", name: "Euler's Totient Function", inventor: "Carl Friedrich Gauss", year: "1801" },
  { id: "floor-function", name: "Floor Function", inventor: "Carl Friedrich Gauss", year: "1808" },
  { id: "divides", name: "Divides", inventor: "Edmund Landau", year: "1927" },
  { id: "absolute-value", name: "Absolute Value", inventor: "Karl Weierstrass", year: "1841" },
  { id: "dot-multiply", name: "Dot (Multiplication)", inventor: "Gottfried Wilhelm Leibniz", year: "1698" },
  { id: "ratio", name: "Ratio Sign", inventor: "Gottfried Wilhelm Leibniz", year: "1684" },
  { id: "approx-equal", name: "Approximately Equal", inventor: "Alfred George Greenhill", year: "1892" },
  { id: "proportional", name: "Proportional To", inventor: "William Emerson", year: "1768" },
  { id: "logarithm", name: "Logarithm", inventor: "Johannes Kepler", year: "1624" },
  { id: "nabla", name: "Nabla (Del Operator)", inventor: "William Rowan Hamilton", year: "1837" },
  { id: "prime-notation", name: "Prime Notation (Lagrange)", inventor: "Joseph-Louis Lagrange", year: "1797" },
  { id: "contour-integral", name: "Contour Integral", inventor: "Arnold Sommerfeld", year: "1917" },
  { id: "epsilon-delta", name: "Epsilon-Delta Definition", inventor: "Karl Weierstrass", year: "1861" },
  { id: "golden-ratio", name: "Golden Ratio (Phi)", inventor: "Mark Barr", year: "1910" },
  { id: "determinant", name: "Determinant (Vertical Bars)", inventor: "Arthur Cayley", year: "1841" },
  { id: "cross-product", name: "Cross Product (Vectors)", inventor: "Josiah Willard Gibbs", year: "1881" },
];

test.describe("Symbol Detail Page", () => {
  for (const sym of SYMBOLS_TO_TEST) {
    test(`renders ${sym.name} (${sym.id}) correctly`, async ({ page }) => {
      await page.goto(`/symbol/${sym.id}`);

      // Hero section: name and year
      await expect(
        page.getByRole("heading", { level: 1, name: sym.name }),
      ).toBeVisible();
      await expect(page.getByText(sym.year).first()).toBeVisible();
      await expect(page.getByText(sym.inventor).first()).toBeVisible();

      // Key sections exist
      await expect(page.getByText("The Story")).toBeVisible();
      await expect(page.getByText("Before This Symbol")).toBeVisible();
      await expect(page.getByText("Fun Fact")).toBeVisible();

      // Category badge is visible
      const badge = page.locator("span").filter({
        hasText:
          /^(Arithmetic|Algebra|Calculus|Constants|Logic|Set Theory|Geometry|Number Theory)$/,
      });
      await expect(badge.first()).toBeVisible();
    });
  }

  test("shows related symbols with working links", async ({ page }) => {
    await page.goto("/symbol/equals");
    await expect(page.getByText("Related Symbols")).toBeVisible();

    // Equals has connections to other symbols
    const relatedSection = page.locator("text=Related Symbols").locator("..");
    const relatedLinks = relatedSection.locator('a[href^="/symbol/"]');
    const count = await relatedLinks.count();
    expect(count).toBeGreaterThan(0);

    // Click a related symbol
    await relatedLinks.first().click();
    await expect(page).toHaveURL(/\/symbol\/.+/);
    await expect(page.getByText("The Story")).toBeVisible();
  });

  test("back to catalog link works", async ({ page }) => {
    await page.goto("/symbol/plus");
    await page.locator("a", { hasText: "Back to Catalog" }).click();
    await expect(page).toHaveURL("/");
    await expect(
      page.getByRole("heading", { level: 1, name: "The Symbol Catalog" }),
    ).toBeVisible();
  });

  test("non-existent symbol shows 404", async ({ page }) => {
    await page.goto("/symbol/nonexistent");
    await expect(page.getByText("Symbol Not Found")).toBeVisible();
    await expect(
      page.locator("a", { hasText: "Back to Catalog" }),
    ).toBeVisible();
  });

  test("creator info card shows nationality and work", async ({ page }) => {
    await page.goto("/symbol/equals");
    await expect(page.getByText("Welsh")).toBeVisible();
    await expect(page.getByText("The Whetstone of Witte")).toBeVisible();
  });

  test("adoption year shown when available", async ({ page }) => {
    await page.goto("/symbol/equals");
    await expect(page.getByText(/adopted.*1700/i)).toBeVisible();
  });

  test("inventor portrait image renders on detail page", async ({ page }) => {
    await page.goto("/symbol/equals");
    const img = page.locator('img[alt="Robert Recorde"]');
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute("src", "/inventors/robert-recorde.jpg");
  });

  test("symbols without inventor image show fallback initial", async ({ page }) => {
    await page.goto("/symbol/zero");
    // Brahmagupta has no image, should show fallback with "B"
    const fallback = page.locator("text=Creator").locator("..").locator("div.rounded-full", { hasText: "B" });
    await expect(fallback).toBeVisible();
  });

  test("navigating from bottom of catalog scrolls to top of detail page", async ({ page }) => {
    await page.goto("/");

    // Scroll to the bottom of the catalog to find a card far down
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);

    // Click the last symbol card
    const cards = page.locator('a[href^="/symbol/"]');
    const count = await cards.count();
    await cards.nth(count - 1).click();

    // Should be on a detail page
    await expect(page).toHaveURL(/\/symbol\/.+/);

    // The h1 heading should be visible in the viewport (page scrolled to top)
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
    await page.waitForTimeout(300);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(50); // page should be scrolled to top
  });
});
