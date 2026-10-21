import { expect, test } from "@playwright/test";

const widths = [320, 768, 1024, 1440] as const;
const routes = ["/", "/work/nexusmed/", "/work/nocnoc/"] as const;

for (const width of widths) {
  for (const route of routes) {
    test(`${route} has no horizontal document overflow at ${width}px`, async ({
      browserName,
      page,
    }) => {
      test.skip(browserName !== "chromium", "Responsive matrix is covered once in Chromium.");

      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);

      const dimensions = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
      }));

      expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
      await expect(page.locator("h1")).toBeVisible();
    });
  }
}
