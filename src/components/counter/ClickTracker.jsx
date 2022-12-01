import React, { Component } from "react";
import CounterButton from "./CounterButton";

export default class ClickTracker extends Component {
  state = {
    lastPressed: "",
  };

  handleButtonClick = (e) => {
    this.setState({ lastPressed: e.target.innerText });
  };

  render() {
    return (
      <div>
        <CounterButton
          onClickAction = {this.handleButtonClick}
          label = "Button 1"
        />
        <CounterButton
          onClickAction = {this.handleButtonClick}
          label = "Button 2"
        />
        <CounterButton
          onClickAction = {this.handleButtonClick}
          label = "Button 3"
        />
        {this.state.lastPressed && <h1>{this.state.lastPressed}</h1>}
      </div>
    );
  }
}
