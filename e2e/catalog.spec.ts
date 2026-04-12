import { test, expect } from "@playwright/test";

test.describe("Catalog Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("loads and shows page title", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "The Symbol Catalog",
    );
  });

  test("renders all 32 symbol cards", async ({ page }) => {
    const cards = page.locator('a[href^="/symbol/"]');
    await expect(cards).toHaveCount(32);
  });

  test("each card has symbol, name, year, inventor, and category badge", async ({
    page,
  }) => {
    const firstCard = page.locator('a[href^="/symbol/"]').first();
    await expect(firstCard).toBeVisible();
    const text = await firstCard.textContent();
    expect(text).toMatch(/\d{3,4}/);
  });

  test("category filter chips are visible", async ({ page }) => {
    const filterButtons = page
      .locator("button")
      .filter({
        hasText:
          /^(All|Arithmetic|Algebra|Calculus|Constants|Logic|Set Theory|Geometry|Number Theory)$/,
      });
    await expect(filterButtons).toHaveCount(9);
  });

  test("filtering by category reduces visible cards", async ({ page }) => {
    const allCards = await page.locator('a[href^="/symbol/"]').count();
    expect(allCards).toBe(32);

    await page.locator("button", { hasText: "Calculus" }).click();
    const filteredCards = await page.locator('a[href^="/symbol/"]').count();
    expect(filteredCards).toBeGreaterThan(0);
    expect(filteredCards).toBeLessThan(allCards);
  });

  test("clicking 'All' after filtering restores all cards", async ({
    page,
  }) => {
    await page.locator("button", { hasText: "Calculus" }).click();
    const filtered = await page.locator('a[href^="/symbol/"]').count();
    expect(filtered).toBeLessThan(32);

    await page.locator("button", { hasText: /^All$/ }).click();
    await expect(page.locator('a[href^="/symbol/"]')).toHaveCount(32);
  });

  test("sort by Name changes card order", async ({ page }) => {
    const firstCardYear = page.locator('a[href^="/symbol/"]').first();
    const yearText = await firstCardYear.textContent();

    await page.locator("button", { hasText: /^Name$/ }).click();

    const firstCardName = page.locator('a[href^="/symbol/"]').first();
    const nameText = await firstCardName.textContent();
    expect(nameText).not.toBe(yearText);
  });

  test("clicking a card navigates to symbol detail page", async ({ page }) => {
    const firstCard = page.locator('a[href^="/symbol/"]').first();
    await firstCard.click();
    await expect(page).toHaveURL(/\/symbol\/.+/);
    await expect(
      page.locator("a", { hasText: "Back to Catalog" }),
    ).toBeVisible();
  });
});
