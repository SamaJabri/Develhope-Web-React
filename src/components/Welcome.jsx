import React, { Component } from "react";
import Age from "./Age";

export default class Welcome extends Component {
  static defaultProps = {
    name: "Unknown",
  };

  age = this.props.age;
  name = this.props.name;

  render() {
    return (
      <div>
        <p>Welcome, {this.name}!</p>
        {
            18 < this.age && this.age < 65
            && this.name === "John"
            && (<Age age = {this.age} />)
        }
      </div>
    );
  }
}
