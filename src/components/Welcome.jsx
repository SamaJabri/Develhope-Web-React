import React, { Component } from "react";
import Age from "./Age";

export default class Welcome extends Component {
  static defaultProps = {
    name: "Unknown",
  };

  age = this.props.age;

  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        { 18 < this.age && this.age < 65 && <Age age = {this.age} /> }
      </div>
    );
  }
}
