---
name: code-reviewer
description: Use this skill when Codex needs to review code changes before finalizing or as a requested review, focusing on bugs, regressions, edge cases, security, performance, readability, consistency, type errors, missing tests, and UX issues.
---

# Code Reviewer

## Purpose

Revisar cambios con criterio de producción, priorizando problemas reales sobre preferencias cosméticas.

## When to use

- Antes de finalizar una implementación.
- Cuando el usuario pide review, audit, revisión de PR o validación de diff.
- Después de refactors, fixes de bugs o cambios de UX.

## When not to use

- Para reescribir código sin hallazgos concretos.
- Para imponer estilo personal contra convenciones del repo.
- Como sustituto de tests o build.

## Procedure

1. Revisa el diff y archivos relacionados, no solo los archivos modificados.
2. Busca regresiones de comportamiento, edge cases y contratos rotos.
3. Revisa seguridad: input, auth, permisos, secretos, inyección, exposición de datos.
4. Revisa performance y concurrencia cuando aplique.
5. Evalúa legibilidad, consistencia con patrones locales y tipos.
6. Verifica tests: cobertura del cambio, casos negativos y fixtures realistas.
7. Para UI, revisa responsive, accesibilidad, estados vacíos, loading y errores.
8. Reporta hallazgos por severidad con ruta y línea cuando sea posible.
9. Si no hay hallazgos, dilo claramente y menciona riesgos residuales.

## Output checklist

- Hallazgos ordenados por severidad.
- Referencias a archivos y líneas.
- Riesgos de tests faltantes.
- Preguntas abiertas separadas de bugs.
- Resumen breve opcional.

## Common mistakes

- Enfocarse en estilo y no en comportamiento.
- No revisar tests.
- Marcar preferencias como bugs.
- Omitir rutas de reproducción o impacto.

## Example invocation

"Usa `code-reviewer` para revisar el diff antes de entregar."

## Related skills

- `tdd-implementer` para cubrir hallazgos con tests.
- `deployment-checklist` para revisión preproducción.
- `git-commit-helper` después de una revisión limpia.

