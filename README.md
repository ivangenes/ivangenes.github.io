# Ivan Genes - Professional Portfolio

Public portfolio for Ivan Genes, Senior Software Engineer specializing in backend architecture,
distributed systems, and full-stack development.

## Goals

- Present selected engineering work to recruiters and engineering managers.
- Demonstrate architecture, implementation, technical leadership, and end-to-end ownership.
- Provide separate Backend and Full-Stack resumes.
- Support selected freelance opportunities as a secondary objective.

## Stack

- Next.js App Router
- React
- Strict TypeScript
- CSS Modules and CSS custom properties
- React Flow
- Static export
- GitHub Pages

## Architecture

The project uses a lightweight hexagonal structure:

    src/
    ├── domain/
    ├── application/
    ├── ports/
    ├── adapters/
    ├── composition/
    ├── presentation/
    └── app/

Domain and application code remain independent of React and Next.js. Public content is supplied
through a typed static repository adapter.

## Commands

    npm run dev
    npm run format
    npm run format:check
    npm run lint
    npm run stylelint
    npm run typecheck
    npm run test
    npm run test:e2e
    npm run build
    npm run validate

`npm run test:e2e` serves the generated `out/` directory and runs Playwright in Chromium, Firefox,
and WebKit. Run `npm run build` first when validating local production output.

## Documentation

- Product: docs/specs/product.md
- Design: docs/specs/design.md
- Technical: docs/specs/technical.md
- Content: docs/specs/content.md
- Acceptance: docs/specs/acceptance.md
- Implementation plan: docs/plans/implementation-plan.md
- Task backlog: docs/tasks/backlog.md
- Decisions: docs/adrs/

## Workflow

- main is the only long-lived branch.
- Pushes to main validate and deploy through GitHub Actions.
- Pull requests are not required for this personal repository.
- Pre-commit runs Prettier and the relevant linters against staged files.
- Pre-push runs strict type checking and unit/component tests.
- During assisted development, commit, push, and publication require explicit authorization.

## Privacy

Client architectures are intentionally simplified. The public repository must never include client
source code, private screenshots, credentials, endpoints, queue names, internal metrics, incident
details, or proprietary configuration.
