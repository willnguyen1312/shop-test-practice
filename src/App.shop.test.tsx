import { describe, it } from "vitest";

import { mount } from "@shopify/react-testing";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", async () => {
    const wrapper = mount(<App />);

    expect(wrapper.find("h1")).toContainReactText("Hello Shop 🛍️");
  });
});
