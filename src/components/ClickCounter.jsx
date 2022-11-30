import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";

export default class ClickCounter extends Component {
  state = {
    count: 0,
  };

  incrementBy = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <CounterDisplay count = {this.state.count} />
        <button onClick = {this.incrementBy}>Increment</button>
      </div>
    );
  }
}
