import React, { Component } from "react";

export default class Welcome extends Component {
  static defaultProps = {
    name: "Unknown",
  };

  render() {
    return <p>Welcome, {this.props.name}!</p>;
  }
}
