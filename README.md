# Codex Powers

**Reusable skills and operating rules that help OpenAI Codex work like a disciplined software-development agent.**

Codex Powers is an open-source skill framework for teams and solo builders who use Codex to ship software. It packages practical workflows for project intake, requirements clarification, planning, test-driven implementation, bug investigation, refactoring, documentation, code review, demos, deployment readiness, and clean commits.

Use it when you want Codex to do more than produce code: inspect the project first, choose the right workflow, make small verified changes, explain tradeoffs, and leave behind a clear handoff.

Repository: https://github.com/santiagoparram123-maker/codex-powers

## What You Get

- A `CODEX.md` operating guide for safer day-to-day agent behavior.
- A `skills/` library with focused workflows Codex can load when relevant.
- Reusable command prompts for common project phases.
- Validation scripts that catch missing skill files before release.
- Documentation for installing, authoring, extending, and troubleshooting skills.
- GitHub templates and CI for open-source maintenance.

## Why Codex Needs Skills

Codex is most useful when it has context-specific procedures instead of one giant generic prompt. Skills give Codex a small, reusable playbook for each kind of work.

With Codex Powers, Codex is guided to:

- Inspect the repository before making claims or edits.
- Ask clarifying questions only when the answer cannot be found locally.
- Plan small, reviewable changes.
- Use TDD where it adds practical confidence.
- Review security-sensitive, UI, copy, and deployment changes before handoff.
- Report verification results and remaining risks clearly.

## Installation

### Codex CLI

Clone the repository:

```bash
git clone https://github.com/santiagoparram123-maker/codex-powers.git
cd codex-powers
npm test
```

Install the skills into your Codex skills directory:

```bash
mkdir -p ~/.codex/skills
cp -R skills/* ~/.codex/skills/
```

Then copy or reference the operating instructions:

```bash
cp CODEX.md ~/.codex/CODEX.md
```

Restart Codex so it can discover the skill frontmatter.

Windows PowerShell users can use:

```powershell
New-Item -ItemType Directory -Force -Path $HOME\.codex\skills
Copy-Item -Recurse -Force .\skills\* $HOME\.codex\skills\
Copy-Item -Force .\CODEX.md $HOME\.codex\CODEX.md
```

### Codex App

1. Clone or download this repository.
2. Add it as a local plugin or skill source in the Codex App.
3. Use `.codex-plugin/manifest.json` when plugin manifests are supported.
4. Point instructions at `CODEX.md`.
5. Point the skill root at `skills/`.
6. Reload or restart Codex.

## Quick Start

Inside a software project, ask Codex:

```text
Use Codex Powers. Inspect this project, choose the relevant skill, create a short plan, implement the smallest safe change, run available checks, and summarize what changed.
```

For a review:

```text
Use Codex Powers to review my current diff. Findings first, ordered by severity, with file references and test gaps.
```

For release prep:

```text
Use Codex Powers to prepare this project for launch. Check skills, docs, security, tests, and delivery risks.
```

## Example Workflow

1. **Brainstorm** with `project-intake` to understand the product, audience, constraints, and success criteria.
2. **Write spec** with `requirements-clarifier` to turn a vague request into scope, assumptions, and acceptance criteria.
3. **Create plan** with `implementation-planner` before editing files.
4. **Implement with tests** using `tdd-implementer` when behavior can be verified.
5. **Review security** with `code-reviewer` or a security-focused skill before shipping sensitive flows.
6. **Improve UX** with landing, demo, or UI review workflows when the change affects users.
7. **Polish copy** with landing or delivery guidance for clearer business value.
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

See `docs/skill-index.md` for the generated list of included skills.

## Included Skills

The current library includes workflows for:

- Project intake and repository mapping.
- Requirements clarification and implementation planning.
- TDD implementation and bug investigation.
- Safe refactoring and code review.
- Documentation and deployment readiness.
- Landing pages, client demos, and AI agency delivery.
- Clean commit preparation.

## Folder Structure

```text
codex-powers/
  CODEX.md                  Main operating instructions for Codex
  AGENTS.md                 Repository-level agent guidance
  skills/                   Reusable Codex skill folders
  commands/                 Copyable command prompts for common workflows
  docs/                     Installation, methodology, authoring, examples
  scripts/                  Validation and index generation scripts
  tests/                    Node test suite for repository tooling
  .codex/                   Example Codex configuration
  .codex-plugin/            Local plugin manifest and install notes
  .github/                  CI, issue templates, PR template
```

Each skill follows this shape:

```text
skills/example-skill/
  SKILL.md
  examples/
  checklists/
  templates/
```

## Maintenance Commands

Run these before publishing changes:

```bash
npm run validate:skills
npm run build:index
npm test
```

On Windows PowerShell, if script execution blocks `npm`, use:

```powershell
npm.cmd run validate:skills
npm.cmd run build:index
npm.cmd test
```

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

Contributions should make Codex more reliable, more practical, or easier to use.

Before opening a pull request:

1. Keep all skill text original, concise, and actionable.
2. Add examples, checklists, or templates when they make a skill easier to apply.
3. Run `npm run validate:skills`.
4. Run `npm run build:index`.
5. Run `npm test`.

See `CONTRIBUTING.md` for the full guide.

## License

MIT. See `LICENSE`.
