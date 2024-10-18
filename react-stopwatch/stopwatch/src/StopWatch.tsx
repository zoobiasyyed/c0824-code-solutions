import './StopWatch.css';
import { FaPause, FaPlay } from 'react-icons/fa';
import { useState } from 'react';

export function StopWatch() {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  // if there is an interval it will be intervalID, if not it will be undefined, which is why
  // we use NodeJS.timeout for the the type
  const [seconds, setSeconds] = useState(0);

  function startTimer() {
    const newIntervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    setIntervalId(newIntervalId);
  }

  function pauseTimer() {
    clearInterval(intervalId);
    setIntervalId(undefined);
  }

  function resetTimer() {
    if (intervalId === undefined) {
      setSeconds(0);
    }
  }

  return (
    <div>
      <div className="stopwatch">
        <div onClick={resetTimer} className="watch-face">
          <span>{seconds}</span>
        </div>
        {intervalId ? (
          <FaPause onClick={pauseTimer} size="2rem" className="start-stop" />
        ) : (
          <FaPlay onClick={startTimer} size="2rem" className="start-stop" />
        )}
      </div>
    </div>
  );
}
