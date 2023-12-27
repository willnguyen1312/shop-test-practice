import { act, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import App from "./App";
import { checkA11y } from "./testUtils";

describe("<App />", () => {
  it("renders without crashing", async () => {
    vi.useFakeTimers();
    const { container } = render(<App />);

    await act(async () => await vi.runAllTimersAsync());

    screen.getByText(/Loaded/i);

    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<h1 class="Polaris-Text--root">Loaded</h1>"`,
    );

    vi.useRealTimers();
    await checkA11y(container);
  });
});
