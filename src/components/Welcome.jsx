import React, { Component } from "react";

export default class Welcome extends Component {
  static defaultProps = {
    name: "Unknown",
  };

  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        <p>Your age is {this.props.age}</p>
      </div>
    );
  }
}
