# TASKS.md

## 1. Propósito

Este documento define el trabajo pendiente para lograr el **MVP de CodeLab** descrito en `PROJECT.md`.

El MVP valida la experiencia completa de aprendizaje:

```text
Aprender → Ver ejemplo → Escribir código → Ejecutar → Resolver ejercicio → Feedback → Avanzar
```

El alcance del MVP es un único curso:

> Fundamentos de Programación con JavaScript

Todo el diseño visual debe cumplir las reglas de `FRONTEND.md`.

---

## 2. Estado general

Fases en orden de prioridad (según `PROJECT.md` §17):

| Fase | Descripción | Estado |
| ---- | ----------- | ------ |
| 0 | Configuración base del proyecto | Completada |
| 1 | Datos y contenido del curso | Completada |
| 2 | Editor y ejecución de código | Completada |
| 3 | Ejercicios y validación | Completada |
| 4 | Navegación y layout | Completada |
| 5 | Progreso | Completada |
| 6 | Diseño, accesibilidad y QA | Pendiente |
| 7 | Documentación del proyecto | Pendiente |

---

## 3. Fase 0 — Configuración base

- [x] Definir tema de Tailwind con los tokens CSS de `FRONTEND.md` §4:
  - colores base (background, surface, border, text, primary, success, warning, error);
  - radio (`8px` botones/inputs, `10–12px` tarjetas, `8–10px` código);
  - escala de espaciado (`4/8/12/16/24/32/40/48/64`).
- [x] Configurar tipografías en `app/layout.tsx`:
  - `Inter` para la interfaz;
  - `JetBrains Mono` (o `Fira Code`) para código;
  - fallbacks sans-serif/monospace según `FRONTEND.md` §5.
- [x] Limpiar estilos por defecto de `app/globals.css` y aplicar la base visual (fondos blancos/superficies claras).
- [x] Crear el sistema base de componentes reutilizables (`FRONTEND.md` §17, §30):
  - `Button` con variantes `primary` / `secondary` / `ghost`;
  - `ProgressBar`;
  - `Badge`/indicadores de estado si se requieren.
- [x] Definir rutas de la app (App Router):
  - `/` → catálogo/portada que apunta al curso; o redirección directa a `/cursos/fundamentos-de-programacion-con-javascript`.
  - `/cursos/[cursoSlug]` → vista de curso con temario.
  - `/cursos/[cursoSlug]/lecciones/[slug]` → vista de lección.
- [x] Ejecutar `npm run lint` y `npm run build` sin errores al final de la fase.
- [x] Commit de la fase (`be9fbac`).

---

## 4. Fase 1 — Datos y contenido del curso

- [x] Definir tipos TypeScript del dominio:
  - `Course` (slug, título, descripción, barra de progreso global);
  - `Lesson` (slug, número, título, contenido, ejemplos, ejercicio, estado);
  - `Exercise` (instrucciones, código inicial, validación);
  - `CodeBlock` / `InfoBlock` (bloques de contenido).
- [x] Crear los datos del curso "Fundamentos de Programación con JavaScript" con las 11 lecciones del temario (`PROJECT.md` §6):
  1. Introducción a la programación;
  2. Variables y tipos de datos;
  3. Operadores;
  4. Condicionales;
  5. Bucles;
  6. Funciones;
  7. Arrays;
  8. Objetos;
  9. Scope y conceptos importantes;
  10. DOM;
  11. Proyecto final.
- [x] Redactar el contenido educativo del curso (estructura de lección según `PROJECT.md` §7 y `FRONTEND.md` §27):
  - título, introducción breve, explicación, ejemplos con código, resultado esperado, ejercicio.
- [x] Definir los ejercicios de cada lección con instrucciones claras, código inicial y criterios de validación (`PROJECT.md` §10).
- [x] Documentar el contenido completo en `CURRICULUM.md` (referenciado por `PROJECT.md` §6) o mantenerlo como fuente de datos si se decide lo contrario (registrar decisión en `DECISIONS.md`).
- [x] Renderizar la lección a partir de los datos:
  - bloques de información (puntos clave) con fondo verde muy claro (`FRONTEND.md` §11);
  - bloques de código estático con números de línea, highlighting y botón copiar discreto (`FRONTEND.md` §12);
  - texto normal directamente sobre fondo blanco (sin tarjetas innecesarias).
