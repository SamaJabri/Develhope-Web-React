import { useState } from "react";

export default function useGithubUser() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = (username) => {
    setLoading(true);

    fetch(`https://api.github.com/users/${username}`)
      .then((response) =>
        response.status !== 200 ? setError(new Error()) : response.json()
      )
      .then((result) => setUser(result))
      .catch((err) => setError(new Error()))
      .finally(() => setLoading(false));
  };

  return {
    fetchUser,
    user,
    error,
    loading,
  };
}