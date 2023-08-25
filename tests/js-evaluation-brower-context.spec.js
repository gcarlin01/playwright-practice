// @ts-check
import playwright from "playwright";

const { test } = require("@playwright/test");
test("Navigates to example.com in WebKit, and executes a script in the page context", async () => {
  const browser = await playwright.webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.example.com/");
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });
  console.log(JSON.stringify(dimensions));

  await browser.close();
});
