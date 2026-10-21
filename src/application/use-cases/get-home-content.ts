import type { HomeContent } from "@/domain/portfolio";
import type { PortfolioContentRepository } from "@/ports/portfolio-content-repository";

export class GetHomeContent {
  constructor(private readonly contentRepository: PortfolioContentRepository) {}

  execute(): HomeContent {
    return {
      navigation: this.contentRepository.getNavigation(),
      profile: this.contentRepository.getProfile(),
      projects: this.contentRepository.getProjects(),
      architecture: this.contentRepository.getArchitectureCopy(),
      experience: this.contentRepository.getExperience(),
      approach: this.contentRepository.getEngineeringApproach(),
      education: this.contentRepository.getEducation(),
      contact: this.contentRepository.getContactInformation(),
      resumes: this.contentRepository.getResumeAssets(),
    };
  }
}
