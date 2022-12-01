import React, { Component } from "react";
import Login from "./components/Login";

export default class App extends Component {
  onLogin = (e) => e.preventDefault();

  render() {
    return <Login onLogin={this.onLogin} />;
  }
}
