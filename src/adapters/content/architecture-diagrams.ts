import type {
  ArchitectureDiagram,
  ArchitectureDiagramKey,
  ArchitectureEdge,
  ArchitectureNode,
  ArchitectureNodeKind,
  ArchitecturePortSide,
} from "@/domain/portfolio";

type NodeInput = Readonly<{
  id: string;
  label: string;
  caption: string;
  description: string;
  kind: ArchitectureNodeKind;
  x: number;
  y: number;
  parentId?: string;
  width?: number;
  height?: number;
  targetSide?: ArchitecturePortSide;
  sourceSide?: ArchitecturePortSide;
}>;

function node({ x, y, width, height, ...content }: NodeInput): ArchitectureNode {
  return {
    ...content,
    position: { x, y },
    ...(width && height ? { size: { width, height } } : {}),
  };
}

function edge(source: string, target: string, label?: string, animated = false): ArchitectureEdge {
  return {
    id: `${source}-${target}`,
    source,
    target,
    ...(label ? { label } : {}),
    ...(animated ? { animated } : {}),
  };
}

function diagram(
  key: ArchitectureDiagramKey,
  title: string,
  summary: string,
  nodes: readonly ArchitectureNode[],
  edges: readonly ArchitectureEdge[],
): ArchitectureDiagram {
  return { key, title, summary, nodes, edges };
}

