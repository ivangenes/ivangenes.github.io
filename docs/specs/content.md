# Content Specification

## Language and tone

- All public portfolio copy is in English.
- Tone is professional, direct, technically precise, and strictly factual.
- Individual contributions use first person.
- Team and client work is not presented as individual ownership.
- No unverified metrics or inflated outcomes.

## Global navigation

- Work
- Architecture
- Experience
- Engineering Approach
- Education
- Contact
- Resume

The Resume control offers:

- Backend Resume
- Full-Stack Resume

## Home

### Hero

Ivan Genes

Senior Software Engineer

Backend Architecture · Distributed Systems · Full-Stack Development

> Senior software engineer with 8+ years of experience designing backend systems, distributed
> integrations and full-stack applications across cross-border ecommerce, logistics, insurance,
> manufacturing and healthcare.

Buenos Aires, Argentina · Remote

Actions:

- View selected work
- Download resume

### Selected Work

#### NexusMed

Healthcare · Full-Stack Product

> A live healthcare platform that helps patients discover specialists and continue appointment
> requests through preconfigured WhatsApp conversations.

Role: Full-Stack Engineer · End-to-end technical ownership

Stack: NestJS · SvelteKit · MySQL · Docker

#### NocNoc

Cross-Border Ecommerce · Marketplace Integrations

> Event-driven marketplace adapters connecting internal commerce workflows with international
> marketplaces across catalog, inventory, orders and fulfillment operations.

Role: Senior Software Engineer · Backend

Stack: Java · Spring Boot · AWS · DynamoDB · SQS

#### Pickit

Last-Mile Logistics · Platform Evolution

> The gradual evolution of a growing logistics platform from a central monolith toward independently
> deployed services, while coordinating backend delivery across multiple teams.

Role: PHP Developer → Backend Tech Lead

Stack: PHP · Symfony · RabbitMQ · MySQL · Docker

#### Yamaha

Manufacturing · Internal Operations

> A suite of internal applications supporting production planning, logistics, supplies and
> centralized employee access.

Role: Full-Stack / Backend Engineer

Stack: NestJS · Svelte · SQL Server · Active Directory

#### Sura Seguros - GPASS

Insurance · Internal Application Hub

> An Angular microfrontend hub with a NestJS Backend for Frontend, unifying navigation and access to
> internal insurance applications and services.

Role: Backend / Full-Stack Engineer

Stack: NestJS · Angular · MongoDB · Azure Pipelines

Client work note:

> NocNoc, Pickit, Yamaha and Sura Seguros were client engagements delivered as part of my role at W3
> IT Solutions. Architecture diagrams are simplified and exclude confidential or proprietary
> details.

### Architecture

Architecture

A marketplace integration service in practice

> A simplified architecture based on marketplace adapters I built for NocNoc as part of my work at
> W3 IT Solutions.

> Operations could enter through REST, SQS or scheduled jobs. The service transformed data, resolved
> marketplace authentication, executed the external operation, normalized errors and published the
> result for downstream processing.

How to read it

Inputs, service boundary, marketplace and result

> Read from left to right. Three input mechanisms reach the same application flow inside the Spring
> Boot service. Outbound adapters isolate marketplace contracts and authentication. The result
> leaves as a normalized event, while logs and metrics cover the complete operation.

Tags:

- Java · Spring Boot
- Hexagonal Architecture
- AWS SQS
- Event-Driven Processing
- Retries and Error Normalization
- Grafana Observability

Disclaimer:

> Simplified representation of a client engagement delivered through W3 IT Solutions. It does not
> reproduce NocNoc's complete architecture; internal names, contracts and confidential
> implementation details have been intentionally excluded.

### Experience

#### W3 IT Solutions

Senior Software Engineer

2019 - Present

> Software engineer delivering backend systems, distributed integrations and full-stack products for
> clients across ecommerce, logistics, insurance and manufacturing. Work has included architecture,
> technical leadership, implementation, automated testing, CI/CD and production deployments.

Selected engagements:

- NocNoc - Senior Software Engineer, Backend
- Yamaha - Full-Stack / Backend Engineer
- Sura Seguros - Backend / Full-Stack Engineer
- Pickit - PHP Developer → Backend Tech Lead

#### Espinlabs

PHP Developer

2018 - 2019

> Developed backend functionality and REST APIs across multiple client projects using PHP and
> Laravel, working with Git and GitLab as part of the development workflow.

### Engineering Approach

Spec-Driven, Agent-Assisted Engineering

> I use AI-assisted development within a structured workflow where context is converted into
> reviewed specifications, implementation plans and executable tasks before development begins.

