# Version 1 Task Backlog

Status values: pending, in-progress, blocked, complete.

## Epic 0 - Specifications and foundation

### T-001 - Persist approved specifications

- Status: complete
- Dependencies: none
- Outputs: product, design, technical, content, acceptance, implementation plan, and backlog
  documentation.
- Validation: every approved decision is represented without contradiction.

### T-002 - Record architecture decisions

- Status: complete
- Dependencies: T-001
- Outputs: ADRs for Next.js, static export, hexagonal architecture, typed content, CSS Modules,
  React Flow, server-first rendering, and trunk-based development.

### T-003 - Add README and repository agreements

- Status: complete
- Dependencies: T-001
- Outputs: README.md and AGENTS.md.

### T-004 - Initialize Next.js

- Status: complete
- Dependencies: T-002, T-003
- Validation: development and production build scripts run.

### T-005 - Configure quality and static export

- Status: complete
- Dependencies: T-004
- Validation: format, lint, stylelint, typecheck, and build pass; out/ is generated.
- Acceptance: AC-TECH-01 through AC-TECH-04, AC-TECH-08.

## Epic 1 - Architecture and content

### T-006 - Implement domain model

- Status: complete
- Dependencies: T-005

### T-007 - Implement content port and adapter

- Status: complete
- Dependencies: T-006
- Acceptance: AC-WORK, AC-CASE, AC-TECH-04.

### T-008 - Implement use cases and composition

- Status: complete
- Dependencies: T-007
- Acceptance: AC-TECH-05, AC-TECH-06.

## Epic 2 - Visual direction

### T-009 - Implement design tokens and global styles

- Status: complete
- Dependencies: T-005
- Acceptance: AC-VIS-01 through AC-VIS-08.

### T-010 - Build interface primitives and app shell

- Status: complete
- Dependencies: T-009

### T-011 - Visual direction checkpoint

- Status: complete
- Dependencies: T-010
- Type: user review gate

## Epic 3 - Home

### T-012 - Implement Hero and Selected Work

- Status: complete
- Dependencies: T-008, T-011
- Acceptance: AC-HERO, AC-WORK.

### T-013 - Implement Experience and Education

- Status: complete
- Dependencies: T-012

### T-014 - Implement Engineering Approach

- Status: complete
- Dependencies: T-012

### T-015 - Implement Contact and resume selector

- Status: complete
- Dependencies: T-012
- Acceptance: AC-LINK.

## Epic 4 - Diagrams

### T-016 - Build the diagram engine

- Status: complete
- Dependencies: T-007, T-010
- Acceptance: AC-DIA-01 through AC-DIA-08.

### T-017 - Define six architecture diagrams

- Status: complete
- Dependencies: T-016
- Acceptance: AC-DIA-09, AC-DIA-10.

### T-018 - Integrate representative architecture

- Status: complete
- Dependencies: T-013, T-016, T-017

## Epic 5 - Case studies

### T-019 - Create static case routes and shared template

- Status: complete
- Dependencies: T-008, T-010
- Acceptance: AC-IA-02, AC-IA-03, AC-IA-06, AC-IA-07.

### T-020 - Implement NexusMed and NocNoc

- Status: complete
- Dependencies: T-017, T-019

### T-021 - Implement Pickit, Yamaha, and Sura GPASS

- Status: complete
- Dependencies: T-017, T-019
- Acceptance: AC-CASE-01 through AC-CASE-12.

## Epic 6 - Assets and SEO

### T-022 - Add both resumes

- Status: complete
- Dependencies: T-015

### T-023 - Add metadata and social assets

- Status: complete
- Dependencies: T-019
- Acceptance: AC-SEO.

## Epic 7 - Validation

### T-024 - Complete unit and component tests

- Status: complete
- Dependencies: T-018, T-021, T-022
- Acceptance: AC-TEST-01, AC-TEST-02.

### T-025 - Add end-to-end and accessibility checks

- Status: complete
- Dependencies: T-023, T-024
- Acceptance: AC-RESP, AC-A11Y, AC-TEST-03 through AC-TEST-09.

### T-026 - Audit the release candidate

- Status: in-progress
- Dependencies: T-025
- Type: user review gate

## Epic 8 - Automation and release

### T-027 - Configure local hooks and GitHub Actions

- Status: complete
- Dependencies: T-025
- Acceptance: AC-CI-01 through AC-CI-06.

### T-028 - Create the remote and enable GitHub Pages

- Status: blocked
- Dependencies: T-027
- Blocker: publication requires explicit authorization; the freelance remote is configured but has
  not been used.

### T-029 - Publish version 1

- Status: pending
- Dependencies: T-026, T-028
- Gate: explicit authorization for commit and push.
- Acceptance: AC-CI-07 and Definition of Done.
