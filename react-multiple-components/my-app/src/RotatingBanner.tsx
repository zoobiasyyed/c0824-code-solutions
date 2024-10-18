import { NextButton } from './NextButton';
import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { PrevButton } from './PrevButton';
import { useState } from 'react';
import './RotatingBanner.css';

type Prop = {
  items: string[];
};

export default function RotatingBanner({ items }: Prop) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // logic for next button
  const nextButton = () => {
    if (currentIndex >= items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // logic for prev button
  const prevButton = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // logic for indicator button (go over later)
  const indicatorButton = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div>
        <Banner item={items[currentIndex]} />
      </div>
      <div className="layout">
        <div className="button">
          <NextButton onClick={nextButton} />
        </div>
        <div>
          <Indicators
            onClick={indicatorButton}
            count={items.length}
            current={currentIndex}
          />
        </div>
        <div className="button">
          <PrevButton onClick={prevButton} />
        </div>
      </div>
    </div>
  );
}
