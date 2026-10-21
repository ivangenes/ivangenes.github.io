# ADR 0002 - Static Export and GitHub Pages

## Status

Accepted

## Context

Version 1 requires free public hosting at ivangenes.github.io and has no runtime backend.

## Decision

Build with Next.js static export into out/ and deploy the artifact to GitHub Pages. Enable trailing
slashes and avoid server-only runtime features.

## Consequences

- Every route and data dependency must be known at build time.
- Direct case-study URLs must resolve to generated directory index files.
- Dynamic server handlers, runtime image optimization, and request-time data loading are
  unavailable.
