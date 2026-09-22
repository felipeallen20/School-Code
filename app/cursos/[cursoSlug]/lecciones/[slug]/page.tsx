import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseBySlug, getLessonBySlug } from "@/data/courses";
import LessonContent from "@/components/lesson/lesson-content";
import Playground from "@/components/editor/playground";

interface LessonPageProps {
  params: Promise<{ cursoSlug: string; slug: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { cursoSlug, slug } = await params;
  const course = getCourseBySlug(cursoSlug);
  const lesson = course ? getLessonBySlug(course, slug) : undefined;

  if (!course || !lesson) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 py-12">
      <Link
        href={`/cursos/${course.slug}`}
        className="text-sm font-medium text-text-secondary hover:text-text"
      >
        ← Volver al curso
      </Link>
      <p className="mt-8 text-sm text-text-muted">
        Lección {lesson.order} de {course.lessons.length}
      </p>
      <h1 className="mt-2 text-3xl font-bold leading-tight text-text">
        {lesson.title}
      </h1>
      <p className="mt-3 text-base text-text-secondary">{lesson.description}</p>
      <div className="mt-6 border-t border-border pt-6">
        <LessonContent blocks={lesson.content} />
      </div>
      <h2 className="mt-12 text-xl font-bold text-text">Experimenta</h2>
      <p className="mt-2 text-sm text-text-secondary">
        Modifica el código y ejecútalo para ver qué sucede.
      </p>
      <Playground
        initialCode={
          lesson.exercise?.initialCode ??
          "// Escribe aquí tu código y presiona Ejecutar"
        }
      />
      {lesson.exercise ? (
        <p className="mt-10 rounded-card border border-border bg-surface p-4 text-sm text-text-secondary">
          Esta lección incluye un ejercicio interactivo. Estará disponible
          próximamente.
        </p>
      ) : null}
    </main>
  );
}