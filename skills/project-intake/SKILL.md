---
name: project-intake
description: Use this skill when Codex needs to understand a new or unfamiliar software project before making changes, estimating work, onboarding to a repo, identifying stack, scripts, dependencies, product goal, routes, entry points, and main architecture signals.
---

# Project Intake

## Purpose

Entender rápidamente un proyecto nuevo con evidencia del repositorio para poder trabajar sin suposiciones frágiles.

## When to use

- Al abrir un repo desconocido.
- Antes de estimar, modificar o diagnosticar un proyecto sin contexto suficiente.
- Cuando la petición menciona "entiende este proyecto", "haz onboarding", "qué stack usa" o "por dónde empiezo".

## When not to use

- Para cambios triviales en un archivo ya identificado.
- Cuando ya existe contexto reciente y confiable del proyecto.
- Como sustituto de una investigación profunda de arquitectura; para eso encadena `codebase-map`.

## Procedure

1. Inspecciona archivos raíz: `README`, `AGENTS`, manifests, configs, lockfiles y estructura de carpetas.
2. Identifica stack, runtime, framework, gestor de paquetes, scripts y comandos principales.
3. Revisa dependencias clave y tooling de tests, lint, build y deploy.
4. Localiza puntos de entrada: app principal, router, servidor, CLI, jobs, tests y configuración de entorno.
5. Resume objetivo del producto a partir de README, nombres de módulos, rutas y UI.
6. Detecta convenciones: naming, estructura de componentes, organización de tests, estilo de commits.
7. Lista riesgos iniciales: falta de docs, tests ausentes, scripts rotos, env vars no documentadas.
8. Propón la siguiente skill o fase: `requirements-clarifier`, `implementation-planner` o `codebase-map`.

## Output checklist

- Stack y framework identificados.
- Scripts relevantes documentados.
- Carpetas y puntos de entrada principales listados.
- Objetivo del producto inferido con evidencia.
- Riesgos y huecos de información señalados.
- Siguiente paso recomendado.

## Common mistakes

- Concluir el stack solo por una dependencia aislada.
- Ignorar lockfiles o scripts reales del proyecto.
- Leer demasiados archivos sin producir un resumen accionable.
- Asumir que el README está actualizado sin contrastarlo con el código.

## Example invocation

"Usa `project-intake` para entender este repo antes de implementar autenticación."

## Related skills

- `codebase-map` para un mapa más profundo.
- `requirements-clarifier` si la tarea sigue ambigua.
- `implementation-planner` antes de editar.

