import { useState } from "react";

export default function useControlledform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (value, setField) => setField(value);

  return {
    username,
    password,
    handleInputChange,
  };
}
