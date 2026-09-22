import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonStyles } from "@/components/ui/button";
import { getCourseBySlug, getLessonBySlug, getLessons } from "@/data/courses";
import LessonContent from "@/components/lesson/lesson-content";
import CourseLayout from "@/components/course/course-layout";
import Playground from "@/components/editor/playground";
import Exercise from "@/components/editor/exercise";

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

  const lessons = getLessons(course);
  const lessonIndex = lessons.findIndex((item) => item.slug === lesson.slug);
  const prevLesson = lessonIndex > 0 ? lessons[lessonIndex - 1] : undefined;
  const nextLesson =
    lessonIndex >= 0 && lessonIndex < lessons.length - 1
      ? lessons[lessonIndex + 1]
      : undefined;

  return (
    <CourseLayout courseSlug={course.slug} currentSlug={lesson.slug}>
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-10">
        <div className="min-w-0">
          <article className="mx-auto max-w-2xl px-4 pt-8 sm:px-0">
            <Link
              href={`/cursos/${course.slug}`}
              className="text-sm font-medium text-text-secondary hover:text-text"
            >
              ← Volver al curso
            </Link>
            <p className="mt-6 text-sm text-text-muted">
              Lección {lesson.order} de {course.lessons.length}
            </p>
            <h1 className="mt-2 text-3xl font-bold leading-tight text-text">
              {lesson.title}
            </h1>
            <p className="mt-3 text-base text-text-secondary">
              {lesson.description}
            </p>
            <div className="mt-6 border-t border-border pt-6">
              <LessonContent blocks={lesson.content} />
            </div>
          </article>

          <nav
            aria-label="Navegación entre lecciones"
            className="mx-auto mt-10 flex max-w-2xl items-center justify-between gap-4 border-t border-border px-4 pt-6 sm:px-0"
          >
            {prevLesson ? (
              <Link
                href={`/cursos/${course.slug}/lecciones/${prevLesson.slug}`}
                className={buttonStyles({ variant: "secondary", size: "md" })}
              >
                <span aria-hidden="true">←</span> Anterior
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
            {nextLesson ? (
              <Link
                href={`/cursos/${course.slug}/lecciones/${nextLesson.slug}`}
                className={buttonStyles({ variant: "primary", size: "md" })}
              >
                Siguiente <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
          </nav>
        </div>

        <div className="min-w-0 px-4 pt-4 sm:px-0 sm:pt-8 lg:px-0">
          <h2 className="text-xl font-bold text-text">Experimenta</h2>
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
            <Exercise courseSlug={course.slug} lessonSlug={lesson.slug} />
          ) : null}
        </div>
      </div>
    </CourseLayout>
  );
}