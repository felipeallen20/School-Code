"use client";

import { useState } from "react";
import { buttonStyles } from "@/components/ui/button";
import CodeEditor from "./code-editor";
import Console from "./console";
import { useJavaScriptRunner } from "@/lib/use-javascript-runner";

interface PlaygroundProps {
  initialCode: string;
  title?: string;
}

export default function Playground({
  initialCode,
  title = "Prueba el código",
}: PlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const { iframeRef, entries, running, run, clear } = useJavaScriptRunner();

  const canRun = code.trim().length > 0 && !running;

  return (
    <section className="my-10 overflow-hidden rounded-card border border-border bg-surface">
      <iframe
        ref={iframeRef}
        title="Entorno de ejecución de JavaScript"
        sandbox="allow-scripts"
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="flex items-center justify-between gap-4 border-b border-border bg-surface px-4 py-2">
        <span className="text-sm font-medium text-text">{title}</span>
        <button
          type="button"
          onClick={() => run(code)}
          disabled={!canRun}
          className={buttonStyles({ variant: "primary", size: "md" })}
        >
          {running ? "Ejecutando..." : "Ejecutar"}
        </button>
      </div>
      <CodeEditor
        value={code}
        onChange={setCode}
        label={`Editor: ${title}`}
        placeholder={"// Escribe aquí tu código y presiona Ejecutar"}
      />
      <Console entries={entries} onClear={clear} />
    </section>
  );
}