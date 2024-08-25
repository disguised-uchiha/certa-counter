import React, { useState, useEffect } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const toggleCounter = () => {
    setIsRunning((prevState) => !prevState);
  };

  const resetCounter = () => {
    setIsRunning(false);
    setCounter(0);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={toggleCounter}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default Counter;
