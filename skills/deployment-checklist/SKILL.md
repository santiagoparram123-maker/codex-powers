---
name: deployment-checklist
description: Use this skill when Codex needs to prepare a project for production or sharing by checking build, environment variables, runtime errors, SEO basics, performance, accessibility, responsive behavior, basic security, and deploy steps.
---

# Deployment Checklist

## Purpose

Preparar un proyecto para producción, staging o entrega externa con una revisión práctica de estabilidad y operación.

## When to use

- Antes de publicar, desplegar o entregar a cliente.
- Después de cambios frontend, backend, env vars, auth, build o configuración.
- Cuando el usuario pide "déjalo listo para producción" o "revísalo antes de deploy".

## When not to use

- Para diseñar infraestructura compleja desde cero.
- Para sustituir auditorías de seguridad formales.
- Para proyectos que aún están en fase de exploración sin intención de compartir.

## Procedure

1. Ejecuta build o comando equivalente.
2. Verifica env vars requeridas, defaults seguros y ausencia de secretos commiteados.
3. Revisa errores de runtime, logs, consola del navegador o health checks.
4. Comprueba responsive en móvil y desktop.
5. Revisa accesibilidad básica: labels, foco, contraste, semántica y navegación teclado.
6. Revisa SEO básico si es web pública: title, description, metadata social, headings y robots.
7. Evalúa performance básica: assets pesados, lazy loading, bundle, cache y fuentes.
8. Revisa seguridad básica: auth, permisos, CORS, headers, input validation, rate limits cuando aplique.
9. Documenta pasos de deploy, rollback y verificación postdeploy.

## Output checklist

- Build ejecutado o razón de omisión.
- Env vars documentadas.
- Errores de runtime revisados.
- Responsive y accesibilidad básica revisados.
- SEO y performance considerados.
- Seguridad básica considerada.
- Pasos de deploy y postdeploy claros.

## Common mistakes

- Confiar en que "funciona local" equivale a producción.
- Omitir variables de entorno.
- Publicar datos mock o secretos.
- No probar la ruta principal después del build.

## Example invocation

"Usa `deployment-checklist` para preparar esta landing y demo antes de subirlas a Vercel."

## Related skills

- `code-reviewer` para revisar cambios antes de deploy.
- `docs-writer` para documentar despliegue.
- `git-commit-helper` para cerrar cambios listos.

