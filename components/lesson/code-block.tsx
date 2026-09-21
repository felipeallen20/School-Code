"use client";

import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { buttonStyles } from "@/components/ui/button";

interface CodeBlockProps {
  title?: string;
  code: string;
  language?: string;
}

export default function CodeBlock({
  title,
  code,
  language = "javascript",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const source = code.trimEnd();

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(source);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <figure className="my-6 overflow-hidden rounded-code border border-border bg-surface">
      <figcaption className="flex items-center justify-end gap-2 border-b border-border px-3 py-1.5">
        {title ? (
          <span className="mr-auto font-mono text-xs text-text-muted">
            {title}
          </span>
        ) : null}
        <button
          type="button"
          onClick={handleCopy}
          className={buttonStyles({ variant: "ghost", size: "sm" })}
        >
          {copied ? "Copiado" : "Copiar"}
        </button>
      </figcaption>
      <Highlight theme={themes.github} code={source} language={language}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="overflow-x-auto p-4 font-mono text-sm leading-6">
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line, className: "table-row" })}
              >
                <span className="table-cell pr-4 select-none text-right text-text-muted">
                  {i + 1}
                </span>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </figure>
  );
}