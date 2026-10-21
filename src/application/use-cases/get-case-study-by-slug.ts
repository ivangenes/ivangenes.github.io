import type { CaseStudy } from "@/domain/portfolio";
import type { PortfolioContentRepository } from "@/ports/portfolio-content-repository";

export class GetCaseStudyBySlug {
  constructor(private readonly contentRepository: PortfolioContentRepository) {}

  execute(slug: string): CaseStudy | null {
    return this.contentRepository.getCaseStudies().find((study) => study.slug === slug) ?? null;
  }
}
