"use client";

import useGameLocalStorage from "@/hooks/useGameLocalStorage";
import { CartCard } from "@/components/cart-card";
import { useRouter } from "next/navigation";
import { ItemNumberLabel } from "@/components/items-number-label";
import { OrderSummary } from "@/components/order-summary";

export default function CartPage() {
  const { gamesInCart, removeFromCart, removeAllFromCart } =
    useGameLocalStorage();
  const router = useRouter();

  const onRemove = (id: string) => {
    removeFromCart(id);
  };

  const checkout = () => {
    removeAllFromCart();
    router.push("/");
    // TODO: Add notification to user
  };

  if (!gamesInCart.length) {
    return <div>No items in your cart</div>;
  }

  return (
    <div>
      <ItemNumberLabel length={gamesInCart.length} />

      <div>
        {gamesInCart.map((game, index) => {
          return (
            <CartCard
              key={`${game.id}}.${index}`}
              game={game}
              onRemove={onRemove}
            />
          );
        })}
      </div>

      <div>
        <OrderSummary games={gamesInCart} />
        <button onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
}
