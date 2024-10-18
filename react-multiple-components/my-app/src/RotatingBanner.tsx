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

  return (
    <div>
      <div>
        <Banner item={items[currentIndex]} />
      </div>
      <div className="layout">
        <div className=" button">
          <NextButton />
        </div>
        <div>
          <Indicators count={items.length} />
        </div>
        <div className=" button">
          <PrevButton />
        </div>
      </div>
    </div>
  );
}
