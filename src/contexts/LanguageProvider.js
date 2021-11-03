import React, { createContext, useState } from "react";
export const LangContext = createContext();
const LanguageProvider = (props) => {
  const [lang, setLang] = useState("sr");
  const changeLang = (value) => setLang(value);

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {props.children}
    </LangContext.Provider>
  );
};
export default LanguageProvider;
