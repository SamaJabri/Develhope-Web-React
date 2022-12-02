import React, { Component } from "react";
import UncontrolledLogin from "./components/UncontrolledLogin";

export default class App extends Component {
  onLogin = (e) => e.preventDefault();

  render() {
    return <UncontrolledLogin onLogin={this.onLogin} />;
  }
}
