import { test, expect } from "@playwright/test";

// Helper: open the command palette via dispatching keydown on document
async function openPaletteViaKeyboard(page: import("@playwright/test").Page) {
  await page.evaluate(() => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "k",
        code: "KeyK",
        metaKey: true,
        ctrlKey: true,
        bubbles: true,
      }),
    );
  });
}

test.describe("Command Palette", () => {
  test("keyboard shortcut opens and Escape closes", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await openPaletteViaKeyboard(page);
    await expect(page.getByTestId("command-palette")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByTestId("command-palette")).not.toBeVisible();
  });

  test("backdrop click closes", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("search-button").click();
    await expect(page.getByTestId("command-palette")).toBeVisible();
    await page.getByTestId("command-palette-overlay").click({ position: { x: 10, y: 10 } });
    await expect(page.getByTestId("command-palette")).not.toBeVisible();
  });

  test("empty query shows all 38 symbols", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("search-button").click();
    const results = page.getByTestId("command-palette-results");
    await expect(results.locator("button")).toHaveCount(38);
  });

  test("typing filters by name", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("search-button").click();
    await page.getByTestId("command-palette-input").fill("Plus Sign");
    const results = page
      .getByTestId("command-palette-results")
      .locator("button");
    await expect(results.first()).toContainText("Plus Sign");
  });

  test("typing filters by inventor", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("search-button").click();
    await page.getByTestId("command-palette-input").fill("Euler");
    const results = page
      .getByTestId("command-palette-results")
      .locator("button");
    const count = await results.count();
    expect(count).toBeGreaterThanOrEqual(4);
    for (let i = 0; i < count; i++) {
      await expect(results.nth(i)).toContainText("Euler");
    }
  });

  test("typing filters by category", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("search-button").click();
    await page.getByTestId("command-palette-input").fill("calculus");
    const results = page
      .getByTestId("command-palette-results")
      .locator("button");
    const count = await results.count();
    expect(count).toBeGreaterThanOrEqual(5);
  });

  test("arrow keys + Enter navigates to symbol page", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("search-button").click();
    await page.getByTestId("command-palette-input").fill("Equals Sign");
    await page
      .getByTestId("command-palette-results")
      .locator("button")
      .first()
      .waitFor();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL("/symbol/equals");
  });

  test("search button on catalog page opens palette", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("search-button").click();
    await expect(page.getByTestId("command-palette")).toBeVisible();
  });

  test("no results message for nonsense query", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("search-button").click();
    await page.getByTestId("command-palette-input").fill("xyzzy123nonsense");
    await expect(page.getByTestId("command-palette-results")).toContainText(
      "No symbols found",
    );
  });
});
