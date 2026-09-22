"use client";

import { useLayoutEffect, useRef } from "react";
import { Highlight, themes } from "prism-react-renderer";
import type { KeyboardEvent } from "react";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  height?: number;
}

export default function CodeEditor({
  value,
  onChange,
  label = "Editor de código",
  placeholder,
  height = 220,
}: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const mirrorRef = useRef<HTMLDivElement>(null);
  const gutterRef = useRef<HTMLDivElement>(null);

  const lineCount = value.length === 0 ? 1 : value.split("\n").length;
  const displayCode = value.length === 0 ? placeholder || "\n" : value;

  useLayoutEffect(() => {
    const gutter = gutterRef.current;
    const textarea = textareaRef.current;
    if (gutter && textarea) {
      textarea.style.paddingLeft = `${gutter.offsetWidth + 16}px`;
    }
  }, [lineCount, displayCode.length]);

  function syncScroll() {
    const textarea = textareaRef.current;
    const mirror = mirrorRef.current;
    if (!textarea || !mirror) return;
    mirror.scrollTop = textarea.scrollTop;
    mirror.scrollLeft = textarea.scrollLeft;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Tab") {
      event.preventDefault();
      const textarea = event.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const next = value.slice(0, start) + "  " + value.slice(end);
      onChange(next);
      requestAnimationFrame(() => {
        textarea.selectionStart = start + 2;
        textarea.selectionEnd = start + 2;
      });
    }
  }

  return (
    <div className="relative overflow-hidden bg-surface focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary/40" style={{ height }}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onScroll={syncScroll}
        onKeyDown={handleKeyDown}
        aria-label={label}
        placeholder={placeholder}
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        wrap="off"
        className="absolute inset-0 z-0 h-full w-full resize-none overflow-auto bg-transparent py-4 pr-4 font-mono text-sm leading-6 text-transparent caret-text outline-none placeholder:text-text-muted"
        style={{ tabSize: 2, whiteSpace: "pre" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      >
        <div ref={mirrorRef} className="h-full overflow-auto">
          <div className="flex w-max min-w-full">
            <div
              ref={gutterRef}
              className="sticky left-0 z-10 flex shrink-0 flex-col bg-surface py-4 pl-4 pr-3 font-mono text-sm leading-6 text-text-muted select-none"
            >
              {Array.from({ length: lineCount }, (_, index) => (
                <span key={index}>{index + 1}</span>
              ))}
            </div>
            <Highlight theme={themes.github} code={displayCode} language="javascript">
              {({ tokens, getLineProps, getTokenProps }) => (
                <pre className="py-4 pr-4 font-mono text-sm leading-6" style={{ tabSize: 2 }}>
                  {tokens.map((line, index) => (
                    <div key={index} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </div>
      </div>
    </div>
  );
}