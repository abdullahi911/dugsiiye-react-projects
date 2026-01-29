import { useEffect, useState } from "react";

const COUNtdown = () => {
  const [inputTime, setInputTime] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (inputTime > 0) {
      setTimeLeft(Number(inputTime));
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setInputTime("");
  };

  return (
    <>
      <h1>Countdown Timer</h1>

      <p>Set time (seconds):</p>
      <input
        type="number"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
        disabled={isRunning}
      />

      <p>Time left: {timeLeft} seconds</p>

      <button onClick={handleStart} disabled={isRunning || inputTime <= 0}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default COUNtdown;
