import React, { Component } from "react";
import Welcome from "./components/Welcome";

export default class App extends Component {
  render() {
    return <Welcome name = "Alvaro" age = {18} />;
  }
}
