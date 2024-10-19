import { SearchBar } from './SearchBar';
import { QuoteList } from './QuoteList';
import { useState } from 'react';

type ListProp = {
  list: string[];
};

export default function SearchableList({ list }: ListProp) {
  const [input, setInput] = useState('');

  const matches = list.filter((item) => item.includes(input));

  return (
    <>
      <SearchBar value={input} onSearch={(v) => setInput(v)} />
      {matches.length !== 0 && <QuoteList list={matches} />}
      {matches.length === 0 && (
        <div>
          <i>No matches!</i>
        </div>
      )}
    </>
  );
}
