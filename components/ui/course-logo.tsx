import type { ComponentType } from "react";

function JsLogo() {
  return (
    <span className="font-mono text-base font-bold leading-none">JS</span>
  );
}

function CodeLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path
        d="m8 7-5 5 5 5M16 7l5 5-5 5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const logoBySlug: Record<string, ComponentType> = {
  "fundamentos-de-programacion-con-javascript": JsLogo,
};

interface CourseLogoProps {
  slug: string;
  className?: string;
}

export default function CourseLogo({
  slug,
  className = "",
}: CourseLogoProps) {
  const Logo = logoBySlug[slug] ?? CodeLogo;
  return (
    <span
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white ${className}`}
    >
      <Logo />
    </span>
  );
}