Flow:

    Context
    → Specification
    → Spec Review
    → Plan
    → Tasks
    → Agent-Assisted Execution
    → Validation & Code Review

#### 01 Context

> Project context is assembled from requirements, Notion tasks, architectural discussions, Slack
> conversations and authorized meeting transcripts through MCP integrations.

#### 02 Specification

> The collected context is converted into Markdown specifications defining scope, constraints,
> technical decisions and acceptance criteria.

#### 03 Spec Review

> I review and refine the specification before allowing the workflow to move into implementation
> planning.

#### 04 Plan

> An implementation plan is generated from the approved specification, including the proposed
> approach, dependencies and validation strategy.

#### 05 Tasks

> The plan is divided into explicit development tasks with defined responsibilities and completion
> criteria.

#### 06 Agent-Assisted Execution

> A coordinator can delegate implementation, testing, analysis and review work to specialized
> agents. Reusable Markdown-based skills provide project conventions, engineering practices and
> review criteria.

#### 07 Validation & Code Review

> Specialized agents run tests and technical validations throughout execution. Automated review,
> custom review agents and human review are combined before the work is considered complete.

Tools:

- Claude Code
- OpenAI Codex
- MCP
- Notion
- Slack
- CodeRabbit

Markdown-based skills are presented as a transversal layer around the flow rather than a separate
stage.

### Education

#### Degree in Information Systems

Software Engineering and Information Technology focus

Universidad Nacional del Nordeste

2010 - 2018

#### University Programmer Analyst

Computer Programming and Systems Analysis

Universidad Nacional del Nordeste

2010 - 2016

### Contact

Contact

Let's connect.

> For professional opportunities and selected collaborations, email is the best way to reach me.

Primary:

- Email me
- ivangenes@gmail.com

Alternatives:

- Connect on LinkedIn
- View GitHub

Buenos Aires, Argentina · Remote

> Open to selected freelance collaborations.

## Public links

- Email: mailto:ivangenes@gmail.com
- LinkedIn: https://www.linkedin.com/in/ivan-genes/
- GitHub: https://github.com/ivangenes
- NexusMed: https://nexusmedconnect.com/

## Case studies

### NexusMed

#### Header

Connecting patients with specialist care

Healthcare Platform · Client-owned freelance project

- Role: Full-Stack Engineer
- Scope: End-to-end technical ownership
- Status: Live · Specialist onboarding in progress
- Action: Visit live product

#### Overview

> I built NEXUS MedConnect from the ground up, taking end-to-end responsibility for the technical
> architecture, database design, backend, frontend implementation, authentication, infrastructure
> and production deployment.

> I translated the client-approved visual design into a responsive SvelteKit application connected
> to a dedicated NestJS backend.

#### The challenge

> Patients looking for specialist care often need to navigate fragmented information across doctors,
> specialties, hospitals and insurance providers.

> The product needed to centralize that information and guide each patient toward a managed first
> contact without attempting to replace the human coordination involved in scheduling medical care.

#### The solution

> NEXUS MedConnect provides a public experience for exploring medical specialties, searching for
> specialists and reviewing associated hospitals and insurance providers.

> Once a patient selects the appropriate specialist, the platform generates a contextual,
> preconfigured WhatsApp conversation so the NEXUS team can continue the appointment process.

> A protected administration area supports the management of doctors, specialties, hospitals,
> insurance providers and platform users.

#### My contribution

- Designed the application architecture and production deployment.
- Designed the MySQL data model and migrations.
- Built the NestJS API.
- Implemented the SvelteKit frontend from the approved visual design.
- Implemented JWT authentication for the administration area.
- Built management workflows for doctors, specialties, hospitals, insurance providers and users.
- Implemented the contextual WhatsApp handoff.
- Configured Docker, Nginx and persistent media storage.
- Created the GitHub Actions deployment workflow.
- Deployed the application to DigitalOcean.

#### Architecture

    Patients and administrators
    → Host Nginx
    → SvelteKit SSR and public media
    → Internal Docker network
    → NestJS API
    → MySQL and persistent images
    → Contextual WhatsApp handoff

#### Key engineering decisions

- Server-side rendering for the public discovery experience.
- Same-origin routing through Nginx.
- Separate Docker services for frontend, backend and persistence.
- Protected administration with public read experiences.
- TypeORM migrations for database evolution.
- Persistent media storage outside ephemeral containers.
- Automated delivery through GitHub Actions.

#### Technology

SvelteKit · TypeScript · NestJS · MySQL · TypeORM · JWT · Docker · Nginx · DigitalOcean · GitHub
Actions

