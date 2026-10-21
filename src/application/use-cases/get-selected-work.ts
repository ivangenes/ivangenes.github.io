import type { ProjectSummary } from "@/domain/portfolio";
import type { PortfolioContentRepository } from "@/ports/portfolio-content-repository";

export class GetSelectedWork {
  constructor(private readonly contentRepository: PortfolioContentRepository) {}

  execute(): readonly ProjectSummary[] {
    return this.contentRepository.getProjects();
  }
}
