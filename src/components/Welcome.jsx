import React, { Component } from "react";
import Age from "./Age";

export default class Welcome extends Component {
  static defaultProps = {
    name: "Unknown",
  };

  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        <Age age={this.props.age} />
      </div>
    );
  }
}
