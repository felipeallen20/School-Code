import type { ExerciseResult } from "@/types/course";

export type Validator = (code: string, output: string[]) => ExerciseResult;

const pass: ExerciseResult = { success: true };

const fail = (message: string): ExerciseResult => ({
  success: false,
  message,
});

export function outputEquals(...values: string[]): Validator {
  const expected = values.map(String);
  return (_code, output) => {
    const actual = output.map(String);
    if (actual.length !== expected.length) {
      return fail(
        `La consola mostró ${actual.length} línea(s), pero se esperaban ${expected.length}.`,
      );
    }
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] !== expected[i]) {
        return fail(`Se esperaba "${expected[i]}" en la línea ${i + 1}.`);
      }
    }
    return pass;
  };
}

export function outputIncludes(value: string): Validator {
  return (_code, output) => {
    const included = output.map(String).some((line) => line.includes(value));
    return included ? pass : fail(`La salida debería incluir "${value}".`);
  };
}

export function codeMatches(pattern: RegExp): Validator {
  return (code) =>
    pattern.test(code) ? pass : fail("El código no cumple con lo solicitado.");
}

export function custom(
  check: (code: string, output: string[]) => string | null,
): Validator {
  return (code, output) => {
    const message = check(code, output);
    return message === null ? pass : fail(message);
  };
}