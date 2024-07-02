import { render } from "@testing-library/react";
import { ComponentTemplate } from "./ComponentTemplate";

describe(ComponentTemplate, () => {
  it("renders the component", () => {
    render(<ComponentTemplate />);
  });
});
