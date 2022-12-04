import useSWR from "swr";

export default function useGithubUser(username) {
  const fetchUser = (url) => fetch(url).then((response) => response.json());

  const { data, error } = useSWR(
    username && `https://api.github.com/users/${username}`,
    fetchUser
  );

  return {
    user: data,
    error,
    loading: !data && !error,
  };
}
