import ProgressOverview from "@/components/progress/progress-overview";

export const metadata = {
  title: "Progreso · CodeLab",
};

export default function ProgressPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <ProgressOverview />
    </main>
  );
}