import axios from 'axios';

const baseUrl = "https://api.github.com"

export default {
  async getStarredRepositories(userName) {
    const url = `${baseUrl}/users/${userName}/starred`
    return await axios.get(url);
  },
};