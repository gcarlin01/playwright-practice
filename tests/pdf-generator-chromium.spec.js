// @ts-check
import playwright from "playwright";
const { test } = require("@playwright/test");
test("Searches for 'Google' on Google and stores the rendered site as a PDF.", async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.google.com/search?q=Google");
  await page.pdf({ path: `document.pdf` });
  await browser.close();
});
