import './HotButton.css';
import { useState } from 'react';

type Props = {
  label: string;
};

export function HotButton({ label }: Props) {
  const [index, setIndex] = useState(0);

  let className = '';
  if (index < 4) {
    className = 'cold';
  } else if (index < 7) {
    className = 'cool';
  } else if (index < 10) {
    className = 'tepid';
  } else if (index < 13) {
    className = 'warm';
  } else if (index < 16) {
    className = 'hot';
  } else {
    className = 'nuclear';
  }

  return (
    <>
      <button onClick={() => setIndex(index + 1)} className={className}>
        {label}
      </button>
      <p>Number of Clicks: {[index]}</p>
    </>
  );
}
