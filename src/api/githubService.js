import axios from 'axios';

const baseUrl = "https://api.github.com"

export default {
  async getStarredRepositories(userName) {
    try {
      const url = `${baseUrl}/users/${userName}/starred`
      return await axios.get(url);
    } catch (error) {
      console.error(error);
    }
  },

  async getUserInfo(userName) {
    try {
      const url = `${baseUrl}/users/${userName}`
      return await axios.get(url);
    } catch (error) {
      console.error(error);
    }
  },

  async starRepository(repoOwner, repoName) {
    try {
      const url = `${baseUrl}/user/starred/${repoOwner}/${repoName}`
      const token = process.env.REACT_APP_API_KEY
      const config = {
        headers: { "Accept": "application/vnd.github.v3+json", "Authorization": `token ${token}` }
      }
      return await axios.put(url, { owner: repoOwner, repo: repoName }, config)
    } catch (error) {
      console.error(error);
    }
  },

  async checkStarredRepository(repoOwner, repoName) {
    try {
      const url = `${baseUrl}/user/starred/${repoOwner}/${repoName}`
      const token = process.env.REACT_APP_API_KEY
      const config = {
        headers: { "Accept": "application/vnd.github.v3+json", "Authorization": `token ${token}` }
      }
      return (await axios.get(url, config)).status
    } catch (error) {
      console.error(error);
    }
  }
};