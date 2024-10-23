type ItemsProp = {
  list: string[];
};

export function Items({ list }: ItemsProp) {
  const lists = list.map((item) => <li key={item}>{item}</li>);

  return <ul>{lists}</ul>;
}
