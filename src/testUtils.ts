import { axe } from "jest-axe";
import { expect } from "vitest";

export async function checkA11y(value: string | Element) {
  const result = await axe(value, {
    rules: {
      region: { enabled: false },
    },
  });

  expect(result).toHaveNoViolations();

  return result;
}

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
