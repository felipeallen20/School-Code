import type { Arena } from "@/types/arena";
import { custom } from "@/lib/exercise";

export const fundamentalsArena: Arena = {
  slug: "fundamentos-de-programacion",
  title: "Arena de Fundamentos",
  description:
    "Seis retos que combinan variables, condicionales, bucles, funciones, arrays y objetos. Superan a los ejercicios del curso y suben de dificultad poco a poco.",
  challenges: [
    {
      slug: "01-presentacion",
      order: 1,
      title: "Presentación en consola",
      difficulty: "básico",
      description:
        "Combina la creación de variables con console.log para armar una frase.",
      exercise: {
        instruction:
          'Crea una variable nombre con el valor "Lucía" y otra ciudad con el valor "Valencia". Luego muestra en consola una sola frase que incluya ambas.',
        initialCode: `// Escribe aquí tu código`,
        validate: custom((code, output) => {
          if (
            !/\b(nombre|ciudad)\s*=\s*("(Lucía|Valencia)")/.test(code)
          ) {
            return 'Declara las variables nombre y ciudad con esos valores.';
          }
          if (!/console\.log/.test(code)) {
            return "Usa console.log para mostrar la frase.";
          }
          if (
            output.length !== 1 ||
            !output[0].includes("Lucía") ||
            !output[0].includes("Valencia")
          ) {
            return 'Muestra una sola frase que incluya "Lucía" y "Valencia".';
          }
          return null;
        }),
      },
    },
    {
      slug: "02-par-o-impar",
      order: 2,
      title: "¿Par o impar?",
      difficulty: "básico",
      description:
        "Usa un condicional con el operador módulo para decidir qué mostrar.",
      exercise: {
        instruction:
          'Crea una variable numero con el valor 7. Escribe un condicional junto al operador % para mostrar "El número 7 es impar".',
        initialCode: `// Escribe aquí tu código`,
        validate: custom((code, output) => {
          if (!/%.*/.test(code)) {
            return "Usa el operador módulo (%) en el condicional.";
          }
          if (!/\bif\b/.test(code)) {
            return "Usa un condicional if.";
          }
          if (output.length !== 1 || !output[0].includes("El número 7 es impar")) {
            return 'Muestra: El número 7 es impar.';
          }
          return null;
        }),
      },
    },
    {
      slug: "03-sumar-hasta",
      order: 3,
      title: "Suma con bucle",
      difficulty: "intermedio",
      description:
        "Define una función que repita sumas con un bucle y devuelva el total.",
      exercise: {
        instruction:
          "Escribe una función sumarHasta que reciba un número n y devuelva la suma desde 1 hasta n usando un bucle. Llámala con 5 y muestra el resultado en consola.",
        initialCode: `// Escribe aquí tu código`,
        validate: custom((code, output) => {
          if (!/function\s+sumarHasta\s*\([^)]*\)/.test(code)) {
            return 'Define la función "sumarHasta".';
          }
          if (!/\b(for|while)\b/.test(code)) {
            return "Usa un bucle dentro de la función.";
          }
          if (!/\breturn\b/.test(code)) {
            return "La función debe devolver el resultado con return.";
          }
          if (!output.includes("15")) {
            return "Llama a sumarHasta(5); el resultado debe ser 15.";
          }
          return null;
        }),
      },
    },
    {
      slug: "04-promedio",
      order: 4,
      title: "Promedio de notas",
      difficulty: "intermedio",
      description:
        "Recorre un array de notas dentro de una función para calcular el promedio.",
      exercise: {
        instruction:
          "Escribe una función calcularPromedio que reciba un array de notas y devuelva su promedio. Úsala con [7, 8, 10, 6] y muestra el resultado en consola.",
        initialCode: `// Escribe aquí tu código`,
        validate: custom((code, output) => {
          if (!/function\s+calcularPromedio\s*\([^)]*\)/.test(code)) {
            return 'Define la función "calcularPromedio".';
          }
          if (!/\.length|\bfor\b|reduce/.test(code)) {
            return "Recorre el array para sumar sus valores antes de dividir.";
          }
          if (!output.includes("7.75")) {
            return "Llama a calcularPromedio([7, 8, 10, 6]); el promedio debe ser 7.75.";
          }
          return null;
        }),
      },
    },
    {
      slug: "05-contador-de-letras",
      order: 5,
      title: "Contador de letras",
      difficulty: "avanzado",
      description:
        "Recorre un texto con un bucle y cuenta las veces que aparece cada letra.",
      exercise: {
        instruction:
          'Usando el texto "banana", cuenta cuántas veces aparece cada letra y muestra una línea por letra con su cantidad (por ejemplo, a: 3). El orden no importa, pero deben aparecer las tres letras.',
        initialCode: `const texto = "banana";`,
        validate: custom((code, output) => {
          if (output.length !== 3) {
            return "La consola debe mostrar 3 líneas, una por cada letra.";
          }
          const expected = ["a: 3", "b: 1", "n: 2"].sort().join(" ");
          const actual = output.map(String).sort().join(" ");
          if (actual !== expected) {
            return "Deben aparecer las líneas b: 1, a: 3 y n: 2.";
          }
          if (!/\b(for|while)\b/.test(code)) {
            return "Recorre el texto con un bucle para contar las letras.";
          }
          return null;
        }),
      },
    },
    {
      slug: "06-inventario",
      order: 6,
      title: "Inventario del reino",
      difficulty: "avanzado",
      description:
        "Filtra una lista de objetos según un precio mínimo y muestra los nombres que la cumplen.",
      exercise: {
        instruction:
          "Escribe una función productosCaros que reciba el inventario y un precio mínimo, y muestre (una por línea) los nombres de los productos cuyo precio sea mayor o igual al mínimo. Llámala con el inventario y un mínimo de 30.",
        initialCode: `const inventario = [
  { nombre: "Espada", precio: 120 },
  { nombre: "Escudo", precio: 25 },
  { nombre: "Poción", precio: 40 },
  { nombre: "Cuerda", precio: 12 },
  { nombre: "Arco", precio: 75 },
];`,
        validate: custom((code, output) => {
          if (!/function\s+productosCaros\s*\([^)]*,[^)]*\)/.test(code)) {
            return 'Define la función "productosCaros" con dos parámetros.';
          }
          const expected = ["Espada", "Poción", "Arco"];
          if (output.length !== expected.length) {
            return "La consola debe mostrar 3 líneas, una por cada producto caro.";
          }
          for (let i = 0; i < expected.length; i++) {
            if (output[i] !== expected[i]) {
              return `Se esperaba "${expected[i]}" en la línea ${i + 1}.`;
            }
          }
          return null;
        }),
      },
    },
  ],
};