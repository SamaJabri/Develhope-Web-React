import React, { Component } from "react";
import { LanguageContext } from "./LanguageContext";

export default class DisplayLanguage extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => <div>{language}</div>}
      </LanguageContext.Consumer>
    );
  }
}
