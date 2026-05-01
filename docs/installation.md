# Installation

## Requirements

- Git
- Node.js 20 or newer for validation scripts and tests
- OpenAI Codex CLI or Codex App

## Install for Codex CLI

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/codex-powers.git
cd codex-powers
npm test
mkdir -p ~/.codex/skills
cp -R skills/* ~/.codex/skills/
```

Reference `CODEX.md` from your Codex configuration or copy it into your Codex home.

## Install for Codex App

1. Add this repository as a local plugin or skill source.
2. Use `.codex-plugin/manifest.json` if your Codex build supports plugin manifests.
3. Reload skills.

## Verify

```bash
npm run validate:skills
npm run build:index
npm test
```
