import { Game } from "@/utils/endpoint";
import useLocalStorage from "./useLocalStorage";

const GAMES_KEY = "games_cart";

const useSafeGetGames = () => {
  const useLocalStorageHandlers = useLocalStorage(GAMES_KEY);

  const getGames = () => {
    const gamesFromLocalStorage = useLocalStorageHandlers.getValue();

    if (!gamesFromLocalStorage) {
      return [];
    }

    const games: Game[] = JSON.parse(gamesFromLocalStorage);

    return games;
  };

  return { ...useLocalStorageHandlers, getGames };
};

export default useSafeGetGames;
