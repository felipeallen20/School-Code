"use client";

import Link from "next/link";
import CourseLogo from "@/components/ui/course-logo";
import ProgressBar from "@/components/ui/progress-bar";
import { getCourseBySlug, getLessons } from "@/data/courses";
import { useCourseProgress } from "@/lib/progress";

interface CourseCardProps {
  courseSlug: string;
}

export default function CourseCard({ courseSlug }: CourseCardProps) {
  const course = getCourseBySlug(courseSlug);
  const { completed } = useCourseProgress(courseSlug);
  if (!course) return null;

  const lessons = getLessons(course);
  const total = lessons.length;
  const percent = total ? Math.round((completed.length / total) * 100) : 0;

  return (
    <Link
      href={`/cursos/${course.slug}`}
      className="group flex flex-col gap-4 rounded-card border border-border bg-white p-6 transition-colors hover:border-border-strong hover:bg-surface"
    >
      <div className="flex items-start justify-between gap-4">
        <CourseLogo slug={course.slug} />
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-text-secondary">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3.5 w-3.5 text-text-muted"
          >
            <path
              d="M3 4.5A1.5 1.5 0 0 1 4.5 3h3A2.5 2.5 0 0 1 10 4.3 2.5 2.5 0 0 1 12.5 3h3A1.5 1.5 0 0 1 17 4.5v11a1.5 1.5 0 0 1-1.5 1.5h-3a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0-2.5-2.5h-3A1.5 1.5 0 0 1 3 15.5v-11Z"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M10 4.3v12" strokeWidth="1.5" />
          </svg>
          {total} lecciones
        </span>
      </div>

      <div>
        <h3 className="text-base font-semibold text-text">{course.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-secondary">
          {course.description}
        </p>
      </div>

      <div className="mt-auto pt-1">
        <ProgressBar
          value={percent}
          label={`Progreso de ${course.title}: ${percent}%`}
        />
        <p className="mt-2 text-xs text-text-muted">
          {completed.length} de {total} lecciones completadas
        </p>
      </div>

      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
        Ver curso
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path
            d="M3 10h13m0 0-4-4m4 4-4 4"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}