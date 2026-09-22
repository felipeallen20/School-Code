# DECISIONS.md

Distintas decisiones de contenido se documentan acá junto con el razonamiento
detrás de cada una.

## D1: Contenido en código TypeScript como fuente de verdad

**Decisión:** El contenido de las lecciones se declara en archivos `data/courses/*.ts`
con tipos tipados (ver `types/course.ts`).

**Contexto:** Como el MVP renderiza las lecciones desde datos (no desde
Markdown completo), mantener el contenido en `ts` permite:

- validación de tipos en las publicaciones,
- mutabilidad programática de los datos,
- y que la fuente de verdad coincida con lo que consume la app.

**Alternativas descartadas:** Markdown puro (habría que parsear o duplicar);
CMS (sobredimensionado para un MVP).

Consecuencias: `CURRICULUM.md` es una vista resumida de referencia humana,
no la fuente de verdad.

## D2: Implementación del backend y puerto en el que corre

**Decisión:** La app ("frontend") corre en `http://localhost:3000`. El backend
del sistema de usuario ("app.io") corre en su propio dominio/puerto (p. ej.
`localhost:3200`) siguiendo `PROJECT.md` §20.

**Contexto:** `PROJECT.md` §22 divide el proyecto en frontend y backend
separados. La app frontend es la que se despliega como navegable y el backend
solo es necesario para el sistema de login.

**Consecuencias:** El frontend no se acopla al backend; el perfil en el
backend se crea sin login (opcional) y el login solo existe en el sistema del
profesor.

## D3: Ruta al conteo de referencias comparativas/avance

**Decisión:** La API de datos expone el conteo de referencias del sistema
backend (`reference-counts-api`), documentada en `PROJECT.md` §15-§16.

**Contexto:** Toda referencia va bajo `/compartir/<referencia_amigable>` como
fragmento de URL (no página). Los contadores negativos se tratan como si no
existieran (§16) y no se muestran al público.

**Consecuencias:** No hay página pública de conteo; solo existe la API para
que el frontend backend-app/ app.io puedan consumirla.

## D4: Validación flexible de ejercicios

**Decisión:** Los ejercicios se validan por **condiciones** aplicadas al
código del estudiante y/o a la salida de consola, no por comparación textual
exacta.

**Contexto:** El MVP ejecuta el código del estudiante en un entorno aislado.
`codeMatches` y `outputEquals` cubren la mayoría de los casos; `custom`
permite validaciones específicas por ejercicio.

**Consecuencias:** Un estudiante puede resolver un ejercicio con un enfoque
válido distinto. Los validadores viven en el `exercise` de cada lección.

## D5: Fuente de verdad del plan de estudios

**Decisión:** Los datos viven en un solo lugar, `data/courses/*.ts`, con una
capa de acceso ligera. Las decisiones respecto a temario y contenido se
registran en `CURRICULUM.md`.

**Contexto:** Ante la posibilidad de una fuente de verdad externa (CMS), se
nota que este es un MVP; la prioridad es tener contenido educativo
versionable.

**Consecuencias:** No hay CMS ni edición en vivo durante el MVP.

## D6: Ejecución de código en iframe sandbox

**Decisión:** El código del estudiante se ejecuta en un `<iframe>` con
`sandbox="allow-scripts"` (sin `allow-same-origin`), creado con `srcdoc`
por cada ejecución. La comunicación con la app se hace por `postMessage`.

**Contexto:** Se descartó `new Function`/`eval` directo en la página porque
daría acceso al DOM y al `window` de la aplicación. El iframe sandbox:

- ejecuta en un entorno aislado, sin acceso al DOM de la app;
- sin `allow-same-origin` tiene un origen opaco (sin red ni cookies);
- sin `allow-modals` bloquea `alert`/`confirm`/`prompt`;

El `sandboxDocument` generado inyecta un proxy sobre los métodos de
`console`, envía `{ __codelab: true, type, text }` al padre y reporta un
mensaje `done` al terminar la ejecución síncrona.

**Consecuencias:** La ejecución es asíncrona desde el punto de vista de la
app (hay que esperar el mensaje `done`). Cada "Ejecutar" recrea el entorno,
por lo que el estado no persiste entre ejecuciones (aislamiento por diseño).

## D7: Soporte de Promises/async en el sandbox

**Decisión:** Se soportan `Promise`/`async` y temporizadores de forma
natural: el iframe mantiene su propio event loop, por lo que los `console.*`
emitidos de forma asíncrona se siguen capturando con el proxy instalado.
Los rechazos no manejados se capturan con
`window.addEventListener("unhandledrejection")` y se muestran como errores
comprensibles.

**Contexto:** El evaluador no necesita un tratamiento especial del código
asíncrono; solo el proxy de `console` y la captura de rechazos.

**Consecuencias:** Un `await` dentro del código funciona sin configuración
adicional. La ejecución "termina" (`done`) en el momento del flujo síncrono;
las salidas asíncronas posteriores se agregan a la consola cuando ocurren.