import { allGames, availableFilters, delay } from "@/utils/endpoint";

const ITEMS_PER_PAGE = 12;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const genre = searchParams.get("genre");
  let page = parseInt(searchParams.get("page") ?? "1");

  let games = allGames;

  if (genre) {
    games = games.filter(
      (game) => game.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  if (page < 1 || isNaN(page)) page = 1;

  // In order to have "see more" functionality
  // TODO: Change this to 2000 before release
  // Mock a delay to simulate a real API
  await delay(100);

  const totalPages = Math.ceil(games.length / ITEMS_PER_PAGE);
  const currentPage = page;

  const fromIndex = 0;
  const toIndex = page * ITEMS_PER_PAGE;
  games = games.slice(fromIndex, toIndex);

  return Response.json({ games, availableFilters, totalPages, currentPage });
}
