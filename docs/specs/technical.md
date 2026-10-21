# Technical Specification

## Platform

- Next.js with App Router.
- React.
- Strict TypeScript.
- npm with a committed package-lock.
- Static export to out/.
- GitHub Pages hosting at https://ivangenes.github.io/.

## Rendering strategy

- Server components are the default.
- Interactive architecture diagrams are isolated client components.
- There is no runtime backend, CMS, database, or content API.
- All routes and content are generated at build time.
- trailingSlash is enabled for GitHub Pages compatibility.
- Image optimization that requires a server is disabled.

## Architecture

The repository uses a lightweight hexagonal structure:

    src/
    ├── domain/
    │   └── portfolio/
    ├── application/
    │   └── use-cases/
    ├── ports/
    ├── adapters/
    │   └── content/
    ├── composition/
    ├── presentation/
    │   ├── components/
    │   ├── sections/
    │   └── diagrams/
    └── app/
        ├── page.tsx
        └── work/
            └── [slug]/

### Dependency rules

- Domain code imports no React, Next.js, browser, filesystem, or framework modules.
- Application use cases depend on domain models and ports.
- Ports define the content contracts required by the application.
- The static content adapter implements the content port.
- The composition layer wires adapters into use cases.
- App Router pages invoke composed use cases and pass view data to presentation components.
- Presentation uses functional React components.

## Domain model

The model includes:

- Profile
- NavigationItem
- ProjectSummary
- CaseStudy
- ExperienceEntry
- EducationEntry
- EngineeringWorkflow
- ArchitectureDiagram
- ContactInformation
- ResumeAsset

Objects exposed to consumers are readonly.

## Application use cases

- GetHomeContent
- GetSelectedWork
- GetCaseStudyBySlug
- GetCaseStudyNavigation
- GetResumeOptions

Use cases are small classes with constructor-injected ports.

## Content

- English content is stored as typed TypeScript data.
- No CMS or MDX is used in version 1.
- Data is validated through compile-time types and focused runtime assertions in tests.
- Project slugs are unique.
- Project ordering is explicit.
- No private repository URLs are represented in public content.

## Routes

- /
- /work/nexusmed/
- /work/nocnoc/
- /work/pickit/
- /work/yamaha/
- /work/sura-gpass/

generateStaticParams produces every case-study route.

## Styling

- CSS Modules for component and section styles.
- CSS custom properties for design tokens.
- A small global stylesheet for reset, typography, document defaults, and utilities.
- No Tailwind or full UI component framework.
- Motion uses CSS where practical.

## Architecture diagrams

- Implemented with React Flow.
- Diagram configuration is typed data.
- React Flow is loaded only for diagram sections.
- Required controls: zoom out, zoom in, fit, and fullscreen.
- Nodes can be selected with pointer or keyboard.
- Node selection displays explanatory copy.
- Each diagram includes a semantic textual equivalent.
- Fullscreen closes with Escape and restores focus.

## Assets

- Backend resume: public/resume/ivan-genes-backend-resume.pdf
- Full-Stack resume: public/resume/ivan-genes-full-stack-resume.pdf
- Static favicon and social preview assets.
- A professional photo is optional and must not block version 1.

## SEO

- Route-specific title and description.
- Canonical URLs.
- Open Graph and Twitter metadata.
- Static social preview image.
- sitemap.xml and robots.txt.
- Basic professional structured data.

## Quality tooling

- Prettier for formatting.
- ESLint for TypeScript and React.
- Stylelint for CSS.
- TypeScript strict type checking.
- Vitest and React Testing Library for unit and component tests.
- Playwright for end-to-end tests.
- Axe integration for automated accessibility checks.
- Husky and lint-staged for local checks.

## Test strategy

### Unit

- Content invariants.
- Project ordering and unique slugs.
- Use cases.
- Case-study previous/next navigation.
- Public link rules.

### Component

- Header and mobile menu.
- Project card.
- Resume selector.
- Contact actions.
- Diagram controls and node details.

### End to end

- Home and all five case-study routes.
- Desktop and mobile navigation.
- Resume downloads.
- Contact and external link targets.
- Diagram interactions.
- Direct route loading from the static export.
- Chromium, Firefox, and WebKit.

### Accessibility

- Automated axe checks on the home and representative case studies.
- Manual keyboard navigation.
- Focus visibility and order.
- 200 percent zoom.
- Reduced motion.

## Local automation

### Pre-commit

- Format staged files.
- Lint staged TypeScript.
- Lint staged CSS.

### Pre-push

- Type checking.
- Unit tests.

## CI/CD

A push to main runs:

1. npm ci
2. format check
3. ESLint
4. Stylelint
5. typecheck
6. unit and component tests
7. static build
8. serve out/
9. Playwright
10. axe
11. upload Pages artifact
12. deploy GitHub Pages

Deployment runs only when validation passes. A failed workflow keeps the previous public deployment.

## Security and privacy

- No runtime secrets are required.
- No credentials or private configuration are committed.
- External links opened in a new tab use noopener and noreferrer.
- Tests validate link destinations without depending on remote availability.
- Public content is audited for proprietary names, internal endpoints, queue names, metrics,
  incidents, and configuration details.

## Git

- Main is the only long-lived branch.
- Pull requests are not required for the personal repository.
- Bad releases are fixed with a new commit or reverted; main is not rewritten.
- Commit, push, and publication require explicit user authorization.
