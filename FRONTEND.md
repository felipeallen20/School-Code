# FRONTEND.md

## 1. Propósito

Este documento define las reglas visuales y de experiencia de usuario
del frontend de la plataforma educativa.

La plataforma es una experiencia de aprendizaje de desarrollo de
software basada en:

-   documentación interactiva;
-   navegación por cursos y lecciones;
-   contenido educativo claro;
-   editor de código;
-   consola interactiva;
-   ejercicios prácticos;
-   progreso del estudiante.

El objetivo visual es una interfaz **minimalista, limpia, profesional y
moderna**, con **blanco como color principal y verde como color de
acción/acento**.

La interfaz debe sentirse como una mezcla entre:

-   documentación técnica moderna;
-   editor de código;
-   plataforma educativa;
-   aplicación SaaS limpia.

No debe parecer una plataforma infantil ni una aplicación excesivamente
gamificada.

------------------------------------------------------------------------

# 2. Regla principal

> El contenido debe ser el protagonista. La interfaz debe ayudar al
> estudiante a concentrarse, no competir con él.

Prioridades visuales:

1.  Legibilidad.
2.  Jerarquía clara.
3.  Navegación sencilla.
4.  Código fácil de leer.
5.  Feedback inmediato.
6.  Consistencia.
7.  Minimalismo.

Evitar cualquier elemento visual que no tenga una función clara.

------------------------------------------------------------------------

# 3. Dirección visual

## Estilo

Usar:

-   fondos blancos o ligeramente grisáceos;
-   verde como color principal;
-   bordes finos;
-   sombras muy sutiles;
-   esquinas ligeramente redondeadas;
-   mucho espacio en blanco;
-   tipografía sans-serif moderna;
-   iconografía sencilla;
-   componentes compactos pero cómodos;
-   contrastes claros.

Evitar:

-   gradientes llamativos;
-   glassmorphism excesivo;
-   sombras grandes;
-   colores saturados;
-   bordes gruesos;
-   tarjetas gigantes;
-   animaciones constantes;
-   elementos decorativos innecesarios;
-   exceso de iconos;
-   estética infantil;
-   exceso de badges o recompensas.

------------------------------------------------------------------------

# 4. Paleta de colores

La paleta debe mantenerse principalmente en blanco, grises y verdes.

## Colores base

``` css
--color-background: #ffffff;
--color-surface: #f8faf9;
--color-surface-hover: #f1f8f5;

--color-border: #e5ebe8;
--color-border-strong: #d5dfda;

--color-text: #17211d;
--color-text-secondary: #52605a;
--color-text-muted: #7a8781;

--color-primary: #15966f;
--color-primary-hover: #10815f;
--color-primary-light: #e8f6f1;
--color-primary-lighter: #f2faf7;

--color-success: #15966f;
--color-warning: #d69e2e;
--color-error: #d64545;
```

No introducir colores adicionales sin una razón funcional.

El verde representa principalmente:

-   acciones principales;
-   progreso;
-   elementos activos;
-   éxito;
-   enlaces importantes;
-   selección actual.

El rojo debe reservarse para errores.

El amarillo debe reservarse para advertencias.

------------------------------------------------------------------------

# 5. Tipografía

Usar una tipografía sans-serif moderna y altamente legible.

Preferencia:

``` text
Inter
```

Fallback:

``` text
system-ui
-apple-system
BlinkMacSystemFont
"Segoe UI"
sans-serif
```

## Jerarquía

### Título de página

``` text
32px
font-weight: 700
line-height: 1.2
```

### Título de sección

``` text
22–24px
font-weight: 700
```

### Subtítulo

``` text
16–18px
font-weight: 400
color secundario
```

### Texto normal

``` text
15–16px
line-height: 1.6
```

### Texto secundario

``` text
13–14px
```

### Código

Usar una fuente monoespaciada:

``` text
JetBrains Mono
```

o:

``` text
Fira Code
```

con fallback:

``` text
monospace
```

------------------------------------------------------------------------

# 6. Layout general

