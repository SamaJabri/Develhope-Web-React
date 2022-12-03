import { useState, useEffect } from "react";

export default function useGithubUser(username) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((promise) => promise.json())
      .then((result) => setUser(result))
      .catch((error) => alert(error));
  }, []);

  return {
    user,
  };
}
