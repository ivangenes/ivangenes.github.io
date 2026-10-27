import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import HomePage from "./page";

describe("HomePage", () => {
  it("introduces Ivan as a Senior Software Engineer", () => {
    render(<HomePage />);

    const hero = screen.getByRole("region", { name: "Ivan Genes" });

    expect(within(hero).getByRole("heading", { level: 1, name: "Ivan Genes" })).toBeInTheDocument();
    expect(within(hero).getByText("Senior Software Engineer")).toBeInTheDocument();
  });

  it("renders the complete approved home narrative", () => {
    render(<HomePage />);

    const selectedWork = screen.getByRole("region", { name: "Systems with real-world stakes." });

    expect(within(selectedWork).getAllByRole("heading", { level: 3 })).toHaveLength(5);
    expect(
      screen.getByRole("heading", { name: "Building across products, teams and industries." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Spec-Driven, Agent-Assisted Engineering" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "A systems foundation." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Let's connect." })).toBeInTheDocument();
  });

  it("links every selected-work card to its static case study", () => {
    render(<HomePage />);

    expect(screen.getByRole("link", { name: /NexusMed/i })).toHaveAttribute(
      "href",
      "/work/nexusmed",
    );
    expect(screen.getByRole("link", { name: /NocNoc/i })).toHaveAttribute("href", "/work/nocnoc");
    expect(screen.getByRole("link", { name: /Pickit/i })).toHaveAttribute("href", "/work/pickit");
    expect(screen.getByRole("link", { name: /Yamaha/i })).toHaveAttribute("href", "/work/yamaha");
    expect(screen.getByRole("link", { name: /Sura Seguros/i })).toHaveAttribute(
      "href",
      "/work/sura-gpass",
    );
  });

  it("offers both resume downloads from the hero", async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    const hero = screen.getByRole("region", { name: "Ivan Genes" });
    await user.click(within(hero).getByText("Download resume"));

    expect(within(hero).getByRole("link", { name: "Backend Resume" })).toHaveAttribute(
      "href",
      "/resume/ivan-genes-backend-resume.pdf",
    );
    expect(within(hero).getByRole("link", { name: "Backend Resume" })).toHaveAttribute(
      "download",
      "ivan-genes-backend-resume.pdf",
    );
    expect(within(hero).getByRole("link", { name: "Full-Stack Resume" })).toHaveAttribute(
      "href",
      "/resume/ivan-genes-full-stack-resume.pdf",
    );
    expect(within(hero).getByRole("link", { name: "Full-Stack Resume" })).toHaveAttribute(
      "download",
      "ivan-genes-full-stack-resume.pdf",
    );
  });
});
