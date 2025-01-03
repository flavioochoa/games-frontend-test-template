import { Game } from "@/utils/endpoint";
import { ItemNumberLabel } from "@/components/items-number-label";
import { USDollar } from "@/utils/format";

interface OrderSummaryProps {
  games: Game[];
}

export default function OrderSummary(props: OrderSummaryProps) {
  const { games } = props;

  const total = games.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);

  return (
    <div>
      <div> Order Summary</div>

      <ItemNumberLabel length={games.length} />

      <div>
        {games.map((game, index) => {
          return (
            <div key={`${game.id}.${index}`}>
              {game.name} {USDollar.format(game.price)}
            </div>
          );
        })}
      </div>

      <hr style={{ width: "100%", height: "1" }} />

      <div>Order Total {USDollar.format(total)}</div>
    </div>
  );
}
