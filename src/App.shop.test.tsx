import { describe, it, vi } from "vitest";

import { Form, PolarisTestProvider, Text, TextField } from "@shopify/polaris";
import { mount } from "@shopify/react-testing";
import { AppOne, AppThree, AppTwo } from "./App";
import { checkA11y } from "./testUtils";

describe("<AppOne /> from react-testing", () => {
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

describe("<AppTwo /> from react-testing", () => {
  it("renders without crashing", async () => {
    vi.useFakeTimers();
    const wrapper = mount(<AppTwo />);
    await vi.runAllTimersAsync();

    expect(wrapper.debug()).toMatchInlineSnapshot(`
      "<AppTwo>
        <div>
          <Text as="p">
            <p />
          </Text>
        </div>
      </AppTwo>"
    `);

    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<div><h1 class="Polaris-Text--root">Loaded</h1></div>"`,
    );

    vi.useRealTimers();
    await checkA11y(wrapper.html());
  });
});

describe("<AppThree /> from react-testing", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(
      <PolarisTestProvider>
        <AppThree />
      </PolarisTestProvider>,
    );

    const firstValueInput = wrapper.find(TextField, {
      label: "First number",
    });
    const secondValueInput = wrapper.find(TextField, {
      label: "Second Number",
    });

    firstValueInput?.trigger("onChange", "10");
    secondValueInput?.trigger("onChange", "20");

    const form = wrapper.find(Form);
    form?.trigger("onSubmit");

    const result = wrapper.find(Text, {
      as: "h3",
    });
    expect(result).toContainReactText("Result: 30");
  });
});
