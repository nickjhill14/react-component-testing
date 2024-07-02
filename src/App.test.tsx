import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders the app", () => {
    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "React App Template", level: 1 }),
    ).toBeInTheDocument();
  });
});
