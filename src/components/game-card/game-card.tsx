"use client";

import { Game } from "@/utils/endpoint";

export default function GameCard(game: Game) {
  const { image, genre, name, price, isNew } = game;

  return (
    <div>
      <div>{isNew && "Is New"}</div>
      <div>{image}</div>
      <div>{genre}</div>
      <div>
        {name} ${price}
      </div>
      <button> ADD TO CART</button>
    </div>
  );
}
