import React, { Component } from "react";
import CounterButton from "./CounterButton";
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
        <CounterDisplay count={this.state.count} />
        <CounterButton onClickAction={this.incrementBy} label="Increment" />
      </div>
    );
  }
}
