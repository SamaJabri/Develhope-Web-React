import React, { Component } from "react";
import Welcome from "./Welcome";

export default class InteractiveWelcome extends Component {
  state = {
    name: "",
  };

  handleInputChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type = "text"
          name = "name"
          value = {this.state.name}
          onChange = {this.handleInputChange}
        />
        <Welcome name = {this.state.name} />
      </div>
    );
  }
}
