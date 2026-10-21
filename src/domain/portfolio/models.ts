export const projectSlugs = ["nexusmed", "nocnoc", "pickit", "yamaha", "sura-gpass"] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export type ArchitectureDiagramKey = "representative" | ProjectSlug;

export type ArchitectureNodeKind =
  "boundary" | "client" | "application" | "service" | "event" | "data" | "external" | "platform";

export type ArchitecturePortSide = "top" | "right" | "bottom" | "left";

export type ArchitectureNode = Readonly<{
  id: string;
  label: string;
  caption: string;
  description: string;
  kind: ArchitectureNodeKind;
  position: Readonly<{ x: number; y: number }>;
  parentId?: string;
  size?: Readonly<{ width: number; height: number }>;
  targetSide?: ArchitecturePortSide;
  sourceSide?: ArchitecturePortSide;
}>;

export type ArchitectureEdge = Readonly<{
  id: string;
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
}>;

export type ArchitectureDiagram = Readonly<{
  key: ArchitectureDiagramKey;
  title: string;
  summary: string;
  nodes: readonly ArchitectureNode[];
  edges: readonly ArchitectureEdge[];
}>;

export type NavigationItem = Readonly<{
  label: string;
  href: string;
}>;

export type Profile = Readonly<{
  name: string;
  role: string;
  specialties: readonly string[];
  summary: string;
  location: string;
}>;

export type ProjectSummary = Readonly<{
  slug: ProjectSlug;
  name: string;
  category: string;
  description: string;
  role: string;
  technologies: readonly string[];
}>;

export type ExperienceEngagement = Readonly<{
  client: string;
  role: string;
}>;

export type ExperienceEntry = Readonly<{
  company: string;
  role: string;
  period: string;
  summary: string;
  engagements?: readonly ExperienceEngagement[];
}>;

export type EducationEntry = Readonly<{
  degree: string;
  focus: string;
  institution: string;
  period: string;
}>;

export type WorkflowStage = Readonly<{
  index: string;
  title: string;
  description: string;
}>;

export type EngineeringApproach = Readonly<{
  title: string;
  summary: string;
  stages: readonly WorkflowStage[];
  tools: readonly string[];
  transversalLabel: string;
}>;

export type ContactInformation = Readonly<{
  heading: string;
  summary: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  location: string;
  freelanceNote: string;
}>;

export type ResumeAsset = Readonly<{
  label: string;
  href: string;
  fileName: string;
}>;

export type ArchitectureCopy = Readonly<{
  eyebrow: string;
  heading: string;
  introduction: readonly string[];
  guide: Readonly<{
    eyebrow: string;
    heading: string;
    description: string;
  }>;
  tags: readonly string[];
  disclaimer: string;
}>;

export type CaseStudyFact = Readonly<{
  label: string;
  value: string;
}>;

export type EngineeringDecision = Readonly<{
  title: string;
  description: string;
}>;

export type CaseStudySubsection = Readonly<{
  title: string;
  description: string;
}>;

export type CaseStudy = Readonly<{
  slug: ProjectSlug;
  name: string;
  title: string;
  context: string;
  facts: readonly CaseStudyFact[];
  overview: readonly string[];
  challenge: readonly string[];
  solution: readonly string[];
  contribution: readonly string[];
  additionalSection?: Readonly<{
    title: string;
    items: readonly CaseStudySubsection[];
  }>;
  diagramKey: ProjectSlug;
  decisions: readonly EngineeringDecision[];
  technology: readonly string[];
  outcome: string;
  note: Readonly<{
    title: string;
    text: string;
  }>;
  externalLink?: Readonly<{
    label: string;
    href: string;
  }>;
}>;

export type HomeContent = Readonly<{
  navigation: readonly NavigationItem[];
  profile: Profile;
  projects: readonly ProjectSummary[];
  architecture: ArchitectureCopy;
  experience: readonly ExperienceEntry[];
  approach: EngineeringApproach;
  education: readonly EducationEntry[];
  contact: ContactInformation;
  resumes: readonly ResumeAsset[];
}>;
