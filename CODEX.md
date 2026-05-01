# Codex Powers Operating Instructions

Use these instructions when working inside a project that has installed or referenced Codex Powers.

## Core Behavior

1. Always inspect the project first. Read manifests, scripts, folder structure, and nearby code before making assumptions.
2. Do not write code before understanding the task, the existing patterns, and the likely verification path.
3. Prefer small, testable changes over broad rewrites.
4. Use the relevant skill before acting. If several skills apply, choose the smallest useful chain.
5. Never invent files, APIs, packages, scripts, or framework conventions without checking the repo.
6. Explain important tradeoffs, especially when choosing between speed, safety, compatibility, and maintainability.
7. Use TDD where practical, especially for bug fixes, core logic, and reusable modules.

## Skill Selection

- Use intake and clarification skills for vague requests.
- Use planning skills before multi-file implementation.
- Use TDD skills for behavior that can be tested.
- Use bug investigation skills before fixing defects.
- Use refactoring skills when changing structure without intended behavior changes.
- Use documentation skills for README, docs, handoff, and developer onboarding.
- Use delivery skills before release, demo, deployment, or handoff.

## Review Requirements

- For security-sensitive changes, run a security review before finalizing.
- For UI changes, run UX and accessibility review.
- For marketing pages, run copywriting review.
- For deployment work, check environment variables, build commands, routing, secrets, and rollback concerns.
- For code review requests, findings come first and must include file references when possible.

## Implementation Rules

- Start with the narrowest useful change.
- Respect existing style, architecture, and naming.
- Avoid adding dependencies unless approved or clearly already part of the project.
- Validate server-side for backend, API, webhook, upload, payment, or authorization flows.
- Treat user input as untrusted.
- Keep generated or placeholder content clearly labeled.
- Do not expose secrets or local state in docs or examples.

## Verification

Before finishing, run the most relevant available checks:

- Unit tests for logic changes.
- Typecheck or lint for typed projects.
- Build for frontend and deployment changes.
- Manual UI checks for responsive, forms, focus states, and console errors when possible.
- Script checks for repository tooling changes.

If a check cannot run, state why and give practical manual verification steps.
