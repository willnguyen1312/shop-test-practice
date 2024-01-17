import { render } from "@testing-library/react";
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
