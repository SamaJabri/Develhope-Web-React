import React, { useEffect } from "react";
import useGithubUser from "./useGithubUser";

export default function GithubUser(props) {
  const { fetchUser, user, error, loading } = useGithubUser();

  useEffect(() => fetchUser(props.username), [props.username]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && !user && <h1>Error</h1>}
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
