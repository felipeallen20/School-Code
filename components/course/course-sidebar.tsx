"use client";

import Link from "next/link";
import ProgressBar from "@/components/ui/progress-bar";
import { useCourseProgress } from "@/lib/progress";
import { getCourseBySlug, getLessons } from "@/data/courses";

interface CourseSidebarProps {
  courseSlug: string;
  currentSlug?: string;
  onNavigate?: () => void;
}

function StatusIcon({ completed, current }: { completed: boolean; current: boolean }) {
  if (completed) {
    return (
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-primary"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3a1 1 0 0 0-1.4-1.4L9 10.6 7.7 9.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (current) {
    return <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-primary" />;
  }
  return (
    <span
      aria-hidden="true"
      className="h-2 w-2 shrink-0 rounded-full border border-border-strong"
    />
  );
}

export default function CourseSidebar({
  courseSlug,
  currentSlug,
  onNavigate,
}: CourseSidebarProps) {
  const course = getCourseBySlug(courseSlug);
  const lessons = course ? getLessons(course) : [];
  const { completed } = useCourseProgress(courseSlug);

  if (!course) return null;

  const percent =
    lessons.length > 0
      ? Math.round((completed.length / lessons.length) * 100)
      : 0;

  return (
    <aside className="flex flex-col gap-6">
      <div>
        <Link href={`/cursos/${course.slug}`} className="block">
          <h2 className="text-base font-bold leading-snug text-text">
            {course.title}
          </h2>
        </Link>
        <div className="mt-4">
          <ProgressBar
            value={percent}
            label={`Progreso del curso: ${percent}% completado`}
          />
          <p className="mt-2 text-sm text-text-muted">{percent}% completado</p>
        </div>
      </div>

      <nav aria-label="Temario del curso" className="flex flex-col gap-1">
        <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Temario
        </p>
        {lessons.map((lesson) => {
          const isCurrent = lesson.slug === currentSlug;
          const isCompleted = completed.includes(lesson.slug);
          const label = isCompleted ? `${lesson.title} (completada)` : lesson.title;

          const content = (
            <>
              <span className="flex w-4 shrink-0 justify-center">
                <StatusIcon completed={isCompleted} current={isCurrent} />
              </span>
              <span className="font-mono text-xs text-text-muted">
                {String(lesson.order).padStart(2, "0")}
              </span>
              <span className="min-w-0 truncate">{lesson.title}</span>
            </>
          );

          if (isCurrent) {
            return (
              <span
                key={lesson.slug}
                aria-current="page"
                aria-label={label}
                className="flex items-center gap-2 rounded-input bg-primary-light px-3 py-2 text-sm font-medium text-text"
              >
                {content}
              </span>
            );
          }

          return (
            <Link
              key={lesson.slug}
              href={`/cursos/${course.slug}/lecciones/${lesson.slug}`}
              aria-label={label}
              onClick={onNavigate}
              className="flex items-center gap-2 rounded-input px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-surface hover:text-text"
            >
              {content}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}