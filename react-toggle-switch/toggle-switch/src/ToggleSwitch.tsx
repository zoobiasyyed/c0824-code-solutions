import './ToggleSwitch.css';
import { useState } from 'react';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);

  let switchSlider = 'toggle-switch';

  if (isOn === true) {
    switchSlider += ' is-on';
  }

  function handleClick() {
    console.log(isOn);
    setIsOn(!isOn);
  }

  return (
    <div className={switchSlider} onClick={handleClick}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="state-label">{isOn ? 'ON' : 'OFF'}</span>
    </div>
  );
}