La aplicación debe utilizar una estructura similar a:

``` text
┌───────────────────────────────────────────────────────────┐
│                       HEADER                              │
├────────────────┬─────────────────────────┬────────────────┤
│                │                         │                │
│   SIDEBAR      │       CONTENT           │   PRACTICE     │
│                │                         │                │
│   Curso        │       Lección           │   Editor       │
│   Temario      │       Explicación       │   Consola      │
│   Progreso     │       Ejemplos          │   Ejercicio    │
│                │                         │                │
│                │                         │                │
└────────────────┴─────────────────────────┴────────────────┘
```

En desktop, el curso debe sentirse como una aplicación de documentación.

El contenido central debe tener suficiente espacio para lectura.

El área interactiva debe permanecer claramente diferenciada.

------------------------------------------------------------------------

# 7. Header

El header debe ser limpio y bajo.

Debe contener:

-   logo/nombre de la plataforma;
-   navegación principal;
-   búsqueda;
-   acceso al perfil.

Ejemplo:

``` text
CodeLab       Cursos     Progreso        Buscar cursos...      Perfil
```

Características:

-   fondo blanco;
-   borde inferior sutil;
-   altura aproximada de 60px;
-   posición estable;
-   elementos alineados verticalmente;
-   no utilizar un header visualmente pesado.

El logo puede utilizar un símbolo relacionado con código.

------------------------------------------------------------------------

# 8. Sidebar del curso

El sidebar es una parte fundamental de la experiencia.

Debe permitir al estudiante saber:

1.  qué curso está haciendo;
2.  cuánto ha avanzado;
3.  qué lección está viendo;
4.  qué lecciones completó;
5.  qué lecciones están disponibles.

Estructura:

``` text
Fundamentos de
JavaScript

████████░░░░
35% completado

TEMARIO

○ 01  Introducción
✓ 02  Variables
○ 03  Operadores
○ 04  Condicionales
○ 05  Bucles
○ 06  Funciones
○ 07  Arrays
○ 08  Objetos
○ 09  Scope
○ 10  DOM
○ 11  Proyecto final
```

## Estados

### Lección actual

Debe tener:

-   fondo verde muy claro;
-   texto oscuro;
-   indicador verde;
-   peso tipográfico ligeramente mayor.

### Lección completada

Mostrar:

``` text
✓
```

en verde.

### Lección pendiente

Mostrar un círculo vacío.

### Lección bloqueada

Mostrar un icono de candado discreto.

No hacer que los estados parezcan botones gigantes.

------------------------------------------------------------------------

# 9. Barra de progreso

La barra debe ser pequeña y discreta.

Ejemplo:

``` text
████████░░░░░░░░

35% completado
```

Características:

-   track gris claro;
-   progreso verde;
-   altura aproximada de 6--8px;
-   bordes redondeados.

El progreso no debe dominar la interfaz.

------------------------------------------------------------------------

# 10. Área de contenido

El contenido de la lección es el centro de la experiencia educativa.

Debe parecer documentación técnica.

Estructura:

``` text
← Volver al curso

02. Variables

Una variable permite almacenar un valor
en la memoria del computador...

¿Qué son las variables?

En JavaScript...

Puntos clave

• ...
• ...
• ...

Tipos de datos básicos

...

Ejemplo

[ código ]

Salida en consola

[ output ]
```

Usar una jerarquía clara de títulos.

No colocar todo dentro de tarjetas.

El texto normal debe vivir directamente sobre el fondo blanco.

Las tarjetas deben utilizarse solo cuando aporten agrupación o énfasis.

------------------------------------------------------------------------

# 11. Bloques de información

Para conceptos importantes se pueden utilizar bloques suaves.

Ejemplo:

``` text
┌────────────────────────────────────┐
│ 💡  Puntos clave                   │
│                                    │
│ • Se declaran con let o const      │
│ • Pueden almacenar distintos tipos │
│ • Tienen un identificador          │
└────────────────────────────────────┘
```

Usar:

