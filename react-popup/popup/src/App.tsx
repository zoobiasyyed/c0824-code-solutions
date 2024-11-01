import { Popup } from './Popup';
import { useState, useRef } from 'react';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button ref={buttonRef} onClick={handleOpen}>
        Pop Up!
      </button>
      <p>Blahblahblahblahblahblahblah</p>
      <Popup
        positionTo={buttonRef.current}
        onClose={handleClose}
        isOpen={isOpen}>
        <ul className="list-style">
          <li>burger</li>
          <li>fries</li>
          <li>drink</li>
        </ul>
      </Popup>
      <p>Blahblahblahblahblahblahblah</p>
    </>
  );
}

export default App;
