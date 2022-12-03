import React from "react";
import { useState, useEffect } from "react";

export default function GithubUser(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.user}`)
      .then((promise) => promise.json())
      .then((result) => setUser(result))
      .catch((error) => alert(error));
  }, []);

  return (
    <div>
      {user.length === 0 ? (
        <div>
          <img
            src={user.avatar_url}
            alt="user-avatar"
            width={150}
            height={150}
          />
          <h2>
            {user.login} - {user.id}
          </h2>
        </div>
      ) : (
        <h1>404 User Not Found</h1>
      )}
    </div>
  );
}
