import React, { Component } from "react";

export default class Container extends Component {
  render() {
    return (
      <div className="bg-white border border-red-500">{this.props.title}</div>
    );
  }
}