#### Status

> The platform is live in production. Public specialty, hospital and insurance content is available,
> while specialist profile onboarding is still in progress.

#### Ownership

> NEXUS MedConnect is a client-owned product. The source repositories remain private, and the visual
> design was supplied and approved by the client.

### NocNoc

#### Header

Marketplace Integration Architecture

Cross-Border Ecommerce · Client engagement through W3 IT Solutions

- Role: Senior Software Engineer · Backend
- Period: 2025 - 2026

#### Overview

> I developed backend workflows for marketplace-specific adapter services connecting NocNoc's
> internal commerce platform with international marketplaces.

> These services supported catalog, inventory, order, synchronization, auditing and fulfillment
> operations across integrations including Walmart, Mercado Libre and Netshoes.

#### The challenge

> Each marketplace exposed different APIs, authentication mechanisms, data models, operational
> constraints and error formats.

> The platform needed a consistent integration boundary capable of supporting synchronous and
> asynchronous operations without coupling its internal commerce workflows directly to each external
> marketplace.

#### The solution

> Marketplace-specific adapter services received operations through event queues, scheduled
> processes or REST requests.

> Each adapter authenticated with the corresponding marketplace, transformed internal data into the
> required external format, executed the operation and normalized the resulting success or failure
> response.

> Asynchronous results were published back through event queues, with retry mechanisms applied at
> both the application and infrastructure levels when appropriate.

#### My contribution

- Designed and implemented marketplace integration workflows using Java and Spring Boot.
- Developed catalog, publication, inventory, order, synchronization, auditing and fulfillment
  operations.
- Integrated backend services with AWS event-driven infrastructure.
- Implemented marketplace authentication and external API communication.
- Built transformation layers between internal commerce models and marketplace-specific contracts.
- Standardized marketplace responses and error handling.
- Implemented asynchronous result reporting and retry strategies.
- Created automated tests using JUnit and Mockito.
- Participated in architectural decisions, technical planning and code reviews.
- Worked with Docker-based environments and automated CI/CD pipelines.
- Supported production deployments and observability through Grafana.
- Applied specification-driven development with AI-assisted planning, implementation, testing and
  code review.

#### Architecture

    Internal Commerce Platform
    → Events, Scheduled Jobs, or REST Requests
    → Marketplace Adapter
      → Operation Routing
      → Authentication
      → Data Transformation
      → External API Client
    → External Marketplace API
    → Response and Error Normalization
    → Result Events and Retries

Persistence and observability are cross-cutting concerns.

#### Key engineering decisions

- Marketplace-specific adapters isolate external contracts.
- Multiple entry mechanisms share a consistent internal processing model.
- Marketplace responses and errors are normalized.
- Asynchronous messaging and controlled retries improve resilience.
- Centralized observability supports production operations.
- Reviewed specifications and AI-assisted execution support delivery.

#### Technology

Java · Spring Boot · Gradle · AWS · SQS · DynamoDB · MySQL · Redis · Docker · GitHub Actions · JUnit
· Mockito · Grafana

#### Engineering outcome

> The adapter boundary allowed marketplace-specific behavior to evolve independently while
> protecting the internal commerce platform from differences in authentication, data contracts,
> operational flows and error handling.

#### Confidentiality

> This client engagement was delivered as part of my role at W3 IT Solutions. The architecture shown
> here is intentionally simplified and excludes confidential, proprietary and operational
> implementation details.

### Pickit

#### Header

Evolving a Last-Mile Logistics Platform

Last-Mile Logistics · Client engagement through W3 IT Solutions

- Role: PHP Developer → Backend Tech Lead
- Period: 2019 - 2022

#### Overview

> I joined the project as a PHP developer and later progressed into a Backend Tech Lead role,
> contributing to the evolution of a growing last-mile logistics platform.

> My work covered core backend development, service architecture, technical leadership, release
> coordination and the gradual extraction of independently deployed services from a central
> monolith.

#### The challenge

> Pickit's central backend had grown alongside the business and continued to contain a significant
> part of its operational logic.

> The platform supported courier operations, delivery points, administration tools, drop-off
> workflows, reverse logistics and integrations with ecommerce and business systems.

> New capabilities needed to evolve independently without disrupting the core platform or ongoing
> logistics operations.

#### The solution

> The architecture evolved incrementally from a central Symfony monolith toward independently
> deployed backend services.

> New services, including administration and delivery-point capabilities, were separated behind REST
> APIs and RabbitMQ messaging. Each service owned its persistence while continuing to cooperate with
> the existing core platform.

