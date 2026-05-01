---
name: bug-investigator
description: Use this skill when Codex needs to investigate a bug by reproducing it, collecting evidence, forming hypotheses, finding root cause, proposing the smallest safe fix, verifying behavior, and documenting the result.
---

# Bug Investigator

## Purpose

Investigar bugs con método: reproducir, aislar causa raíz, corregir lo mínimo y verificar.

## When to use

- Cuando el usuario reporta error, crash, regresión, comportamiento incorrecto o test fallido.
- Cuando hay logs, stack traces o síntomas sin causa clara.
- Antes de tocar código en un bug no reproducido.

## When not to use

- Para features nuevas sin comportamiento defectuoso.
- Para refactors sin fallo observado.
- Para apagar errores sin entender impacto.

## Procedure

1. Define síntoma, resultado esperado y resultado actual.
2. Reproduce con el comando, flujo o test más pequeño posible.
3. Recopila evidencia: logs, stack trace, diff reciente, datos de entrada, entorno.
4. Formula hipótesis concretas y priorízalas por probabilidad y costo de verificación.
5. Inspecciona el código en el camino del fallo, no todo el repo.
6. Identifica causa raíz y alcance de impacto.
7. Diseña el fix mínimo y, si procede, una prueba de regresión.
8. Implementa o encadena `tdd-implementer`.
9. Verifica el caso original y una señal más amplia razonable.

## Output checklist

- Reproducción o explicación de por qué no fue posible.
- Causa raíz identificada.
- Fix mínimo propuesto o aplicado.
- Prueba de regresión cuando fue razonable.
- Comandos de verificación ejecutados.
- Impacto y riesgo residual documentados.

## Common mistakes

- Corregir el síntoma sin causa raíz.
- Hacer cambios especulativos sin reproducción.
- Ignorar datos de entrada o entorno.
- Ampliar el fix a un refactor no solicitado.

## Example invocation

"Usa `bug-investigator`: el formulario guarda duplicados cuando se hace doble click en enviar."

## Related skills

- `tdd-implementer` para codificar el fix con prueba.
- `refactor-safely` si la causa raíz exige reordenar código.
- `code-reviewer` para validar edge cases.

