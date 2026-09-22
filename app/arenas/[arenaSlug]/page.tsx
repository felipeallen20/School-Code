import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonStyles } from "@/components/ui/button";
import ArenaLayout from "@/components/arena/arena-layout";
import { getArenaBySlug, getChallenges } from "@/data/arenas";

interface ArenaPageProps {
  params: Promise<{ arenaSlug: string }>;
}

export default async function ArenaPage({ params }: ArenaPageProps) {
  const { arenaSlug } = await params;
  const arena = getArenaBySlug(arenaSlug);

  if (!arena) {
    notFound();
  }

  const challenges = getChallenges(arena);
  const firstChallenge = challenges[0];

  return (
    <ArenaLayout arenaSlug={arena.slug}>
      <div className="px-4 pt-8 sm:px-0">
        <p className="text-sm text-text-muted">Arena</p>
        <h1 className="mt-1 text-3xl font-bold text-text">{arena.title}</h1>
        <p className="mt-3 max-w-2xl text-base text-text-secondary">
          {arena.description}
        </p>
        {firstChallenge ? (
          <div className="mt-6">
            <Link
              href={`/arenas/${arena.slug}/retos/${firstChallenge.slug}`}
              className={buttonStyles({ size: "lg" })}
            >
              Comenzar retos
            </Link>
          </div>
        ) : null}

        <h2 className="mt-12 text-xl font-bold text-text">Retos</h2>
        <ol className="mt-4 flex max-w-2xl flex-col divide-y divide-border rounded-card border border-border">
          {challenges.map((challenge) => (
            <li key={challenge.slug}>
              <Link
                href={`/arenas/${arena.slug}/retos/${challenge.slug}`}
                className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-surface"
              >
                <span className="font-mono text-sm text-text-muted">
                  {String(challenge.order).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-text">
                    {challenge.title}
                  </span>
                  <span className="block font-mono text-xs lowercase text-text-muted">
                    {challenge.difficulty}
                  </span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-text-muted">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </ArenaLayout>
  );
}