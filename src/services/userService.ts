import githubClient from "../utils/githubClient";
import { GitHubUser } from "../types/github.type";

class UserService {
  async getUserData(username: string): Promise<GitHubUser> {
    const response = await githubClient.get<GitHubUser>(`/users/${username}`);
    return response.data;
  }
}

export default new UserService();
