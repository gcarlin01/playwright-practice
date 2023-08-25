// @ts-check
const { test, chromium } = require("@playwright/test");
test("Navigates to github, searches for Playwright, and clicks on its first finding.", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: {
      dir: "videos/",
    },
  });
  const page = await context.newPage();

  await page.goto("https://github.com");
  await page.getByRole("button", { name: "Search or jump to..." }).click();
  await page.type('input[name="query-builder-test"]', "Playwright");
  await page.press('input[name="query-builder-test"]', "Enter");

  const aTagSelector = "div[data-testid='results-list'] a";

  await page.locator(aTagSelector).nth(1).click();
  await page.waitForLoadState("networkidle");

  await browser.close();
});
