import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonStyles } from "@/components/ui/button";
import { getCourseBySlug, getLessons } from "@/data/courses";
import CourseLayout from "@/components/course/course-layout";

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
  const firstLesson = lessons[0];

  return (
    <CourseLayout courseSlug={course.slug}>
      <div className="px-4 pt-8 sm:px-0">
        <p className="text-sm text-text-muted">Curso</p>
        <h1 className="mt-2 text-3xl font-bold text-text">{course.title}</h1>
        <p className="mt-3 max-w-2xl text-base text-text-secondary">
          {course.description}
        </p>
        {firstLesson ? (
          <div className="mt-6">
            <Link
              href={`/cursos/${course.slug}/lecciones/${firstLesson.slug}`}
              className={buttonStyles({ size: "lg" })}
            >
              Comenzar curso
            </Link>
          </div>
        ) : null}

        <h2 className="mt-12 text-xl font-bold text-text">Temario</h2>
        <ol className="mt-4 flex max-w-2xl flex-col divide-y divide-border rounded-card border border-border">
          {lessons.map((lesson) => (
            <li key={lesson.slug}>
              <Link
                href={`/cursos/${course.slug}/lecciones/${lesson.slug}`}
                className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-surface"
              >
                <span className="font-mono text-sm text-text-muted">
                  {String(lesson.order).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-text">
                  {lesson.title}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </CourseLayout>
  );
}