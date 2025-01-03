"use client";

import { Game } from "@/utils/endpoint";

// TODO: Add styles and functionality
export default function CartCard(game: Game) {
  const { image, genre, name, price, description } = game;

  return (
    <div>
      <div>{image}</div>
      <div>
        <div>{genre} [X]</div>
        <div>{name} </div>
        <div>{description}</div>
        <div>${price}</div>
      </div>
    </div>
  );
}
