import { useState, useEffect } from "react";

const MouseT = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <p>Mouse X: {x}</p>
      <p>Mouse Y: {y}</p>
    </>
  );
};

export default MouseT;
