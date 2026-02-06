import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <>
      <h1>count {count}</h1>

      <button 
        onClick={handleDecrement} 
        disabled={count <= 0}
      >
        Decrement
      </button>

      <button onClick={handleIncrement}>
        Increment
      </button>
    </>
  );
};

export default Count;
