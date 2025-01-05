"use client";

import useGameLocalStorage from "@/hooks/useGameLocalStorage";
import { CartCard } from "@/components/cart-card";
import { useRouter } from "next/navigation";
import { ItemNumberLabel } from "@/components/items-number-label";
import { OrderSummary } from "@/components/order-summary";
import { Button } from "@/components/button";

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
    return (
      <div className="flex justify-center text-2xl p-16">
        No items in your cart
      </div>
    );
  }

  return (
    <div className="page-layout">
      <div className="flex flex-col gap-3">
        <div className="bold-2xl">Your Cart</div>
        <ItemNumberLabel className="xl-regular" length={gamesInCart.length} />
      </div>
      <div className="cart-container">
        <div className="flex flex-col">
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

        <div className="flex flex-col gap-8">
          <OrderSummary games={gamesInCart} />
          <Button label="Checkout" variant="primary" onClick={checkout} />
        </div>
      </div>
    </div>
  );
}
