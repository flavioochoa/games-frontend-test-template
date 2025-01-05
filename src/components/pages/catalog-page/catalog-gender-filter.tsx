interface CatalogFiltersProps {
  availableFilters: string[];
  value: string;
  onChange: (event: React.FormEvent<HTMLSelectElement>) => Promise<void>;
}

export default function CatalogGenderFilter(props: CatalogFiltersProps) {
  const { availableFilters, value, onChange } = props;

  return (
    <div className="flex flex-row gap-6">
      <span className="xs-bold">Genre</span> |
      <select name="select" value={value} onChange={onChange}>
        <option value="All">All</option>
        {availableFilters.map((filter) => {
          return (
            <option key={filter} value={filter}>
              {filter}
            </option>
          );
        })}
      </select>
    </div>
  );
}
