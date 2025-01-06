import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CartCard from "./cart-card";
import { allGames } from "@/utils/endpoint";

describe("CartCard", () => {
  it("renders card as expected", () => {
    render(<CartCard onRemove={() => {}} game={allGames[0]} />);

    const cart = screen.getByTestId("cart-card");

    expect(cart).toBeInTheDocument();

    const removeImage = cart.getElementsByClassName("remove")[0];

    expect(removeImage).toBeDefined();

    fireEvent.click(removeImage);
  });
});
