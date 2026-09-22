import Link from "next/link";

const navLinks = [
  { href: "/#cursos", label: "Cursos" },
  { href: "/arenas", label: "Arenas" },
  { href: "/progreso", label: "Progreso" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-[60px] border-b border-border bg-background">
      <div className="mx-auto flex h-full max-w-[1320px] items-center justify-between gap-6 px-4 sm:px-6">
        <Link
          href="/"
          aria-label="CodeLab, inicio"
          className="flex shrink-0 items-center gap-2 text-text"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6 text-primary"
          >
            <path
              d="m8 7-5 5 5 5M16 7l5 5-5 5"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg font-bold tracking-tight">CodeLab</span>
        </Link>

        <nav aria-label="Navegación principal" className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-input px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <div
            aria-hidden="true"
            className="hidden items-center gap-2 rounded-input border border-border px-3 py-2 text-sm text-text-muted md:flex"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <circle cx="9" cy="9" r="6" strokeWidth="1.5" />
              <path
                d="m13.5 13.5 3.5 3.5"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Buscar cursos...
          </div>
          <button
            type="button"
            disabled
            aria-label="Perfil (próximamente)"
            className="rounded-button p-2 text-text-secondary"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <circle cx="12" cy="8" r="3.5" strokeWidth="1.5" />
              <path
                d="M5 19c1.2-3 3.9-4.5 7-4.5s5.8 1.5 7 4.5"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}