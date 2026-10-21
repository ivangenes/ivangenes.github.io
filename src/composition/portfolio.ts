import { StaticPortfolioContentRepository } from "@/adapters/content";
import {
  GetCaseStudyBySlug,
  GetCaseStudyNavigation,
  GetArchitectureDiagramByKey,
  GetHomeContent,
  GetResumeOptions,
  GetSelectedWork,
} from "@/application/use-cases";

const contentRepository = new StaticPortfolioContentRepository();

export const portfolio = {
  getArchitectureDiagramByKey: new GetArchitectureDiagramByKey(contentRepository),
  getHomeContent: new GetHomeContent(contentRepository),
  getSelectedWork: new GetSelectedWork(contentRepository),
  getCaseStudyBySlug: new GetCaseStudyBySlug(contentRepository),
  getCaseStudyNavigation: new GetCaseStudyNavigation(contentRepository),
  getResumeOptions: new GetResumeOptions(contentRepository),
} as const;
