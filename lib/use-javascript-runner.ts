"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { buildSandboxDocument } from "./execute-code";
import type { ConsoleEntryType } from "./execute-code";

export interface ConsoleEntry {
  id: number;
  type: ConsoleEntryType;
  text: string;
}

const VALID_TYPES: ConsoleEntryType[] = ["log", "info", "warn", "error"];

interface SandboxMessage {
  __codelab?: boolean;
  type?: string;
  text?: string;
}

export function useJavaScriptRunner() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const idRef = useRef(0);
  const [entries, setEntries] = useState<ConsoleEntry[]>([]);
  const [running, setRunning] = useState(false);

  const handleMessage = useCallback((event: MessageEvent) => {
    if (event.source !== iframeRef.current?.contentWindow) {
      return;
    }

    const data = event.data as SandboxMessage | undefined;
    if (!data || data.__codelab !== true || typeof data.type !== "string") {
      return;
    }

    if (data.type === "done") {
      setRunning(false);
      return;
    }

    if (!VALID_TYPES.includes(data.type as ConsoleEntryType)) {
      return;
    }

    idRef.current += 1;
    setEntries((prev) => [
      ...prev,
      { id: idRef.current, type: data.type as ConsoleEntryType, text: String(data.text ?? "") },
    ]);
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  const clear = useCallback(() => {
    idRef.current = 0;
    setEntries([]);
  }, []);

  const run = useCallback((code: string) => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    idRef.current = 0;
    setEntries([]);
    setRunning(true);
    iframe.setAttribute("srcdoc", buildSandboxDocument(code));
  }, []);

  return { iframeRef, entries, running, run, clear };
}