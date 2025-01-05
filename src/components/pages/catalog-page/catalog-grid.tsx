import { Game } from "@/utils/endpoint";
import { GameCard } from "@/components/game-card";

interface CatalogGridProps {
  games: Game[];
}

export default function CatalogGrid(props: CatalogGridProps) {
  const { games } = props;
  return (
    <div className="grid gap-12 grid-cols-[repeat(auto-fit,minmax(370px,1fr))]">
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  );
}
