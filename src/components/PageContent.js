import React, { Component } from "react";
import { ContextTheme } from "../contexts/ThemeContext";

export default class PageContent extends Component {
  static contextType = ContextTheme;
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? "#cecece" : "white",
      width: "100vw",
      height: "100vh",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}
