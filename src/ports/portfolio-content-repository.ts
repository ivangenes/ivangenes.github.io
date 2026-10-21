import type {
  ArchitectureCopy,
  ArchitectureDiagram,
  CaseStudy,
  ContactInformation,
  EducationEntry,
  EngineeringApproach,
  ExperienceEntry,
  NavigationItem,
  Profile,
  ProjectSummary,
  ResumeAsset,
} from "@/domain/portfolio";

export interface PortfolioContentRepository {
  getNavigation(): readonly NavigationItem[];
  getProfile(): Profile;
  getProjects(): readonly ProjectSummary[];
  getArchitectureCopy(): ArchitectureCopy;
  getArchitectureDiagrams(): readonly ArchitectureDiagram[];
  getExperience(): readonly ExperienceEntry[];
  getEngineeringApproach(): EngineeringApproach;
  getEducation(): readonly EducationEntry[];
  getContactInformation(): ContactInformation;
  getResumeAssets(): readonly ResumeAsset[];
  getCaseStudies(): readonly CaseStudy[];
}
