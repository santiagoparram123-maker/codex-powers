# Troubleshooting

## Codex Does Not See the Skills

- Confirm the skill folders were copied into the Codex skills directory.
- Confirm each skill has `SKILL.md`.
- Restart Codex after adding skills.
- Run `npm run validate:skills`.

## Validation Fails

Read the error message from:

```bash
npm run validate:skills
```

Common causes:

- A folder in `skills/` is missing `SKILL.md`.
- A skill support directory is missing.
- A non-skill file was placed directly inside `skills/`.

## Skill Index Is Stale

Regenerate it:

```bash
npm run build:index
```

## Node Version Errors

Use Node.js 20 or newer:

```bash
node --version
```

## Plugin Loading Is Not Available

Install manually by copying `skills/*` into your Codex skills directory and referencing `CODEX.md` in your Codex instructions.
