// src/services/github.js
import axios from 'axios';

const API_URL = 'https://api.github.com/users/';

export const fetchGitHubUser = async (username) => {
  const config = {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  };

  try {
    const response = await axios.get(`${API_URL}${username}`, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