> This gradual approach allowed the team to introduce clearer service boundaries without attempting
> a risky full replacement of the operational core.

#### My contribution

- Developed and maintained core backend functionality using PHP and Symfony.
- Built REST APIs and asynchronous workflows using RabbitMQ.
- Contributed to the design and implementation of administration and delivery-point services.
- Participated in the gradual transition from a central monolith toward independently deployed
  services.
- Designed service boundaries and database ownership for new backend components.
- Progressed from backend developer to Backend Tech Lead.
- Led backend delivery across two multidisciplinary squads.
- Acted as a technical reference for backend developers and product teams.
- Reviewed technical proposals and contributed to architectural decisions.
- Reviewed and integrated approved changes from the wider delivery organization.
- Coordinated and executed application deployments.
- Supported code quality, delivery planning and engineering practices.

#### Architecture

    Operational Applications
    → Core Logistics Platform
    → REST APIs and RabbitMQ Events
    → Administration Service and Delivery-Point Service
    → Dedicated Databases
    → Ecommerce and Business Integrations

#### Key engineering decisions

- Incremental modernization instead of a high-risk rewrite.
- Explicit service boundaries for new capabilities.
- Independent database ownership.
- REST for direct interactions and RabbitMQ for asynchronous processing.
- Core continuity while new services evolved.
- Coordinated review, integration and deployment across multiple teams.

#### Technology

PHP · Symfony · REST APIs · RabbitMQ · MySQL · Docker · Jenkins · Git

#### Engineering outcome

> The incremental architecture allowed new logistics capabilities to gain clearer ownership and
> deployment independence while preserving the stability and business knowledge of the existing core
> platform.

#### Confidentiality

> This client engagement was delivered as part of my role at W3 IT Solutions. The architecture is
> intentionally simplified and excludes confidential, proprietary and operational implementation
> details.

### Yamaha

#### Header

Building an Internal Operations Suite

Manufacturing · Client engagement through W3 IT Solutions

- Role: Full-Stack / Backend Engineer
- Scope: End-to-end delivery across backend, frontend, data and deployment

No project-specific period is shown because the resume groups Yamaha and Sura within a shared W3
period.

#### Overview

> I designed and implemented backend systems and full-stack functionality for a suite of internal
> applications supporting Yamaha's manufacturing and operational processes.

> The suite included production planning, logistics, supplies management and a centralized access
> application that connected previously independent systems through a unified authentication and
> navigation experience.

#### The challenge

> Different operational areas relied on independent applications supporting manufacturing workflows
> such as customs pallet processing, material organization, production-line preparation, logistics
> and supplies purchasing.

> Each application needed to preserve its own domain and data while providing employees with a
> consistent and secure way to access the complete internal suite.

#### The solution

> The platform was organized as a set of independently deployed domain applications, each with its
> own backend, frontend and SQL Server database.

> A centralized access application provided authentication through Active Directory and issued
> JWT-based application sessions. From this entry point, authorized employees could access the
> operational modules available to them.

> The applications were containerized with Docker and delivered through automated CI/CD pipelines.

#### Operational applications

##### PCP - Production Operations

> Supported the process of opening customs pallets, organizing their contents into storage locations
> and preparing carts for the production line.

##### Logistics

> Provided dedicated backend and frontend functionality for internal logistics workflows.

##### Supplies

> Supported product purchasing and supplies-management processes.

##### Yamaha Access Shell

> Unified authentication and navigation across previously independent internal applications.

#### My contribution

- Designed the backend architecture for the applications under my responsibility.
- Designed the SQL Server data models and application persistence.
- Built backend services and REST APIs using NestJS and TypeScript.
- Implemented frontend functionality using Svelte.
- Delivered features across production planning, logistics and supplies workflows.
- Built the centralized access backend and contributed to its frontend.
- Integrated enterprise authentication with Active Directory.
- Implemented JWT-based authentication and authorization flows.
- Maintained separation between domain applications and their databases.
- Containerized application components using Docker.
- Configured CI/CD pipelines and participated in production deployments.
- Created automated tests using Jest.
- Delivered most of the assigned applications from architecture through production deployment.

#### Architecture

    Employees
    → Yamaha Access Shell
    → Active Directory Authentication
    → JWT Session
    → PCP - Production Operations
    → Logistics
    → Supplies

Each domain application has its own frontend, NestJS backend, and SQL Server database.

#### Key engineering decisions