export const architectureDiagrams: readonly ArchitectureDiagram[] = [
  diagram(
    "representative",
    "Simplified marketplace integration architecture",
    "A marketplace operation enters through REST, SQS or a scheduled job; a Spring Boot integration service transforms the data, resolves credentials, calls the marketplace and publishes a normalized result for downstream processing.",
    [
      node({
        id: "integration-service",
        label: "Marketplace integration service",
        caption: "Spring Boot · Hexagonal architecture",
        description:
          "The service isolates marketplace-specific behavior behind inbound and outbound adapters while application use cases coordinate each operation.",
        kind: "boundary",
        x: 280,
        y: 0,
        width: 680,
        height: 440,
      }),
      node({
        id: "rest-input",
        label: "REST request",
        caption: "Synchronous input",
        description: "An internal system can request a marketplace operation through an HTTP API.",
        kind: "client",
        x: 0,
        y: 30,
      }),
      node({
        id: "sqs-input",
        label: "SQS event",
        caption: "Asynchronous input",
        description:
          "An event can start the same operation asynchronously without holding an HTTP request open.",
        kind: "event",
        x: 0,
        y: 170,
      }),
      node({
        id: "schedule-input",
        label: "Scheduled job",
        caption: "Time-based input",
        description:
          "Recurring synchronization or maintenance operations can start from a controlled schedule.",
        kind: "platform",
        x: 0,
        y: 310,
      }),
      node({
        id: "inbound",
        label: "Inbound adapters",
        caption: "Controller · Listener · Scheduler",
        description:
          "Transport-specific adapters validate the incoming contract and translate it into an application command.",
        kind: "application",
        x: 30,
        y: 90,
        parentId: "integration-service",
      }),
      node({
        id: "orchestrator",
        label: "Operation use case",
        caption: "Application layer",
        description:
          "The use case coordinates validation, transformation, credentials, the external call and the final result without depending on the input transport.",
        kind: "service",
        x: 245,
        y: 90,
        parentId: "integration-service",
        sourceSide: "bottom",
      }),
      node({
        id: "transformer",
        label: "Data transformer",
        caption: "Internal ↔ marketplace model",
        description:
          "Marketplace-specific mappings convert internal product, stock, order or fulfillment data into the external contract and back.",
        kind: "service",
        x: 245,
        y: 245,
        parentId: "integration-service",
        targetSide: "top",
      }),
      node({
        id: "marketplace-adapter",
        label: "Marketplace adapter",
        caption: "Authentication · API client · Errors",
        description:
          "The outbound adapter resolves marketplace credentials, calls the external API and converts provider-specific responses and errors into a stable internal result.",
        kind: "application",
        x: 460,
        y: 165,
        parentId: "integration-service",
      }),
      node({
        id: "marketplace-api",
        label: "Marketplace API",
        caption: "External platform",
        description:
          "The external marketplace receives operations such as publication, inventory, order or fulfillment updates.",
        kind: "external",
        x: 1040,
        y: 90,
      }),
      node({
        id: "result-event",
        label: "Result event",
        caption: "SQS · Success · Error · Retry",
        description:
          "A normalized success or error message is published for downstream processing, with retry behavior where the operation allows it.",
        kind: "event",
        x: 1040,
        y: 285,
      }),
      node({
        id: "observability",
        label: "Logs, metrics and dashboards",
        caption: "Operational visibility",
        description:
          "Structured logs and metrics expose throughput, failures and retry behavior so the distributed flow can be operated in production.",
        kind: "platform",
        x: 500,
        y: 520,
      }),
    ],
    [
      edge("rest-input", "inbound", "HTTP"),
      edge("sqs-input", "inbound", "event", true),
      edge("schedule-input", "inbound", "trigger"),
      edge("inbound", "orchestrator"),
      edge("orchestrator", "transformer"),
      edge("transformer", "marketplace-adapter"),
      edge("marketplace-adapter", "marketplace-api", "HTTPS"),
      edge("marketplace-adapter", "result-event", "normalized result", true),
      edge("integration-service", "observability", "logs + metrics"),
    ],
  ),
  diagram(
    "nexusmed",
    "NexusMed product architecture",
    "An independently deployed healthcare platform connecting public discovery, authenticated management and managed appointment contact.",
    [
      node({
        id: "visitors",
        label: "Patients",
        caption: "Public visitors",
        description:
          "Visitors search specialties, doctors, hospitals and supported insurance providers.",
        kind: "client",
        x: 0,
        y: 80,
      }),
      node({
        id: "frontend",
        label: "SvelteKit Web",
        caption: "Responsive interface",
        description:
          "The frontend implements the client-approved visual design and discovery experience.",
        kind: "application",
        x: 250,
        y: 80,
      }),
      node({
        id: "api",
        label: "NestJS API",
        caption: "JWT · TypeORM",
        description:
          "The API owns authentication, administration and healthcare directory operations.",
        kind: "service",
        x: 510,
        y: 80,
      }),
      node({
        id: "mysql",
        label: "MySQL",
        caption: "Product data",
        description:
          "Relational persistence stores doctors, specialties, hospitals, insurance providers and users.",
        kind: "data",
        x: 780,
        y: 0,
      }),
      node({
        id: "contact",
        label: "WhatsApp",
        caption: "Preconfigured contact",
        description:
          "The selected specialist and patient context seed a managed appointment conversation.",
        kind: "external",
        x: 780,
        y: 170,
      }),
      node({
        id: "delivery",
        label: "Docker Delivery",
        caption: "Nginx · GitHub Actions",
        description:
          "Containerized services are built and deployed through an automated delivery workflow.",
        kind: "platform",
        x: 510,
        y: 310,
      }),
    ],
    [
      edge("visitors", "frontend"),
      edge("frontend", "api", "HTTPS"),
      edge("api", "mysql"),
      edge("api", "contact"),
      edge("delivery", "frontend"),
      edge("delivery", "api"),
    ],
  ),
  diagram(
    "nocnoc",
    "Marketplace adapter architecture",
    "A simplified event-driven integration flow for translating internal commerce operations into marketplace-specific interactions.",
    [
      node({
        id: "entry",
        label: "Operation Entry",
        caption: "SQS · Cron · REST",
        description:
          "Operations could enter asynchronously, on a schedule or through a synchronous endpoint.",
        kind: "event",
        x: 0,
        y: 120,
      }),
      node({
        id: "adapter",
        label: "Marketplace Adapter",
        caption: "Java · Spring Boot",
        description:
          "The adapter normalizes operations, data, marketplace authentication and error handling.",
        kind: "service",
        x: 280,
        y: 120,
      }),
      node({
        id: "internal",
        label: "Commerce Services",
        caption: "Catalog · Orders · Stock",
        description:
          "Internal services provide product, publication, order, price and inventory capabilities.",
        kind: "service",
        x: 560,
        y: 0,
      }),
      node({
        id: "marketplaces",
        label: "Marketplaces",
        caption: "Walmart · Mercado Libre · More",
        description:
          "Marketplace APIs expose distinct contracts, credentials, limits and operational behavior.",
        kind: "external",
        x: 840,
        y: 120,
      }),
      node({
        id: "result",
        label: "Result Events",
        caption: "Success · Error · Retry",
        description:
          "Normalized outcomes are published for downstream processing and controlled retries.",
        kind: "event",
        x: 560,
        y: 240,
      }),
      node({
        id: "operations",
        label: "Operations",
        caption: "Metrics · Logs · Audit",
        description: "Operational signals support review, traceability and production diagnosis.",
        kind: "platform",
        x: 280,
        y: 390,
      }),
    ],
    [
      edge("entry", "adapter", "operation", true),
      edge("internal", "adapter"),
      edge("adapter", "marketplaces", "translated request"),
      edge("marketplaces", "result", "response", true),
      edge("result", "entry", "retry", true),
      edge("adapter", "operations"),
      edge("result", "operations"),
    ],
  ),
  diagram(
    "pickit",
    "Logistics platform evolution",
    "A simplified view of a growing logistics core progressively complemented by independently deployed services.",
    [
      node({
        id: "apps",
        label: "Operational Apps",
        caption: "Courier · Dropoff · Points",
        description:
          "Multiple operational applications support delivery, dropoff and point-management workflows.",
        kind: "client",
        x: 0,
        y: 110,
      }),
      node({
        id: "core",
        label: "Logistics Core",
        caption: "Growing monolith",
        description:
          "The established core continued to own central logistics rules during gradual evolution.",
        kind: "application",
        x: 260,
        y: 110,
      }),
      node({
        id: "broker",
        label: "RabbitMQ",
        caption: "Asynchronous boundary",
        description: "Messaging decoupled selected operations from the central platform.",
        kind: "event",
        x: 530,
        y: 110,
      }),
      node({
        id: "admin",
        label: "Administration Service",
        caption: "Independent deployment",
        description:
          "Administration responsibilities moved behind an independently delivered service boundary.",
        kind: "service",
        x: 800,
        y: 0,
      }),
      node({
        id: "points",
        label: "Points Service",
        caption: "Independent deployment",
        description: "Delivery-point capabilities were separated into a focused service.",
        kind: "service",
        x: 800,
        y: 210,
      }),
      node({
        id: "databases",
        label: "Service Databases",
        caption: "Owned persistence",
        description: "Each extracted service maintained its own persistence boundary.",
        kind: "data",
        x: 1070,
        y: 110,
      }),
    ],
    [
      edge("apps", "core", "REST"),
      edge("core", "broker", "events", true),
      edge("broker", "admin", undefined, true),
      edge("broker", "points", undefined, true),
      edge("admin", "databases"),
      edge("points", "databases"),
    ],
  ),
  diagram(
    "yamaha",
    "Internal operations suite",
    "A centralized access shell connecting independently deployed operational applications with isolated backends and databases.",
    [
      node({
        id: "employees",
        label: "Employees",
        caption: "Internal users",
        description:
          "Authorized employees enter the operational suite through one access experience.",
        kind: "client",
        x: 0,
        y: 130,
      }),
      node({
        id: "shell",
        label: "Access Shell",
        caption: "Central application hub",
        description:
          "The shell centralizes login and navigation while keeping operational modules independent.",
        kind: "application",
        x: 250,
        y: 130,
      }),
      node({
        id: "identity",
        label: "Active Directory",
        caption: "Identity · JWT",
        description: "Enterprise identity is validated and represented through application tokens.",
        kind: "external",
        x: 250,
        y: 340,
      }),
      node({
        id: "planning",
        label: "Production Planning",
        caption: "Pallets · Carts",
        description:
          "The module supports pallet opening and production-cart preparation workflows.",
        kind: "service",
        x: 540,
        y: 0,
      }),
      node({
        id: "logistics",
        label: "Logistics",
        caption: "Operational workflow",
        description: "A dedicated application and backend support internal logistics operations.",
        kind: "service",
        x: 540,
        y: 160,
      }),
      node({
        id: "supplies",
        label: "Supplies",
        caption: "Procurement workflow",
        description:
          "A dedicated application and backend support product purchasing and supply operations.",
        kind: "service",
        x: 540,
        y: 320,
      }),
      node({
        id: "sql",
        label: "SQL Server Databases",
        caption: "Database per service",
        description: "Each operational system owns an independent Microsoft SQL Server database.",
        kind: "data",
        x: 840,
        y: 160,
      }),
    ],
    [
      edge("employees", "shell"),
      edge("shell", "identity", "authenticate"),
      edge("shell", "planning"),
      edge("shell", "logistics"),
      edge("shell", "supplies"),
      edge("planning", "sql"),
      edge("logistics", "sql"),
      edge("supplies", "sql"),
    ],
  ),
  diagram(
    "sura-gpass",
    "GPASS application hub",
    "A microfrontend hub and Backend for Frontend centralizing navigation and access to client-owned applications and APIs.",
    [
      node({
        id: "users",
        label: "Internal Users",
        caption: "Insurance teams",
        description: "Internal users access multiple applications through a single entry point.",
        kind: "client",
        x: 0,
        y: 100,
      }),
      node({
        id: "shell",
        label: "Angular Shell",
        caption: "Module Federation",
        description: "The shell composes navigation, redirects and selected microfrontend modules.",
        kind: "application",
        x: 260,
        y: 100,
      }),
      node({
        id: "microfrontends",
        label: "Microfrontends",
        caption: "Independent UI modules",
        description: "Federated and redirected applications remain independently maintained.",
        kind: "application",
        x: 540,
        y: 0,
      }),
      node({
        id: "bff",
        label: "NestJS BFF",
        caption: "Client-oriented API",
        description:
          "The BFF centralizes frontend integration and isolates client-owned service contracts.",
        kind: "service",
        x: 540,
        y: 210,
      }),
      node({
        id: "mongo",
        label: "MongoDB",
        caption: "GPASS configuration",
        description:
          "Persistence stores application-hub configuration rather than operational insurance data.",
        kind: "data",
        x: 830,
        y: 120,
      }),
      node({
        id: "azure",
        label: "Client APIs",
        caption: "Azure Functions · Internal systems",
        description: "The BFF integrates with APIs and systems owned by the insurance client.",
        kind: "external",
        x: 830,
        y: 300,
      }),
    ],
    [
      edge("users", "shell"),
      edge("shell", "microfrontends", "federation"),
      edge("shell", "bff", "HTTPS"),
      edge("bff", "mongo"),
      edge("bff", "azure", "normalized access"),
    ],
  ),
] as const;
