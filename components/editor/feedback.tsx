"use client";

import type { ExerciseResult } from "@/types/course";

interface FeedbackProps {
  result: ExerciseResult | null;
}

export default function Feedback({ result }: FeedbackProps) {
  if (!result) return null;

  if (result.success) {
    return (
      <div
        key="success"
        role="status"
        className="flex animate-[codelab-feedback-in_200ms_ease-out] items-start gap-3 rounded-card border border-primary bg-primary-lighter p-4"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="mt-0.5 h-5 w-5 shrink-0 text-primary"
        >
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="m6.5 10.2 2.2 2.2 4.8-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>
          <p className="text-sm font-medium text-text">
            ¡Correcto! El ejercicio está resuelto.
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            Lección completada.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      key="error"
      role="alert"
      className="flex animate-[codelab-feedback-in_200ms_ease-out] items-start gap-3 rounded-card border border-error bg-error/5 p-4"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="mt-0.5 h-5 w-5 shrink-0 text-error"
      >
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="m7 7 6 6m0-6-6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <p className="text-sm font-medium text-text">
          Todavía no es correcto. Revisa tu código.
        </p>
        {result.message ? (
          <p className="mt-1 text-sm text-text-secondary">{result.message}</p>
        ) : null}
      </div>
    </div>
  );
}