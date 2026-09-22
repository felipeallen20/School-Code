import { arenas } from "@/data/arenas";
import ArenaCard from "@/components/arena/arena-card";

export const metadata = {
  title: "Arenas · CodeLab",
};

export default function ArenasPage() {
  return (
    <main className="w-full">
      <div className="mx-auto w-full max-w-[1320px] px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-text">Arenas</h1>
          <p className="mt-3 text-base text-text-secondary">
            Retos que combinan varios conceptos de los cursos para poner a
            prueba lo aprendido. Puedes hacerlos en el orden que prefieras; la
            dificultad sube poco a poco.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {arenas.map((arena) => (
            <ArenaCard key={arena.slug} arenaSlug={arena.slug} />
          ))}
        </div>
      </div>
    </main>
  );
}