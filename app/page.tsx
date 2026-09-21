import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center px-6">
      <main className="flex w-full max-w-2xl flex-col items-center py-24 text-center">
        <span className="mb-6 inline-flex items-center rounded-full bg-primary-light px-3 py-1 text-sm font-medium text-primary">
          Aprende a programar en JavaScript
        </span>
        <h1 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
          Escribe, ejecuta y domina el código
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
          CodeLab es una plataforma interactiva para aprender los fundamentos
          de la programación. Lee la teoría, experimenta con código y resuelve
          ejercicios directamente en el navegador.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/cursos/fundamentos-de-programacion-con-javascript" className={buttonStyles({ size: "lg" })}>
            Comenzar curso
          </Link>
          <Link href="#cursos" className={buttonStyles({ variant: "secondary", size: "lg" })}>
            Ver cursos
          </Link>
        </div>
      </main>

      <section id="cursos" className="w-full max-w-2xl pb-24">
        <h2 className="text-xl font-bold text-text">Cursos</h2>
        <Link
          href="/cursos/fundamentos-de-programacion-con-javascript"
          className="mt-4 flex flex-col gap-2 rounded-card border border-border bg-white p-6 transition-colors hover:border-border-strong hover:bg-surface"
        >
          <span className="text-base font-semibold text-text">
            Fundamentos de Programación con JavaScript
          </span>
          <span className="text-sm text-text-secondary">
            11 lecciones · Desde cero hasta tu primer proyecto
          </span>
        </Link>
      </section>
    </div>
  );
}