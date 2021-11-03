import React, { createContext } from "react";
import useToggle from "../hooks/useToggle";
export const ThemeContext = createContext();
const ThemeProvider = (props) => {
  const [isDarkMode, toggleTheme] = useToggle(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
