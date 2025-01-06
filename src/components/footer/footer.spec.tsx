import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer", () => {
  it("renders footer as expected", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();

    const link = screen.getByRole("link");

    expect(link.getAttribute("href")).toBe("/");
  });
});
