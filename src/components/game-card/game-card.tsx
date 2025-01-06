"use client";

import { Game } from "@/utils/endpoint";
import { USDollar } from "@/utils/format";
import Image from "next/image";
import GameCardButton from "./game-card-button";

export default function GameCard(game: Game) {
  const { image, genre, name, price, isNew } = game;

  return (
    <div className="game-card" data-testid="game-card">
      {isNew && <div className="new-label">New</div>}

      <div className="image">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="description">
        <div className="genre">{genre}</div>
        <div className="name-price">
          <span className="truncate">{name}</span>
          <span>{USDollar.format(price)}</span>
        </div>
      </div>

      <GameCardButton game={game} />
    </div>
  );
}
