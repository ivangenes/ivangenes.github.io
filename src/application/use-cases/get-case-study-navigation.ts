import type { ProjectSlug, ProjectSummary } from "@/domain/portfolio";
import type { PortfolioContentRepository } from "@/ports/portfolio-content-repository";

export type CaseStudyNavigation = Readonly<{
  previous: ProjectSummary | null;
  next: ProjectSummary | null;
}>;

export class GetCaseStudyNavigation {
  constructor(private readonly contentRepository: PortfolioContentRepository) {}

  execute(slug: ProjectSlug): CaseStudyNavigation {
    const projects = this.contentRepository.getProjects();
    const currentIndex = projects.findIndex((project) => project.slug === slug);

    if (currentIndex === -1) {
      return { previous: null, next: null };
    }

    return {
      previous: currentIndex > 0 ? projects[currentIndex - 1] : null,
      next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
    };
  }
}
