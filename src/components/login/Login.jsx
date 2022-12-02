import React, { Component } from "react";

export default class Login extends Component {
  INIT_STATE = {
    username: "",
    password: "",
    remember: false,
    disableLogin: true,
  };

  state = this.INIT_STATE;

  handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputType = e.target.type;
    const inputValue =
      inputType === "checkbox" ? e.target.checked : e.target.value;

    this.setState({ [inputName]: inputValue });
    this.isButtonDisabled();
  };

  isButtonDisabled = () => {
    this.setState((state) => {
      return {
        disableLogin: state.username && state.password ? false : true,
      };
    });
  };

  resetInputs = () => {
    this.setState(this.INIT_STATE);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <input
          type="checkbox"
          name="remember"
          checked={this.state.remember}
          onChange={this.handleInputChange}
        />

        <button
          className={
            this.state.password.length >= 8
              ? "login-button-valid"
              : "login-button-invalid"
          }
          type="submit"
          disabled={this.state.disableLogin}
          onClick={this.props.onLogin}
        >
          Login
        </button>

        <button type="button" onClick={this.resetInputs}>
          Reset
        </button>
      </form>
    );
  }
}
