# Codex Powers Operating Instructions

Use these rules when working inside a project that has installed or referenced Codex Powers.

## Default Loop

1. **Inspect** the repository before making claims. Read manifests, scripts, docs, folder structure, tests, and nearby implementation files.
2. **Select** the smallest relevant skill or skill chain for the task.
3. **Clarify** only when local evidence is insufficient and a reasonable assumption would be risky.
4. **Plan** the change in practical steps before editing.
5. **Implement** the smallest safe change that satisfies the request.
6. **Verify** with the narrowest useful checks first, then broader checks when risk warrants it.
7. **Report** what changed, how it was verified, tradeoffs, and remaining risks.

## Core Rules

- Do not write code before understanding the task, the repo patterns, and the verification path.
- Do not invent files, APIs, routes, packages, scripts, environment variables, or framework conventions. Check the repo first.
- Prefer small, testable changes over broad rewrites.
- Preserve existing behavior unless the user requested a behavior change.
- Respect the project's current stack, style, naming, architecture, and dependency choices.
- Explain important tradeoffs when choosing between speed, safety, compatibility, user experience, and maintainability.
- Use TDD where practical, especially for bug fixes, core logic, shared utilities, and reusable modules.
- Do not add production dependencies, analytics, auth providers, payment providers, or tracking without approval.
- Never expose secrets, credentials, tokens, `.env` values, customer data, private logs, or local Codex state.

## Skill Selection

Use skills as focused operating procedures, not ceremony.

- Use `project-intake` or `codebase-map` for unfamiliar repositories.
- Use `requirements-clarifier` when the request is vague, broad, or risky.
- Use `implementation-planner` before multi-file or high-impact changes.
- Use `tdd-implementer` when behavior can be tested.
- Use `bug-investigator` before fixing defects.
- Use `refactor-safely` for structure changes intended to preserve behavior.
- Use `code-reviewer` for review requests or before finalizing risky diffs.
- Use `docs-writer` for README, setup, architecture, handoff, and developer documentation.
- Use `landing-page-builder`, `client-demo-builder`, or delivery skills for client-facing web work.
- Use `deployment-checklist` before launch, release, deploy, demo, or client handoff.
- Use `git-commit-helper` when preparing commits.

If multiple skills apply, chain only the ones that materially improve the outcome.

## Security Rules

- Treat all user input as untrusted.
- Validate server-side for API routes, backend actions, webhooks, uploads, payments, auth, authorization, and database writes.
- Do not rely on frontend checks for access control.
- Review CORS, CSRF, auth boundaries, file handling, rate limits, error messages, logs, and secret handling when relevant.
- Keep examples synthetic and clearly marked when they are placeholders.

## UI And Product Rules

- For UI changes, check responsive behavior, semantic HTML, labels, focus states, contrast, empty states, loading states, and useful error states.
- For marketing pages, make the copy specific to the audience, offer, pain point, outcome, and call to action.
- Do not invent testimonials, logos, metrics, case studies, or customer claims.
- Prefer clear user workflows over decorative UI.

## Implementation Rules

- Start by reading the files that will likely be changed.
- Make focused edits and avoid unrelated refactors.
- Keep public APIs, data contracts, routes, and configuration stable unless changing them is part of the request.
- Add or update tests when risk, logic, or regression potential justifies it.
- Use existing helpers and local patterns before introducing new abstractions.
- Leave generated or placeholder content clearly labeled.

## Verification Rules

Before finishing, run the most relevant available checks:

- Unit or integration tests for behavior changes.
- Typecheck or lint for typed projects.
- Build for frontend, packaging, or deployment changes.
- Script-level checks for repository tooling.
- Manual UI checks for responsive layout, forms, keyboard navigation, and console errors when possible.

If a check cannot run, state the exact reason and provide practical manual verification steps.

## Response Rules

- Lead with the result.
- Include changed files when useful.
- Include verification commands and outcomes.
- Mention remaining risks or skipped checks.
- Keep handoff language direct and actionable.
