import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = ["/", "/work/nexusmed/", "/work/nocnoc/"] as const;

for (const route of routes) {
  test(`${route} has no serious or critical axe violations`, async ({ browserName, page }) => {
    test.skip(browserName !== "chromium", "Axe coverage is browser-engine independent here.");

    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const blockingViolations = results.violations.filter(
      (violation) => violation.impact === "serious" || violation.impact === "critical",
    );

    expect(
      blockingViolations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        targets: violation.nodes.map((node) => node.target),
      })),
    ).toEqual([]);
  });
}
