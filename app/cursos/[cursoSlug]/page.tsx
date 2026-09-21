import Link from "next/link";
import type { ReactNode } from "react";

interface CoursePageProps {
  params: Promise<{ cursoSlug: string }>;
}

const courses: Record<string, { title: string; description: string }> = {
  "fundamentos-de-programacion-con-javascript": {
    title: "Fundamentos de Programación con JavaScript",
    description:
      "Aprende desde cero los conceptos fundamentales de la programación con práctica directa.",
  },
};

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { cursoSlug } = await params;
  const course = courses[cursoSlug];

  if (!course) {
    return <CourseShell title="Curso no encontrado" description="Este curso no existe o aún no está disponible." />;
  }

  return (
    <CourseShell title={course.title} description={course.description}>
      <p className="mt-16 text-sm text-text-muted">
        El temario estará disponible próximamente.
      </p>
    </CourseShell>
  );
}

function CourseShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 py-12">
      <Link href="/" className="text-sm font-medium text-text-secondary hover:text-text">
        ← Volver al inicio
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-text">{title}</h1>
      <p className="mt-3 text-base text-text-secondary">{description}</p>
      {children}
    </main>
  );
}