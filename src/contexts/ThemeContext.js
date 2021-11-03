import React, { Component, createContext } from "react";
export const ContextTheme = createContext();
export default class ThemeContext extends Component {
  state = { isDarkMode: false };
  toggleTheme = () =>
    this.setState({
      isDarkMode: !this.state.isDarkMode,
    });
  render() {
    return (
      <ContextTheme.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ContextTheme.Provider>
    );
  }
}
