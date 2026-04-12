import { test, expect } from "@playwright/test";

test.describe("Timeline Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/timeline");
  });

  test("loads and shows page title", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Timeline of Notation");
  });

  test("renders timeline with symbol nodes", async ({ page }) => {
    const nodes = page.locator(".rounded-full").filter({ hasNotText: /All|Arithmetic|Algebra|Calculus|Constants|Logic|Set Theory|Geometry|Number Theory/ });
    const count = await nodes.count();
    expect(count).toBeGreaterThanOrEqual(20);
  });

  test("era section headers are visible", async ({ page }) => {
    await expect(page.getByText("Ancient & Medieval")).toBeVisible();
    await expect(page.getByText("Scientific Revolution")).toBeVisible();
    await expect(page.getByText("Modern Era")).toBeVisible();
  });

  test("clicking a node expands an info card", async ({ page }) => {
    const equalsNode = page.locator('[title="Equals Sign"]');
    await equalsNode.click();

    await expect(page.getByText("Robert Recorde")).toBeVisible();
    await expect(page.getByText("View full history")).toBeVisible();
  });

  test("clicking an expanded node closes the card", async ({ page }) => {
    const equalsNode = page.locator('[title="Equals Sign"]');
    await equalsNode.click();
    await expect(page.getByText("View full history")).toBeVisible();
    await equalsNode.click();
    await expect(page.getByText("View full history")).not.toBeVisible();
  });

  test("timeline scrolls vertically", async ({ page }) => {
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    const viewportHeight = await page.evaluate(() => window.innerHeight);
    expect(pageHeight).toBeGreaterThan(viewportHeight);
  });
});
