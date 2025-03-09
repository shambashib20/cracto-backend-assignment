export interface GitHubUser {
  login: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
}

export interface GitHubIssue {
  title: string;
  body: string;
  html_url: string;
}
