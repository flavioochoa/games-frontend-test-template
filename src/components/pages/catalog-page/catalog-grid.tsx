import { Game } from "@/utils/endpoint";
import { GameCard } from "@/components/game-card";

interface CatalogGridProps {
  games: Game[];
}

export default function CatalogGrid(props: CatalogGridProps) {
  const { games } = props;
  return (
    <div className="flex flex-wrap gap-1">
      {games.map((game) => {
        return (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-gray-500 "
            key={game.id}
          >
            <GameCard key={game.id} {...game} />
          </div>
        );
      })}
    </div>
  );
}
