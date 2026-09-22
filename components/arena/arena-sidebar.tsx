"use client";

import Link from "next/link";
import ProgressBar from "@/components/ui/progress-bar";
import StatusIcon from "@/components/ui/status-icon";
import { getProgressStatus, useArenaProgress } from "@/lib/progress";
import { getArenaBySlug, getChallenges } from "@/data/arenas";

interface ArenaSidebarProps {
  arenaSlug: string;
  currentSlug?: string;
  onNavigate?: () => void;
}

export default function ArenaSidebar({
  arenaSlug,
  currentSlug,
  onNavigate,
}: ArenaSidebarProps) {
  const arena = getArenaBySlug(arenaSlug);
  const challenges = arena ? getChallenges(arena) : [];
  const { completed } = useArenaProgress(arenaSlug);

  if (!arena) return null;

  const percent =
    challenges.length > 0
      ? Math.round((completed.length / challenges.length) * 100)
      : 0;

  return (
    <aside className="flex flex-col gap-6">
      <div>
        <Link href={`/arenas/${arena.slug}`} className="block">
          <h2 className="text-base font-bold leading-snug text-text">
            {arena.title}
          </h2>
        </Link>
        <div className="mt-4">
          <ProgressBar
            value={percent}
            label={`Progreso de la arena: ${percent}% completado`}
          />
          <p className="mt-2 text-sm text-text-muted">{percent}% completado</p>
        </div>
      </div>

      <nav aria-label="Retos de la arena" className="flex flex-col gap-1">
        <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Retos
        </p>
        {challenges.map((challenge) => {
          const status = getProgressStatus(
            challenge.slug,
            completed,
            currentSlug,
          );
          const isCompleted = status === "completed";
          const isCurrent = status === "in-progress";
          const label = isCompleted
            ? `${challenge.title} (completado)`
            : challenge.title;

          const content = (
            <>
              <span className="flex w-4 shrink-0 justify-center">
                <StatusIcon status={status} />
              </span>
              <span className="font-mono text-xs text-text-muted">
                {String(challenge.order).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1 truncate">
                {challenge.title}
              </span>
              <span className="shrink-0 font-mono text-[10px] capitalize text-text-muted">
                {challenge.difficulty}
              </span>
            </>
          );

          if (isCurrent) {
            return (
              <span
                key={challenge.slug}
                aria-current="page"
                aria-label={label}
                className="flex items-center gap-2 rounded-input bg-primary-light px-3 py-2 text-sm font-medium text-text"
              >
                {content}
              </span>
            );
          }

          return (
            <Link
              key={challenge.slug}
              href={`/arenas/${arena.slug}/retos/${challenge.slug}`}
              aria-label={label}
              onClick={onNavigate}
              className="flex items-center gap-2 rounded-input px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-surface hover:text-text"
            >
              {content}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}