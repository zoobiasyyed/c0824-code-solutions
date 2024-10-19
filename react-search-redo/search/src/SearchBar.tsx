type Props = {
  value: string;
  onSearch: (value: string) => void;
};

export function SearchBar({ value, onSearch }: Props) {
  return (
    <>
      <input
        onChange={(e) => onSearch(e.target.value)}
        value={value}
        type="text"></input>
    </>
  );
}
