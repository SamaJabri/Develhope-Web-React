import useSWR from "swr";

export default function useGithubUser(username) {
  const fetchUser = (url) => fetch(url).then((response) => response.json());

  const { data, error, mutate } = useSWR(
    username && `https://api.github.com/users/${username}`,
    fetchUser
  );

  const handleFetching = () => mutate();

  return {
    user: data,
    error,
    loading: !data && !error,
    handleFetching,
  };
}
