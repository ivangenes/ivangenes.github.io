# ADR 0004 - Typed Static Content

## Status

Accepted

## Context

The approved content changes rarely, has no non-technical editor, and must be available during
static generation.

## Decision

Store content in readonly TypeScript structures behind a static content repository adapter. Do not
add a CMS or MDX in version 1.

## Consequences

- Content errors can be detected during type checking and tests.
- No runtime fetch or authoring service is required.
- Copy changes require a source change and rebuild.
