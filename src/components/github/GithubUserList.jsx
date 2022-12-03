import React from "react";
import { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUserList() {
  const [username, setUserame] = useState("");
  const [users, setUsers] = useState([]);

  const handleUserAddition = () => {
    setUsers([...users, username]);
    setUserame("");
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUserame(e.target.value)}
      />
      <button onClick={handleUserAddition}>Add user</button>

      {users.map((user) => (
        <GithubUser user={user} />
      ))}
    </div>
  );
}
