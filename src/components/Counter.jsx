import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends Component {
  state = {
    count: this.props.intialValue ?? 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.incrementBy };
      });
    }, this.props.incrementInterval);
  }

  render() {
    return <CounterDisplay count = {this.state.count} />;
  }
}
