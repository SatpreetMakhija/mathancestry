import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("header nav links are visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("nav a", { hasText: "Catalog" })).toBeVisible();
    await expect(page.locator("nav a", { hasText: "Timeline" })).toBeVisible();
    await expect(page.locator("nav a", { hasText: "Explore" })).toBeVisible();
  });

  test("logo/brand links to home", async ({ page }) => {
    await page.goto("/timeline");
    await page.locator("a", { hasText: "MathAncestry" }).click();
    await expect(page).toHaveURL("/");
  });

  test("Catalog nav link works", async ({ page }) => {
    await page.goto("/timeline");
    await page.locator("nav a", { hasText: "Catalog" }).click();
    await expect(page).toHaveURL("/");
    await expect(
      page.getByRole("heading", { level: 1, name: "The Symbol Catalog" }),
    ).toBeVisible();
  });

  test("Timeline nav link works", async ({ page }) => {
    await page.goto("/");
    await page.locator("nav a", { hasText: "Timeline" }).click();
    await expect(page).toHaveURL("/timeline");
    await expect(
      page.getByRole("heading", { level: 1, name: /Timeline/ }),
    ).toBeVisible();
  });

  test("Explore nav link works", async ({ page }) => {
    await page.goto("/");
    await page.locator("nav a", { hasText: "Explore" }).click();
    await expect(page).toHaveURL("/explore");
    await expect(
      page.getByRole("heading", { level: 1, name: /Equation Explorer/ }),
    ).toBeVisible();
  });

  test("active nav link is highlighted", async ({ page }) => {
    await page.goto("/");
    const catalogLink = page.locator("nav a", { hasText: "Catalog" });
    await expect(catalogLink).toHaveClass(/bg-accent/);

    await page.goto("/timeline");
    const timelineLink = page.locator("nav a", { hasText: "Timeline" });
    await expect(timelineLink).toHaveClass(/bg-accent/);
  });

  test("footer is visible on all pages", async ({ page }) => {
    const pages = ["/", "/timeline", "/explore"];
    for (const url of pages) {
      await page.goto(url);
      await expect(
        page.getByText("Git Blame for Math Notation"),
      ).toBeVisible();
    }
  });
});
