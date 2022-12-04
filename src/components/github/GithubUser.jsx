import React from "react";
import useGithubUser from "./useGithubUser";

export default function GithubUser(props) {
  const { user, error, loading } = useGithubUser(props.username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {user && (
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
      )}
    </div>
  );
}
