import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { checkA11y } from "./testUtils";

test("Playground component should render successfully", async () => {
  const wrapper = render(
    <main>
      <h1>Hello</h1>
      <h2>Oh bad heading</h2>
    </main>,
  );

  await checkA11y(wrapper.container);
});

test("events do bubble in rtl 😍", async () => {
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

test.only("events do bubble in rtl and more 😍", async () => {
  let divClick = false;
  let buttonClick = false;

  const user = userEvent.setup();
  const wrapper = render(
    <div
      data-testid="div"
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

  const button = screen.getByText("Click me");
  const clickEvent = new MouseEvent("click", { bubbles: true });

  const div = screen.getByTestId("div");
  div.addEventListener("click", (event) => {
    console.log("div event ", event === clickEvent);
  });

  button.dispatchEvent(clickEvent);

  // await user.click(button);

  // expect(divClick).toBe(true);
  // expect(buttonClick).toBe(true);
});
