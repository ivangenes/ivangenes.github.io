# ADR 0005 - CSS Modules and Design Tokens

## Status

Accepted

## Context

The visual direction is custom, editorial, and relatively compact. A utility framework or full
component library would add weight without solving a product requirement.

## Decision

Use CSS Modules for scoped styles and CSS custom properties for shared design tokens. Keep a small
global stylesheet for reset and document defaults.

## Consequences

- Styling remains explicit and local to components.
- Shared color, spacing, typography, and motion rules are centralized.
- Stylelint is required to keep conventions consistent.
