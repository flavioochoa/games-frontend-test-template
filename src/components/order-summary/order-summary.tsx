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
    <div className="order-summary">
      <div className="sub-heading">
        <div className="label">Order Summary</div>
        <ItemNumberLabel className="count" length={games.length} />
      </div>

      <div className="order-details">
        <div className="order-items">
          {games.map((game, index) => {
            return (
              <div className="game" key={`${game.id}.${index}`}>
                <span>{game.name}</span>
                <span>{USDollar.format(game.price)}</span>
              </div>
            );
          })}
        </div>

        <hr className="line" />

        <div className="xs-bold flex flex-row justify-between var(--stroke-secondary)">
          <span>Order Total</span>
          <span>{USDollar.format(total)}</span>
        </div>
      </div>
    </div>
  );
}
