import axios from 'axios';
import githubService from '../api/githubService';

const baseUrl = "https://api.github.com"

jest.mock('axios');

test('should get user starred repositories', async () => {
  const userName = 'ddavison';
  const url = `${baseUrl}/users/${userName}/starred`
  const status = 'ok';

  axios.get.mockResolvedValue(status);

  const response = await githubService.getStarredRepositories(userName);

  expect(axios.get).toHaveBeenCalledWith(url);
  expect(response).toEqual(status);
});