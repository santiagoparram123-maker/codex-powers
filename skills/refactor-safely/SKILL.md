---
name: refactor-safely
description: Use this skill when Codex needs to refactor code while preserving behavior, public APIs, data contracts, tests, UX, and compatibility through small reversible changes and focused verification.
---

# Refactor Safely

## Purpose

Mejorar estructura interna sin romper comportamiento observable ni ampliar alcance innecesariamente.

## When to use

- Para reducir duplicación, simplificar módulos, mover responsabilidades o mejorar legibilidad.
- Antes de cambios funcionales cuando el código actual impide trabajar con seguridad.
- Cuando hay tests existentes o se pueden agregar pruebas de caracterización.

## When not to use

- Para rediseñar producto o arquitectura completa sin mandato claro.
- Para mezclar refactor con feature grande sin separar fases.
- Cuando no hay forma razonable de verificar comportamiento.

## Procedure

1. Define el comportamiento que debe preservarse.
2. Identifica API pública, contratos de datos, rutas, eventos y UI afectada.
3. Ejecuta tests existentes o agrega pruebas de caracterización si faltan.
4. Haz un cambio pequeño: mover, renombrar, extraer o simplificar una cosa.
5. Verifica después de cada grupo pequeño de cambios.
6. Evita cambiar lógica y forma al mismo tiempo salvo que sea inevitable.
7. Mantén compatibilidad o documenta cualquier breaking change explícito.
8. Finaliza con revisión de diff y comandos de verificación.

## Output checklist

- Comportamiento preservado definido.
- API pública y contratos revisados.
- Tests existentes o de caracterización considerados.
- Cambios pequeños y legibles.
- Verificación ejecutada.
- Breaking changes ausentes o declarados.

## Common mistakes

- Llamar refactor a un cambio funcional.
- Cambiar nombres públicos sin buscar todos los usos.
- Reescribir desde cero por preferencia estilística.
- Reducir duplicación a costa de claridad o acoplamiento.

## Example invocation

"Usa `refactor-safely` para extraer la lógica de permisos sin cambiar el comportamiento."

## Related skills

- `codebase-map` para entender límites antes de refactor grande.
- `tdd-implementer` para pruebas de caracterización.
- `code-reviewer` para detectar regresiones.

