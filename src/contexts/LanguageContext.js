import React, { Component, createContext } from "react";
export const LangContext = createContext();
export default class LanguageContext extends Component {
  state = { lang: "sr" };
  changeLang = (value) =>
    this.setState({
      lang: value,
    });
  render() {
    return (
      <LangContext.Provider
        value={{ ...this.state, changeLang: this.changeLang }}
      >
        {this.props.children}
      </LangContext.Provider>
    );
  }
}
// hoc
export const withLanguageContext = (Component) => (props) =>
  (
    <LangContext.Consumer>
      {(context) => <Component languageContext={context} {...props} />}
    </LangContext.Consumer>
  );
