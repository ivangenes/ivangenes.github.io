# Acceptance Specification

Every required criterion blocks release when it is not satisfied.

## Information architecture

- AC-IA-01: The home contains Hero, Selected Work, Architecture, Experience, Engineering Approach,
  Education, and Contact in that order.
- AC-IA-02: Static routes exist for NexusMed, NocNoc, Pickit, Yamaha, and Sura GPASS.
- AC-IA-03: Every Selected Work card navigates to its corresponding case study.
- AC-IA-04: The header navigates to every primary home section.
- AC-IA-05: Mobile navigation is keyboard accessible.
- AC-IA-06: Every case study can return to Selected Work and navigate to the previous or next case.
- AC-IA-07: Opening a case-study URL directly works on GitHub Pages.

## Hero

- AC-HERO-01: The visible primary name is Ivan Genes.
- AC-HERO-02: The primary role is Senior Software Engineer.
- AC-HERO-03: Backend Architecture, Distributed Systems, and Full-Stack Development are visible.
- AC-HERO-04: The visible location is Buenos Aires, Argentina · Remote.
- AC-HERO-05: View selected work moves focus to Selected Work.
- AC-HERO-06: Download resume offers Backend Resume and Full-Stack Resume.
- AC-HERO-07: Salary, phone, availability, and declared English level are absent.
- AC-HERO-08: The hero remains visually complete without a photograph.

## Links and resumes

- AC-LINK-01: Both definitive resumes are available as separate PDF files.
- AC-LINK-02: Download names are ivan-genes-backend-resume.pdf and ivan-genes-full-stack-resume.pdf.
- AC-LINK-03: The resume selector works with mouse, keyboard, and touch.
- AC-LINK-04: Email opens mailto:ivangenes@gmail.com.
- AC-LINK-05: LinkedIn points to https://www.linkedin.com/in/ivan-genes/.
- AC-LINK-06: GitHub points to https://github.com/ivangenes.
- AC-LINK-07: NexusMed points to https://nexusmedconnect.com/.
- AC-LINK-08: External new-tab links use noopener and noreferrer.
- AC-LINK-09: No client case links to a private repository.

## Selected Work

- AC-WORK-01: Projects appear in the order NexusMed, NocNoc, Pickit, Yamaha, and Sura GPASS.
- AC-WORK-02: Every card contains name, industry, description, role, and stack.
- AC-WORK-03: The full card is interactive without invalid nested controls.
- AC-WORK-04: Keyboard focus is visible and consistent with hover.
- AC-WORK-05: NocNoc, Pickit, Yamaha, and Sura are identified as W3 IT Solutions client engagements.
- AC-WORK-06: No unverified metrics, results, or responsibilities are presented.

## Case studies

- AC-CASE-01: Every case contains Overview, Challenge, Solution, Contribution, Architecture,
  Engineering Decisions, Technology, and Outcome.
- AC-CASE-02: Public case content matches the approved Content Specification.
- AC-CASE-03: Each case distinguishes Ivan's contribution from team and client ownership.
- AC-CASE-04: Client engagements include a confidentiality note.
- AC-CASE-05: NexusMed is identified as client-owned with private repositories.
- AC-CASE-06: NexusMed displays Live · Specialist onboarding in progress.
- AC-CASE-07: Pickit describes incremental modernization and does not claim that the monolith was
  replaced.
- AC-CASE-08: Yamaha displays Access Shell, PCP - Production Operations, Logistics, and Supplies.
- AC-CASE-09: Yamaha does not attribute food or savings-plan modules to Ivan.
- AC-CASE-10: Sura presents MongoDB only as GPASS configuration storage.
- AC-CASE-11: No case exposes internal endpoints, queue names, secrets, configurations, incidents,
  or sensitive names.
- AC-CASE-12: Version 1 uses no client logos or private screenshots.

## Diagrams

- AC-DIA-01: The representative and case diagrams use React Flow.
- AC-DIA-02: Diagrams provide zoom out, zoom in, fit, and fullscreen.
- AC-DIA-03: Diagrams work with mouse, touch, and keyboard.
- AC-DIA-04: Nodes are focusable and have accessible names.
- AC-DIA-05: Selecting a node displays a concise explanation.
- AC-DIA-06: A semantic text alternative communicates the same essential information.
- AC-DIA-07: Escape closes fullscreen and restores focus.
- AC-DIA-08: Labels remain readable on mobile.
- AC-DIA-09: Diagrams are explicitly identified as simplified representations.
- AC-DIA-10: No diagram claims to reproduce a client's complete architecture.
- AC-DIA-11: The home diagram presents a real, simplified marketplace integration architecture from
  Ivan's work and explains every component in plain language before requiring interaction.

## Visual design

- AC-VIS-01: The interface follows the approved Silver Tech Editorial direction.
- AC-VIS-02: White or off-white dominates editorial sections.
- AC-VIS-03: Black or graphite is used for text and the architecture block.
- AC-VIS-04: Silver is an accent and never reduces legibility.
- AC-VIS-05: Version 1 has no dark mode.
- AC-VIS-06: Headings, metadata, body text, and actions have clear hierarchy.
- AC-VIS-07: Animations are subtle and do not delay content.
- AC-VIS-08: prefers-reduced-motion reduces non-essential movement.
- AC-VIS-09: Decorative elements support the professional narrative.

