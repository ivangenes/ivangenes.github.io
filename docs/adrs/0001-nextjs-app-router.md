# ADR 0001 - Next.js App Router

## Status

Accepted

## Context

The portfolio must demonstrate modern React and Next.js experience while supporting statically
generated public pages.

## Decision

Use Next.js App Router with strict TypeScript and server components by default.

## Consequences

- Pages and metadata use current App Router conventions.
- Browser-only functionality must be isolated behind explicit client boundaries.
- The application can demonstrate modern Next.js without requiring a runtime server.
