import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";
import { courses } from "@/data/courses";
import CourseCard from "@/components/course/course-card";
import HeroCodePanel from "@/components/home/hero-code-panel";

const features = [
  {
    label: "Teoría clara con ejemplos reales",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-primary"
      >
        <path
          d="M3 4.5A1.5 1.5 0 0 1 4.5 3h3A2.5 2.5 0 0 1 10 4.3 2.5 2.5 0 0 1 12.5 3h3A1.5 1.5 0 0 1 17 4.5v11a1.5 1.5 0 0 1-1.5 1.5h-3a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0-2.5-2.5h-3A1.5 1.5 0 0 1 3 15.5v-11Z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M10 4.3v12" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Código que ejecutas al instante",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-primary"
      >
        <circle cx="10" cy="10" r="7.25" strokeWidth="1.5" />
        <path d="m8.5 7 3.5 3-3.5 3V7Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Ejercicios con feedback inmediato",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-primary"
      >
        <circle cx="10" cy="10" r="7.25" strokeWidth="1.5" />
        <path
          d="m6.5 10.3 2.2 2.2 4.8-5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="border-b border-border">
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1 text-sm font-medium text-primary">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  d="m7 4.5-4.5 5.5L7 15.5M13 4.5 17.5 10 13 15.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Aprende a programar en JavaScript
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-text sm:text-5xl">
              Escribe, ejecuta y domina el código
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              CodeLab es una plataforma interactiva para aprender los
              fundamentos de la programación. Lee la teoría, experimenta con
              código y resuelve ejercicios directamente en el navegador.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                href="/cursos/fundamentos-de-programacion-con-javascript"
                className={buttonStyles({ size: "lg" })}
              >
                Comenzar curso
              </Link>
              <Link
                href="#cursos"
                className={buttonStyles({ variant: "secondary", size: "lg" })}
              >
                Ver cursos
              </Link>
            </div>
            <ul className="mt-10 flex flex-col gap-3 text-sm text-text-secondary sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              {features.map((feature) => (
                <li key={feature.label} className="flex items-center gap-2">
                  {feature.icon}
                  {feature.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-lg lg:max-w-none">
            <HeroCodePanel />
          </div>
        </div>
      </section>

      <section id="cursos" className="w-full">
        <div className="mx-auto w-full max-w-[1320px] px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-text">Cursos disponibles</h2>
            <p className="max-w-2xl text-base text-text-secondary">
              Cada curso combina teoría, ejemplos y ejercicios prácticos.
              Empieza desde cero y avanza a tu ritmo.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.slug} courseSlug={course.slug} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}