import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("there are no accessibility violations", async ({ page }) => {
    const { violations } = await new AxeBuilder({ page }).analyze();

    expect(violations).toEqual([]);
  });

  test("displaying the app", async ({ page }) => {
    await expect(page).toHaveTitle("React App Template");
    await expect(
      page.getByRole("heading", { name: "React App Template" }),
    ).toBeVisible();
  });
});
