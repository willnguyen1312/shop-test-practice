import { act, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, it, vi } from "vitest";

import { PolarisTestProvider } from "@shopify/polaris";
import { AppOne, AppThree, AppTwo } from "./App";
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

describe("<AppThree /> from rtl", () => {
  it("should work for normal user", async () => {
    const user = userEvent.setup();
    render(
      <PolarisTestProvider>
        <AppThree />
      </PolarisTestProvider>,
    );

    const firstNumberInput = screen.getByLabelText(/First number/i);
    await user.click(firstNumberInput);
    await user.type(firstNumberInput, "10");

    const secondNumberInput = screen.getByLabelText(/Second number/i);
    await user.click(secondNumberInput);
    await user.type(secondNumberInput, "20");

    const submitButton = screen.getByText(/Calculate/i);
    await user.click(submitButton);

    const result = screen.getByRole("status");
    expect(result).toHaveTextContent("Result: 30");
    expect(result).toBeInTheDocument();
  });

  it("should work for keyboard-only user", async () => {
    const user = userEvent.setup();
    render(
      <PolarisTestProvider>
        <AppThree />
      </PolarisTestProvider>,
    );

    const result = screen.getByRole("status");

    await user.tab();
    await user.keyboard("20");
    await user.keyboard("{enter}");
    expect(result).toHaveTextContent("Result: 20");

    await user.tab();
    await user.keyboard("30");
    await user.tab();
    await user.keyboard("{enter}");
    expect(result).toHaveTextContent("Result: 50");
  });
});
