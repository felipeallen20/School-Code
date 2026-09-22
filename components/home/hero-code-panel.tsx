"use client";

import { Highlight, themes } from "prism-react-renderer";

const code = `const saludo = "Hola, CodeLab";

function doblar(n) {
  return n * 2;
}

console.log(doblar(21));`;

export default function HeroCodePanel() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-card border border-border bg-surface"
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-background px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-border-strong" />
        <span className="h-3 w-3 rounded-full bg-border-strong" />
        <span className="h-3 w-3 rounded-full bg-border-strong" />
        <span className="ml-3 font-mono text-xs text-text-muted">main.js</span>
      </div>
      <Highlight theme={themes.github} code={code} language="javascript">
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="overflow-x-auto p-5 font-mono text-sm leading-6">
            {tokens.map((line, index) => (
              <div
                key={index}
                {...getLineProps({ line, className: "table-row" })}
              >
                <span className="table-cell pr-4 text-right text-text-muted select-none">
                  {index + 1}
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
      <div className="flex items-center gap-2 border-t border-border bg-terminal px-5 py-3 font-mono text-sm text-terminal-text">
        <span className="text-terminal-text/50">$</span>
        42
      </div>
    </div>
  );
}