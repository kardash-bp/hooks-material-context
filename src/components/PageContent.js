import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

const PageContent = (props) => {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "#cecece" : "white",
    width: "100vw",
    height: "100vh",
  };
  return <div style={styles}>{props.children}</div>;
};
export default PageContent;
