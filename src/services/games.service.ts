"use server";

import { Game } from "@/utils/endpoint";

const API_BASE_URL = "http://localhost:3000/api/games";

export interface GameRequestParams {
  genre?: string;
  page?: number;
}

export interface GameApiResponse {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
}

export async function getGamesBy(params: GameRequestParams) {
  const { genre, page } = params;

  const GAMES_API_URL = new URL(API_BASE_URL);

  if (genre && genre !== "All") {
    GAMES_API_URL.searchParams.set("genre", genre);
  }

  if (page) {
    GAMES_API_URL.searchParams.set("page", page.toString());
  }

  try {
    const response = await fetch(GAMES_API_URL);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data: GameApiResponse = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
