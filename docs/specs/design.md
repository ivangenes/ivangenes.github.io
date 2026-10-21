# Design Specification

## Direction

The visual direction is Silver Tech Editorial: an elegant, professional, and technically credible
portfolio that combines editorial whitespace with a graphite architecture section and restrained
silver accents.

The site should communicate seniority without looking corporate-generic, gamer-styled, or overloaded
with effects.

## Experience principles

1. Employment is the primary conversion goal.
2. Recruiters must understand the profile quickly.
3. Engineering audiences must find concrete technical depth.
4. Every section must add new information.
5. Interactions must support the narrative rather than decorate it.
6. Client confidentiality must remain visible and credible.

## Information architecture

The home page follows this order:

1. Header
2. Hero
3. Selected Work
4. Representative Architecture
5. Experience
6. Spec-Driven, Agent-Assisted Engineering
7. Education
8. Contact
9. Footer

Case studies use separate routes under /work/.

## Visual system

### Color

- Primary canvas: white or warm off-white.
- Primary text: near-black.
- Dark feature surface: graphite.
- Accent: restrained silver.
- Muted text: neutral gray with accessible contrast.
- Silver is decorative or structural and must not be used for low-contrast body text.

### Typography

- Strong editorial display typography for major headings.
- Modern, highly readable sans-serif typography for body copy and interface labels.
- Fluid sizing across breakpoints.
- Comfortable line length for long-form case studies.
- Technical metadata uses compact labels without imitating terminal interfaces.

### Layout

- Generous whitespace.
- Clear grid and alignment.
- Large project cards with limited card copy.
- Alternation between editorial white sections and one prominent graphite architecture block.
- Narrower reading column inside case-study prose.
- No dark-mode toggle in version 1.

## Header

- Ivan Genes wordmark or text identity.
- Anchors for Work, Architecture, Experience, Engineering Approach, Education, and Contact.
- Resume selector.
- Compact accessible mobile menu.
- Sticky behavior is allowed only if it does not reduce reading space or create layout instability.

## Hero

- Typographic composition is the primary visual.
- No photograph is required for version 1.
- The layout must remain complete without an image.
- The main actions are View selected work and Download resume.
- Location and Remote status are visible but secondary.

## Selected Work

- Five large cards in the approved order.
- Each card includes industry, description, role, and primary stack.
- The complete card can navigate to the case study.
- Hover, focus, and touch states communicate the same affordance.
- Client logos and private screenshots are not used.

## Architecture

- Graphite or near-black full-width section.
- Interactive diagram is the primary visual.
- Diagram nodes use restrained silver outlines and high-contrast labels.
- Controls: zoom out, zoom in, fit, and fullscreen.
- Selecting a node reveals a concise explanation.
- A semantic textual alternative communicates the same essential information.

## Experience and education

- Compact editorial timeline rather than a duplicate resume.
- W3 IT Solutions contains selected client engagements.
- Tech Lead is shown as prior experience.
- Education presents both completed degrees.

## Engineering approach

- The process is visualized as a clear sequence.
- Markdown-based skills are a transversal layer rather than a separate step.
- The section must show human review and validation, not autonomous unreviewed delivery.

## Contact

- Email is the primary action.
- LinkedIn and GitHub are alternatives.
- Selected freelance collaborations are secondary.
- No contact form or phone number.

## Case studies

Each case study contains:

1. Header and project metadata
2. Overview
3. The challenge
4. The solution
5. My contribution
6. Interactive architecture
7. Key engineering decisions
8. Technology
9. Engineering outcome
10. Confidentiality or ownership note

Cases support previous/next navigation and a return to Selected Work.

## Responsive behavior

- Required review widths: 320, 768, 1024, and 1440 CSS pixels.
- No horizontal document scrolling.
- Cards become a single readable column on narrow screens.
- Diagram controls remain reachable by touch.
- Diagram labels stay legible; the semantic fallback remains available.
- The layout remains usable at 200 percent browser zoom.

## Motion

- Motion is subtle and short.
- Content is never delayed for animation.
- Reduced-motion preferences disable non-essential movement.
- No continuous decorative motion.

## Accessibility

- Visible keyboard focus.
- Logical focus order.
- Skip link.
- One h1 per page.
- Semantic headings and landmarks.
- Minimum contrast of 4.5:1 for normal text and 3:1 for large text and controls.
- Controls have accessible names.
- Information never depends on color alone.
- Fullscreen restores focus when closed.

## Visual checkpoints

1. Header, hero, one project card, graphite block, and footer.
2. Complete home.
3. Five case studies and six diagrams.
4. Responsive and accessibility release candidate.
