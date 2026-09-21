import Link from "next/link";

interface LessonPageProps {
  params: Promise<{ cursoSlug: string; slug: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { cursoSlug, slug } = await params;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 py-12">
      <Link
        href={`/cursos/${cursoSlug}`}
        className="text-sm font-medium text-text-secondary hover:text-text"
      >
        ← Volver al curso
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-text">Lección: {slug}</h1>
      <p className="mt-3 text-base text-text-secondary">
        El contenido de esta lección estará disponible próximamente.
      </p>
    </main>
  );
}