import { fundamentalsCourse } from "./fundamentos-de-programacion-con-javascript";
import type { Course, Lesson } from "@/types/course";

export const courses: Course[] = [fundamentalsCourse];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getLessonBySlug(
  course: Course,
  lessonSlug: string,
): Lesson | undefined {
  return course.lessons.find((lesson) => lesson.slug === lessonSlug);
}

export function getLessons(course: Course): Lesson[] {
  return [...course.lessons].sort((a, b) => a.order - b.order);
}