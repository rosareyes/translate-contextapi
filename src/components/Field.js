import React from "react";
import LanguageContext from "../contexts/LanguageContext";

const Field = (props) => {
  console.log(props);
  const language = React.useContext(LanguageContext);

  return (
    <div className='ui field'>
      <label> {language === "english" ? "Name" : "Naam"}</label>
      <input />
    </div>
  );
};

export default Field;
