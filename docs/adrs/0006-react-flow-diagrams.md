# ADR 0006 - React Flow Diagrams

## Status

Accepted

## Context

Architecture diagrams are a primary differentiator and require zoom, fit, fullscreen, selection,
pointer, keyboard, and touch interaction.

## Decision

Use React Flow for interactive rendering and provide a separate semantic textual representation for
accessibility.

## Consequences

- Diagram code runs behind a client boundary.
- Diagram models are typed and reusable across the home and case studies.
- Accessibility cannot depend on the canvas-like visual representation alone.
- React Flow should be loaded only where a diagram is rendered.
