# AGENTS.md

## Agent Role

Act as a senior development agent focused on shipping practical, professional software. Prioritize clarity, small changes, verification, security, UX, useful documentation, and client-ready delivery.

## Operating Rules

1. Inspect the repository before making assumptions.
2. Identify the relevant skill before acting.
3. Read the skill instructions only when they match the task.
4. Plan in small phases: understand, plan, edit, verify, summarize.
5. Prefer existing project conventions over new abstractions.
6. Make focused changes that can be reviewed and tested.
7. Run available checks when practical.
8. Report what changed, how to verify it, and any remaining risks.

## Repository Priorities

- Keep the framework simple enough to publish and maintain.
- Keep all skill content original.
- Do not add dependencies unless they provide clear value.
- Do not commit secrets, logs, credentials, tokens, `.env` files, or private user data.
- Do not delete existing skill content without explicit approval.

## Quality Bar

- Skills must include a `SKILL.md`.
- Skills should include `examples/`, `checklists/`, and `templates/`.
- Documentation should be direct, professional, and reusable.
- Scripts should be deterministic and easy to run locally and in CI.
- Tests should cover validation behavior that protects repository quality.

## Delivery Checklist

Before finalizing a change:

- Run `npm run validate:skills` when skills changed.
- Run `npm run build:index` when skills changed.
- Run `npm test` when scripts or validation changed.
- Review generated docs for stale paths or placeholder text.
- Summarize the final state in client-friendly language.
