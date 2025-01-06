import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import GameCard from "./game-card";
import { allGames } from "@/utils/endpoint";

describe("CartCard", () => {
  it("renders card as expected", () => {
    render(<GameCard {...allGames[0]} />);

    const cart = screen.getByTestId("game-card");

    expect(cart).toBeInTheDocument();

    const isNewLabel = cart.getElementsByClassName("new-label")[0];
    expect(isNewLabel).toBeDefined();

    const image = cart.getElementsByClassName("image")[0];
    expect(image).toBeDefined();

    const description = cart.getElementsByClassName("description")[0];
    expect(description).toBeDefined();
  });

  it("renders card as expected without new label", () => {
    render(<GameCard {...allGames[0]} isNew={false} />);

    const cart = screen.getByTestId("game-card");

    expect(cart).toBeInTheDocument();

    const isNewLabel = cart.getElementsByClassName("new-label")[0];
    expect(isNewLabel).not.toBeDefined();

    const image = cart.getElementsByClassName("image")[0];
    expect(image).toBeDefined();

    const description = cart.getElementsByClassName("description")[0];
    expect(description).toBeDefined();
  });
});
