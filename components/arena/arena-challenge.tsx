"use client";

import { useEffect, useRef, useState } from "react";
import { buttonStyles } from "@/components/ui/button";
import CodeEditor from "@/components/editor/code-editor";
import Console from "@/components/editor/console";
import Feedback from "@/components/editor/feedback";
import { useJavaScriptRunner } from "@/lib/use-javascript-runner";
import { useArenaProgress } from "@/lib/progress";
import { getArenaBySlug, getChallengeBySlug } from "@/data/arenas";
import type { ExerciseResult } from "@/types/course";

interface ArenaChallengeProps {
  arenaSlug: string;
  challengeSlug: string;
}

export default function ArenaChallenge({
  arenaSlug,
  challengeSlug,
}: ArenaChallengeProps) {
  const arena = getArenaBySlug(arenaSlug);
  const challenge = arena ? getChallengeBySlug(arena, challengeSlug) : undefined;
  const exercise = challenge?.exercise;

  const [code, setCode] = useState(exercise?.initialCode ?? "");
  const [feedback, setFeedback] = useState<ExerciseResult | null>(null);
  const checkPendingRef = useRef(false);
  const lastCheckedRef = useRef<string | null>(null);
  const { iframeRef, entries, running, run, clear } = useJavaScriptRunner();
  const { complete } = useArenaProgress(arenaSlug);

  useEffect(() => {
    if (!checkPendingRef.current || running || !exercise) return;
    checkPendingRef.current = false;
    const output = entries
      .filter((entry) => entry.type === "log" || entry.type === "info")
      .map((entry) => entry.text);
    const result = exercise.validate(code, output);
    setFeedback(result);
    lastCheckedRef.current = code;
    if (result.success) {
      complete(challengeSlug);
    }
  }, [running, entries, exercise, code, complete, challengeSlug]);

  if (!exercise) return null;

  const canRun = code.trim().length > 0 && !running;

  function handleEdit(next: string) {
    setCode(next);
    if (lastCheckedRef.current !== null && next !== lastCheckedRef.current) {
      setFeedback(null);
      lastCheckedRef.current = null;
    }
  }

  function handleExecute() {
    setFeedback(null);
    run(code);
  }

  function handleCheck() {
    if (running || code.trim().length === 0) return;
    checkPendingRef.current = true;
    setFeedback(null);
    run(code);
  }

  return (
    <section className="overflow-hidden rounded-card border border-border bg-surface">
      <iframe
        ref={iframeRef}
        title="Entorno de ejecución del reto"
        sandbox="allow-scripts"
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2">
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 text-primary"
        >
          <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="2.5" fill="currentColor" />
        </svg>
        <span className="text-sm font-medium text-text">Reto</span>
      </div>
      <div className="px-4 py-4">
        <p className="text-sm leading-relaxed text-text">
          {exercise.instruction}
        </p>
      </div>
      <CodeEditor
        value={code}
        onChange={handleEdit}
        label="Editor del reto"
        placeholder="// Escribe aquí tu código"
      />
      <div className="flex items-center gap-3 border-t border-border bg-surface px-4 py-3">
        <button
          type="button"
          onClick={handleExecute}
          disabled={!canRun}
          className={buttonStyles({ variant: "secondary", size: "md" })}
        >
          Ejecutar
        </button>
        <button
          type="button"
          onClick={handleCheck}
          disabled={!canRun}
          className={buttonStyles({ variant: "primary", size: "md" })}
        >
          Comprobar
        </button>
      </div>
      <Console entries={entries} onClear={clear} />
      <div className="px-4 pt-3 pb-4">
        <Feedback result={feedback} />
      </div>
    </section>
  );
}