import { expect, test } from "@playwright/test";

test("work for normal user", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("First number").click();
  await page.getByLabel("First number").fill("50");
  await page.getByLabel("Second Number").click();
  await page.getByLabel("Second Number").fill("70");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.getByRole("heading", { name: "Result:" })).toBeVisible();
});

test("work for keyboard-only user", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("First number").fill("10");
  await page.getByLabel("First number").press("Tab");
  await page.getByLabel("Second Number").fill("20");
  await page.getByLabel("Second Number").press("Tab");
  await page.getByRole("button", { name: "Calculate" }).press("Enter");
  await page.getByText("Result:").click();
  await expect(page.getByRole("heading")).toContainText("Result: 30");
});
