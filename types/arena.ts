import type { Exercise } from "./course";

export interface Arena {
  slug: string;
  title: string;
  description: string;
  challenges: Challenge[];
}

export type ChallengeDifficulty = "básico" | "intermedio" | "avanzado";

export interface Challenge {
  slug: string;
  order: number;
  title: string;
  difficulty: ChallengeDifficulty;
  description: string;
  exercise: Exercise;
}