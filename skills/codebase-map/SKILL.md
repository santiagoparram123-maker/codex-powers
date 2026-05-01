---
name: codebase-map
description: Use this skill when Codex needs to create a fast but useful map of a repository's architecture, important folders, entry points, data flow, key components, conventions, and extension points before larger work or handoff.
---

# Codebase Map

## Purpose

Crear un mapa operativo del repositorio para orientar cambios, revisiones, onboarding o handoff.

## When to use

- Antes de cambios grandes o transversales.
- Para explicar arquitectura a otro agente o desarrollador.
- Cuando un repo tiene múltiples apps, paquetes o servicios.

## When not to use

- Para resolver un bug puntual ya localizado.
- Para documentación pública final; usa `docs-writer`.
- Para leer todo el repo sin hipótesis.

## Procedure

1. Enumera estructura raíz y separa apps, paquetes, libs, infra y docs.
2. Identifica puntos de entrada: server, app, CLI, router, workers, tests.
3. Mapea flujo de datos: entrada, validación, estado, persistencia, salida.
4. Ubica componentes clave y responsabilidades.
5. Detecta convenciones de importación, testing, configuración, estilos y errores.
6. Identifica límites del sistema: APIs externas, base de datos, auth, jobs, deploy.
7. Señala zonas de alto riesgo o deuda visible.
8. Produce un mapa breve con rutas concretas.

## Output checklist

- Arquitectura resumida.
- Carpetas importantes con propósito.
- Entrypoints y flujos principales.
- Convenciones y patrones locales.
- Riesgos o zonas sensibles.
- Recomendaciones para modificar el sistema.

## Common mistakes

- Confundir estructura de carpetas con arquitectura real.
- No seguir el flujo desde entrada hasta salida.
- Ignorar tests como documentación viva.
- Crear un mapa tan largo que nadie pueda usarlo.

## Example invocation

"Usa `codebase-map` para crear un mapa rápido antes de separar el módulo de billing."

## Related skills

- `project-intake` para onboarding inicial.
- `implementation-planner` para convertir el mapa en plan.
- `docs-writer` para convertir hallazgos en documentación mantenible.

