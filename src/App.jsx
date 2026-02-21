import { useState } from "react";
import Languagecontext from "./Languagepr";
import { Languagech } from "./Languagech";

function App() {

  const [language, setLanguage] = useState("spanish");

  const changeLanguage = () => {
    setLanguage((prev) =>
      prev === "spanish" ? "english" : "spanish"
    );
  };

  return (
    <Languagecontext.Provider value={language}>

      <button onClick={changeLanguage}>
        Switch to {language === "spanish" ? "english" : "spanish"}
      </button>

      <h1>
        {language === "spanish" ? "Hola!" : "Hello!"}
      </h1>



    </Languagecontext.Provider>
  );
}

export default App;