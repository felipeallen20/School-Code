"use client";

import { useEffect, useRef } from "react";
import { buttonStyles } from "@/components/ui/button";
import type { ConsoleEntry } from "@/lib/use-javascript-runner";

interface ConsoleProps {
  entries: ConsoleEntry[];
  onClear: () => void;
}

export default function Console({ entries, onClear }: ConsoleProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = scrollRef.current;
    if (node) {
      node.scrollTop = node.scrollHeight;
    }
  }, [entries]);

  return (
    <div className="border-t border-border bg-terminal">
      <div className="flex items-center justify-between px-4 py-2">
        <span className="font-mono text-xs text-terminal-text/60">Consola</span>
        <button
          type="button"
          onClick={onClear}
          disabled={entries.length === 0}
          className={buttonStyles({ variant: "ghost", size: "sm" })}
        >
          Limpiar
        </button>
      </div>
      <div
        ref={scrollRef}
        className="h-36 overflow-auto px-4 pb-4 font-mono text-sm leading-6"
      >
        {entries.length === 0 ? (
          <p className="text-terminal-text/40">La salida aparecerá aquí.</p>
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              className={
                entry.type === "error"
                  ? "text-error"
                  : entry.type === "warn"
                    ? "text-warning"
                    : "text-terminal-text"
              }
            >
              {entry.type === "warn" ? "Advertencia: " : ""}
              {entry.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
}