-   fondo verde muy claro;
-   borde sutil;
-   icono verde;
-   texto oscuro.

No usar colores fuertes.

------------------------------------------------------------------------

# 12. Bloques de código

Los ejemplos de código deben tener un diseño distinto al contenido
normal.

Ejemplo:

``` text
┌────────────────────────────────────┐
│ 1  const nombre = "Felipe";        │
│ 2  const edad = 26;                │
│ 3                                  │
│ 4  console.log(nombre);            │
└────────────────────────────────────┘
```

Características:

-   fuente monoespaciada;
-   números de línea;
-   syntax highlighting;
-   fondo muy claro para ejemplos estáticos;
-   bordes sutiles;
-   esquinas ligeramente redondeadas.

El código debe ser fácil de copiar.

Si existe botón de copiar, debe ser discreto.

------------------------------------------------------------------------

# 13. Editor interactivo

El editor es uno de los componentes más importantes de la plataforma.

Debe diferenciarse claramente del código estático.

Diseño recomendado:

``` text
┌──────────────────────────────────────┐
│ Prueba el código                 JS  │
├──────────────────────────────────────┤
│ 1  const nombre = "Felipe";          │
│ 2  const edad = 26;                  │
│ 3                                    │
│ 4  console.log(nombre);              │
│ 5  console.log(edad);                │
│                                      │
│                         ▶ Ejecutar   │
├──────────────────────────────────────┤
│ Consola                       Limpiar│
├──────────────────────────────────────┤
│ Felipe                               │
│ 26                                   │
└──────────────────────────────────────┘
```

## Reglas

El editor debe:

-   tener syntax highlighting;
-   mostrar números de línea;
-   permitir editar libremente;
-   tener botón de ejecutar claramente visible;
-   mostrar errores de JavaScript de forma comprensible;
-   mostrar la salida debajo;
-   mantener una altura razonable;
-   no ocupar toda la pantalla innecesariamente.

El botón principal debe utilizar el verde de la marca.

------------------------------------------------------------------------

# 14. Consola

La consola debe tener una apariencia similar a un terminal/editor.

Puede utilizar fondo oscuro aunque el resto de la aplicación sea clara.

Esto crea una separación visual útil.

Ejemplo:

``` text
┌────────────────────────────────────┐
│ Consola                    Limpiar  │
├────────────────────────────────────┤
│ Felipe                             │
│ 26                                 │
│ true                               │
└────────────────────────────────────┘
```

La consola debe:

-   utilizar tipografía monoespaciada;
-   diferenciar errores;
-   permitir scroll;
-   mantener buena legibilidad;
-   no utilizar colores innecesarios.

------------------------------------------------------------------------

# 15. Ejercicios

Los ejercicios deben sentirse integrados dentro de la lección.

Ejemplo:

``` text
┌──────────────────────────────────────┐
│ 🧪 Ejercicio                         │
│                                      │
│ Crea una variable llamada `pais`    │
│ y asígnale el nombre de tu país.    │
│                                      │
│ ┌──────────────────────────────────┐ │
│ │ 1                                │ │
│ └──────────────────────────────────┘ │
│                                      │
│ [ ▶ Ejecutar ]                       │
│                                      │
│ [ ✓ Comprobar ]                      │
└──────────────────────────────────────┘
```

El ejercicio debe tener:

-   instrucciones muy claras;
-   editor;
-   botón ejecutar;
-   botón comprobar;
-   feedback inmediato.

------------------------------------------------------------------------

# 16. Feedback

El feedback es obligatorio después de acciones importantes.

## Éxito

Usar verde.

Ejemplo:

``` text
✓ ¡Correcto! El ejercicio está resuelto.
```

## Error

Usar rojo únicamente para indicar un problema.

Ejemplo:

``` text
✕ Todavía no es correcto.
Revisa el nombre de la variable.
```

## Advertencia

Usar amarillo únicamente cuando sea realmente necesario.

No utilizar colores solo por decoración.

------------------------------------------------------------------------

# 17. Botones

Debe existir una jerarquía clara.

