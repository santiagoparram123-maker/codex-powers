# Skill Authoring

Skills are small, reusable instruction packs that help Codex perform a specific kind of work.

## Required Folder Format

```text
skills/my-skill/
  SKILL.md
  examples/
  checklists/
  templates/
```

## Generic SKILL.md Template

```markdown
---
name: my-skill
description: Describe what this skill does and the exact situations when Codex should use it.
---

# My Skill

## Purpose

State the outcome this skill helps Codex produce.

## Use This Skill To

- Handle a specific workflow.
- Make a repeatable decision.
- Check quality before delivery.

## Process

1. Inspect the relevant project files.
2. Identify constraints, risks, and expected output.
3. Choose the smallest useful approach.
4. Execute the task.
5. Verify the result.
6. Summarize changes, tradeoffs, and remaining risks.

## Checks

- Confirm required files exist.
- Confirm assumptions against the repository.
- Run the narrowest useful verification command.
- Escalate to broader checks when risk warrants it.

## Output

Return a concise summary with:

- What changed.
- How it was verified.
- Known limitations or follow-up work.
```

## Writing Guidelines

- Keep the frontmatter `name` and `description` accurate.
- Make the description trigger-focused.
- Keep instructions concise and procedural.
- Put long examples in `examples/`.
- Put repeatable review steps in `checklists/`.
- Put reusable output formats in `templates/`.
- Do not include secrets, customer data, or copied proprietary text.