- [ ] Commit de la fase.

---

## 5. Fase 2 — Editor y ejecución de código

- [x] Crear componente `CodeEditor`:
  - números de línea;
  - syntax highlighting;
  - edición libre;
  - fuente monoespaciada legible;
  - scroll horizontal en líneas largas (`FRONTEND.md` §26);
  - nunca romper el código en pantallas pequeñas.
- [x] Implementar motor de ejecución de JavaScript en el navegador:
  - capturar `console.log`, `console.error`, `console.warn` y otros métodos;
  - mostrar errores de JavaScript de forma comprensible (`FRONTEND.md` §13);
  - manejar `Promise`/`async` si se decide soportar (consignar en `DECISIONS.md`);
  - considerar un `iframe` sandbox sin acceso al DOM de la app o `new Function` con consola interceptada (decidir la opción segura en `DECISIONS.md`).
- [x] Crear componente `Console`:
  - apariencia de terminal (fondo oscuro aceptado, `FRONTEND.md` §14);
  - tipografía monoespaciada;
  - diferenciar errores;
  - scroll;
  - botón "Limpiar" discreto.
- [x] Crear componente `Playground`/`InteractiveEditor`:
  - editor + botón "Ejecutar" (botón primary verde);
  - consola debajo;
  - altura razonable (no ocupar toda la pantalla).
- [x] Conseguir el flujo completo: escribir → ejecutar → ver salida.
- [ ] Commit de la fase.

---

## 6. Fase 3 — Ejercicios y validación

- [x] Crear componente `Exercise` (`FRONTEND.md` §15):
  - instrucciones muy claras;
  - editor;
  - botón "Ejecutar";
  - botón "Comprobar" (primary);
  - feedback inmediato.
- [x] Implementar validadores por ejercicio:
  - comprobar condiciones (no solo igualdad textual) para aceptar varias soluciones válidas (`PROJECT.md` §10);
  - estructura declarativa: variables requeridas, valores, salida esperada, etc.
- [x] Crear sistema de `Feedback` (`FRONTEND.md` §16):
  - éxito (verde): "✓ ¡Correcto! ...";
  - error (rojo): "✕ Todavía no es correcto. Revisa ...";
  - advertencia (amarillo) solo cuando sea imprescindible.
- [x] Al aprobar un ejercicio, marcar la lección como completada.
- [ ] Commit de la fase.

---

## 7. Fase 4 — Navegación y layout

- [x] Crear `Header` (`FRONTEND.md` §7):
  - logo/nombre ("CodeLab");
  - navegación principal (Cursos, Progreso);
  - búsqueda (placeholder, puede ser visual);
  - acceso a perfil (placeholder);
  - fondo blanco, borde inferior sutil, ~60px, estable.
- [x] Crear `Sidebar` del curso (`FRONTEND.md` §8):
  - curso actual;
  - barra de progreso + porcentaje;
  - temario completo;
  - estados por lección:
    - actual → fondo verde muy claro + indicador verde + peso mayor;
    - completada → `✓` verde;
    - pendiente → `○`;
    - bloqueada → candado discreto (en el MVP se decide navegación libre; el candado se evalúa con el orden de desbloqueo en Fase 5);
  - no solo color: usar también iconos/indicadores (`FRONTEND.md` §23).
- [x] Layout de 3 columnas en desktop (`FRONTEND.md` §6):
  - `Sidebar` (temario/progreso);
  - `Contenido` (lección, explicación, ejemplos);
  - `Área práctica` (editor, consola, ejercicio).
- [x] Navegación anterior/siguiente al final de la lección (`FRONTEND.md` §27):
  - "← Anterior" (secondary) y "Siguiente →" (primary);
  - "← Volver al curso" al inicio del contenido.
- [x] Responsive (`FRONTEND.md` §22):
  - tablet → reducir/reordenar áreas;
  - móvil → stack: Lección → Editor → Consola → Ejercicio; sidebar como drawer/menú desplegable;
  - nunca forzar 3 columnas en pantallas pequeñas.
