import { act, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import { AppOne, AppTwo } from "./App";
import { checkA11y } from "./testUtils";

describe("<AppOne /> from rtl", () => {
  it("renders without crashing", async () => {
    vi.useFakeTimers();
    const { container } = render(<AppOne />);

    await act(async () => await vi.runAllTimersAsync());

    screen.getByText(/Loaded/i);

    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<h1 class="Polaris-Text--root">Loaded</h1>"`,
    );

    vi.useRealTimers();
    await checkA11y(container);
  });
});

describe("<AppTwo /> from rtl", () => {
  it("renders without crashing", async () => {
    vi.useFakeTimers();
    const { container } = render(<AppTwo />);

    await act(async () => await vi.runAllTimersAsync());

    screen.getByText(/Loaded/i);

    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<div><h1 class="Polaris-Text--root">Loaded</h1></div>"`,
    );

    vi.useRealTimers();
    await checkA11y(container);
  });
});
