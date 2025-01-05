"use client";

import { Game } from "@/utils/endpoint";
import { USDollar } from "@/utils/format";
import Image from "next/image";

interface CartCardProps {
  onRemove: (id: string) => void;
  game: Game;
}

export default function CartCard(props: CartCardProps) {
  const { onRemove, game } = props;
  const { id, image, genre, name, price, description } = game;

  return (
    <div className="cart-card">
      <Image
        className="remove"
        src="/assets/icons/close.svg"
        width={12}
        height={12}
        onClick={() => onRemove(id)}
        alt="close"
      />

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
        <div className="flex flex-col gap-3">
          <div className="genre">{genre}</div>
          <div className="xs-bold truncate">{name}</div>
          <div className="regular truncate">{description}</div>
        </div>

        <div className="flex gap-10 justify-end">
          <span>{USDollar.format(price)}</span>
        </div>
      </div>
    </div>
  );
}
