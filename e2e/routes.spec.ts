import { expect, test } from "@playwright/test";

const routes = [
  { path: "/", heading: "Ivan Genes" },
  { path: "/work/nexusmed/", heading: "NexusMed" },
  { path: "/work/nocnoc/", heading: "NocNoc" },
  { path: "/work/pickit/", heading: "Pickit" },
  { path: "/work/yamaha/", heading: "Yamaha" },
  { path: "/work/sura-gpass/", heading: "Sura Seguros - GPASS" },
] as const;

for (const route of routes) {
  test(`${route.path} loads directly from the static export`, async ({ page }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];

    page.on("console", (message) => {
      if (message.type() === "error") {
        consoleErrors.push(message.text());
      }
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));

    const response = await page.goto(route.path);

    expect(response?.ok()).toBe(true);
    await expect(page.getByRole("heading", { level: 1, name: route.heading })).toBeVisible();
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.getByRole("link", { name: "Skip to content" })).toHaveAttribute(
      "href",
      "#main-content",
    );
    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);
  });
}
