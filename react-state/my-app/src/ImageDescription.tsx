import { useState } from 'react';

type Props = {
  desc: string[];
};

export function ImageDescription({ desc }: Props) {
  const [index, setIndex] = useState(0);

  function HandleClick() {
    if (index >= desc.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div>
      <p onClick={HandleClick}>{desc[index]}</p>
    </div>
  );
}
