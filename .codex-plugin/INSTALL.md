# Installing the Codex Powers Plugin

This directory contains a simple local plugin manifest for Codex-compatible tooling.

## Local Install

1. Clone or download this repository.
2. Add `.codex-plugin/manifest.json` as a local plugin source in Codex.
3. Confirm the entry instructions point to `CODEX.md`.
4. Confirm the skill root points to `skills/`.
5. Reload Codex.

## Manual Skill Install

If plugin loading is not available, copy the skill folders directly:

```bash
mkdir -p ~/.codex/skills
cp -R skills/* ~/.codex/skills/
```

Then reference `CODEX.md` in your project or Codex configuration.
