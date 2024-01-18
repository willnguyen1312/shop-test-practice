import { render } from "@testing-library/react";
import { checkA11y } from "./testUtils";
import userEvent from "@testing-library/user-event";

test("Playground component should render successfully", async () => {
  const wrapper = render(
    <main>
      <h1>Hello</h1>
      <h2>Oh bad heading</h2>
    </main>,
  );

  await checkA11y(wrapper.container);
});

test("events do buble in rtl 😍", async () => {
  let divClick = false;
  let buttonClick = false;

  const user = userEvent.setup();
  const wrapper = render(
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

  const button = wrapper.getByText("Click me");

  await user.click(button);

  expect(divClick).toBe(true);
  expect(buttonClick).toBe(true);
});
