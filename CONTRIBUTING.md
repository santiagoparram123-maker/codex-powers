# Contributing

Thanks for improving Codex Powers. This repo values practical skills, clear docs, and lightweight automation.

## What Belongs Here

- Original Codex skill workflows.
- Small command prompts that help Codex perform repeatable work.
- Validation scripts and tests that keep the framework healthy.
- Documentation that helps people install, author, and use skills.

## Skill Guidelines

Each skill should include:

- `SKILL.md`
- `examples/`
- `checklists/`
- `templates/`

Keep `SKILL.md` concise. Put reusable examples, checklists, and templates in the matching folders instead of making the main instruction file too long.

## Pull Request Checklist

Before opening a PR:

```bash
npm run validate:skills
npm run build:index
npm test
```

Also confirm:

- No secrets, private logs, tokens, credentials, or customer data are included.
- New text is original and not copied from another project.
- New skills have clear trigger descriptions in their frontmatter.
- Documentation matches the current folder structure.

## Style

- Use clear markdown.
- Prefer direct instructions over theory.
- Avoid overengineering.
- Keep examples realistic and easy to adapt.
