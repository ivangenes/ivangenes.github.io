# Repository Working Agreements

## Communication

- Respond in Spanish unless public portfolio copy or repository conventions require English.
- Communicate the result first, followed by relevant technical details.
- Request confirmation before destructive, irreversible, or external operations.

## Source of truth

- Read docs/specs, docs/plans, docs/adrs, and docs/tasks before changing behavior.
- Public copy must match docs/specs/content.md.
- Acceptance criteria live in docs/specs/acceptance.md.
- Update the appropriate specification before changing an approved requirement.

## Architecture

- Keep domain code independent of React, Next.js, browser APIs, and infrastructure.
- Application use cases depend on domain models and ports.
- Adapters implement ports.
- Composition wires use cases and adapters.
- React components are functional presentation components.
- Server components are the default.
- Client components are limited to browser-dependent interactions.
- Do not introduce a CMS, backend, database, Tailwind, full UI framework, analytics, or contact form
  in version 1.

## Content and confidentiality

- Do not invent metrics, outcomes, dates, or responsibilities.
- Distinguish individual contribution from team and client ownership.
- Do not expose private repositories, client source code, internal endpoints, queue names,
  credentials, operational metrics, incidents, or proprietary configuration.
- Do not add client logos or private screenshots in version 1.
- No salary, phone number, availability, or declared English proficiency.

## Files and dependencies

- Preserve existing user changes.
- Use npm and commit package-lock.json when commits are authorized.
- Keep production dependencies minimal.
- Justify every new production dependency.
- Prefer CSS and platform APIs over animation or utility dependencies.

## Validation

After relevant changes, run:

    npm run format:check
    npm run lint
    npm run stylelint
    npm run typecheck
    npm run test
    npm run build

Run Playwright and axe checks for user-visible interaction changes once they are configured.

## Git

- main is the only long-lived branch.
- Do not commit, push, publish, or deploy without explicit user authorization.
- Before a commit, inspect git status, the full diff, and local user.name and user.email.
- Use the github-freelance SSH identity for the remote.
- Never rewrite main to repair a release; create a fix or revert.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
