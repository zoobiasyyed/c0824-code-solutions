import { NextButton } from './NextButton';
import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { PrevButton } from './PrevButton';
import './RotatingBanner.css';

export function RotatingBanner() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="layout">
        <div className=" button">
          <NextButton />
        </div>
        <div>
          <Indicators />
        </div>
        <div className=" button">
          <PrevButton />
        </div>
      </div>
    </div>
  );
}
