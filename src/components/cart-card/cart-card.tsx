"use client";

import { Game } from "@/utils/endpoint";
import { USDollar } from "@/utils/format";

interface CartCardProps {
  onRemove: (id: string) => void;
  game: Game;
}

// TODO: Add styles and functionality
export default function CartCard(props: CartCardProps) {
  const { onRemove, game } = props;
  const { id, image, genre, name, price, description } = game;

  return (
    <div>
      <div>{image}</div>
      <div>
        <div>
          {genre} <span onClick={() => onRemove(id)}>[X]</span>
        </div>
        <div>{name} </div>
        <div>{description}</div>
        <div>{USDollar.format(price)}</div>
      </div>
    </div>
  );
}
