import React, { Component } from "react";
import Message from "./Message";

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Message />
      </div>
    );
  }
}
