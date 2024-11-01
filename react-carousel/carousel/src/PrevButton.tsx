import { FaArrowLeft } from 'react-icons/fa';

type PrevProp = {
  onClick: () => void;
};

export function PrevButton({ onClick }: PrevProp) {
  return (
    <div onClick={onClick} className="arrow">
      <FaArrowLeft />
    </div>
  );
}
