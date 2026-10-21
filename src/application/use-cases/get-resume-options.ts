import type { ResumeAsset } from "@/domain/portfolio";
import type { PortfolioContentRepository } from "@/ports/portfolio-content-repository";

export class GetResumeOptions {
  constructor(private readonly contentRepository: PortfolioContentRepository) {}

  execute(): readonly ResumeAsset[] {
    return this.contentRepository.getResumeAssets();
  }
}
