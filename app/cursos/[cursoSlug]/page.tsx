import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseBySlug, getLessons } from "@/data/courses";

interface CoursePageProps {
  params: Promise<{ cursoSlug: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { cursoSlug } = await params;
  const course = getCourseBySlug(cursoSlug);

  if (!course) {
    notFound();
  }

  const lessons = getLessons(course);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 py-12">
      <Link href="/" className="text-sm font-medium text-text-secondary hover:text-text">
        ← Volver al inicio
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-text">{course.title}</h1>
      <p className="mt-3 text-base text-text-secondary">{course.description}</p>
      <h2 className="mt-12 text-xl font-bold text-text">Temario</h2>
      <ol className="mt-4 flex flex-col divide-y divide-border rounded-card border border-border">
        {lessons.map((lesson) => (
          <li key={lesson.slug}>
            <Link
              href={`/cursos/${course.slug}/lecciones/${lesson.slug}`}
              className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-surface"
            >
              <span className="font-mono text-sm text-text-muted">
                {String(lesson.order).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-text">{lesson.title}</span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}