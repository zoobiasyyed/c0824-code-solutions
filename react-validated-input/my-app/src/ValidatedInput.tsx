import { useState } from 'react';
import './ValidatedInput.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [input, setInput] = useState('');

  let message = '';
  let reactIcons = null;

  if (input === '') {
    message = 'Password is required';
    reactIcons = <FaTimes color="red" />;
  } else if (input.length < 8) {
    message = 'Password is too short';
    reactIcons = <FaTimes color="red" />;
  } else {
    reactIcons = <FaCheck color="green" />;
  }

  return (
    <div>
      <label className="style">
        Password :
        <div className="icon">
          <input
            type="password"
            id="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}></input>
          {reactIcons}
        </div>
      </label>
      <div className="message">{message}</div>
    </div>
  );
}
