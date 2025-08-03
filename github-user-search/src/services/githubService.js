import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

/**
 * Builds the GitHub search query string
 * @param {string} username - GitHub username
 * @param {string} location - User's location
 * @param {string|number} minRepos - Minimum number of public repos
 * @returns {string} - GitHub query string
 */
const buildQuery = (username, location, minRepos) => {
  let queryParts = [];

  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  return queryParts.join(' ').trim();
};

/**
 * Search GitHub users with optional filters
 * @param {string} username
 * @param {string} location
 * @param {number} minRepos
 * @param {number} page
 * @returns {Promise<object>} API response data
 */
export const fetchUserData = async (username, location, minRepos, page = 1) => {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

  const query = buildQuery(username, location, minRepos);

  const config = {
    headers: token ? { Authorization: `token ${token}` } : {},
    params: {
      q: query,
      page,
      per_page: 10,
    },
  };

  const response = await axios.get(BASE_URL, config);
  return response.data;
};
