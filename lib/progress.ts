"use client";

import { useCallback, useState } from "react";

export const PROGRESS_STORAGE_KEY = "codelab-progress";

export type ProgressStore = Record<string, string[]>;

function readStore(): ProgressStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressStore) : {};
  } catch {
    return {};
  }
}

export function getCompletedLessons(courseSlug: string): string[] {
  return readStore()[courseSlug] ?? [];
}

function persistStore(store: ProgressStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(store));
}

export function useCourseProgress(courseSlug: string) {
  const [completed, setCompleted] = useState<string[]>(() =>
    getCompletedLessons(courseSlug),
  );

  const complete = useCallback(
    (lessonSlug: string) => {
      setCompleted((prev) => {
        if (prev.includes(lessonSlug)) return prev;
        const next = [...prev, lessonSlug];
        const store = readStore();
        store[courseSlug] = next;
        persistStore(store);
        return next;
      });
    },
    [courseSlug],
  );

  return { completed, complete };
}