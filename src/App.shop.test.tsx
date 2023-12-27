import { describe, it, vi } from "vitest";

import { mount } from "@shopify/react-testing";
import { AppOne } from "./App";
import { checkA11y } from "./testUtils";

describe("<App />", () => {
  it("renders without crashing", async () => {
    vi.useFakeTimers();
    const wrapper = mount(<AppOne />);
    await vi.runAllTimersAsync();

    expect(wrapper.debug()).toMatchInlineSnapshot(`
      "<AppOne>
        <Text as="p">
          <p />
        </Text>
      </AppOne>"
    `);

    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<p class="Polaris-Text--root">Loading</p>"`,
    );

    vi.useRealTimers();
    await checkA11y(wrapper.html());
  });
});
