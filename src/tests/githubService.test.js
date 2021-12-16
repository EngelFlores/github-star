import axios from 'axios';
import githubService from '../api/githubService';

const baseUrl = "https://api.github.com"

jest.mock('axios');

test('should get user starred repositories status', async () => {
  const userName = 'ddavison';
  const url = `${baseUrl}/users/${userName}/starred`
  const status = 'ok';

  axios.get.mockResolvedValue(status);

  const response = await githubService.getStarredRepositories(userName);

  expect(axios.get).toHaveBeenCalledWith(url);
  expect(response).toEqual(status);
});

test('should star repository', async () => {
  const repoOwner = 'ddavison';
  const repoName = "docker-selenium"
  const url = `${baseUrl}/user/starred/${repoOwner}/${repoName}`
  const status = 'ok';
  const token = process.env.REACT_APP_API_KEY
  const config = {
    headers: { "Accept": "application/vnd.github.v3+json", "Authorization": `token ${token}` }
  }

  axios.put.mockResolvedValue(status);

  const response = await githubService.starRepository(repoOwner, repoName);

  expect(axios.put).toHaveBeenCalledWith(url, { owner: repoOwner, repo: repoName }, config);
  expect(response).toEqual(status);
});

test('should check if repositories is starred', async () => {
  const repoOwner = 'microsoft';
  const repoName = "pyright"
  const url = `${baseUrl}/user/starred/${repoOwner}/${repoName}`
  const status = 'ok';
  const token = process.env.REACT_APP_API_KEY
  const config = {
    headers: { "Accept": "application/vnd.github.v3+json", "Authorization": `token ${token}` }
  }

  axios.get.mockResolvedValue(status);

  const response = await githubService.checkStarredRepository(repoOwner, repoName);

  expect(axios.get).toHaveBeenCalledWith(url, config);
});