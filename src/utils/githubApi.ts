import axios from 'axios';

export const getRepoInfo = async (repoSlug: string) => {
  const { data } = await axios.get(
    `https://api.github.com/repos/galambborong/${repoSlug}`
  );

  return data;
};