- Domain separation across PCP, Logistics, and Supplies.
- Independent SQL Server persistence per application.
- Centralized enterprise authentication.
- Unified access without centralizing domain logic.
- Docker-based deployment and automated CI/CD.
- End-to-end ownership from architecture through deployment.

#### Technology

TypeScript · NestJS · Svelte · SQL Server · Active Directory · JWT · Docker · GitLab CI/CD · Jest

#### Engineering outcome

> The resulting structure preserved the independence of each operational domain while giving
> employees a unified and secure entry point into the internal application suite.

#### Confidentiality

> This client engagement was delivered as part of my role at W3 IT Solutions. The architecture is
> intentionally simplified and excludes confidential business rules, internal interfaces and
> operational implementation details.

### Sura Seguros - GPASS

#### Header

Unifying Access to Internal Insurance Applications

Insurance · Client engagement through W3 IT Solutions

- Role: Backend / Full-Stack Engineer
- Scope: Backend for Frontend, microfrontends and cloud delivery

#### Overview

> I designed and implemented a NestJS Backend for Frontend for GPASS, an internal application hub
> that centralized access to Sura Seguros applications and services.

> I worked primarily on the backend while also contributing to the Angular microfrontend
> architecture, Module Federation integration and application redirection flows.

#### The challenge

> Internal users needed to navigate multiple insurance applications and services that were
> distributed across different systems.

> The experience required a unified entry point capable of presenting shared navigation, loading
> selected platform modules and redirecting users to existing internal applications without moving
> operational insurance data into the new platform.

#### The solution

> GPASS was implemented as an Angular microfrontend hub supported by a dedicated NestJS Backend for
> Frontend.

> The Angular shell used Module Federation to compose platform functionality, while the BFF exposed
> frontend-oriented APIs, handled configuration and transformed information obtained from
> client-owned services.

> Existing applications remained independent and were accessed through controlled redirection flows.
> MongoDB stored GPASS configuration only, not operational insurance data.

#### My contribution

- Designed and built the NestJS Backend for Frontend from the ground up.
- Defined the backend structure and frontend-oriented API contracts.
- Implemented integration with client-owned services exposed through Azure Functions.
- Transformed external responses into models designed for the frontend.
- Implemented configuration-driven menus, modules and redirection flows.
- Developed functionality related to policies, claims, clients, payments and quotations.
- Worked with MongoDB for GPASS-specific configuration.
- Contributed to the Angular frontend and Module Federation integration.
- Implemented navigation and redirection behavior for existing internal applications.
- Created automated backend tests using Jest.
- Participated in BDD scenarios written with Gherkin.
- Contributed to end-to-end testing with Cypress.
- Configured and maintained deployment pipelines in Azure.

#### Architecture

    Internal Users
    → Angular Microfrontend Hub
      → Shared Navigation
      → Federated Modules
      → Application Redirects
    → NestJS Backend for Frontend
      → Frontend APIs
      → Data Transformation
      → Menu Configuration
      → Redirection Rules
    → Azure Functions Client APIs
    → MongoDB GPASS Configuration
    → Existing Internal Systems

#### Key engineering decisions

- A dedicated Backend for Frontend shaped contracts around the Angular experience.
- Module Federation combined shared navigation with selected frontend modules.
- Configuration-driven redirects kept existing applications independent.
- MongoDB stored GPASS configuration rather than operational insurance data.
- The BFF isolated the frontend from client-owned service contracts.
- Azure pipelines supported repeatable validation and delivery.

#### Technology

TypeScript · NestJS · Angular · Module Federation · MongoDB · Azure Functions · Azure Pipelines ·
Docker · Jest · Cypress · Gherkin

#### Engineering outcome

> GPASS provided a unified navigation and integration layer for previously distributed internal
> applications while allowing the underlying insurance systems to remain independent.

#### Confidentiality

> This client engagement was delivered as part of my role at W3 IT Solutions. The architecture is
> intentionally simplified and excludes confidential business rules, internal contracts and
> proprietary implementation details.

## SEO copy

Home title:

> Ivan Genes - Senior Software Engineer

Home description:

> Senior software engineer specializing in backend architecture, distributed systems and full-stack
> development across ecommerce, logistics, insurance, manufacturing and healthcare.

Case-study titles follow:

> Project name - Case-study title | Ivan Genes

## Content rules

- Do not publish salary, phone, availability, or English level.
- Do not publish private repository links.
- Do not publish client logos or private screenshots in version 1.
- Do not expose endpoints, queue names, credentials, operational metrics, incidents, or internal
  configuration.
- Do not imply client endorsement.
- Implementation may adjust line breaks but does not rewrite approved copy without updating this
  specification.
