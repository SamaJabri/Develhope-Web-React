import React from "react";
import useGithubUser from "./useGithubUser";

export default function GithubUser(props) {
  const { user } = useGithubUser(props.username);

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
