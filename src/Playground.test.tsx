import { PolarisTestProvider } from "@shopify/polaris";
import { mount } from "@shopify/react-testing";
import "@shopify/react-testing/matchers";

import React from "react";
import { expect, test } from "vitest";

const Playground = () => {
  const [third, setThird] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setThird(1 + 2);
    }, 0);
  }, []);

  return (
    <div>
      <h1>Playground</h1>
      <p role="status">Third: {third}</p>
    </div>
  );
};

function renderApp() {
  return mount(
    <PolarisTestProvider>
      <Playground />
    </PolarisTestProvider>,
  );
}

test("Playground component should render successfully", async () => {
  const wrapper = renderApp();

  expect(wrapper).toContainReactText("Third: 0");

  //   How to test async code with @shopify/react-testing? 😅
  //   expect(wrapper).toContainReactText("Third: 3");
});

test("events do not bubble in react-testing by default 🤷‍♂️", async () => {
  let divClick = false;
  let buttonClick = false;
  const wrapper = mount(
    <div
      onClick={() => {
        divClick = true;
      }}
    >
      <button
        onClick={() => {
          buttonClick = true;
        }}
      >
        Click me
      </button>
    </div>,
  );

  wrapper.find("button")?.trigger("onClick");

  expect(divClick).toBe(false);
  expect(buttonClick).toBe(true);

  wrapper.find("button")!.domNode!.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
    }),
  );

  expect(divClick).toBe(true);
});