## Primary

Para acciones principales:

``` text
Ejecutar
Comprobar
Siguiente
Continuar
```

Características:

-   verde;
-   texto blanco;
-   bordes redondeados;
-   altura aproximada de 40px;
-   padding horizontal generoso.

## Secondary

Para acciones secundarias:

``` text
Anterior
Cancelar
Limpiar
```

Características:

-   fondo blanco;
-   borde;
-   texto oscuro;
-   hover suave.

## Ghost

Para acciones pequeñas:

``` text
Copiar
Volver
Limpiar consola
```

No utilizar botones verdes para todo.

------------------------------------------------------------------------

# 18. Bordes y sombras

Preferir bordes a sombras.

Usar:

``` css
border: 1px solid var(--color-border);
```

Las sombras deben ser muy sutiles.

Evitar:

``` css
box-shadow: 0 10px 40px rgba(...);
```

No utilizar tarjetas flotantes con sombras fuertes.

La interfaz debe sentirse plana, limpia y estable.

------------------------------------------------------------------------

# 19. Border radius

Usar radios moderados.

Referencia:

``` text
Buttons: 8px
Inputs: 8px
Cards: 10–12px
Code blocks: 8–10px
```

No utilizar radios exagerados tipo:

``` text
50px
```

salvo para elementos circulares específicos.

------------------------------------------------------------------------

# 20. Espaciado

La interfaz debe respirar.

Usar una escala consistente:

``` text
4px
8px
12px
16px
24px
32px
40px
48px
64px
```

Evitar valores arbitrarios como:

``` text
13px
27px
37px
```

cuando no sean necesarios.

------------------------------------------------------------------------

# 21. Iconos

Los iconos deben ser simples y funcionales.

Usarlos para:

-   navegación;
-   estados;
-   acciones;
-   feedback.

No utilizar iconos como decoración.

Mantener un estilo consistente.

Todos los iconos deben tener aproximadamente el mismo peso visual.

------------------------------------------------------------------------

# 22. Responsive design

La aplicación debe funcionar correctamente en:

-   desktop;
-   laptop;
-   tablet;
-   móvil.

## Desktop

Mostrar:

``` text
Sidebar + Contenido + Área interactiva
```

## Tablet

Puede reducirse el sidebar y el área interactiva.

## Móvil

La interfaz debe transformarse a:

``` text
Header
↓
Lección
↓
Editor
↓
Consola
↓
Ejercicio
```

El sidebar debe convertirse en un menú desplegable o drawer.

Nunca forzar tres columnas en una pantalla pequeña.

------------------------------------------------------------------------

# 23. Accesibilidad

Todos los elementos interactivos deben:

-   tener estados de focus visibles;
-   ser navegables con teclado;
-   tener labels apropiados;
-   mantener contraste suficiente;
-   tener áreas de clic cómodas.

No depender exclusivamente del color para comunicar estados.

Ejemplo:

No hacer:

``` text
verde = completado
gris = pendiente
```

sin ningún indicador adicional.

Usar también:

``` text
✓ = completado
○ = pendiente
🔒 = bloqueado
```

------------------------------------------------------------------------

# 24. Estados de UI

Cada componente interactivo debe considerar:

-   default;
-   hover;
-   active;
-   focus;
-   disabled;
-   loading;
-   success;
-   error.

No dejar componentes sin feedback visual.

Los estados deben ser sutiles y consistentes.

------------------------------------------------------------------------

# 25. Animaciones

Las animaciones deben ser mínimas.

Permitidas:

-   hover;
-   transición de botones;
-   apertura/cierre de sidebar;
-   aparición de feedback;
-   actualización de progreso.

Duración recomendada:

``` text
150–250ms
```

No utilizar:

-   animaciones permanentes;
-   rebotes;
-   efectos exagerados;
-   transiciones lentas.

La plataforma es una herramienta de aprendizaje, no un sitio de
marketing.

------------------------------------------------------------------------

# 26. Responsividad del editor

El editor de código debe conservar su legibilidad.

