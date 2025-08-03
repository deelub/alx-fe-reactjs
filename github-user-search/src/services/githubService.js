// src/services/github.js
import axios from 'axios';

const API_URL = 'https://api.github.com/users/';

const BASE_URL = 'https://api.github.com/users/';

export const fetchUserData = async (username) => {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

  const config = token
    ? { headers: { Authorization: `token ${token}` } }
    : {};

  try {
    const response = await axios.get(`${BASE_URL}${username}`, config);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

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
