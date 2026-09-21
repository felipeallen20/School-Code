interface InfoBlockProps {
  title?: string;
  items: string[];
}

export default function InfoBlock({ title, items }: InfoBlockProps) {
  return (
    <aside className="my-6 rounded-card border border-primary-light bg-primary-lighter p-6">
      <h3 className="flex items-center gap-2 text-base font-semibold text-text">
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="h-5 w-5 text-primary"
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
        {title ?? "Puntos clave"}
      </h3>
      <ul className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-text">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="mt-1 h-3.5 w-3.5 shrink-0 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3a1 1 0 0 0-1.4-1.4L9 10.6 7.7 9.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4Z"
                clipRule="evenodd"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}