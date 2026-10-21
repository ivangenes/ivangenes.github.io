# Implementation Plan

## Goal

Build the approved version 1 portfolio as a statically exported Next.js application, validate it
against the acceptance specification, and deploy it to GitHub Pages through trunk-based CI/CD.

## Phase 0 - Repository baseline

- Persist approved specifications, implementation plan, ADRs, and task backlog.
- Add repository-specific working agreements and README.
- Validate consistency and traceability before application code.

## Phase 1 - Next.js foundation

- Initialize Next.js with App Router, strict TypeScript, npm, and src/.
- Configure static export, trailing slash, and GitHub Pages compatibility.
- Add formatting, linting, styling, type-checking, and test scripts.
- Verify that a minimal application builds into out/.

## Phase 2 - Domain and content architecture

- Implement domain models.
- Define the content repository port.
- Implement the static typed-content adapter.
- Implement application use cases and composition.
- Add tests for content invariants, navigation, links, and confidentiality rules.

## Phase 3 - Visual foundation

- Implement design tokens and global styles.
- Build reusable layout and interface primitives.
- Build the header, mobile navigation, and footer.
- Produce a recognizable visual checkpoint containing the header, hero, one project card, graphite
  architecture block, and footer.
- Obtain user approval before replicating the direction.

## Phase 4 - Home

- Implement Hero and Selected Work.
- Implement Experience and Education.
- Implement Spec-Driven, Agent-Assisted Engineering.
- Implement Contact and the resume selector.
- Integrate the representative architecture section.

## Phase 5 - Diagrams

- Build an accessible reusable React Flow diagram system.
- Add zoom, fit, fullscreen, node details, keyboard support, touch support, and semantic text
  alternatives.
- Define the representative diagram and five case-study diagrams as typed data.

## Phase 6 - Case studies

- Implement statically generated case-study routes.
- Build a shared case-study template.
- Add all five approved cases.
- Add previous/next navigation and return to Selected Work.
- Verify confidentiality constraints per case.

## Phase 7 - Assets and SEO

- Add both definitive resumes.
- Add favicon and social preview assets.
- Add route-specific metadata, canonical URLs, sitemap, robots, and structured data.

## Phase 8 - Quality gates

- Add unit and component tests.
- Add Playwright tests against the served static export.
- Add axe checks.
- Review at 320, 768, 1024, and 1440 CSS pixels.
- Review keyboard, 200 percent zoom, reduced motion, and browser console.
- Audit public content for private or proprietary information.

## Phase 9 - Automation

- Add pre-commit and pre-push checks.
- Add GitHub Actions validation.
- Add GitHub Pages artifact and deployment workflow.
- Ensure deployment starts only after every validation succeeds.

## Phase 10 - Release

- Perform final content, visual, security, and static-route review.
- Review git status, full diff, and local Git identity.
- Request explicit authorization before commit or push.
- Deploy and verify https://ivangenes.github.io/.

## Architecture

    Next.js App
        ↓
    Composition
        ↓
    Application Use Cases
        ↓
    Ports
        ↑
    Static Content Adapter
        ↓
    Domain

## Review checkpoints

1. Foundation and empty static build.
2. Visual direction.
3. Complete home.
4. Case studies and diagrams.
5. Release candidate.
6. Production deployment.

## Execution rules

- Finish and validate each task before starting its dependents.
- Update specifications before changing approved behavior or copy.
- Keep public content free of private implementation details.
- Do not commit, push, or deploy without explicit user authorization.
- Preserve trunk history; fix or revert bad releases rather than rewriting main.
