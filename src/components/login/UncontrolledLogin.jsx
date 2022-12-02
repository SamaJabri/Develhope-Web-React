import React, { Component } from "react";
import { createRef } from "react";

export default class UncontrolledLogin extends Component {
  formRef = createRef();

  componentDidMount = () => this.isButtonDisabled();

  handleFormSubmit = (e) => e.preventDefault();

  isButtonDisabled = () =>
    this.formRef.current.elements.username.value !== "" &&
    this.formRef.current.elements.password.value !== ""
      ? (this.formRef.current.elements.login.disabled = false)
      : (this.formRef.current.elements.login.disabled = true);

  render() {
    return (
      <form ref={this.formRef}>
        <input
          type="text"
          name="username"
          onChange={this.isButtonDisabled}
          autoFocus
        />
        <input
          type="password"
          name="password"
          onChange={this.isButtonDisabled}
        />
        <input type="checkbox" name="remember" />

        <button type="submit" name="login" onClick={this.props.onLogin}>
          Login
        </button>

        <button
          type="reset"
          onClick={() => setTimeout(this.isButtonDisabled, 10)}
        >
          Reset
        </button>
      </form>
    );
  }
}
