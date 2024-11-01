import { FaArrowRight } from 'react-icons/fa';
import './Carousel.css';

type NextProp = {
  onClick: () => void;
};

export function NextButton({ onClick }: NextProp) {
  return (
    <div onClick={onClick} className="arrow">
      <FaArrowRight />
    </div>
  );
}
