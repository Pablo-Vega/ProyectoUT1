import { render } from "@testing-library/react";
import MyButton from "./MyButton";
import { describe, it, expect } from "vitest";

describe("MyButton", () => {
  it("should render the button in the DOM", () => {
    const { getByText } = render(<MyButton text="Click Me" />);
    expect(getByText("Click Me")).toBeInTheDocument();
  });
});
