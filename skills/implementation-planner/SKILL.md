---
name: implementation-planner
description: Use this skill before editing code when Codex needs a practical implementation plan with small steps, likely files to change, risks, dependency checks, test/build/lint commands, execution order, and rollback-aware verification.
---

# Implementation Planner

## Purpose

Planear una tarea antes de tocar código para reducir cambios innecesarios, riesgos y ciclos de corrección.

## When to use

- Antes de implementar features, fixes o refactors con más de un archivo.
- Cuando hay incertidumbre sobre puntos de integración.
- Cuando necesitas ordenar pruebas, edición y verificación.

## When not to use

- Para respuestas conceptuales sin edición.
- Para cambios de texto triviales.
- Cuando una investigación de bug todavía no reprodujo el problema; usa primero `bug-investigator`.

## Procedure

1. Reafirma el objetivo y criterios de aceptación.
2. Identifica archivos probables a leer y modificar.
3. Revisa patrones existentes antes de proponer nuevas abstracciones.
4. Divide el trabajo en pasos pequeños con resultado verificable.
5. Señala riesgos técnicos: contratos públicos, migraciones, estado compartido, compatibilidad, UX.
6. Define comandos de verificación disponibles: tests específicos, lint, typecheck, build, flujo manual.
7. Ordena la ejecución: lectura, test inicial, cambio mínimo, verificación, revisión.
8. Indica qué no se va a tocar para controlar alcance.

## Output checklist

- Objetivo y alcance resumidos.
- Archivos probables listados.
- Pasos pequeños en orden.
- Riesgos y mitigaciones.
- Comandos de verificación.
- Criterio para terminar.

## Common mistakes

- Planear sin leer archivos clave.
- Proponer un rediseño para una tarea local.
- Omitir tests o verificación manual.
- No considerar impacto en usuarios, API o datos existentes.

## Example invocation

"Usa `implementation-planner` para planear cómo agregar búsqueda al listado de clientes antes de editar."

## Related skills

- `requirements-clarifier` para requisitos previos.
- `tdd-implementer` para ejecutar el plan con pruebas.
- `deployment-checklist` si el cambio va a producción.

