import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonStyles } from "@/components/ui/button";
import ArenaLayout from "@/components/arena/arena-layout";
import ArenaChallenge from "@/components/arena/arena-challenge";
import {
  getArenaBySlug,
  getChallenges,
  getChallengeBySlug,
} from "@/data/arenas";

interface RetoPageProps {
  params: Promise<{ arenaSlug: string; retoSlug: string }>;
}

export default async function RetoPage({ params }: RetoPageProps) {
  const { arenaSlug, retoSlug } = await params;
  const arena = getArenaBySlug(arenaSlug);
  const challenge = arena ? getChallengeBySlug(arena, retoSlug) : undefined;

  if (!arena || !challenge) {
    notFound();
  }

  const challenges = getChallenges(arena);
  const challengeIndex = challenges.findIndex(
    (item) => item.slug === challenge.slug,
  );
  const prevChallenge =
    challengeIndex > 0 ? challenges[challengeIndex - 1] : undefined;
  const nextChallenge =
    challengeIndex >= 0 && challengeIndex < challenges.length - 1
      ? challenges[challengeIndex + 1]
      : undefined;

  return (
    <ArenaLayout arenaSlug={arena.slug} currentSlug={challenge.slug}>
      <div className="px-4 pt-8 sm:px-0">
        <Link
          href={`/arenas/${arena.slug}`}
          className="text-sm font-medium text-text-secondary hover:text-text"
        >
          ← Volver a la arena
        </Link>
        <p className="mt-6 text-sm text-text-muted">
          Reto {challenge.order} de {challenges.length} · {challenge.difficulty}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-text">
          {challenge.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-text-secondary">
          {challenge.description}
        </p>

        <div className="mt-6 max-w-[640px]">
          <ArenaChallenge
            arenaSlug={arena.slug}
            challengeSlug={challenge.slug}
          />
        </div>

        <nav
          aria-label="Navegación entre retos"
          className="mt-10 flex max-w-[640px] items-center justify-between gap-4 border-t border-border pt-6"
        >
          {prevChallenge ? (
            <Link
              href={`/arenas/${arena.slug}/retos/${prevChallenge.slug}`}
              className={buttonStyles({ variant: "secondary", size: "md" })}
            >
              <span aria-hidden="true">←</span> Anterior
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}
          {nextChallenge ? (
            <Link
              href={`/arenas/${arena.slug}/retos/${nextChallenge.slug}`}
              className={buttonStyles({ variant: "primary", size: "md" })}
            >
              Siguiente <span aria-hidden="true">→</span>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}
        </nav>
      </div>
    </ArenaLayout>
  );
}