// @ts-check
import playwright from "playwright";
const { test } = require("@playwright/test");
test("Takes and saves two screenshots (one using Chromium and one using Webkit) ", async () => {
  // Try to add 'playwright.firefox' to the list ↓
  for (const browserType of [playwright.chromium, playwright.webkit]) {
    const browser = await browserType.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playwright.dev");
    await page.screenshot({ path: `example-${browserType.name()}.png` });
    await browser.close();
  }
});
