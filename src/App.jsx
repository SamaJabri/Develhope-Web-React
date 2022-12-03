import React, { Component } from "react";
import ClickCounter from "./components/counter/ClickCounter";

export default class App extends Component {
  onCounterChange = (count) => console.log(count);

  render() {
    return <ClickCounter onCounterChange={this.onCounterChange} />;
  }
}
