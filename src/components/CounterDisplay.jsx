import React, { Component } from "react";

export default class CounterDisplay extends Component {
  render() {
    return <h1>{this.props.count}</h1>;
  }
}
