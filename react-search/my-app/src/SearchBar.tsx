type Prop = {
  value: string;
  onSearch: (value: string) => void;
};

export function SearchBar({ value, onSearch }: Prop) {
  return (
    <div>
      <input
        onChange={(e) => onSearch(e.target.value)}
        value={value}
        type="text"
        placeholder="search"></input>
    </div>
  );
}
