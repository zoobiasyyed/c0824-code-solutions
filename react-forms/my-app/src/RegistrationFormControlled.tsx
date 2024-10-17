import './RegistrationFormControlled.css';
import { useState, FormEvent } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ username, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="style">
        <label>
          UserName:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"></input>
        </label>
        <label>
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"></input>
        </label>
        <button id="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
