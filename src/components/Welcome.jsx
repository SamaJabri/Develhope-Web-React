import React, { Component } from "react";
import Age from "./Age";
import Message from "./Message";

export default class Welcome extends Component {
  static defaultProps = {
    name: "Unknown",
  };

  age = this.props.age;

  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {
            this.age > 18 
            ? (<Age age={this.age} />)
            : (<Message message = "You are very young!" />)
        }
      </div>
    );
  }
}
