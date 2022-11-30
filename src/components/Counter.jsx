import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends Component {
  state = {
    count: this.props.intialValue ?? 0,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + props.incrementBy };
      });
    }, props.incrementInterval);
  }

  render() {
    return <CounterDisplay count = {this.state.count} />
  }
}
