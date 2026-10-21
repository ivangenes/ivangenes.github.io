import type { CaseStudy } from "@/domain/portfolio";

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "nexusmed",
    name: "NexusMed",
    title: "Connecting patients with specialist care",
    context: "Healthcare Platform · Client-owned freelance project",
    facts: [
      { label: "Role", value: "Full-Stack Engineer" },
      { label: "Scope", value: "End-to-end technical ownership" },
      { label: "Status", value: "Live · Specialist onboarding in progress" },
    ],
    overview: [
      "I built NEXUS MedConnect from the ground up, taking end-to-end responsibility for the technical architecture, database design, backend, frontend implementation, authentication, infrastructure and production deployment.",
      "I translated the client-approved visual design into a responsive SvelteKit application connected to a dedicated NestJS backend.",
    ],
    challenge: [
      "Patients looking for specialist care often need to navigate fragmented information across doctors, specialties, hospitals and insurance providers.",
      "The product needed to centralize that information and guide each patient toward a managed first contact without attempting to replace the human coordination involved in scheduling medical care.",
    ],
    solution: [
      "NEXUS MedConnect provides a public experience for exploring medical specialties, searching for specialists and reviewing associated hospitals and insurance providers.",
      "Once a patient selects the appropriate specialist, the platform generates a contextual, preconfigured WhatsApp conversation so the NEXUS team can continue the appointment process.",
      "A protected administration area supports the management of doctors, specialties, hospitals, insurance providers and platform users.",
    ],
    contribution: [
      "Designed the application architecture and production deployment.",
      "Designed the MySQL data model and migrations.",
      "Built the NestJS API.",
      "Implemented the SvelteKit frontend from the approved visual design.",
      "Implemented JWT authentication for the administration area.",
      "Built management workflows for doctors, specialties, hospitals, insurance providers and users.",
      "Implemented the contextual WhatsApp handoff.",
      "Configured Docker, Nginx and persistent media storage.",
      "Created the GitHub Actions deployment workflow.",
      "Deployed the application to DigitalOcean.",
    ],
    diagramKey: "nexusmed",
    decisions: [
      {
        title: "Server-side rendering",
        description: "The public discovery experience is rendered through SvelteKit SSR.",
      },
      {
        title: "Same-origin delivery",
        description: "Nginx exposes frontend, API and public media behind one production origin.",
      },
      {
        title: "Separated services",
        description: "Frontend, backend and persistence run as distinct Docker services.",
      },
      {
        title: "Protected administration",
        description: "Public discovery remains separate from authenticated management workflows.",
      },
      {
        title: "Versioned persistence",
        description: "TypeORM migrations control database evolution.",
      },
      {
        title: "Durable media",
        description: "Uploaded images are persisted outside ephemeral containers.",
      },
      {
        title: "Automated delivery",
        description: "GitHub Actions supports repeatable production deployment.",
      },
    ],
    technology: [
      "SvelteKit",
      "TypeScript",
      "NestJS",
      "MySQL",
      "TypeORM",
      "JWT",
      "Docker",
      "Nginx",
      "DigitalOcean",
      "GitHub Actions",
    ],
    outcome:
      "The platform is live in production. Public specialty, hospital and insurance content is available, while specialist profile onboarding is still in progress.",
    note: {
      title: "Ownership",
      text: "NEXUS MedConnect is a client-owned product. The source repositories remain private, and the visual design was supplied and approved by the client.",
    },
    externalLink: {
      label: "Visit live product",
      href: "https://nexusmedconnect.com/",
    },
  },
  {
    slug: "nocnoc",
    name: "NocNoc",
    title: "Marketplace Integration Architecture",
    context: "Cross-Border Ecommerce · Client engagement through W3 IT Solutions",
    facts: [
      { label: "Role", value: "Senior Software Engineer · Backend" },
      { label: "Period", value: "2025 - 2026" },
    ],
    overview: [
      "I developed backend workflows for marketplace-specific adapter services connecting NocNoc's internal commerce platform with international marketplaces.",
      "These services supported catalog, inventory, order, synchronization, auditing and fulfillment operations across integrations including Walmart, Mercado Libre and Netshoes.",
    ],
    challenge: [
      "Each marketplace exposed different APIs, authentication mechanisms, data models, operational constraints and error formats.",
      "The platform needed a consistent integration boundary capable of supporting synchronous and asynchronous operations without coupling its internal commerce workflows directly to each external marketplace.",
    ],
    solution: [
      "Marketplace-specific adapter services received operations through event queues, scheduled processes or REST requests.",
      "Each adapter authenticated with the corresponding marketplace, transformed internal data into the required external format, executed the operation and normalized the resulting success or failure response.",
      "Asynchronous results were published back through event queues, with retry mechanisms applied at both the application and infrastructure levels when appropriate.",
    ],
    contribution: [
      "Designed and implemented marketplace integration workflows using Java and Spring Boot.",
      "Developed catalog, publication, inventory, order, synchronization, auditing and fulfillment operations.",
      "Integrated backend services with AWS event-driven infrastructure.",
      "Implemented marketplace authentication and external API communication.",
      "Built transformation layers between internal commerce models and marketplace-specific contracts.",
      "Standardized marketplace responses and error handling.",
      "Implemented asynchronous result reporting and retry strategies.",
      "Created automated tests using JUnit and Mockito.",
      "Participated in architectural decisions, technical planning and code reviews.",
      "Worked with Docker-based environments and automated CI/CD pipelines.",
      "Supported production deployments and observability through Grafana.",
      "Applied specification-driven development with AI-assisted planning, implementation, testing and code review.",
    ],
    diagramKey: "nocnoc",
    decisions: [
      {
        title: "Marketplace-specific adapters",
        description:
          "Each external marketplace is isolated behind a dedicated integration boundary.",
      },
      {
        title: "Multiple entry mechanisms",
        description:
          "Events, scheduled processes and REST requests share a consistent processing model.",
      },
      {
        title: "Contract normalization",
        description:
          "Marketplace responses and errors are converted into predictable internal outcomes.",
      },
      {
        title: "Event-driven resilience",
        description:
          "Asynchronous messaging and controlled retries support temporary external failures.",
      },
      {
        title: "Observability",
        description: "Centralized dashboards support production diagnosis and operations.",
      },
      {
        title: "Specification-driven delivery",
        description:
          "Reviewed specifications and AI-assisted execution support implementation and validation.",
      },
    ],
    technology: [
      "Java",
      "Spring Boot",
      "Gradle",
      "AWS",
      "SQS",
      "DynamoDB",
      "MySQL",
      "Redis",
      "Docker",
      "GitHub Actions",
      "JUnit",
      "Mockito",
      "Grafana",
    ],
    outcome:
      "The adapter boundary allowed marketplace-specific behavior to evolve independently while protecting the internal commerce platform from differences in authentication, data contracts, operational flows and error handling.",
    note: {
      title: "Confidentiality",
      text: "This client engagement was delivered as part of my role at W3 IT Solutions. The architecture shown here is intentionally simplified and excludes confidential, proprietary and operational implementation details.",
    },
  },
  {
    slug: "pickit",
    name: "Pickit",
    title: "Evolving a Last-Mile Logistics Platform",
    context: "Last-Mile Logistics · Client engagement through W3 IT Solutions",
    facts: [
      { label: "Role", value: "PHP Developer → Backend Tech Lead" },
      { label: "Period", value: "2019 - 2022" },
    ],
    overview: [
      "I joined the project as a PHP developer and later progressed into a Backend Tech Lead role, contributing to the evolution of a growing last-mile logistics platform.",
      "My work covered core backend development, service architecture, technical leadership, release coordination and the gradual extraction of independently deployed services from a central monolith.",
    ],
    challenge: [
      "Pickit's central backend had grown alongside the business and continued to contain a significant part of its operational logic.",
      "The platform supported courier operations, delivery points, administration tools, drop-off workflows, reverse logistics and integrations with ecommerce and business systems.",
      "New capabilities needed to evolve independently without disrupting the core platform or ongoing logistics operations.",
    ],
    solution: [
      "The architecture evolved incrementally from a central Symfony monolith toward independently deployed backend services.",
      "New services, including administration and delivery-point capabilities, were separated behind REST APIs and RabbitMQ messaging. Each service owned its persistence while continuing to cooperate with the existing core platform.",
      "This gradual approach allowed the team to introduce clearer service boundaries without attempting a risky full replacement of the operational core.",
    ],
    contribution: [
      "Developed and maintained core backend functionality using PHP and Symfony.",
      "Built REST APIs and asynchronous workflows using RabbitMQ.",
      "Contributed to the design and implementation of administration and delivery-point services.",
      "Participated in the gradual transition from a central monolith toward independently deployed services.",
      "Designed service boundaries and database ownership for new backend components.",
      "Progressed from backend developer to Backend Tech Lead.",
      "Led backend delivery across two multidisciplinary squads.",
      "Acted as a technical reference for backend developers and product teams.",
      "Reviewed technical proposals and contributed to architectural decisions.",
      "Reviewed and integrated approved changes from the wider delivery organization.",
      "Coordinated and executed application deployments.",
      "Supported code quality, delivery planning and engineering practices.",
    ],
    diagramKey: "pickit",
    decisions: [
      {
        title: "Incremental modernization",
        description:
          "New services were introduced without attempting a high-risk replacement of the central platform.",
      },
      {
        title: "Explicit service boundaries",
        description: "New operational capabilities received focused ownership.",
      },
      {
        title: "Database ownership",
        description: "Independently deployed services maintained their own databases.",
      },
      {
        title: "Synchronous and asynchronous communication",
        description:
          "REST supported direct interactions while RabbitMQ supported asynchronous processing.",
      },
      {
        title: "Core continuity",
        description: "Existing business logic remained operational while new capabilities evolved.",
      },
      {
        title: "Coordinated delivery",
        description:
          "Review, integration and deployment practices were coordinated across multiple teams.",
      },
    ],
    technology: ["PHP", "Symfony", "REST APIs", "RabbitMQ", "MySQL", "Docker", "Jenkins", "Git"],
    outcome:
      "The incremental architecture allowed new logistics capabilities to gain clearer ownership and deployment independence while preserving the stability and business knowledge of the existing core platform.",
    note: {
      title: "Confidentiality",
      text: "This client engagement was delivered as part of my role at W3 IT Solutions. The architecture is intentionally simplified and excludes confidential, proprietary and operational implementation details.",
    },
  },
  {
    slug: "yamaha",
    name: "Yamaha",
    title: "Building an Internal Operations Suite",
    context: "Manufacturing · Client engagement through W3 IT Solutions",
    facts: [
      { label: "Role", value: "Full-Stack / Backend Engineer" },
      {
        label: "Scope",
        value: "End-to-end delivery across backend, frontend, data and deployment",
      },
    ],
    overview: [
      "I designed and implemented backend systems and full-stack functionality for a suite of internal applications supporting Yamaha's manufacturing and operational processes.",
      "The suite included production planning, logistics, supplies management and a centralized access application that connected previously independent systems through a unified authentication and navigation experience.",
    ],
    challenge: [
      "Different operational areas relied on independent applications supporting manufacturing workflows such as customs pallet processing, material organization, production-line preparation, logistics and supplies purchasing.",
      "Each application needed to preserve its own domain and data while providing employees with a consistent and secure way to access the complete internal suite.",
    ],
    solution: [
      "The platform was organized as a set of independently deployed domain applications, each with its own backend, frontend and SQL Server database.",
      "A centralized access application provided authentication through Active Directory and issued JWT-based application sessions. From this entry point, authorized employees could access the operational modules available to them.",
      "The applications were containerized with Docker and delivered through automated CI/CD pipelines.",
    ],
    contribution: [
      "Designed the backend architecture for the applications under my responsibility.",
      "Designed the SQL Server data models and application persistence.",
      "Built backend services and REST APIs using NestJS and TypeScript.",
      "Implemented frontend functionality using Svelte.",
      "Delivered features across production planning, logistics and supplies workflows.",
      "Built the centralized access backend and contributed to its frontend.",
      "Integrated enterprise authentication with Active Directory.",
      "Implemented JWT-based authentication and authorization flows.",
      "Maintained separation between domain applications and their databases.",
      "Containerized application components using Docker.",
      "Configured CI/CD pipelines and participated in production deployments.",
      "Created automated tests using Jest.",
      "Delivered most of the assigned applications from architecture through production deployment.",
    ],
    additionalSection: {
      title: "Operational applications",
      items: [
        {
          title: "PCP - Production Operations",
          description:
            "Supported customs pallet opening, storage organization and cart preparation for the production line.",
        },
        {
          title: "Logistics",
          description:
            "Provided dedicated backend and frontend functionality for internal logistics workflows.",
        },
        {
          title: "Supplies",
          description: "Supported product purchasing and supplies-management processes.",
        },
        {
          title: "Yamaha Access Shell",
          description:
            "Unified authentication and navigation across previously independent internal applications.",
        },
      ],
    },
    diagramKey: "yamaha",
    decisions: [
      {
        title: "Domain separation",
        description: "PCP, Logistics and Supplies remained independent operational applications.",
      },
      {
        title: "Independent persistence",
        description: "Each backend owned its SQL Server database.",
      },
      {
        title: "Centralized authentication",
        description:
          "Active Directory validated enterprise identity while JWT supported application sessions.",
      },
      {
        title: "Unified access",
        description: "The Access Shell created one entry point without centralizing domain logic.",
      },
      {
        title: "Containerized delivery",
        description: "Docker and CI/CD supported repeatable deployment.",
      },
      {
        title: "End-to-end ownership",
        description:
          "Architecture, data, implementation, testing and deployment formed one responsibility.",
      },
    ],
    technology: [
      "TypeScript",
      "NestJS",
      "Svelte",
      "SQL Server",
      "Active Directory",
      "JWT",
      "Docker",
      "GitLab CI/CD",
      "Jest",
    ],
    outcome:
      "The resulting structure preserved the independence of each operational domain while giving employees a unified and secure entry point into the internal application suite.",
    note: {
      title: "Confidentiality",
      text: "This client engagement was delivered as part of my role at W3 IT Solutions. The architecture is intentionally simplified and excludes confidential business rules, internal interfaces and operational implementation details.",
    },
  },
  {
    slug: "sura-gpass",
    name: "Sura Seguros - GPASS",
    title: "Unifying Access to Internal Insurance Applications",
    context: "Insurance · Client engagement through W3 IT Solutions",
    facts: [
      { label: "Role", value: "Backend / Full-Stack Engineer" },
      { label: "Scope", value: "Backend for Frontend, microfrontends and cloud delivery" },
    ],
    overview: [
      "I designed and implemented a NestJS Backend for Frontend for GPASS, an internal application hub that centralized access to Sura Seguros applications and services.",
      "I worked primarily on the backend while also contributing to the Angular microfrontend architecture, Module Federation integration and application redirection flows.",
    ],
    challenge: [
      "Internal users needed to navigate multiple insurance applications and services that were distributed across different systems.",
      "The experience required a unified entry point capable of presenting shared navigation, loading selected platform modules and redirecting users to existing internal applications without moving operational insurance data into the new platform.",
    ],
    solution: [
      "GPASS was implemented as an Angular microfrontend hub supported by a dedicated NestJS Backend for Frontend.",
      "The Angular shell used Module Federation to compose platform functionality, while the BFF exposed frontend-oriented APIs, handled configuration and transformed information obtained from client-owned services.",
      "Existing applications remained independent and were accessed through controlled redirection flows. MongoDB stored GPASS configuration only, not operational insurance data.",
    ],
    contribution: [
      "Designed and built the NestJS Backend for Frontend from the ground up.",
      "Defined the backend structure and frontend-oriented API contracts.",
      "Implemented integration with client-owned services exposed through Azure Functions.",
      "Transformed external responses into models designed for the frontend.",
      "Implemented configuration-driven menus, modules and redirection flows.",
      "Developed functionality related to policies, claims, clients, payments and quotations.",
      "Worked with MongoDB for GPASS-specific configuration.",
      "Contributed to the Angular frontend and Module Federation integration.",
      "Implemented navigation and redirection behavior for existing internal applications.",
      "Created automated backend tests using Jest.",
      "Participated in BDD scenarios written with Gherkin.",
      "Contributed to end-to-end testing with Cypress.",
      "Configured and maintained deployment pipelines in Azure.",
    ],
    diagramKey: "sura-gpass",
    decisions: [
      {
        title: "Backend for Frontend",
        description: "The BFF shaped contracts around the Angular experience.",
      },
      {
        title: "Microfrontend composition",
        description: "Module Federation combined shared navigation with selected frontend modules.",
      },
      {
        title: "Controlled redirections",
        description: "Configuration-driven navigation kept existing applications independent.",
      },
      {
        title: "Configuration-only persistence",
        description: "MongoDB stored GPASS configuration rather than operational insurance data.",
      },
      {
        title: "External service isolation",
        description: "The BFF isolated the UI from client-owned service contracts.",
      },
      {
        title: "Automated delivery",
        description: "Azure pipelines supported repeatable validation and deployment.",
      },
    ],
    technology: [
      "TypeScript",
      "NestJS",
      "Angular",
      "Module Federation",
      "MongoDB",
      "Azure Functions",
      "Azure Pipelines",
      "Docker",
      "Jest",
      "Cypress",
      "Gherkin",
    ],
    outcome:
      "GPASS provided a unified navigation and integration layer for previously distributed internal applications while allowing the underlying insurance systems to remain independent.",
    note: {
      title: "Confidentiality",
      text: "This client engagement was delivered as part of my role at W3 IT Solutions. The architecture is intentionally simplified and excludes confidential business rules, internal contracts and proprietary implementation details.",
    },
  },
] as const;
