export type LessonStatus = "locked" | "pending" | "completed";

export interface Course {
  slug: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  slug: string;
  order: number;
  title: string;
  description: string;
  content: ContentBlock[];
  exercise?: Exercise;
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "info"; title?: string; items: string[] }
  | { type: "code"; title?: string; code: string }
  | { type: "output"; title?: string; lines: string[] };

export interface Exercise {
  instruction: string;
  initialCode: string;
  validate: (code: string, output: string[]) => ExerciseResult;
}

export type ExerciseResult =
  | { success: true }
  | { success: false; message: string };