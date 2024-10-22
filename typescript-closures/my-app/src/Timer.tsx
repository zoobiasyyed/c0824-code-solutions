/* eslint-disable react-hooks/exhaustive-deps -- Delete this line! */
import { useEffect, useState } from 'react';

export function Timer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time + 1);
      console.log(`Time is: ${time}`);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [time]); //adding time as a dependency to fix the
  //incrementation problem

  return (
    <div>
      {time}
      <button onClick={() => setTime(0)} style={{ marginLeft: '1rem' }}>
        Reset
      </button>
    </div>
  );
}

// the closures that are in this code: the clear timeout arrow function
//and the setTimeout function
