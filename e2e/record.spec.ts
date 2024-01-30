import { test, expect } from "@playwright/test";

test("recording works great", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByLabel("First number").click();
  await page.getByLabel("First number").fill("10");
  await page.getByLabel("First number").press("Tab");
  await page.getByLabel("Second Number").fill("20");
  await page.getByLabel("Second Number").press("Tab");
  await page.getByRole("button", { name: "Calculate" }).click();
  await expect(page.getByRole("status")).toBeVisible();
});
