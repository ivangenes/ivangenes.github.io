import type {
  ArchitectureCopy,
  ContactInformation,
  EducationEntry,
  EngineeringApproach,
  ExperienceEntry,
  NavigationItem,
  Profile,
  ProjectSummary,
  ResumeAsset,
} from "@/domain/portfolio";

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Architecture", href: "#architecture" },
  { label: "Experience", href: "#experience" },
  { label: "Engineering Approach", href: "#engineering-approach" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly NavigationItem[];

export const profile = {
  name: "Ivan Genes",
  role: "Senior Software Engineer",
  specialties: ["Backend Architecture", "Distributed Systems", "Full-Stack Development"],
  summary:
    "Senior software engineer with 8+ years of experience designing backend systems, distributed integrations and full-stack applications across cross-border ecommerce, logistics, insurance, manufacturing and healthcare.",
  location: "Buenos Aires, Argentina · Remote",
} as const satisfies Profile;

export const projects = [
  {
    slug: "nexusmed",
    name: "NexusMed",
    category: "Healthcare · Full-Stack Product",
    description:
      "A live healthcare platform that helps patients discover specialists and continue appointment requests through preconfigured WhatsApp conversations.",
    role: "Full-Stack Engineer · End-to-end technical ownership",
    technologies: ["NestJS", "SvelteKit", "MySQL", "Docker"],
  },
  {
    slug: "nocnoc",
    name: "NocNoc",
    category: "Cross-Border Ecommerce · Marketplace Integrations",
    description:
      "Event-driven marketplace adapters connecting internal commerce workflows with international marketplaces across catalog, inventory, orders and fulfillment operations.",
    role: "Senior Software Engineer · Backend",
    technologies: ["Java", "Spring Boot", "AWS", "DynamoDB", "SQS"],
  },
  {
    slug: "pickit",
    name: "Pickit",
    category: "Last-Mile Logistics · Platform Evolution",
    description:
      "The gradual evolution of a growing logistics platform from a central monolith toward independently deployed services, while coordinating backend delivery across multiple teams.",
    role: "PHP Developer → Backend Tech Lead",
    technologies: ["PHP", "Symfony", "RabbitMQ", "MySQL", "Docker"],
  },
  {
    slug: "yamaha",
    name: "Yamaha",
    category: "Manufacturing · Internal Operations",
    description:
      "A suite of internal applications supporting production planning, logistics, supplies and centralized employee access.",
    role: "Full-Stack / Backend Engineer",
    technologies: ["NestJS", "Svelte", "SQL Server", "Active Directory"],
  },
  {
    slug: "sura-gpass",
    name: "Sura Seguros - GPASS",
    category: "Insurance · Internal Application Hub",
    description:
      "An Angular microfrontend hub with a NestJS Backend for Frontend, unifying navigation and access to internal insurance applications and services.",
    role: "Backend / Full-Stack Engineer",
    technologies: ["NestJS", "Angular", "MongoDB", "Azure Pipelines"],
  },
] as const satisfies readonly ProjectSummary[];

export const architectureCopy = {
  eyebrow: "Architecture",
  heading: "A marketplace integration service in practice",
  introduction: [
    "A simplified architecture based on marketplace adapters I built for NocNoc as part of my work at W3 IT Solutions.",
    "Operations could enter through REST, SQS or scheduled jobs. The service transformed data, resolved marketplace authentication, executed the external operation, normalized errors and published the result for downstream processing.",
  ],
  guide: {
    eyebrow: "How to read it",
    heading: "Inputs, service boundary, marketplace and result",
    description:
      "Read from left to right. Three input mechanisms reach the same application flow inside the Spring Boot service. Outbound adapters isolate marketplace contracts and authentication. The result leaves as a normalized event, while logs and metrics cover the complete operation.",
  },
  tags: [
    "Java · Spring Boot",
    "Hexagonal Architecture",
    "AWS SQS",
    "Event-Driven Processing",
    "Retries and Error Normalization",
    "Grafana Observability",
  ],
  disclaimer:
    "Simplified representation of a client engagement delivered through W3 IT Solutions. It does not reproduce NocNoc's complete architecture; internal names, contracts and confidential implementation details have been intentionally excluded.",
} as const satisfies ArchitectureCopy;

export const experience = [
  {
    company: "W3 IT Solutions",
    role: "Senior Software Engineer",
    period: "2019 - Present",
    summary:
      "Software engineer delivering backend systems, distributed integrations and full-stack products for clients across ecommerce, logistics, insurance and manufacturing. Work has included architecture, technical leadership, implementation, automated testing, CI/CD and production deployments.",
    engagements: [
      { client: "NocNoc", role: "Senior Software Engineer, Backend" },
      { client: "Yamaha", role: "Full-Stack / Backend Engineer" },
      { client: "Sura Seguros", role: "Backend / Full-Stack Engineer" },
      { client: "Pickit", role: "PHP Developer → Backend Tech Lead" },
    ],
  },
  {
    company: "Espinlabs",
    role: "PHP Developer",
    period: "2018 - 2019",
    summary:
      "Developed backend functionality and REST APIs across multiple client projects using PHP and Laravel, working with Git and GitLab as part of the development workflow.",
  },
] as const satisfies readonly ExperienceEntry[];

export const engineeringApproach = {
  title: "Spec-Driven, Agent-Assisted Engineering",
  summary:
    "I use AI-assisted development within a structured workflow where context is converted into reviewed specifications, implementation plans and executable tasks before development begins.",
  stages: [
    {
      index: "01",
      title: "Context",
      description:
        "Project context is assembled from requirements, Notion tasks, architectural discussions, Slack conversations and authorized meeting transcripts through MCP integrations.",
    },
    {
      index: "02",
      title: "Specification",
      description:
        "The collected context is converted into Markdown specifications defining scope, constraints, technical decisions and acceptance criteria.",
    },
    {
      index: "03",
      title: "Spec Review",
      description:
        "I review and refine the specification before allowing the workflow to move into implementation planning.",
    },
    {
      index: "04",
      title: "Plan",
      description:
        "An implementation plan is generated from the approved specification, including the proposed approach, dependencies and validation strategy.",
    },
    {
      index: "05",
      title: "Tasks",
      description:
        "The plan is divided into explicit development tasks with defined responsibilities and completion criteria.",
    },
    {
      index: "06",
      title: "Agent-Assisted Execution",
      description:
        "A coordinator can delegate implementation, testing, analysis and review work to specialized agents. Reusable Markdown-based skills provide project conventions, engineering practices and review criteria.",
    },
    {
      index: "07",
      title: "Validation & Code Review",
      description:
        "Specialized agents run tests and technical validations throughout execution. Automated review, custom review agents and human review are combined before the work is considered complete.",
    },
  ],
  tools: ["Claude Code", "OpenAI Codex", "MCP", "Notion", "Slack", "CodeRabbit"],
  transversalLabel: "Markdown-based skills",
} as const satisfies EngineeringApproach;

export const education = [
  {
    degree: "Degree in Information Systems",
    focus: "Software Engineering and Information Technology focus",
    institution: "Universidad Nacional del Nordeste",
    period: "2010 - 2018",
  },
  {
    degree: "University Programmer Analyst",
    focus: "Computer Programming and Systems Analysis",
    institution: "Universidad Nacional del Nordeste",
    period: "2010 - 2016",
  },
] as const satisfies readonly EducationEntry[];

export const contactInformation = {
  heading: "Let's connect.",
  summary:
    "For professional opportunities and selected collaborations, email is the best way to reach me.",
  email: "ivangenes@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/ivan-genes/",
  githubUrl: "https://github.com/ivangenes",
  location: "Buenos Aires, Argentina · Remote",
  freelanceNote: "Open to selected freelance collaborations.",
} as const satisfies ContactInformation;

export const resumeAssets = [
  {
    label: "Backend Resume",
    href: "/resume/ivan-genes-backend-resume.pdf",
    fileName: "ivan-genes-backend-resume.pdf",
  },
  {
    label: "Full-Stack Resume",
    href: "/resume/ivan-genes-full-stack-resume.pdf",
    fileName: "ivan-genes-full-stack-resume.pdf",
  },
] as const satisfies readonly ResumeAsset[];