- [x] Página "Progreso" (`/progreso`) con resumen por curso usando el mismo store de progreso.
- [x] Ejecutar `npm run lint` y `npm run build` sin errores.
- [ ] Commit de la fase.

---

## 8. Fase 5 — Progreso

- [x] Modelar estado de progreso:
  - por lección: `locked` / `pending` / `in-progress` / `completed`;
  - desbloqueo de lecciones en orden o libre (decidir y consignar en `DECISIONS.md`) — **navegación libre** (D10); `locked` modelado pero sin usar en el MVP.
- [x] Persistir el progreso en `localStorage` (sin backend en el MVP) — `codelab-progress` por curso, con store reactivo (`useSyncExternalStore`).
- [x] Mostrar barra de progreso (track gris claro, relleno verde, 6–8px, redondeada) y porcentaje (`FRONTEND.md` §9).
- [x] Propagación de estado: al completar una lección se actualizan sidebar, barra y navegación.
- [x] Diseñar para soportar múltiples cursos a futuro (estructura de datos por curso) sin implementarlos (`PROJECT.md` §13) — página `/progreso` lista para iterar cursos.
- [x] Centralizar el modelo de estados en `getLessonStatus` (`lib/progress.ts`) para mantener la UI determinista.
- [ ] Commit de la fase.

---

## 9. Fase 6 — Diseño, accesibilidad y QA

- [ ] Revisar la regla de consistencia (`FRONTEND.md` §30): reutilizar componentes existentes, no crear variantes visuales innecesarias.
- [ ] Estados de UI completos en cada componente interactivo: default, hover, active, focus, disabled, loading, success, error (`FRONTEND.md` §24).
- [ ] Accesibilidad (`FRONTEND.md` §23):
  - focus visible;
  - navegación por teclado;
  - labels apropiados;
  - contraste suficiente;
  - áreas de clic cómodas.
- [ ] Animaciones mínimas 150–250ms, solo hover/transiciones/aparición de feedback (`FRONTEND.md` §25).
- [ ] Verificar que el editor conserve legibilidad en todas las pantallas (`FRONTEND.md` §26).
- [ ] No introducir gamificación (sin monedas, XP, rachas, recompensas) (`FRONTEND.md` §29, `PROJECT.md` §11).
- [ ] Prueba manual del flujo completo MVP:
  - entrar al curso → leer lección → ver ejemplo → ejecutar → resolver ejercicio → feedback → avanzar → ver progreso.
- [ ] Revisar responsive en desktop, laptop, tablet y móvil.
- [ ] Ejecutar `npm run lint` y `npm run build` sin errores.
- [ ] Commit final de la fase.

---

## 10. Fase 7 — Documentación del proyecto

- [ ] Crear `CURRICULUM.md` con el contenido educativo detallado del curso inicial.
- [ ] Crear `ARCHITECTURE.md` con la arquitectura técnica (estructura de carpetas, datos, enfoque del editor).
- [ ] Crear `CONVENTIONS.md` con las convenciones de código (nombrado, estructura de componentes, estilos).
- [ ] Crear `DECISIONS.md` registrando:
  - ejecución de código (sandbox / `new Function`) y alcance de `console`;
  - almacenamiento de progreso (localStorage);
  - orden de desbloqueo de lecciones;
  - fuente de verdad del contenido (datos en TS vs `CURRICULUM.md`).
- [ ] Actualizar `TASKS.md` marcando las tareas completadas y enviando pendientes a futuro como corresponde.
- [ ] Commit final de la documentación.

---

## 11. Reglas para trabajar el MVP

1. Seguir la prioridad de desarrollo de `PROJECT.md` §17: primero la experiencia de aprendizaje.
2. No implementar funcionalidades del "alcance fuera del MVP" (`PROJECT.md` §14) sin que una tarea lo solicite explícitamente.
3. El contenido es el protagonista (`FRONTEND.md` §2, §31): antes de crear una pantalla, comprobar propósito, acción principal y componentes existentes.
4. Cada cambio debe mantener la estética: **minimalista · blanca · verde · técnica · educativa · profesional**.
5. Consultar las guías de Next.js en `node_modules/next/dist/docs/` antes de escribir código (ver `AGENTS.md`) y regenerar tipos con `npm run dev`/`build` cuando cambien las rutas.