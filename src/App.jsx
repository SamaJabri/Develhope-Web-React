import React, { Component } from "react";
import Sum from "./components/Sum";

export default class App extends Component {
  render() {
    return <Sum numbers={[1, 2, 3, 4, 5]} />;
  }
}
