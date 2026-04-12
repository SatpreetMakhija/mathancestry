import { test, expect } from "@playwright/test";

test.describe("Timeline Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/timeline");
  });

  test("loads and shows page title", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Timeline of Notation");
  });

  test("renders timeline with symbol nodes", async ({ page }) => {
    // Each symbol becomes a circular node with the symbol text inside
    // The nodes are divs with rounded-full class containing symbol text
    const nodes = page.locator(".rounded-full").filter({ hasNotText: /All|Arithmetic|Algebra|Calculus|Constants|Logic|Set Theory|Geometry|Number Theory/ });
    const count = await nodes.count();
    expect(count).toBeGreaterThanOrEqual(20); // At least most of 32 symbols
  });

  test("era markers are visible", async ({ page }) => {
    // Check for some era labels
    await expect(page.getByText("1500")).toBeVisible();
    await expect(page.getByText("1700")).toBeVisible();
    await expect(page.getByText("1900")).toBeVisible();
  });

  test("hovering a node shows tooltip with symbol info", async ({ page }) => {
    // Find a symbol node and hover it
    // The nodes contain the symbol character
    const equalsNode = page.locator('[title="Equals Sign"]');
    await equalsNode.hover();

    // Tooltip should appear with symbol name
    await expect(page.getByText("Robert Recorde")).toBeVisible();
  });

  test("clicking a node navigates to detail page", async ({ page }) => {
    const equalsNode = page.locator('[title="Equals Sign"]');
    // First click selects, second navigates
    await equalsNode.click();
    await equalsNode.click();
    await expect(page).toHaveURL(/\/symbol\/equals/);
  });

  test("timeline is horizontally scrollable", async ({ page }) => {
    const scrollContainer = page.locator(".timeline-scroll");
    const scrollWidth = await scrollContainer.evaluate(
      (el) => el.scrollWidth,
    );
    const clientWidth = await scrollContainer.evaluate(
      (el) => el.clientWidth,
    );
    // Timeline content should be wider than viewport
    expect(scrollWidth).toBeGreaterThan(clientWidth);
  });
});
