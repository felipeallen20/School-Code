interface OutputBlockProps {
  title?: string;
  lines: string[];
}

export default function OutputBlock({
  title = "Salida en consola",
  lines,
}: OutputBlockProps) {
  return (
    <div className="my-6 overflow-hidden rounded-code border border-border">
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-1.5">
        <span className="text-xs text-text-muted">{title}</span>
      </div>
      <pre className="overflow-x-auto bg-terminal p-4 font-mono text-sm leading-6 text-terminal-text">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </pre>
    </div>
  );
}