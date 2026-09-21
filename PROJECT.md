# PROJECT.md

# CodeLab

## 1. Descripción

CodeLab es una plataforma web interactiva para aprender desarrollo de software mediante cursos estructurados, explicaciones teóricas y práctica directa escribiendo y ejecutando código.

La experiencia combina:

* documentación educativa;
* navegación por cursos y lecciones;
* editor de código;
* consola interactiva;
* ejercicios prácticos;
* validación de respuestas;
* seguimiento del progreso.

La idea principal es que el estudiante no solamente lea conceptos, sino que pueda **aprender, experimentar y practicar código dentro de la misma plataforma**.

---

# 2. Objetivo del proyecto

Crear una plataforma sencilla y clara que permita a una persona aprender los fundamentos del desarrollo de software desde cero.

El aprendizaje debe seguir este flujo:

```text
Aprender concepto
       ↓
Ver ejemplo
       ↓
Escribir código
       ↓
Ejecutar código
       ↓
Resolver ejercicio
       ↓
Recibir feedback
       ↓
Avanzar
```

La plataforma debe reducir al mínimo la fricción entre aprender un concepto y ponerlo en práctica.

---

# 3. Usuario objetivo

El usuario principal es una persona que está comenzando a aprender desarrollo de software.

Puede tener:

* poco o ningún conocimiento previo;
* conocimientos básicos pero desordenados;
* experiencia aprendiendo mediante tutoriales;
* dificultad para entender conceptos únicamente mediante teoría.

La plataforma debe asumir que el estudiante puede ser principiante.

Por esto, las explicaciones y ejercicios deben priorizar:

* claridad;
* progresión gradual;
* ejemplos concretos;
* práctica;
* feedback inmediato.

No asumir conocimientos avanzados sin haberlos explicado previamente.

---

# 4. Principio educativo

La plataforma debe priorizar el aprendizaje práctico.

No se busca convertir CodeLab en una biblioteca de documentación donde el usuario solamente lee.

Cada concepto importante debería tener, cuando sea apropiado:

```text
Explicación
+
Ejemplo
+
Experimentación
+
Ejercicio
```

El estudiante debe poder modificar ejemplos y comprobar qué sucede.

---

# 5. MVP

La primera versión de CodeLab estará enfocada exclusivamente en validar la experiencia de aprendizaje.

El MVP tendrá un único curso:

## Fundamentos de Programación con JavaScript

El curso debe permitir:

* navegar entre lecciones;
* visualizar el temario;
* leer explicaciones;
* ver ejemplos de código;
* escribir JavaScript;
* ejecutar JavaScript;
* visualizar la salida de la consola;
* resolver ejercicios;
* comprobar ejercicios;
* recibir feedback;
* visualizar el progreso.

---

# 6. Curso inicial

El curso inicial se divide en lecciones progresivas.

Temario inicial:

```text
01. Introducción a la programación
02. Variables y tipos de datos
03. Operadores
04. Condicionales
05. Bucles
06. Funciones
07. Arrays
08. Objetos
09. Scope y conceptos importantes
10. DOM
11. Proyecto final
```

El contenido detallado de cada lección se define en:

```text
CURRICULUM.md
```

`PROJECT.md` únicamente define el alcance general del curso.

---

# 7. Estructura de una lección

Una lección normalmente debe seguir una estructura similar a:

```text
Título
↓
Introducción breve
↓
Explicación del concepto
↓
Ejemplo
↓
Experimentación con código
↓
Ejercicio
↓
Validación
↓
Feedback
↓
Siguiente lección
```

No todas las lecciones necesitan tener exactamente los mismos elementos si el concepto requiere otra estructura.

La consistencia es importante, pero no debe impedir adaptar la experiencia cuando sea necesario para enseñar mejor.

---

# 8. Experiencia principal

La interfaz principal de una lección estará dividida conceptualmente en tres áreas:

```text
┌────────────────┬──────────────────────┬────────────────────┐
│                │                      │                    │
│    SIDEBAR     │      CONTENIDO       │    INTERACTIVO     │
│                │                      │                    │
│    Temario     │      Lección         │    Editor          │
│    Progreso    │      Explicación     │    Consola         │
│                │      Ejemplos        │    Ejercicio       │
│                │                      │                    │
└────────────────┴──────────────────────┴────────────────────┘
```

### Sidebar

Debe mostrar:

* curso actual;
* progreso;
* lista de lecciones;
* estado de cada lección.

### Contenido

Debe mostrar:

* explicación;
* conceptos;
* ejemplos;
* bloques de código;
* resultados.

### Área interactiva

Debe contener:

* editor;
* botón para ejecutar;
* consola;
* ejercicios;
* validación.

Los detalles visuales están definidos en:

```text
FRONTEND.md
```

---

# 9. Editor de código

El editor interactivo es una parte fundamental de CodeLab.

El usuario debe poder escribir código JavaScript y ejecutarlo dentro de la plataforma.

Ejemplo:

```javascript
const nombre = "Felipe";

console.log(nombre);
```

La plataforma debe mostrar:

```text
Felipe
```

como salida.

El editor debe estar orientado a aprendizaje, no a reemplazar un IDE completo.

No se necesitan inicialmente:

* múltiples archivos;
* terminal completa;
* sistema de proyectos complejo;
* configuración avanzada;
* extensiones.

---

# 10. Ejercicios

Los ejercicios deben permitir que el estudiante demuestre que entendió el concepto.

Ejemplo:

```text
Crea una variable llamada "pais"
y asígnale el nombre de tu país.
```

El estudiante escribe:

```javascript
const pais = "Colombia";
```

