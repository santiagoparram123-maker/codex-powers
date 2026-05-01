---
name: git-commit-helper
description: Use this skill when Codex needs to prepare clean commits by reviewing git status and diff, grouping related changes, warning about files that should not be committed, and suggesting a conventional commit message.
---

# Git Commit Helper

## Purpose

Preparar commits limpios, pequeños y explicables sin incluir archivos accidentales.

## When to use

- Antes de crear un commit.
- Cuando hay varios cambios y se necesita agruparlos.
- Cuando el usuario pide mensaje de commit, revisar diff o preparar cambios.

## When not to use

- Para modificar historial sin solicitud explícita.
- Para hacer commits automáticos si el usuario no lo pidió.
- Para revertir cambios ajenos.

## Procedure

1. Revisa `git status` para identificar archivos modificados, nuevos y eliminados.
2. Revisa `git diff` y, si aplica, diff de staged.
3. Separa cambios por intención: feature, fix, docs, refactor, test, chore.
4. Señala archivos sospechosos: secretos, `.env`, logs, builds, caches, credenciales, datos privados.
5. Sugiere qué incluir en cada commit y qué dejar fuera.
6. Propón mensaje convencional: `type(scope): summary`.
7. Incluye cuerpo de commit si hay motivación, riesgo, breaking change o verificación relevante.
8. No ejecutes commit salvo que el usuario lo pida explícitamente.

## Output checklist

- Estado de git resumido.
- Cambios agrupados por intención.
- Archivos riesgosos advertidos.
- Mensaje convencional sugerido.
- Tests o verificaciones para mencionar en el commit.

## Common mistakes

- Incluir archivos generados o secretos.
- Mezclar refactor, feature y fix en un commit grande.
- Escribir mensajes vagos como "update".
- Revertir cambios de usuario para limpiar el diff.

## Example invocation

"Usa `git-commit-helper` para revisar el diff y sugerir un mensaje de commit convencional."

## Related skills

- `code-reviewer` antes de cerrar cambios.
- `deployment-checklist` si el commit prepara producción.
- `docs-writer` cuando el cambio requiere documentación.

