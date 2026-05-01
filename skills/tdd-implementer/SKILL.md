---
name: tdd-implementer
description: "Use this skill when Codex should implement a feature or fix with tests first when reasonable: write or update tests, observe failure, implement minimal code, refactor, and verify with targeted and broader checks."
---

# TDD Implementer

## Purpose

Implementar cambios con una señal de prueba clara antes o durante el cambio, manteniendo el alcance mínimo.

## When to use

- Para lógica de negocio, bugs reproducibles, APIs, validaciones y componentes con test harness.
- Cuando existe infraestructura de tests o puede agregarse una prueba pequeña.
- Cuando el cambio tiene riesgo de regresión.

## When not to use

- Para prototipos visuales donde una prueba automatizada no aporta suficiente valor inmediato.
- Para cambios puramente documentales.
- Cuando el proyecto no tiene tooling y agregarlo sería mayor que la tarea; en ese caso usa verificación manual explícita.

## Procedure

1. Identifica el comportamiento esperado y el lugar natural para probarlo.
2. Escribe o actualiza una prueba mínima que falle por la razón correcta.
3. Ejecuta el test específico y captura el fallo relevante.
4. Implementa el código mínimo para pasar la prueba.
5. Ejecuta el test específico de nuevo.
6. Refactoriza solo si mejora claridad sin cambiar comportamiento.
7. Ejecuta verificación más amplia proporcional al riesgo: suite, lint, typecheck o build.
8. Documenta pruebas ejecutadas y cualquier verificación omitida.

## Output checklist

- Prueba nueva o actualizada cuando fue razonable.
- Fallo inicial observado o explicado si no se pudo ejecutar.
- Implementación mínima.
- Refactor limitado y justificado.
- Verificación final ejecutada.
- Riesgos residuales informados.

## Common mistakes

- Escribir una prueba que replica la implementación.
- Saltarse el fallo inicial sin razón.
- Cambiar demasiados archivos para pasar un test.
- Refactorizar antes de tener comportamiento cubierto.

## Example invocation

"Usa `tdd-implementer` para corregir el cálculo de impuestos con una prueba que reproduzca el caso."

## Related skills

- `implementation-planner` para ordenar el trabajo.
- `bug-investigator` para reproducir antes de testear.
- `code-reviewer` para revisar antes de finalizar.
