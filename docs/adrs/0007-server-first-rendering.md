# ADR 0007 - Server-First Rendering

## Status

Accepted

## Context

Most portfolio content is static and should be present in generated HTML for performance,
accessibility, and SEO.

## Decision

Use server components by default. Add client components only for mobile navigation, resume
selection, diagrams, and other interactions that require browser state.

## Consequences

- The shipped browser JavaScript remains focused.
- Primary content is available without client hydration.
- Client component boundaries must accept serializable data.
