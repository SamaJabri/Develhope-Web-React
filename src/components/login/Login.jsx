import React from "react";
import useControlledform from "./useControlledform";

export default function Login(props) {
  const { username, password, handleInputChange } = useControlledform();

  return (
    <form>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => handleInputChange(e, "username")}
      />

      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => handleInputChange(e, "password")}
      />

      <button
        className={
          password.length >= 8 ? "login-button-valid" : "login-button-invalid"
        }
        type="submit"
        disabled={!(username && password)}
        onClick={props.onLogin}
      >
        Login
      </button>
    </form>
  );
}
