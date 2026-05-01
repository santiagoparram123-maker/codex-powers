# Security Policy

## Supported Versions

Codex Powers is currently pre-1.0. Security fixes should target the latest main branch.

## Reporting a Vulnerability

Please do not open a public issue for sensitive security problems.

Report privately by contacting the repository owner with:

- A clear description of the issue.
- A minimal reproduction or affected file path.
- Potential impact.
- Suggested remediation if known.

## Security Scope

Security-sensitive areas include:

- Instructions that could cause Codex to expose secrets.
- Scripts that read, write, or publish files.
- Plugin metadata that affects installation or execution.
- Examples that include credentials, tokens, private URLs, or customer data.

## Project Rules

- Never commit secrets or `.env` values.
- Keep examples synthetic.
- Treat user input as untrusted.
- Prefer explicit review for auth, payments, uploads, webhooks, logs, and deployment instructions.
