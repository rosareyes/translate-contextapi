import React, { useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import Button from "./Button";

const App = () => {
  const [language, setLanguage] = useState("english");
  return (
    <div className='ui container'>
      <div>
        Select a Language:
        <i className='flag us' onClick={() => setLanguage("english")}></i>
        <i className='flag nl' onClick={() => setLanguage("dutch")}></i>
      </div>
      <LanguageContext.Provider value={language}>
        <UserCreate></UserCreate>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
