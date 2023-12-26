import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import App from "./App";
import { checkA11y } from "./testUtils";

describe("<App />", () => {
  it("renders without crashing", async () => {
    const { container } = render(<App />);

    await checkA11y(container);
    expect(screen.getByText(/Hello Shop 🛍️/i)).toBeInTheDocument();
  });
});
