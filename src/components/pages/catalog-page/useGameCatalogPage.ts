import { useState, useTransition } from "react";
import {
  GameApiResponse,
  GameRequestParams,
  getGamesBy,
} from "@/services/games.service";

const initialState: GameApiResponse = {
  games: [],
  availableFilters: [],
  totalPages: -1,
  currentPage: -1,
};

const useGameCatalogPage = () => {
  const [gamesCatalog, setGamesCatalog] =
    useState<GameApiResponse>(initialState);

  const [isPending, startTransition] = useTransition();

  const fetchGames = async (params: GameRequestParams) => {
    try {
      const response = await getGamesBy(params);
      return response ?? initialState;
    } catch (error) {
      console.log(error);
    }

    return initialState;
  };

  const loadMoreGames = async (params: GameRequestParams) => {
    startTransition(async () => {
      const response = await fetchGames(params);

      setGamesCatalog((prev) => {
        return {
          ...prev,
          availableFilters: response.availableFilters,
          games: [...prev.games, ...response.games],
          currentPage: response.currentPage,
          totalPages: response.totalPages,
        };
      });
    });
  };

  const init = async (params: GameRequestParams) => {
    startTransition(async () => {
      const response = await fetchGames(params);
      setGamesCatalog(response);
    });
  };

  return {
    init,
    gamesCatalog,
    fetchGames,
    loadMoreGames,
    isPending,
    startTransition,
  };
};

export default useGameCatalogPage;
