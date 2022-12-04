import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
        <div>
          - <Link to={`${user}`}>{user}</Link>
        </div>
      ))}

      <hr />
      <Outlet />
    </div>
  );
}
