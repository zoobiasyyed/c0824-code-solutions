import { FaCircle } from 'react-icons/fa';

type Prop = {
  count: number;
  onClick: (index: number) => void;
  current: number;
};

export function Dots({ count, current, onClick }: Prop) {
  const dots = [];
  for (let i = 0; i < count; i++) {
    dots.push(
      <FaCircle
        key={i}
        style={{ color: i === current ? 'black' : 'blue' }}
        onClick={() => {
          onClick(i);
        }}></FaCircle>
    );
  }

  return <div className="dots">{dots}</div>;
}
