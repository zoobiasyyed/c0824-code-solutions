import { SearchBar } from './SearchBar';
import { Items } from './Items';
import { useState } from 'react';

type Prop = {
  list: string[];
};

export default function SearchableList({ list }: Prop) {
  const [input, setInput] = useState('');

  const matches = list.filter((item) =>
    item.toLocaleLowerCase().includes(input.toLocaleLowerCase())
  );

  return (
    <div className="wrapper">
      <SearchBar value={input} onSearch={(v) => setInput(v)} />
      <Items list={matches} />
    </div>
  );
}
