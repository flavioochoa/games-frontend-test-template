interface ItemNumberLabelProps {
  length: number;
  className?: string;
}

export default function ItemNumberLabel(props: ItemNumberLabelProps) {
  const { length, className = "" } = props;

  const itemsLabel = length === 1 ? "item" : "items";

  return (
    <div className={className}>
      {length} {itemsLabel}
    </div>
  );
}
