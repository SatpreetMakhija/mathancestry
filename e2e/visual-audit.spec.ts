import { test, expect } from "@playwright/test";

test.describe("Visual Audit", () => {
  test("catalog page - default state", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/01-catalog-default.png", fullPage: true });
  });

  test("catalog page - filtered by calculus", async ({ page }) => {
    await page.goto("/");
    await page.locator("button", { hasText: "Calculus" }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/02-catalog-filtered.png", fullPage: true });
  });

  test("catalog page - card hover state", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(500);
    const card = page.locator('a[href^="/symbol/"]').nth(2);
    await card.hover();
    await page.waitForTimeout(300);
    await page.screenshot({ path: "screenshots/03-catalog-hover.png", fullPage: true });
  });

  test("symbol detail - equals sign", async ({ page }) => {
    await page.goto("/symbol/equals");
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/04-detail-equals.png", fullPage: true });
  });

  test("symbol detail - integral", async ({ page }) => {
    await page.goto("/symbol/integral");
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/05-detail-integral.png", fullPage: true });
  });

  test("symbol detail - zero", async ({ page }) => {
    await page.goto("/symbol/zero");
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/06-detail-zero.png", fullPage: true });
  });

  test("timeline page - default", async ({ page }) => {
    await page.goto("/timeline");
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/07-timeline-default.png", fullPage: true });
  });

  test("timeline page - click a node to expand", async ({ page }) => {
    await page.goto("/timeline");
    await page.waitForTimeout(500);
    const node = page.locator('[title="Equals Sign"]');
    await node.click();
    await page.waitForTimeout(300);
    await page.screenshot({ path: "screenshots/08-timeline-expanded.png", fullPage: true });
  });

  test("equation explorer - euler identity default", async ({ page }) => {
    await page.goto("/explore");
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/10-explore-euler.png", fullPage: true });
  });

  test("equation explorer - hover symbol", async ({ page }) => {
    await page.goto("/explore");
    await page.waitForTimeout(500);
    const sym = page.locator("[data-symbol-id]").first();
    await sym.hover({ force: true });
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/11-explore-hover.png", fullPage: true });
  });

  test("equation explorer - hover different symbols", async ({ page }) => {
    await page.goto("/explore");
    await page.waitForTimeout(500);

    const symbols = page.locator("[data-symbol-id]");
    const count = await symbols.count();
    for (let i = 0; i < Math.min(count, 4); i++) {
      await symbols.nth(i).hover({ force: true });
      await page.waitForTimeout(400);
      await page.screenshot({ path: `screenshots/12-explore-hover-sym${i}.png`, fullPage: true });
    }
  });

  test("equation explorer - quadratic formula", async ({ page }) => {
    await page.goto("/explore");
    await page.locator("button", { hasText: "Quadratic Formula" }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/13-explore-quadratic.png", fullPage: true });
  });

  test("equation explorer - quadratic hover", async ({ page }) => {
    await page.goto("/explore");
    await page.locator("button", { hasText: "Quadratic Formula" }).click();
    await page.waitForTimeout(300);
    const sym = page.locator("[data-symbol-id]").first();
    await sym.hover({ force: true });
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/14-explore-quadratic-hover.png", fullPage: true });
  });

  test("equation explorer - FTC", async ({ page }) => {
    await page.goto("/explore");
    await page.locator("button", { hasText: "Fundamental Theorem" }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/15-explore-ftc.png", fullPage: true });
  });

  test("equation explorer - euler product", async ({ page }) => {
    await page.goto("/explore");
    await page.locator("button", { hasText: "Euler Product" }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/16-explore-euler-product.png", fullPage: true });
  });

  test("equation explorer - pythagorean", async ({ page }) => {
    await page.goto("/explore");
    await page.locator("button", { hasText: "Pythagorean" }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/17-explore-pythagorean.png", fullPage: true });
  });

  test("mobile viewport - catalog", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/18-mobile-catalog.png", fullPage: true });
  });

  test("mobile viewport - detail", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/symbol/equals");
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/19-mobile-detail.png", fullPage: true });
  });

  test("mobile viewport - explore", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/explore");
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/20-mobile-explore.png", fullPage: true });
  });

  test("mobile viewport - explore hover", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/explore");
    await page.waitForTimeout(500);
    const sym = page.locator("[data-symbol-id]").first();
    await sym.hover({ force: true });
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/21-mobile-explore-hover.png", fullPage: true });
  });

  test("mobile viewport - timeline", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/timeline");
    await page.waitForTimeout(500);
    await page.screenshot({ path: "screenshots/22-mobile-timeline.png", fullPage: true });
  });
});
