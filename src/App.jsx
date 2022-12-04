import React, { Component } from "react";
import DisplayLanguage from "./components/language/DisplayLanguage";
import { LanguageContext } from "./components/language/LanguageContext";

export default class App extends Component {
  state = {
    language: "english",
  };

  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={(e) => this.setState({ language: e.target.value })}
        >
          <option value="english">English</option>
          <option value="arabic">Arabic</option>
        </select>

        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}
