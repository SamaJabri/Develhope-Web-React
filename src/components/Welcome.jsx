import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return <p className="welcome">Welcome, {this.props.name}!</p>;
  }
}
