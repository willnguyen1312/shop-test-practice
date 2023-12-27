import { expect, test } from "@playwright/test";

test("work for normal user", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("First number").fill("50");
  await page.getByLabel("Second Number").fill("20");
  await page.getByRole("button", { name: "Calculate" }).click();

  await expect(page.getByRole("status")).toHaveText("Result: 70");
});

test("work for keyboard-only user", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("First number").fill("50");
  await page.keyboard.press("Tab");
  await page.keyboard.type("20");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  await expect(page.getByRole("status")).toHaveText("Result: 70");
});
