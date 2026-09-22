"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "codelab-progress";
const PROGRESS_EVENT = "codelab-progress-changed";

export type ProgressStore = Record<string, string[]>;

const listeners = new Set<() => void>();

let cache: ProgressStore | null = null;

function readLocalStorage(): ProgressStore {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressStore) : {};
  } catch {
    return {};
  }
}

function getSnapshot(): ProgressStore {
  if (cache === null) {
    cache = typeof window === "undefined" ? {} : readLocalStorage();
  }
  return cache;
}

export { getSnapshot };

function onExternalChange() {
  cache = typeof window === "undefined" ? {} : readLocalStorage();
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", onExternalChange);
  window.addEventListener(PROGRESS_EVENT, onExternalChange);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onExternalChange);
    window.removeEventListener(PROGRESS_EVENT, onExternalChange);
  };
}

export { subscribe };

function persist(next: ProgressStore) {
  cache = next;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(PROGRESS_EVENT));
}

export function useCourseProgress(courseSlug: string) {
  const store = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const completed = store[courseSlug] ?? [];

  const complete = useCallback(
    (lessonSlug: string) => {
      const current = getSnapshot();
      const prev = current[courseSlug] ?? [];
      if (prev.includes(lessonSlug)) return;
      persist({ ...current, [courseSlug]: [...prev, lessonSlug] });
    },
    [courseSlug],
  );

  return { completed, complete };
}