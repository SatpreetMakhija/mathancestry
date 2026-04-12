import { test, expect } from "@playwright/test";

test.describe("Equation Explorer Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/explore");
  });

  test("loads and shows page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: /Equation Explorer/ }),
    ).toBeVisible();
  });

  test("shows equation selector buttons for all 5 equations", async ({
    page,
  }) => {
    await expect(
      page.locator("button", { hasText: "Euler's Identity" }),
    ).toBeVisible();
    await expect(
      page.locator("button", { hasText: "Quadratic Formula" }),
    ).toBeVisible();
    await expect(
      page.locator("button", { hasText: "Pythagorean Theorem" }),
    ).toBeVisible();
    await expect(
      page.locator("button", { hasText: "Fundamental Theorem of Calculus" }),
    ).toBeVisible();
    await expect(
      page.locator("button", { hasText: "Euler Product Formula" }),
    ).toBeVisible();
  });

  test("Euler's Identity renders KaTeX math (not raw LaTeX)", async ({
    page,
  }) => {
    const katexContent = page.locator(".katex");
    await expect(katexContent.first()).toBeVisible();

    const rendered = page.locator(".katex-html");
    const visibleText = await rendered.first().textContent();
    expect(visibleText).not.toContain("\\htmlClass");
    expect(visibleText).not.toContain("\\htmlData");
    expect(visibleText).not.toContain("\\frac");

    await expect(page.getByText("most beautiful equation")).toBeVisible();
  });

  test("math symbols have the interactive math-symbol class", async ({
    page,
  }) => {
    const interactiveSymbols = page.locator(".math-symbol");
    const count = await interactiveSymbols.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("math symbols have data-symbol-id attributes in their subtree", async ({
    page,
  }) => {
    const dataElements = page.locator("[data-symbol-id]");
    const count = await dataElements.count();
    expect(count).toBeGreaterThan(0);

    const firstId = await dataElements.first().getAttribute("data-symbol-id");
    expect(firstId).toBeTruthy();
  });

  test("hovering a symbol shows info panel below the equation", async ({
    page,
  }) => {
    // Before hovering: dashed placeholder is visible
    await expect(
      page.getByText("Hover over a symbol in the equation above"),
    ).toBeVisible();

    // Hover over a math symbol
    const symbolEl = page.locator("[data-symbol-id]").first();
    await symbolEl.hover({ force: true });
    await page.waitForTimeout(300);

    // Info panel should appear below with symbol details
    // The placeholder text should be gone
    await expect(
      page.getByText("Hover over a symbol in the equation above"),
    ).not.toBeVisible();

    // Should show historical info (inventor + year)
    const infoPanel = page.locator(".bg-ink.text-white.rounded-xl");
    await expect(infoPanel).toBeVisible();
    const panelText = await infoPanel.textContent();
    expect(panelText).toMatch(/\d{3,4}/); // Contains a year
  });

  test("info panel does NOT obscure the equation", async ({ page }) => {
    const symbolEl = page.locator("[data-symbol-id]").first();
    await symbolEl.hover({ force: true });
    await page.waitForTimeout(300);

    // The equation container and the info panel should not overlap
    const equationBox = await page.locator(".katex").first().boundingBox();
    const infoPanelBox = await page
      .locator(".bg-ink.text-white.rounded-xl")
      .boundingBox();

    expect(equationBox).toBeTruthy();
    expect(infoPanelBox).toBeTruthy();

    // Info panel's top should be below the equation container's bottom
    // (allowing for some padding from the equation's parent)
    expect(infoPanelBox!.y).toBeGreaterThanOrEqual(equationBox!.y + equationBox!.height);
  });

  test("info panel has 'View full history' link", async ({ page }) => {
    const symbolEl = page.locator("[data-symbol-id]").first();
    await symbolEl.hover({ force: true });
    await page.waitForTimeout(300);

    const link = page.locator("a", { hasText: "View full history" });
    await expect(link).toBeVisible();
  });

  test("switching equations changes the displayed math", async ({ page }) => {
    const katexContainer = page.locator(".katex-html").first();
    const initialHtml = await katexContainer.innerHTML();

    await page.locator("button", { hasText: "Pythagorean Theorem" }).click();

    const newHtml = await katexContainer.innerHTML();
    expect(newHtml).not.toBe(initialHtml);
  });

  test("switching equations updates the description", async ({ page }) => {
    await expect(page.getByText("most beautiful equation")).toBeVisible();

    await page
      .locator("button", { hasText: "Pythagorean Theorem" })
      .click();

    await expect(page.getByText("right triangle")).toBeVisible();
  });

  test("clicking 'View full history' navigates to detail page", async ({
    page,
  }) => {
    const symbolEl = page.locator("[data-symbol-id]").first();
    const symbolId = await symbolEl.getAttribute("data-symbol-id");
    await symbolEl.hover({ force: true });
    await page.waitForTimeout(300);

    await page.locator("a", { hasText: "View full history" }).click();
    if (symbolId) {
      await expect(page).toHaveURL(new RegExp(`/symbol/${symbolId}`));
    }
  });

  test("all 5 equations render without KaTeX errors", async ({ page }) => {
    const equationNames = [
      "Euler's Identity",
      "Quadratic Formula",
      "Pythagorean Theorem",
      "Fundamental Theorem of Calculus",
      "Euler Product Formula",
    ];

    for (const name of equationNames) {
      await page.locator("button", { hasText: name }).click();

      const katex = page.locator(".katex");
      await expect(katex.first()).toBeVisible();

      const errors = page.locator(".katex-error");
      const errorCount = await errors.count();
      expect(errorCount).toBe(0);
    }
  });
});
