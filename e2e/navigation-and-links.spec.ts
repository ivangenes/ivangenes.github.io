import { expect, test } from "@playwright/test";

test("desktop navigation reaches the main sections", async ({ page }) => {
  await page.goto("/");

  const navigation = page.getByRole("navigation", { name: "Primary navigation" });
  await navigation.getByRole("link", { name: "Architecture" }).click();

  await expect(page).toHaveURL(/#architecture$/);
  await expect(
    page.getByRole("heading", { name: "A marketplace integration service in practice" }),
  ).toBeVisible();
});

test("hero resume selector offers both downloads", async ({ page }) => {
  await page.goto("/");

  const hero = page.locator("#top");
  await hero.getByText("Download resume", { exact: true }).click();

  await expect(hero.getByRole("link", { name: "Backend Resume" })).toHaveAttribute(
    "download",
    "ivan-genes-backend-resume.pdf",
  );
  await expect(hero.getByRole("link", { name: "Full-Stack Resume" })).toHaveAttribute(
    "download",
    "ivan-genes-full-stack-resume.pdf",
  );
});

test("mobile navigation and resume selector work with touch-sized viewport", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");

  await page.getByText("Menu", { exact: true }).click();
  const mobileNavigation = page.getByRole("navigation", { name: "Mobile navigation" });
  await mobileNavigation.getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL(/#contact$/);

  const banner = page.getByRole("banner");
  await expect(banner.getByRole("link", { name: "Backend Resume" })).toHaveAttribute(
    "href",
    "/resume/ivan-genes-backend-resume.pdf",
  );
  await expect(banner.getByRole("link", { name: "Full-Stack Resume" })).toHaveAttribute(
    "href",
    "/resume/ivan-genes-full-stack-resume.pdf",
  );
});

test("professional contact and product links have the approved targets", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: /ivangenes@gmail.com/i })).toHaveAttribute(
    "href",
    "mailto:ivangenes@gmail.com",
  );
  const contact = page.locator("#contact");
  await expect(contact.getByRole("link", { name: /LinkedIn/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/ivan-genes/",
  );
  await expect(contact.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
    "href",
    "https://github.com/ivangenes",
  );

  await page.goto("/work/nexusmed/");
  await expect(page.getByRole("link", { name: /Visit live product/i })).toHaveAttribute(
    "href",
    "https://nexusmedconnect.com/",
  );
});

test("the architecture diagram exposes details and fullscreen controls", async ({ page }) => {
  await page.goto("/#architecture");

  await page.getByTestId("rf__node-orchestrator").click();
  await expect(page.getByRole("heading", { level: 3, name: "Operation use case" })).toBeVisible();

  const fullscreen = page.getByRole("button", { name: "Open fullscreen diagram" });
  await fullscreen.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(fullscreen).toBeFocused();
});
