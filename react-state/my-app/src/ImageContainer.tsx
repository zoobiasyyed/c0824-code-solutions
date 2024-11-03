import './ImageContainer.css';
import { useState } from 'react';

type Props = {
  src: string[];
};

export function ImageContainer({ src }: Props) {
  const [index, setIndex] = useState(0);

  function HandleClick() {
    if (index >= src.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img onClick={HandleClick} src={src[index]}></img>
      </div>
    </div>
  );
}
