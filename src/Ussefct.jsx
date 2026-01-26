import { useState, useEffect } from "react";

const Use = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("hello");

  useEffect(() => {
    if (name.trim() === "") {
      document.title = "welcome!";
    } else {
      document.title = `${greeting} ${name}`;
    }
  }, [name, greeting]);

  return (
    <>
      <h2>Enter your name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <h2>Choose a greeting</h2>
      <input
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
        placeholder="Greeting"
      />
    </>
  );
};

export default Use;
