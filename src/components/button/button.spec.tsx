import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  it("renders button as expected", () => {
    render(<Button label="Test" variant="primary" onClick={() => {}} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

    expect(button).toHaveClass("button-primary");

    fireEvent.click(button);
  });
});
