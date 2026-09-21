# CURRICULUM.md

## 1. Curso inicial

**Fundamentos de Programación con JavaScript**

Plataforma: CodeLab
Estado: documento de referencia del plan de estudios.

El curso enseña los fundamentos de la programación mediante explicaciones
cortas, ejemplos de código, salida de consola esperada y ejercicios prácticos
por lección.

## 2. Fuente de verdad del contenido

El contenido detallado de cada lección vive como **datos TypeScript** en:

```text
data/courses/fundamentos-de-programacion-con-javascript.ts
```

Este archivo es la fuente de verdad utilizada por la aplicación: contiene
los textos, los ejemplos de código, la salida esperada y los validadores de
cada ejercicio.

Este documento funciona como **referencia humana del plan de estudios** y no
se mantiene sincronizado campo por campo con los datos. Ver
`DECISIONS.md` (decisión D1).

## 3. Temario

| # | Lección | Objetivo | Temas clave |
| - | ------- | -------- | ----------- |
| 01 | Introducción a la programación | Entender qué es programar y ver el primer programa | Instrucciones, JavaScript en el navegador, `console.log` |
| 02 | Variables y tipos de datos | Guardar información reutilizable | `const` / `let`, string, number, boolean |
| 03 | Operadores | Calcular y comparar valores | Aritméticos, comparación (`===`), lógicos (`&&`, `\|\|`) |
| 04 | Condicionales | Tomar decisiones en el flujo | `if`, `else if`, `else`, condiciones booleanas |
| 05 | Bucles | Repetir acciones | `for`, `while`, condición de salida |
| 06 | Funciones | Reutilizar bloques de lógica | Declaración, parámetros, `return`, llamada |
| 07 | Arrays | Trabajar con listas ordenadas | Índices desde 0, `length`, `for...of` |
| 08 | Objetos | Agrupar datos relacionados | Pares clave/valor, acceso con `.`, modificación |
| 09 | Scope y conceptos importantes | Conocer el alcance de las variables | Scope global/bloque, `const` vs `let`, reasignación |
| 10 | DOM | Manipular la página desde código | `getElementById`, `textContent` |
| 11 | Proyecto final | Integrar los conceptos del curso | Funciones + bucles + condicionales + arrays |

## 4. Estructura de una lección

Cada lección sigue la estructura visual definida en `FRONTEND.md` §27:

```text
Volver al curso
[Título]
[Descripción breve]
[Contenido]
[Puntos clave]
[Ejemplo de código]
[Salida esperada]
[Ejercicio]
[Anterior] [Siguiente]
```

No todas las lecciones necesitan todos los elementos si el concepto se
enseña mejor con otra estructura (`PROJECT.md` §7).