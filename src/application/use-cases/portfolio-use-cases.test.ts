import { describe, expect, it } from "vitest";

import { StaticPortfolioContentRepository } from "@/adapters/content";

import { GetCaseStudyBySlug } from "./get-case-study-by-slug";
import { GetCaseStudyNavigation } from "./get-case-study-navigation";
import { GetArchitectureDiagramByKey } from "./get-architecture-diagram-by-key";
import { GetHomeContent } from "./get-home-content";

const repository = new StaticPortfolioContentRepository();

describe("portfolio content use cases", () => {
  it("assembles the home page from the content port", () => {
    const home = new GetHomeContent(repository).execute();

    expect(home.profile.name).toBe("Ivan Genes");
    expect(home.projects).toHaveLength(5);
    expect(home.resumes).toHaveLength(2);
  });

  it("keeps the approved project order with unique slugs", () => {
    const slugs = repository.getProjects().map((project) => project.slug);

    expect(slugs).toEqual(["nexusmed", "nocnoc", "pickit", "yamaha", "sura-gpass"]);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("provides one complete case study for every project", () => {
    const studies = repository.getCaseStudies();

    expect(studies).toHaveLength(5);
    expect(studies.map((study) => study.slug)).toEqual(
      repository.getProjects().map((project) => project.slug),
    );
  });

  it("provides the representative diagram and one diagram per case study", () => {
    const diagrams = repository.getArchitectureDiagrams();
    const getDiagram = new GetArchitectureDiagramByKey(repository);

    expect(diagrams.map((diagram) => diagram.key)).toEqual([
      "representative",
      "nexusmed",
      "nocnoc",
      "pickit",
      "yamaha",
      "sura-gpass",
    ]);
    expect(getDiagram.execute("representative")?.nodes.length).toBeGreaterThanOrEqual(6);
    expect(getDiagram.execute("nexusmed")?.edges.length).toBeGreaterThanOrEqual(5);
  });

  it("only exposes the approved NexusMed external link", () => {
    const linkedStudies = repository
      .getCaseStudies()
      .filter((study) => study.externalLink !== undefined);

    expect(linkedStudies).toHaveLength(1);
    expect(linkedStudies[0]?.slug).toBe("nexusmed");
    expect(linkedStudies[0]?.externalLink?.href).toBe("https://nexusmedconnect.com/");
  });

  it("does not expose private repository links", () => {
    const serializedContent = JSON.stringify(repository.getCaseStudies());

    expect(serializedContent).not.toMatch(/github\.com\/.+\/(?:pcp|logistica|yamaha|gpass)/i);
  });

  it("returns a study by slug and null for an unknown slug", () => {
    const getCaseStudy = new GetCaseStudyBySlug(repository);

    expect(getCaseStudy.execute("pickit")?.name).toBe("Pickit");
    expect(getCaseStudy.execute("unknown")).toBeNull();
  });

  it("returns linear previous and next case-study navigation", () => {
    const getNavigation = new GetCaseStudyNavigation(repository);

    expect(getNavigation.execute("nexusmed")).toEqual({
      previous: null,
      next: expect.objectContaining({ slug: "nocnoc" }),
    });
    expect(getNavigation.execute("pickit")).toEqual({
      previous: expect.objectContaining({ slug: "nocnoc" }),
      next: expect.objectContaining({ slug: "yamaha" }),
    });
    expect(getNavigation.execute("sura-gpass")).toEqual({
      previous: expect.objectContaining({ slug: "yamaha" }),
      next: null,
    });
  });
});
