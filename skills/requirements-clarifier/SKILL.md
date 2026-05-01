---
name: requirements-clarifier
description: Use this skill when a user request is vague, incomplete, risky, or broad and Codex needs to turn it into clear requirements, assumptions, minimal questions, scope, non-scope, acceptance criteria, and verification expectations before implementation.
---

# Requirements Clarifier

## Purpose

Convertir una petición ambigua en requisitos claros y verificables sin bloquear innecesariamente el avance.

## When to use

- Cuando faltan criterios de aceptación.
- Cuando hay varias interpretaciones razonables.
- Cuando la tarea afecta UX, datos, seguridad, pagos, permisos o producción.
- Cuando el usuario pide "define alcance", "aterriza requisitos" o "ayúdame a especificar".

## When not to use

- Para bugs reproducibles con resultado esperado obvio.
- Para cambios pequeños con alcance explícito.
- Para reemplazar decisiones que pueden inferirse del código de forma segura.

## Procedure

1. Resume la petición en una frase concreta.
2. Extrae requisitos funcionales observables.
3. Declara supuestos razonables y marca los que sean riesgosos.
4. Define alcance y no-alcance.
5. Formula solo las preguntas mínimas que bloquean una implementación responsable.
6. Propón criterios de aceptación en formato verificable.
7. Define señales de verificación: tests, build, flujo manual, captura, logs o métricas.
8. Si no hay bloqueo crítico, procede con supuestos explícitos y encadena `implementation-planner`.

## Output checklist

- Requisitos funcionales claros.
- Supuestos explícitos.
- Preguntas mínimas, no una entrevista larga.
- Alcance y no-alcance.
- Criterios de aceptación verificables.
- Recomendación de siguiente fase.

## Common mistakes

- Preguntar cosas que el repo puede responder.
- Convertir una tarea simple en un documento excesivo.
- Omitir no-alcance y permitir crecimiento accidental.
- Aceptar palabras ambiguas como "mejor", "bonito" o "rápido" sin traducirlas a señales verificables.

## Example invocation

"Usa `requirements-clarifier`: el cliente pidió 'mejorar el dashboard' y necesitamos convertirlo en alcance implementable."

## Related skills

- `project-intake` para entender contexto antes de aclarar.
- `implementation-planner` para convertir requisitos en pasos.
- `client-demo-builder` cuando los requisitos son para una demo comercial.

