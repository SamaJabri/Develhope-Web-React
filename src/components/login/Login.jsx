import React from "react";
import { useState } from "react";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [disableLogin, setDisableLogin] = useState(true);

  const isButtonDisabled = () =>
    setDisableLogin(username && password ? false : true);

  const handleInputChange = (e, setProperty) => {
    const inputType = e.target.type;
    const inputValue =
      inputType === "checkbox" ? e.target.checked : e.target.value;

    setProperty(inputValue);
    isButtonDisabled();
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setRemember(false);

    isButtonDisabled();
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => handleInputChange(e, setUsername)}
      />

      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => handleInputChange(e, setPassword)}
      />

      <input
        type="checkbox"
        name="remember"
        checked={remember}
        onChange={(e) => handleInputChange(e, setRemember)}
      />

      <button
        className={
          password.length >= 8 ? "login-button-valid" : "login-button-invalid"
        }
        type="submit"
        disabled={disableLogin}
        onClick={props.onLogin}
      >
        Login
      </button>

      <button type="reset" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
}
