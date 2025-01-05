import { Game } from "@/utils/endpoint";
import { useState } from "react";
import useSafeGetGames from "./useSafeGetGames";

const useGameLocalStorage = () => {
  const { setValue, getGames } = useSafeGetGames();

  const [gamesInCart, setGamesInCart] = useState<Game[]>(getGames());

  const syncState = (games: Game[]) => {
    setValue(JSON.stringify(games));
    setGamesInCart(games);
  };

  const addToCart = (game: Game) => {
    const games = getGames();
    games.push(game);
    syncState(games);
  };

  const removeFromCart = (id: string) => {
    const games = getGames();

    const index = games.findIndex((game) => {
      return game.id === id;
    });

    if (index !== -1) {
      games.splice(index, 1);
      syncState(games);
    }
  };

  const removeAllFromCart = () => {
    syncState([]);
  };

  const isInCart = (id: string) => {
    const games = getGames();

    const isInCart = games.some((game) => game.id === id);

    return isInCart;
  };

  return {
    gamesInCart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    isInCart,
  };
};

export default useGameLocalStorage;
