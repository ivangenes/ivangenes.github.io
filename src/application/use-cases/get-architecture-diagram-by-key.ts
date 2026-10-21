import type { ArchitectureDiagram, ArchitectureDiagramKey } from "@/domain/portfolio";
import type { PortfolioContentRepository } from "@/ports/portfolio-content-repository";

export class GetArchitectureDiagramByKey {
  constructor(private readonly contentRepository: PortfolioContentRepository) {}

  execute(key: ArchitectureDiagramKey): ArchitectureDiagram | null {
    return (
      this.contentRepository.getArchitectureDiagrams().find((diagram) => diagram.key === key) ??
      null
    );
  }
}
