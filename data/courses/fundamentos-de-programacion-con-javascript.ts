import type { Course } from "@/types/course";
import { custom, outputEquals } from "@/lib/exercise";

export const fundamentalsCourse: Course = {
  slug: "fundamentos-de-programacion-con-javascript",
  title: "Fundamentos de Programación con JavaScript",
  description:
    "Aprende los fundamentos de la programación con teoría, ejemplos y práctica de JavaScript, desde cero hasta tu primer proyecto.",
  lessons: [
    {
      slug: "01-introduccion-a-la-programacion",
      order: 1,
      title: "Introducción a la programación",
      description:
        "Qué es la programación, cómo funciona un computador y el rol del código en la creación de software.",
      content: [
        {
          type: "heading",
          text: "¿Qué es la programación?",
        },
        {
          type: "paragraph",
          text: "Programar consiste en dar instrucciones a una computadora para que resuelva un problema. Así como una receta describe los pasos para preparar un plato, un programa describe los pasos que la máquina debe seguir para lograr un resultado.",
        },
        {
          type: "paragraph",
          text: "JavaScript es un lenguaje que se ejecuta en el navegador. Es ideal para empezar porque puedes ver los resultados de tu código de inmediato, sin instalar ninguna herramienta adicional.",
        },
        {
          type: "heading",
          text: "Tu primer programa",
        },
        {
          type: "paragraph",
          text: "Para mostrar texto en pantalla se usa console.log. Todo lo que coloques entre paréntesis se imprimirá en la consola.",
        },
        {
          type: "code",
          title: "Primer programa",
          code: `console.log("Hola, mundo");`,
        },
        {
          type: "output",
          lines: ["Hola, mundo"],
        },
        {
          type: "info",
          items: [
            "Un programa es un conjunto de instrucciones que la computadora sigue.",
            "JavaScript es un lenguaje que se ejecuta en el navegador.",
            "console.log muestra un valor en la consola.",
            "Cada instrucción termina con punto y coma.",
          ],
        },
        {
          type: "paragraph",
          text: "En las siguientes lecciones aprenderás a guardar información en variables, operar con ella y tomar decisiones. Lo importante ahora es entender que puedes escribir código y ver su resultado.",
        },
      ],
      exercise: {
        instruction:
          'Escribe un console.log que muestre el mensaje "Hola, mundo".',
        initialCode: `// Escribe aquí tu código`,
        validate: outputEquals("Hola, mundo"),
      },
    },
    {
      slug: "02-variables-y-tipos-de-datos",
      order: 2,
      title: "Variables y tipos de datos",
      description:
        "Almacena información en variables y conoce los tipos de datos básicos de JavaScript: número, texto, booleano y más.",
      content: [
        {
          type: "heading",
          text: "¿Qué es una variable?",
        },
        {
          type: "paragraph",
          text: "Una variable permite almacenar un valor en la memoria del computador para reutilizarlo después. Para crear una variable se usa const o let, seguido de un nombre y su valor.",
        },
        {
          type: "code",
          title: "Variables",
          code: `const nombre = "Felipe";
const edad = 26;

console.log(nombre);
console.log(edad);`,
        },
        {
          type: "output",
          lines: ["Felipe", "26"],
        },
        {
          type: "heading",
          text: "Tipos de datos básicos",
        },
        {
          type: "paragraph",
          text: "Una variable puede guardar distintos tipos de información: textos (string), números (number) y valores de verdadero o falso (boolean).",
        },
        {
          type: "code",
          title: "Tipos de datos",
          code: `const ciudad = "Bogotá";
const poblacion = 8000000;
const esCapital = true;

console.log(ciudad);
console.log(poblacion);
console.log(esCapital);`,
        },
        {
          type: "output",
          lines: ["Bogotá", "8000000", "true"],
        },
        {
          type: "info",
          items: [
            "const crea una variable que no puede reasignarse.",
            "let crea una variable que sí puede reasignarse.",
            "Un string se escribe entre comillas.",
            "Un number no lleva comillas.",
            "Un boolean solo puede ser true o false.",
          ],
        },
        {
          type: "paragraph",
          text: "Para elegir entre const, let y var, usa const por defecto. Usa let solo cuando necesites cambiar el valor después. Evita var en código moderno.",
        },
      ],
      exercise: {
        instruction:
          'Crea una variable llamada "pais" y asígnale el nombre de tu país.',
        initialCode: `// Escribe aquí tu código`,
        validate: custom((code) => {
          if (!/(const|let)\s+pais\s*=\s*["'][^"']+["']/.test(code)) {
            return 'Crea una variable llamada "pais" con un texto, por ejemplo: const pais = "Colombia";';
          }
          return null;
        }),
      },
    },
    {
      slug: "03-operadores",
      order: 3,
      title: "Operadores",
      description:
        "Realiza cálculos y comparaciones usando operadores aritméticos, de comparación y lógicos.",
      content: [
        {
          type: "heading",
          text: "Operadores aritméticos",
        },
        {
          type: "paragraph",
          text: "Los operadores aritméticos permiten realizar cálculos: suma (+), resta (-), multiplicación (*) y división (/).",
        },
        {
          type: "code",
          title: "Operadores aritméticos",
          code: `const a = 8;
const b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);`,
        },
        {
          type: "output",
          lines: ["12", "4", "32", "2"],
        },
        {
          type: "heading",
          text: "Operadores de comparación",
        },
        {
          type: "paragraph",
          text: "Los operadores de comparación devuelven un booleano. Sirven para comparar valores: mayor que (>), menor que (<), o igual (===). Duplica el signo igual al comparar.",
        },
        {
          type: "code",
          title: "Operadores de comparación",
          code: `console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 !== 5);`,
        },
        {
          type: "output",
          lines: ["true", "false", "true", "false"],
        },
        {
          type: "heading",
          text: "Operadores lógicos",
        },
        {
          type: "paragraph",
          text: "Los operadores lógicos combinan condiciones. && es verdadero solo si ambas condiciones lo son; || es verdadero si al menos una lo es.",
        },
        {
          type: "code",
          title: "Operadores lógicos",
          code: `console.log(true && true);
console.log(true && false);
console.log(false || true);`,
        },
        {
          type: "output",
          lines: ["true", "false", "true"],
        },
        {
          type: "info",
          items: [
            "Los operadores aritméticos sirven para calcular.",
            "=== compara si dos valores son iguales.",
            "!== compara si dos valores son distintos.",
            "&& exige que ambas condiciones sean verdaderas.",
            "|| basta con que una condición sea verdadera.",
          ],
        },
      ],
      exercise: {
        instruction:
          "Completa el código para calcular y mostrar la suma de las dos variables.",
        initialCode: `const a = 5;
const b = 7;

// Muestra en consola la suma de a y b`,
        validate: outputEquals("12"),
      },
    },
    {
      slug: "04-condicionales",
      order: 4,
      title: "Condicionales",
      description:
        "Toma decisiones en tu código con if, else if y else para controlar el flujo de ejecución.",
      content: [
        {
          type: "heading",
          text: "Tomar decisiones con if",
        },
        {
          type: "paragraph",
          text: "Un condicional permite ejecutar un bloque de código solo si se cumple una condición. El bloque de if se ejecuta cuando la condición es verdadera; el de else, cuando es falsa.",
        },
        {
          type: "code",
          title: "Condicional simple",
          code: `const edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}`,
        },
        {
          type: "output",
          lines: ["Eres mayor de edad"],
        },
        {
          type: "heading",
          text: "Encadenar condiciones con else if",
        },
        {
          type: "paragraph",
          text: "Cuando hay más de dos posibles resultados, se encadenan condiciones con else if. Se evalúan en orden hasta encontrar la primera que sea verdadera.",
        },
        {
          type: "code",
          title: "Varias condiciones",
          code: `const nota = 8;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}`,
        },
        {
          type: "output",
          lines: ["Aprobado"],
        },
        {
          type: "info",
          items: [
            "if ejecuta un bloque solo si la condición es verdadera.",
            "else se ejecuta cuando la condición es falsa.",
            "else if permite evaluar condiciones adicionales en orden.",
            "La condición siempre se evalúa como verdadero o falso.",
          ],
        },
      ],
      exercise: {
        instruction:
          'Escribe un condicional que muestre "Mayor de edad" cuando la variable edad sea mayor o igual a 18.',
        initialCode: `const edad = 20;

// Escribe aquí el condicional`,
        validate: custom((code, output) => {
          if (!/if\s*\(/.test(code)) {
            return 'Usa una estructura con if para resolver el ejercicio.';
          }
          if (!output.includes("Mayor de edad")) {
            return 'La consola debería mostrar "Mayor de edad".';
          }
          return null;
        }),
      },
    },
    {
      slug: "05-bucles",
      order: 5,
      title: "Bucles",
      description:
        "Repite acciones con for y while para procesar datos de forma eficiente.",
      content: [
        {
          type: "heading",
          text: "Repetir con for",
        },
        {
          type: "paragraph",
          text: "Un bucle ejecuta el mismo bloque de código varias veces sin tener que escribirlo repetidamente. Imagina que quieres mostrar los números del 1 al 3: en lugar de escribir tres veces console.log, le pides al programa que repita esa instrucción varias veces.",
        },
        {
          type: "paragraph",
          text: "El bucle for se usa cuando ya sabes de antemano cuántas veces quieres repetir. Su sintaxis se divide en tres partes, separadas por punto y coma, y cada una tiene un trabajo específico:",
        },
        {
          type: "info",
          title: "Las tres partes de un for",
          items: [
            "Inicio: let i = 1 crea el contador y fija su valor inicial.",
            "Condición: i <= 3 decide si el bucle sigue repitiéndose.",
            "Actualización: i++ aumenta el contador en 1 al terminar cada vuelta.",
          ],
        },
        {
          type: "code",
          title: "Bucle for",
          code: `for (let i = 1; i <= 3; i++) {
  console.log(i);
}`,
        },
        {
          type: "output",
          lines: ["1", "2", "3"],
        },
        {
          type: "paragraph",
          text: "El programa sigue esta rutina: empieza con i = 1 y comprueba que 1 <= 3 sea verdadero; si lo es, ejecuta el bloque (muestra 1) y luego actualiza el contador con i++ (i pasa a 2). Repite con 2 y después con 3. Cuando i llega a 4, la condición 4 <= 3 es falsa y el bucle termina.",
        },
        {
          type: "heading",
          text: "Repetir con while",
        },
        {
          type: "paragraph",
          text: "El bucle while se usa cuando no sabes cuántas vueltas harán falta de antemano: repite mientras una condición siga siendo verdadera. A diferencia de for, aquí no hay tres partes separadas por punto y coma: solo se evalúa una condición.",
        },
        {
          type: "paragraph",
          text: "Hazle caso a una diferencia importante: el while no actualiza el contador por ti. Por eso dentro del bloque se escribe contador++, para que el valor cambie cada vuelta y la condición pueda volverse falsa en algún momento.",
        },
        {
          type: "code",
          title: "Bucle while",
          code: `let contador = 1;

while (contador <= 3) {
  console.log(contador);
  contador++;
}`,
        },
        {
          type: "output",
          lines: ["1", "2", "3"],
        },
        {
          type: "paragraph",
          text: "El contador empieza en 1 y el while comprueba la condición antes de cada vuelta. Si nunca cambiaras contador, la condición siempre sería verdadera y el bucle quedaría repitiéndose para siempre: eso es un bucle infinito.",
        },
        {
          type: "info",
          items: [
            "for repite un número de veces conocido de antemano.",
            "while repite mientras una condición siga siendo verdadera.",
            "Si un contador nunca cambia, el bucle nunca termina.",
            "El bucle es ideal para procesar listas de datos.",
          ],
        },
      ],
      exercise: {
        instruction:
          "Usa un bucle for para mostrar los números del 1 al 5, uno por línea.",
        initialCode: `// Escribe aquí tu código`,
        validate: custom((code, output) => {
          if (!/for\s*\(/.test(code)) {
            return "Usa un bucle for para este ejercicio.";
          }
          if (
            output.join("\n") !== "1\n2\n3\n4\n5"
          ) {
            return "La consola debe mostrar 1, 2, 3, 4 y 5, uno por línea.";
          }
          return null;
        }),
      },
    },
    {
      slug: "06-funciones",
      order: 6,
      title: "Funciones",
      description:
        "Organiza tu código en bloques reutilizables que reciben datos y devuelven resultados.",
      content: [
        {
          type: "heading",
          text: "¿Qué es una función?",
        },
        {
          type: "paragraph",
          text: "Una función agrupa un conjunto de instrucciones que se pueden reutilizar. Recibe datos de entrada (parámetros), realiza un trabajo y puede devolver un resultado con return.",
        },
        {
          type: "code",
          title: "Declarar y llamar una función",
          code: `function saludar(nombre) {
  return "Hola, " + nombre;
}

console.log(saludar("Ana"));`,
        },
        {
          type: "output",
          lines: ["Hola, Ana"],
        },
        {
          type: "heading",
          text: "Funciones con varios parámetros",
        },
        {
          type: "paragraph",
          text: "Una función puede recibir varios parámetros separados por comas. Al llamarla, se pasan los valores en el mismo orden.",
        },
        {
          type: "code",
          title: "Sumar con una función",
          code: `function sumar(a, b) {
  return a + b;
}

console.log(sumar(3, 4));`,
        },
        {
          type: "output",
          lines: ["7"],
        },
        {
          type: "info",
          items: [
            "Una función agrupa código reutilizable.",
            "Los parámetros son los datos que recibe la función.",
            "return devuelve un valor al lugar donde se llamó la función.",
            "Para que el código se ejecute, hay que llamar a la función.",
          ],
        },
      ],
      exercise: {
        instruction:
          "Escribe una función sumar que reciba dos números y devuelva su suma. Luego llama a sumar(3, 4) y muestra el resultado en consola.",
        initialCode: `// Escribe aquí tu código`,
        validate: custom((code, output) => {
          if (!/function\s+sumar\s*\([^)]*,[^)]*\)/.test(code)) {
            return 'Define una función llamada "sumar" con dos parámetros.';
          }
          if (!/\breturn\b/.test(code)) {
            return "La función debe devolver la suma con return.";
          }
          if (!output.includes("7")) {
            return "Llama a sumar(3, 4) y muestra su resultado, que debe ser 7.";
          }
          return null;
        }),
      },
    },
    {
      slug: "07-arrays",
      order: 7,
      title: "Arrays",
      description:
        "Almacena listas de valores y recórrelas para trabajar con conjuntos de datos.",
      content: [
        {
          type: "heading",
          text: "¿Qué es un array?",
        },
        {
          type: "paragraph",
          text: "Un array es una lista ordenada de valores. Se escribe entre corchetes y cada elemento se separa con comas. Para acceder a un elemento se usa su índice, que empieza en 0.",
        },
        {
          type: "code",
          title: "Crear y acceder a un array",
          code: `const frutas = ["manzana", "banana", "uva"];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas.length);`,
        },
        {
          type: "output",
          lines: ["manzana", "banana", "3"],
        },
        {
          type: "heading",
          text: "Recorrer un array",
        },
        {
          type: "paragraph",
          text: "Para recorrer todos los elementos de un array se usa for...of, que le asigna cada elemento a una variable una vez por vuelta.",
        },
        {
          type: "code",
          title: "Recorrer con for...of",
          code: `const colores = ["rojo", "verde", "azul"];

for (const color of colores) {
  console.log(color);
}`,
        },
        {
          type: "output",
          lines: ["rojo", "verde", "azul"],
        },
        {
          type: "info",
          items: [
            "Un array es una lista ordenada de valores.",
            "El primer elemento tiene índice 0.",
            "length devuelve la cantidad de elementos.",
            "for...of recorre los elementos de un array en orden.",
          ],
        },
      ],
      exercise: {
        instruction:
          "Crea un array llamado numeros con los valores 1, 2 y 3. Luego muestra el primer elemento en consola.",
        initialCode: `// Escribe aquí tu código`,
        validate: custom((code, output) => {
          if (!/const\s+numeros\s*=\s*\[/.test(code)) {
            return 'Crea un array llamado "numeros" con los valores 1, 2 y 3.';
          }
          if (!output.includes("1")) {
            return "Muestra el primer elemento del array, que debe ser 1.";
          }
          return null;
        }),
      },
    },
    {
      slug: "08-objetos",
      order: 8,
      title: "Objetos",
      description:
        "Agrupa información relacionada usando pares de clave y valor.",
      content: [
        {
          type: "heading",
          text: "¿Qué es un objeto?",
        },
        {
          type: "paragraph",
          text: "Un objeto agrupa información relacionada en pares de clave y valor. La clave es el nombre de la propiedad y el valor puede ser de cualquier tipo. Se escribe entre llaves.",
        },
        {
          type: "code",
          title: "Crear y acceder a un objeto",
          code: `const persona = {
  nombre: "Felipe",
  edad: 26,
};

console.log(persona.nombre);
console.log(persona.edad);`,
        },
        {
          type: "output",
          lines: ["Felipe", "26"],
        },
        {
          type: "heading",
          text: "Modificar propiedades",
        },
        {
          type: "paragraph",
          text: "Aunque el objeto se declare con const, se puede cambiar el valor de sus propiedades mediante el operador punto.",
        },
        {
          type: "code",
          title: "Modificar una propiedad",
          code: `const mascota = { nombre: "Rex" };

mascota.nombre = "Max";
console.log(mascota.nombre);`,
        },
        {
          type: "output",
          lines: ["Max"],
        },
        {
          type: "info",
          items: [
            "Un objeto agrupa datos en pares de clave y valor.",
            "Se accede a una propiedad con objeto.clave.",
            "Se puede modificar el valor de una propiedad.",
            "Los objetos permiten representar entidades del mundo real.",
          ],
        },
      ],
      exercise: {
        instruction:
          'Crea un objeto llamado libro con una propiedad titulo de valor "JavaScript" y muéstrala en consola.',
        initialCode: `// Escribe aquí tu código`,
        validate: custom((code, output) => {
          if (!/const\s+libro\s*=\s*\{/.test(code)) {
            return 'Crea un objeto llamado "libro".';
          }
          if (!/titulo\s*:/.test(code)) {
            return 'El objeto debe tener una propiedad "titulo".';
          }
          if (!output.includes("JavaScript")) {
            return 'Muestra el valor de libro.titulo, que debe ser "JavaScript".';
          }
          return null;
        }),
      },
    },
    {
      slug: "09-scope-y-conceptos-importantes",
      order: 9,
      title: "Scope y conceptos importantes",
      description:
        "Entiende el alcance de las variables y conceptos clave como const, let y hoisting.",
      content: [
        {
          type: "heading",
          text: "¿Qué es el scope?",
        },
        {
          type: "paragraph",
          text: "El scope define en qué parte del código se puede acceder a una variable. Las variables declaradas dentro de un bloque o función solo existen dentro de ese bloque.",
        },
        {
          type: "code",
          title: "Scope global y de bloque",
          code: `const mensaje = "Global";

function mostrar() {
  const interno = "Local";
  console.log(mensaje);
  console.log(interno);
}

mostrar();`,
        },
        {
          type: "output",
          lines: ["Global", "Local"],
        },
        {
          type: "heading",
          text: "const vs let",
        },
        {
          type: "paragraph",
          text: "const no permite reasignar la variable, mientras que let sí. Elegir bien el tipo de variable evita errores difíciles de encontrar.",
        },
        {
          type: "code",
          title: "Reasignación",
          code: `const nombre = "Ana";
let edad = 25;

edad = 26;

console.log(nombre);
console.log(edad);`,
        },
        {
          type: "output",
          lines: ["Ana", "26"],
        },
        {
          type: "info",
          items: [
            "El scope define dónde vive y se accede a una variable.",
            "Una variable de bloque no se puede usar fuera del bloque.",
            "const no permite reasignación; let sí.",
            "Prefiere const por defecto y usa let solo cuando necesites reasignar.",
          ],
        },
      ],
      exercise: {
        instruction:
          'Declara con const una variable llamada "ciudad" con el valor "Lima" y muéstrala en consola.',
        initialCode: `// Escribe aquí tu código`,
        validate: custom((code, output) => {
          if (!/const\s+ciudad\s*=\s*["'][^"']+["']/.test(code)) {
            return 'Crea la variable ciudad con const y asígnale un texto.';
          }
          if (!output.includes("Lima")) {
            return 'La consola debe mostrar el valor "Lima".';
          }
          return null;
        }),
      },
    },
    {
      slug: "10-dom",
      order: 10,
      title: "DOM",
      description:
        "Manipula el contenido de una página web desde JavaScript.",
      content: [
        {
          type: "heading",
          text: "¿Qué es el DOM?",
        },
        {
          type: "paragraph",
          text: "El DOM (Document Object Model) es la representación de una página web como una estructura de nodos que JavaScript puede leer y modificar. Así, el código puede cambiar textos, estilos y estructura de la página.",
        },
        {
          type: "heading",
          text: "Seleccionar un elemento",
        },
        {
          type: "paragraph",
          text: "Para manipular un elemento hay que seleccionarlo primero. document.getElementById busca un elemento por su atributo id.",
        },
        {
          type: "code",
          title: "Seleccionar y leer contenido",
          code: `const titulo = document.getElementById("titulo");

console.log(titulo.textContent);`,
        },
        {
          type: "output",
          title: "Resultado esperado (requiere página HTML)",
          lines: ["Hola CodeLab"],
        },
        {
          type: "heading",
          text: "Modificar contenido",
        },
        {
          type: "paragraph",
          text: "Una vez seleccionado el elemento, se puede cambiar su contenido asignando un nuevo valor a textContent.",
        },
        {
          type: "code",
          title: "Modificar contenido",
          code: `const parrafo = document.getElementById("mensaje");

parrafo.textContent = "¡Aprendí JavaScript!";`,
        },
        {
          type: "info",
          items: [
            "El DOM representa la página web como nodos manipulables.",
            "document.getElementById selecciona un elemento por su id.",
            "textContent lee o cambia el texto de un elemento.",
            "Con el DOM puedes actualizar la página tras las acciones del usuario.",
          ],
        },
        {
          type: "paragraph",
          text: "El codigo relacionado con el DOM necesita una página HTML real para ejecutarse. En este curso lo exploras de forma conceptual y lo aplicarás en el proyecto final.",
        },
      ],
      exercise: {
        instruction:
          'Escribe el código que seleccione un elemento con id "titulo" usando document.getElementById y guarde su textContent en una variable llamada contenido.',
        initialCode: `// Escribe aquí tu código`,
        validate: custom((code) => {
          if (!/getElementById\s*\(\s*["']titulo["']\s*\)/.test(code)) {
            return 'Selecciona el elemento con id "titulo" usando document.getElementById.';
          }
          if (!/textContent/.test(code)) {
            return "Accede a la propiedad textContent del elemento.";
          }
          if (!/contenido/.test(code)) {
            return 'Guarda el resultado en una variable llamada "contenido".';
          }
          return null;
        }),
      },
    },
    {
      slug: "11-proyecto-final",
      order: 11,
      title: "Proyecto final",
      description:
        "Integra todo lo aprendido construyendo un pequeño proyecto completo.",
      content: [
        {
          type: "heading",
          text: "Integrar los conceptos",
        },
        {
          type: "paragraph",
          text: "Un programa real combina variables, funciones, bucles y condicionales para resolver un problema. El siguiente ejemplo cuenta cuántos números pares hay en una lista.",
        },
        {
          type: "code",
          title: "Mini proyecto: contar pares",
          code: `function contarPares(numeros) {
  let pares = 0;

  for (const numero of numeros) {
    if (numero % 2 === 0) {
      pares++;
    }
  }

  return pares;
}

const datos = [1, 2, 3, 4, 5, 6];

console.log(contarPares(datos));`,
        },
        {
          type: "output",
          lines: ["3"],
        },
        {
          type: "paragraph",
          text: "Se define una función que recorre la lista con un bucle, revisa cada número con un condicional y actualiza un contador hasta devolver el resultado.",
        },
        {
          type: "info",
          items: [
            "Las funciones organizan la lógica en bloques reutilizables.",
            "Los bucles recorren conjuntos de datos.",
            "Los condicionales deciden qué hacer con cada dato.",
            "Dividir un problema grande en pequeñas funciones lo hace más fácil de resolver.",
          ],
        },
        {
          type: "paragraph",
          text: "Intentá construir tu propia función sobre un problema similar: recibe una lista de nombres y devuelve cuántos empiezan con la letra A.",
        },
      ],
      exercise: {
        instruction:
          "Escribe una función sumarTres que reciba tres números y devuelva su suma. Llámala con (2, 3, 4) y muestra el resultado en consola.",
        initialCode: `// Escribe aquí tu código`,
        validate: custom((code, output) => {
          if (!/function\s+sumarTres\s*\([^)]*,[^)]*,[^)]*\)/.test(code)) {
            return 'Define una función llamada "sumarTres" con tres parámetros.';
          }
          if (!/\breturn\b/.test(code)) {
            return "La función debe devolver la suma con return.";
          }
          if (!output.includes("9")) {
            return "Llama a sumarTres(2, 3, 4); su resultado debe ser 9.";
          }
          return null;
        }),
      },
    },
  ],
};