En pantallas pequeñas:

-   reducir el ancho del editor;
-   permitir scroll horizontal en líneas largas;
-   nunca romper el código;
-   mantener números de línea;
-   mantener el botón de ejecución accesible.

Nunca reducir demasiado la fuente del código para intentar que todo
quepa.

------------------------------------------------------------------------

# 27. Arquitectura visual de una lección

Todas las lecciones deben seguir una estructura visual consistente:

``` text
Volver al curso

[TÍTULO]

[Descripción breve]

[Contenido]

[Concepto]

[Ejemplo]

[Resultado]

[Concepto siguiente]

[Ejemplo]

[Ejercicio]

[Feedback]

[Anterior]                         [Siguiente]
```

No cambiar arbitrariamente la estructura entre lecciones.

La consistencia ayuda al estudiante a concentrarse en aprender.

------------------------------------------------------------------------

# 28. Principios de UX educativa

La interfaz debe seguir estas reglas:

### Una acción principal

Cada sección debe tener una acción principal clara.

### Feedback inmediato

Cuando el usuario ejecuta código o comprueba un ejercicio, debe recibir
una respuesta inmediata.

### No esconder información importante

No obligar al estudiante a abrir múltiples menús para encontrar la
explicación.

### Progresión clara

El estudiante debe saber:

``` text
Dónde estoy
Qué estoy aprendiendo
Qué ya completé
Qué sigue
```

### Reducir carga cognitiva

No mostrar demasiados números, estadísticas o elementos simultáneamente.

------------------------------------------------------------------------

# 29. Evitar gamificación excesiva

La plataforma puede tener progreso, pero inicialmente NO debe utilizar:

-   monedas;
-   energía;
-   vidas;
-   rankings;
-   XP innecesario;
-   rachas obligatorias;
-   recompensas constantes;
-   notificaciones invasivas.

La motivación principal debe ser:

``` text
Aprender → practicar → resolver → avanzar
```

------------------------------------------------------------------------

# 30. Regla de consistencia

Antes de crear un componente nuevo, comprobar si ya existe uno
equivalente.

No crear variantes visuales innecesarias.

Por ejemplo, si ya existe:

``` text
PrimaryButton
```

no crear:

``` text
GreenButton
ActionButton
ExecuteButton
ContinueGreenButton
```

salvo que exista una diferencia funcional real.

La interfaz debe utilizar un pequeño sistema de componentes
reutilizables.

------------------------------------------------------------------------

# 31. Regla de diseño antes de código

Antes de implementar una pantalla nueva:

1.  Identificar su propósito.
2.  Identificar la acción principal.
3.  Reutilizar componentes existentes.
4.  Mantener la paleta existente.
5.  Mantener el sistema de espaciado.
6.  Mantener la jerarquía tipográfica.
7.  Comprobar responsive.
8.  Comprobar estados de interacción.

No introducir una decisión visual nueva sin necesidad.

------------------------------------------------------------------------

# 32. Referencia visual

La referencia visual principal es una interfaz educativa de
documentación con:

-   fondo blanco;
-   sidebar claro;
-   verde como color de marca;
-   contenido centrado;
-   editor oscuro;
-   tarjetas de información verde muy claro;
-   bordes sutiles;
-   tipografía limpia;
-   navegación discreta;
-   mucho espacio en blanco.

La interfaz debe sentirse cercana a:

``` text
Documentación técnica
        +
Editor de código
        +
Plataforma educativa
```

y no a:

``` text
Landing page
        +
Red social
        +
Videojuego
```

------------------------------------------------------------------------

# 33. Regla final para el agente

Cuando implementes frontend para este proyecto:

> **Prioriza claridad, consistencia y utilidad sobre decoración.**

Si una decisión visual no mejora:

-   la comprensión;
-   la navegación;
-   la escritura de código;
-   la ejecución;
-   el feedback;
-   o el progreso,

probablemente no debe existir.

Mantén siempre la estética:

**Minimalista · Blanca · Verde · Técnica · Educativa · Profesional**
