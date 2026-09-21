import type { Course } from "@/types/course";

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
      content: [],
    },
    {
      slug: "02-variables-y-tipos-de-datos",
      order: 2,
      title: "Variables y tipos de datos",
      description:
        "Almacena información en variables y conoce los tipos de datos básicos de JavaScript: número, texto, booleano y más.",
      content: [],
    },
    {
      slug: "03-operadores",
      order: 3,
      title: "Operadores",
      description:
        "Realiza cálculos y comparaciones usando operadores aritméticos, de comparación y lógicos.",
      content: [],
    },
    {
      slug: "04-condicionales",
      order: 4,
      title: "Condicionales",
      description:
        "Toma decisiones en tu código con if, else if y else para controlar el flujo de ejecución.",
      content: [],
    },
    {
      slug: "05-bucles",
      order: 5,
      title: "Bucles",
      description:
        "Repite acciones con for y while para procesar datos de forma eficiente.",
      content: [],
    },
    {
      slug: "06-funciones",
      order: 6,
      title: "Funciones",
      description:
        "Organiza tu código en bloques reutilizables que reciben datos y devuelven resultados.",
      content: [],
    },
    {
      slug: "07-arrays",
      order: 7,
      title: "Arrays",
      description:
        "Almacena listas de valores y recórrelas para trabajar con conjuntos de datos.",
      content: [],
    },
    {
      slug: "08-objetos",
      order: 8,
      title: "Objetos",
      description:
        "Agrupa información relacionada usando pares de clave y valor.",
      content: [],
    },
    {
      slug: "09-scope-y-conceptos-importantes",
      order: 9,
      title: "Scope y conceptos importantes",
      description:
        "Entiende el alcance de las variables y conceptos clave como const, let y hoisting.",
      content: [],
    },
    {
      slug: "10-dom",
      order: 10,
      title: "DOM",
      description:
        "Manipula el contenido de una página web desde JavaScript.",
      content: [],
    },
    {
      slug: "11-proyecto-final",
      order: 11,
      title: "Proyecto final",
      description:
        "Integra todo lo aprendido construyendo un pequeño proyecto completo.",
      content: [],
    },
  ],
};