interface RenderMapProps<T> {
  data: T[];
  keyExtractor: (item: T) => string;
  render: (item: T) => JSX.Element;
}

// Is this component really necessary?
// Does implementing it simplify the process of rendering arrays?
export default function RenderMap<T>(props: RenderMapProps<T>) {
  const { data, keyExtractor, render } = props;

  return (
    <>
      {data.map((item, index) => {
        return <div key={`${keyExtractor(item)}.${index}`}>{render(item)}</div>;
      })}
    </>
  );
}
