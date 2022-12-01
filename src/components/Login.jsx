import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputType = e.target.type;
    const inputValue =
      inputType === "checkbox" ? e.target.checked : e.target.value;

    this.setState({ [inputName]: inputValue });
  };

  render() {
    return (
      <form>
        <input
          type = "text"
          name = "username"
          value = {this.state.username}
          onChange = {this.handleInputChange}
        />
        <input
          type = "password"
          name = "password"
          value = {this.state.password}
          onChange = {this.handleInputChange}
        />
        <input
          type = "checkbox"
          name = "remember"
          checked = {this.state.remember}
          onChange = {this.handleInputChange}
        />
      </form>
    );
  }
}
