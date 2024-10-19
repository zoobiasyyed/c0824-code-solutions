type Prop = {
  list: string[];
};

export function QuoteList({ list }: Prop) {
  return (
    <ul className="list-style">
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
