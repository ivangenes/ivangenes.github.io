# ADR 0008 - Trunk-Based Development

## Status

Accepted

## Context

The repository is a personal project with a single maintainer and deployment should happen
automatically from the primary branch.

## Decision

Use main as the only long-lived branch. A push to main validates and deploys without requiring a
pull request.

## Consequences

- Local checks and CI are release gates.
- Small coherent commits are preferred.
- Failed releases are fixed with new commits or reverted.
- Commit, push, and publication still require explicit user authorization during assisted
  development.
