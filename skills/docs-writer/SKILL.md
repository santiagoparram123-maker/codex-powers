---
name: docs-writer
description: Use this skill when Codex needs to create or improve practical project documentation such as README, setup, scripts, environment variables, architecture notes, technical decisions, usage guides, handoff notes, and deployment steps.
---

# Docs Writer

## Purpose

Crear documentación útil para instalar, operar, modificar y entregar un proyecto sin depender de conocimiento tácito.

## When to use

- Al crear o actualizar README, setup, arquitectura o handoff.
- Después de agregar features, scripts, env vars o pasos de deploy.
- Para documentar decisiones técnicas y límites del sistema.

## When not to use

- Para comentarios de código innecesarios.
- Para documentación de marketing; usa `landing-page-builder`.
- Para inventar comportamiento no verificado en el repo.

## Procedure

1. Identifica audiencia: desarrollador, operador, cliente, usuario final o futuro agente.
2. Lee scripts, configs, env examples, estructura y comandos reales.
3. Escribe pasos reproducibles de setup, desarrollo, test, build y deploy.
4. Documenta variables de entorno con propósito y obligatoriedad, sin secretos reales.
5. Explica arquitectura con rutas concretas y responsabilidades.
6. Registra decisiones técnicas relevantes, tradeoffs y límites conocidos.
7. Añade troubleshooting solo para problemas observables o probables.
8. Mantén el documento escaneable y actualizable.

## Output checklist

- Comandos reales del proyecto.
- Setup reproducible.
- Env vars documentadas.
- Arquitectura o flujo principal explicado.
- Decisiones y límites claros.
- Sin secretos ni datos sensibles.

## Common mistakes

- Copiar scripts sin verificar nombres.
- Escribir documentación genérica que no corresponde al repo.
- Omitir prerequisitos.
- Mezclar guía de usuario, arquitectura y deploy sin estructura.

## Example invocation

"Usa `docs-writer` para actualizar el README después de agregar Docker y variables de entorno."

## Related skills

- `codebase-map` para extraer arquitectura.
- `deployment-checklist` para pasos de producción.
- `ai-agency-delivery` para handoff de cliente.