y utiliza la acción:

```text
Comprobar
```

La plataforma debe determinar si la solución cumple las condiciones del ejercicio y mostrar feedback.

Los ejercicios deben priorizar la comprensión del concepto sobre encontrar una única forma exacta de escribir el código cuando existan varias soluciones válidas.

---

# 11. Progreso

El usuario debe poder identificar fácilmente su progreso dentro de un curso.

El progreso puede representarse mediante:

* porcentaje;
* barra de progreso;
* lecciones completadas;
* lección actual.

El sistema debe evitar convertir el progreso en un sistema de gamificación excesiva.

No forman parte del MVP:

* monedas;
* vidas;
* rankings;
* energía;
* XP;
* recompensas artificiales.

El objetivo del progreso es orientar al estudiante, no crear una mecánica de videojuego.

---

# 12. Navegación

La navegación debe ser simple y predecible.

El usuario debe poder:

* entrar a un curso;
* seleccionar una lección;
* regresar al curso;
* avanzar a la siguiente lección;
* regresar a la anterior.

Las lecciones deben tener una navegación clara:

```text
← Anterior                         Siguiente →
```

La navegación lateral debe permanecer disponible durante el aprendizaje en desktop.

---

# 13. Cursos futuros

CodeLab debe diseñarse de forma que posteriormente pueda soportar múltiples cursos.

Ejemplos futuros:

```text
Fundamentos de JavaScript
HTML y CSS
Git y GitHub
JavaScript avanzado
React
Backend con Node.js
Bases de datos
APIs
```

Sin embargo, estos cursos NO deben implementarse durante el MVP.

La arquitectura debe permitir agregarlos posteriormente sin tener que reconstruir completamente la aplicación.

---

# 14. Alcance fuera del MVP

Las siguientes funcionalidades pueden existir en el futuro, pero no deben implementarse ahora salvo que una tarea las solicite explícitamente:

* autenticación;
* cuentas de usuario;
* backend completo;
* base de datos;
* sincronización entre dispositivos;
* certificados;
* múltiples cursos;
* sistema de pagos;
* suscripciones;
* IA como tutor;
* comunidad;
* rankings;
* gamificación avanzada;
* perfiles públicos;
* sistema social;
* marketplace de cursos.

El agente no debe implementar funcionalidades futuras por iniciativa propia.

---

# 15. Filosofía del producto

CodeLab debe sentirse como una herramienta para aprender programación, no como una red social ni como un videojuego.

La experiencia debe ser:

```text
Simple
↓
Clara
↓
Interactiva
↓
Práctica
↓
Progresiva
```

La interfaz debe eliminar distracciones y permitir que el estudiante se concentre en el contenido y el código.

---

# 16. Principios de producto

### 1. Aprender haciendo

Siempre que sea posible, un concepto debe poder ponerse en práctica.

### 2. Menos fricción

El estudiante debe poder pasar de leer a ejecutar código rápidamente.

### 3. Progresión gradual

Los conceptos deben introducirse de forma ordenada.

### 4. Feedback inmediato

Las acciones del estudiante deben producir respuestas claras.

### 5. Claridad antes que cantidad

Es preferible enseñar pocos conceptos correctamente que presentar demasiada información simultáneamente.

### 6. Simplicidad

No agregar funcionalidades únicamente porque pueden implementarse.

### 7. Consistencia

Las diferentes partes de la plataforma deben sentirse como una misma aplicación.

---

# 17. Prioridad de desarrollo

Cuando existan varias funcionalidades pendientes, priorizar en este orden:

```text
1. Experiencia de aprendizaje
2. Editor y ejecución de código
3. Ejercicios y validación
4. Navegación
5. Progreso
6. Diseño y refinamiento visual
7. Funcionalidades secundarias
```

La prioridad siempre debe ser que el usuario pueda aprender y practicar.

---

# 18. Fuera de alcance

No convertir el proyecto prematuramente en una plataforma educativa completa.

Durante el MVP no es necesario resolver:

* monetización;
* escalabilidad extrema;
* sistema social;
* administración avanzada;
* analíticas complejas;
* marketplace;
* generación automática de cursos;
* inteligencia artificial avanzada.

Primero debe validarse la experiencia básica:

```text
¿El usuario puede entrar?
        ↓
¿Puede entender la lección?
        ↓
¿Puede escribir código?
        ↓
¿Puede ejecutarlo?
        ↓
¿Puede resolver un ejercicio?
        ↓
¿Puede avanzar?
```

Si ese flujo funciona bien, se pueden construir las siguientes capas.

---

# 19. Documentación relacionada

Antes de realizar cambios en una parte específica del proyecto, consultar el documento correspondiente.

```text
AGENTS.md
→ Reglas de trabajo para el agente.

FRONTEND.md
→ Diseño visual y reglas de UI/UX.

ARCHITECTURE.md
→ Arquitectura técnica.

CONVENTIONS.md
→ Convenciones de código.

CURRICULUM.md
→ Contenido y estructura educativa.

TASKS.md
→ Trabajo pendiente.

DECISIONS.md
→ Decisiones técnicas y de producto importantes.
```

---

# 20. Regla principal del proyecto

> CodeLab debe ayudar al usuario a aprender programación escribiendo y ejecutando código, manteniendo una experiencia simple, clara y progresiva.

Cualquier nueva funcionalidad debe evaluarse según una pregunta:

**¿Esta funcionalidad mejora realmente la experiencia de aprendizaje o es simplemente complejidad adicional?**

Si no mejora claramente el aprendizaje, la navegación o la práctica, no debe formar parte del MVP.
