"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { buttonStyles } from "@/components/ui/button";
import CourseSidebar from "./course-sidebar";

interface CourseLayoutProps {
  courseSlug: string;
  currentSlug?: string;
  children: ReactNode;
}

export default function CourseLayout({
  courseSlug,
  currentSlug,
  children,
}: CourseLayoutProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 px-0 sm:px-6 lg:flex-row lg:gap-6 lg:px-6">
      <aside className="hidden shrink-0 lg:sticky lg:top-[60px] lg:block lg:h-[calc(100vh-60px)] lg:w-64 lg:overflow-y-auto lg:py-8 lg:pr-2">
        <CourseSidebar courseSlug={courseSlug} currentSlug={currentSlug} />
      </aside>

      <div className="min-w-0 flex-1 pb-12">
        <div className="px-4 pt-4 sm:px-0 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={buttonStyles({ variant: "secondary", size: "sm" })}
          >
            Temario
          </button>
        </div>
        {children}
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Temario del curso"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-0 left-0 flex h-full w-80 max-w-[85vw] flex-col bg-background shadow-lg">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="text-sm font-semibold text-text">
                Temario del curso
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                autoFocus
                className={buttonStyles({ variant: "ghost", size: "sm" })}
              >
                Cerrar
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-5">
              <CourseSidebar
                courseSlug={courseSlug}
                currentSlug={currentSlug}
                onNavigate={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}