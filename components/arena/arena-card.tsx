"use client";

import Link from "next/link";
import { getArenaBySlug, getChallenges } from "@/data/arenas";
import { useArenaProgress } from "@/lib/progress";
import ProgressBar from "@/components/ui/progress-bar";

interface ArenaCardProps {
  arenaSlug: string;
}

export default function ArenaCard({ arenaSlug }: ArenaCardProps) {
  const arena = getArenaBySlug(arenaSlug);
  const { completed } = useArenaProgress(arenaSlug);
  if (!arena) return null;

  const challenges = getChallenges(arena);
  const total = challenges.length;
  const percent = total ? Math.round((completed.length / total) * 100) : 0;

  return (
    <Link
      href={`/arenas/${arena.slug}`}
      className="group flex flex-col gap-4 rounded-card border border-border bg-white p-6 transition-colors hover:border-border-strong hover:bg-surface"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <circle cx="10" cy="10" r="7" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="4" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="1.5" fill="currentColor" />
          </svg>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-text-secondary">
          {total} retos
        </span>
      </div>

      <div>
        <h3 className="text-base font-semibold text-text">{arena.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-secondary">
          {arena.description}
        </p>
      </div>

      <div className="mt-auto pt-1">
        <ProgressBar
          value={percent}
          label={`Progreso de ${arena.title}: ${percent}%`}
        />
        <p className="mt-2 text-xs text-text-muted">
          {completed.length} de {total} retos completados
        </p>
      </div>

      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
        Ir a la arena
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path
            d="M3 10h13m0 0-4-4m4 4-4 4"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}