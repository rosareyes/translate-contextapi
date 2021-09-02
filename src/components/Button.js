import React from "react";
import LanguageContext from "../contexts/LanguageContext";

const Button = () => {
  const language = React.useContext(LanguageContext);
  return (
    <button className='ui button primary'>
      {language === "english" ? "Submit" : "algoenaleman"}
    </button>
  );
};

export default Button;
