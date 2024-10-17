import './RegistrationFormUncontrolled.css';
import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event?.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const objForm = Object.fromEntries(formData.entries());

    console.log(objForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="style">
        <label>
          UserName:
          <input type="text" name="username"></input>
        </label>
        <label>
          Password:
          <input type="password" name="password"></input>
        </label>
        <button id="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