## Responsive behavior

Required review widths are 320, 768, 1024, and 1440 CSS pixels.

- AC-RESP-01: No route has horizontal document scrolling.
- AC-RESP-02: Text does not clip, overlap, or leave the viewport.
- AC-RESP-03: Touch controls have a sufficient target area.
- AC-RESP-04: Cards and diagrams preserve hierarchy on small screens.
- AC-RESP-05: The site remains usable at 200 percent browser zoom.
- AC-RESP-06: Resume selector, mobile menu, and fullscreen work with touch.

## Accessibility

- AC-A11Y-01: Every page has one h1 and a valid heading hierarchy.
- AC-A11Y-02: A Skip to content link is available.
- AC-A11Y-03: All functionality is keyboard accessible.
- AC-A11Y-04: Focus is always visible.
- AC-A11Y-05: Focus order matches visual and semantic order.
- AC-A11Y-06: Contrast is at least 4.5:1 for normal text and 3:1 for large text and controls.
- AC-A11Y-07: Icon-only controls have accessible names.
- AC-A11Y-08: Information does not depend on color alone.
- AC-A11Y-09: Primary routes have no serious or critical axe violations.
- AC-A11Y-10: Decorative elements are hidden from assistive technology.

## SEO

- AC-SEO-01: Every route has a unique title and specific description.
- AC-SEO-02: The home title is Ivan Genes - Senior Software Engineer.
- AC-SEO-03: Open Graph and Twitter metadata are generated.
- AC-SEO-04: A Silver Tech Editorial social image is provided.
- AC-SEO-05: sitemap.xml and robots.txt are generated.
- AC-SEO-06: Canonical URLs use https://ivangenes.github.io/.
- AC-SEO-07: Primary content is present in generated HTML without a runtime API request.

## Technical quality

- AC-TECH-01: Next.js uses App Router, strict TypeScript, and static export.
- AC-TECH-02: The build produces the out/ directory.
- AC-TECH-03: There is no runtime backend, CMS, or data dependency.
- AC-TECH-04: Content uses typed TypeScript structures.
- AC-TECH-05: Dependency direction follows the defined hexagonal architecture.
- AC-TECH-06: Explicit any types require documented justification.
- AC-TECH-07: The application produces no project-owned browser console errors or warnings.
- AC-TECH-08: Internal URLs are compatible with GitHub Pages and trailingSlash.
- AC-TECH-09: The public repository contains no secrets, credentials, or private information.

## Tests

- AC-TEST-01: Unit tests cover content and navigation rules.
- AC-TEST-02: Component tests cover cards, navigation, resume selection, and diagram controls.
- AC-TEST-03: Playwright visits the home and all five cases.
- AC-TEST-04: Playwright verifies desktop and mobile navigation.
- AC-TEST-05: Playwright verifies both resume links.
- AC-TEST-06: Playwright verifies email, LinkedIn, GitHub, and NexusMed href values without
  requiring external availability.
- AC-TEST-07: Axe runs on the home and representative cases.
- AC-TEST-08: Playwright runs on Chromium, Firefox, and WebKit.
- AC-TEST-09: Tests run against the static export served from out/.

## CI/CD

- AC-CI-01: A push to main starts validation automatically.
- AC-CI-02: CI runs format check, ESLint, Stylelint, typecheck, tests, static build, Playwright, and
  axe.
- AC-CI-03: Deployment starts only after every validation passes.
- AC-CI-04: The out/ artifact is published to GitHub Pages.
- AC-CI-05: A pull request is not required for deployment.
- AC-CI-06: A failed run leaves the previous public version intact.
- AC-CI-07: The final site is available at https://ivangenes.github.io/.

## Critical scenarios

### Recruiter reviews the profile

    Given a recruiter opens the portfolio
    When the home page finishes loading
    Then the visitor sees Ivan's role, specialization, experience level and location
    And can access selected work or download either resume

### Engineering manager opens a case

    Given an engineering manager selects a project
    When the case study opens
    Then the visitor sees the challenge, solution, individual contribution,
    architecture, engineering decisions and technology
    And can distinguish Ivan's work from the client's complete system

### Visitor explores an architecture

    Given a visitor reaches an architecture diagram
    When the visitor selects a node
    Then an accessible explanation is displayed
    And the visitor can zoom, fit or enter fullscreen
    And the same essential information is available as semantic text

### Professional contact

    Given a visitor reaches the contact section
    When the visitor activates Email me
    Then the configured mail client opens with ivangenes@gmail.com
    And LinkedIn and GitHub remain available as alternatives

## Definition of Done

Release is allowed only when:

- Every required criterion is implemented.
- Public content matches the approved specification.
- Local and CI validation are green.
- Direct routes work from the static export.
- No private or proprietary information is present.
- Desktop and mobile visual review is complete.
