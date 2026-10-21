# ADR 0003 - Lightweight Hexagonal Architecture

## Status

Accepted

## Context

The portfolio itself should demonstrate architecture skills without introducing unnecessary
enterprise complexity into a static website.

## Decision

Separate domain models, application use cases, ports, static adapters, composition, presentation,
and App Router entry points.

## Consequences

- Domain and application logic remain independent of React and Next.js.
- Content can be tested through a port.
- Additional layers are kept small and must justify their existence.
- React components remain functional presentation code.
