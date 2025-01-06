import useGameLocalStorage from "@/hooks/useGameLocalStorage";
import { Game } from "@/utils/endpoint";
import { Button } from "@/components/button";

interface GameCardButtonProps {
  game: Game;
}

export default function GameCardButton(props: GameCardButtonProps) {
  const { game } = props;

  const { isInCart, addToCart, removeFromCart } = useGameLocalStorage();

  const gameIsInCart = isInCart(game.id);

  const addToCartHandler = () => {
    addToCart(game);
    // TODO: Add notification to user
    console.log("game added to cart!", game);
  };

  const removeFromCartHandler = () => {
    removeFromCart(game.id);
    // TODO: Add notification to user
    console.log("game removed form cart!", game);
  };

  if (gameIsInCart) {
    return (
      <Button
        data-testid="game-card-button"
        label="REMOVE FROM CARD"
        variant="secondary"
        onClick={removeFromCartHandler}
      />
    );
  }

  return (
    <Button
      data-testid="game-card-button"
      label="ADD TO CARD"
      variant="secondary"
      onClick={addToCartHandler}
    />
  );
}
