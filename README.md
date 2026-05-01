# Codex Powers

**A practical skill framework for turning OpenAI Codex into a disciplined software-development agent.**

Codex Powers is a reusable operating system for Codex: a collection of focused skills, project instructions, commands, checks, and documentation that help Codex plan before coding, ask better questions, use tests, review security, improve UX, polish copy, and ship production-ready software.

It is inspired by the idea of giving agents reusable capabilities, but the content and methodology here are original and tuned for OpenAI Codex workflows.

## Why Codex Needs Skills

Codex is strongest when it has clear operating rules and domain-specific procedures. Skills give it those procedures without stuffing every task into one giant prompt.

Use skills to:

- Keep planning, implementation, review, and delivery consistent.
- Reuse proven workflows across projects.
- Make quality checks explicit instead of optional.
- Teach Codex when to slow down, inspect the repo, ask questions, and verify.
- Package security, UX, testing, copywriting, and deployment judgment into repeatable steps.

## Installation

### Codex CLI

From the parent directory:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/codex-powers.git
cd codex-powers
npm test
```

Copy the skills into your Codex skills directory:

```bash
mkdir -p ~/.codex/skills
cp -R skills/* ~/.codex/skills/
```

Then copy or reference the project instructions:

```bash
cp CODEX.md ~/.codex/CODEX.md
```

Restart Codex so it can discover the skill frontmatter.

### Codex App

1. Open your Codex configuration or plugin area.
2. Add this repository as a local plugin or skill source.
3. Point the plugin entry instructions at `CODEX.md`.
4. Point the skill root at `skills/`.
5. Restart the app or reload skills.

The example plugin manifest lives in `.codex-plugin/manifest.json`.

## Quick Start

Use Codex Powers in an existing project by asking Codex to follow this repo's instructions:

```text
Use Codex Powers. Inspect this project, choose the relevant skill, create a short plan, implement the smallest safe change, run available checks, and summarize what changed.
```

Common commands:

```bash
npm run validate:skills
npm run build:index
npm test
```

## Example Workflow

1. **Brainstorm** with `project-intake` to understand the product, user, constraints, and success criteria.
2. **Write spec** with `requirements-clarifier` to turn vague goals into concrete acceptance criteria.
3. **Create plan** with `implementation-planner` before editing files.
4. **Implement with tests** using `tdd-implementer` when the behavior can be verified.
5. **Review security** with `code-reviewer` or a dedicated security skill before shipping sensitive flows.
6. **Improve UX** with landing, demo, or UI review skills when the work affects users.
7. **Polish copy** with client-delivery or landing-page guidance for commercial clarity.
8. **Ship** with `deployment-checklist` and `git-commit-helper`.

## Skill Categories

Codex Powers is designed to support:

- Security
- UX/UI
- Frontend
- Backend
- Testing
- Copywriting
- Product strategy
- Documentation
- Deployment

The current skill set is intentionally practical and can be extended as your delivery process matures.

## Folder Structure

```text
codex-powers/
  README.md
  CODEX.md
  AGENTS.md
  docs/
  skills/
  commands/
  scripts/
  tests/
  .codex/
  .codex-plugin/
  .github/
```

- `CODEX.md` contains the main operating instructions for Codex.
- `AGENTS.md` gives agent-level repository guidance.
- `skills/` contains reusable skill folders. Each skill has `SKILL.md` plus `examples/`, `checklists/`, and `templates/`.
- `commands/` contains reusable command prompts for common workflows.
- `docs/` explains installation, authoring, methodology, examples, and troubleshooting.
- `scripts/` contains maintenance utilities.
- `tests/` verifies the validation logic.
- `.codex/` contains optional Codex configuration examples.
- `.codex-plugin/` contains plugin metadata and install notes.
- `.github/` contains CI and contribution templates.

## Example Commands

Initialize a project:

```text
Use the init-project command from Codex Powers for this repo.
```

Create a skill:

```text
Use the create-skill command to draft a new skill for database migrations.
```

Audit a project:

```text
Use the audit-project command and report security, UX, performance, and delivery risks.
```

Review code:

```text
Use the review-code command on my current diff. Findings first, then tests and risks.
```

Ship a feature:

```text
Use the ship-feature command for this completed change.
```

## Contributing

Contributions are welcome when they make Codex more reliable, practical, or easier to use.

Before opening a pull request:

1. Keep skill instructions original, concise, and actionable.
2. Add or update examples, checklists, and templates when useful.
3. Run `npm run validate:skills`.
4. Run `npm run build:index`.
5. Run `npm test`.

See `CONTRIBUTING.md` for the full guide.

## License

MIT. See `LICENSE`.
