import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CaseStudyPage, { generateStaticParams } from "./page";

describe("CaseStudyPage", () => {
  it("generates one static route per approved project", () => {
    expect(generateStaticParams()).toEqual([
      { slug: "nexusmed" },
      { slug: "nocnoc" },
      { slug: "pickit" },
      { slug: "yamaha" },
      { slug: "sura-gpass" },
    ]);
  });

  it("renders the NexusMed case with its architecture and outcome", async () => {
    const page = await CaseStudyPage({ params: Promise.resolve({ slug: "nexusmed" }) });
    render(page);

    expect(screen.getByRole("heading", { level: 1, name: "NexusMed" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "NexusMed product architecture" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Engineering outcome" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Visit live product/i })).toHaveAttribute(
      "href",
      "https://nexusmedconnect.com/",
    );
  });
});
