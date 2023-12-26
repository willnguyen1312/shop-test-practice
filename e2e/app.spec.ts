import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Hello Shop 🛍️" }),
  ).toBeVisible();
});
