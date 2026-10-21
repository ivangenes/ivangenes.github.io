import type { PortfolioContentRepository } from "@/ports/portfolio-content-repository";

import { caseStudies } from "./case-studies";
import { architectureDiagrams } from "./architecture-diagrams";
import {
  architectureCopy,
  contactInformation,
  education,
  engineeringApproach,
  experience,
  navigation,
  profile,
  projects,
  resumeAssets,
} from "./home-content";

export class StaticPortfolioContentRepository implements PortfolioContentRepository {
  getNavigation() {
    return navigation;
  }

  getProfile() {
    return profile;
  }

  getProjects() {
    return projects;
  }

  getArchitectureCopy() {
    return architectureCopy;
  }

  getArchitectureDiagrams() {
    return architectureDiagrams;
  }

  getExperience() {
    return experience;
  }

  getEngineeringApproach() {
    return engineeringApproach;
  }

  getEducation() {
    return education;
  }

  getContactInformation() {
    return contactInformation;
  }

  getResumeAssets() {
    return resumeAssets;
  }

  getCaseStudies() {
    return caseStudies;
  }
}
