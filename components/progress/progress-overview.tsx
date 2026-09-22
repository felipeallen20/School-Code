"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import ProgressBar from "@/components/ui/progress-bar";
import { buttonStyles } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { subscribe, getSnapshot } from "@/lib/progress";

export default function ProgressOverview() {
  const store = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const totalCompleted = Object.values(store).reduce(
    (sum, completed) => sum + completed.length,
    0,
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-text">Progreso</h1>
      <p className="mt-2 text-base text-text-secondary">
        Tu avance se guarda en este navegador.
      </p>

      {totalCompleted === 0 ? (
        <div className="mt-8 rounded-card border border-border bg-surface p-6">
          <p className="text-sm text-text-secondary">
            Aún no has completado lecciones. Empieza el curso y marca tu
            progreso resolviendo los ejercicios.
          </p>
          <Link
            href="/cursos/fundamentos-de-programacion-con-javascript"
            className={`${buttonStyles({ size: "md" })} mt-4`}
          >
            Comenzar curso
          </Link>
        </div>
      ) : null}

      <ul className="mt-8 flex flex-col gap-4">
        {courses.map((course) => {
          const completed = store[course.slug] ?? [];
          const total = course.lessons.length;
          const percent = total ? Math.round((completed.length / total) * 100) : 0;
          return (
            <li key={course.slug}>
              <Link
                href={`/cursos/${course.slug}`}
                className="flex flex-col gap-3 rounded-card border border-border bg-white p-5 transition-colors hover:border-border-strong hover:bg-surface"
              >
                <span className="text-base font-semibold text-text">
                  {course.title}
                </span>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <ProgressBar
                    value={percent}
                    label={`Progreso de ${course.title}: ${percent}%`}
                    className="sm:max-w-xs"
                  />
                  <span className="text-sm text-text-secondary">
                    {completed.length} de {total} lecciones completadas
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}