import { fundamentalsArena } from "./fundamentos-de-programacion";
import type { Arena, Challenge } from "@/types/arena";

export const arenas: Arena[] = [fundamentalsArena];

export function getArenaBySlug(slug: string): Arena | undefined {
  return arenas.find((arena) => arena.slug === slug);
}

export function getChallenges(arena: Arena): Challenge[] {
  return [...arena.challenges].sort((a, b) => a.order - b.order);
}

export function getChallengeBySlug(
  arena: Arena,
  challengeSlug: string,
): Challenge | undefined {
  return arena.challenges.find((challenge) => challenge.slug === challengeSlug);
}