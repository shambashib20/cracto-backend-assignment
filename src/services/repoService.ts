import githubClient from "../utils/githubClient";
import { GitHubRepo } from "../types/github.type";

class RepoService {
  async getRepoData(username: string, repoName: string): Promise<GitHubRepo> {
    const response = await githubClient.get<GitHubRepo>(
      `/repos/${username}/${repoName}`
    );
    return response.data;
  }

  async createIssue(
    username: string,
    repoName: string,
    title: string,
    body: string
  ): Promise<string> {
    const response = await githubClient.post(
      `/repos/${username}/${repoName}/issues`,
      { title, body }
    );
    return response.data.html_url;
  }
}

export default new RepoService();
