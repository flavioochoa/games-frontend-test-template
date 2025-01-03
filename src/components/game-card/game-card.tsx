"use client";

import { Game } from "@/utils/endpoint";
import { USDollar } from "@/utils/format";
import useGameLocalStorage from "@/hooks/useGameLocalStorage";

export default function GameCard(game: Game) {
  const { image, genre, name, price, isNew } = game;

  const { addToCart } = useGameLocalStorage();

  const addToCartHandler = () => {
    addToCart(game);
    // TODO: Add notification to user
    console.log("game added to cart!", game);
  };

  return (
    <div>
      <div>{isNew && "Is New"}</div>
      <div>{image}</div>
      <div>{genre}</div>
      <div>
        {name} {USDollar.format(price)}
      </div>
      <button onClick={addToCartHandler}> ADD TO CART</button>
    </div>
  );
}
