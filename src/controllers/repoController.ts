import { Request, Response } from "express";
import repoService from "../services/repoService";
import dotenv from "dotenv";
dotenv.config();

class RepoController {
  async getRepoData(req: Request, res: Response) {
    try {
      const { repoName } = req.params;
      const username = String(process.env.GITHUB_USERNAME);
      const repoData = await repoService.getRepoData(username, repoName);
      res.json(repoData);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch repo data" });
    }
  }

  async createIssue(req: Request, res: Response) {
    try {
      const { repoName } = req.params;
      const { title, body } = req.body;
      const username = String(process.env.GITHUB_USERNAME);
      console.log(title, body, repoName);
      const issueUrl = await repoService.createIssue(
        username,
        repoName,
        title,
        body
      );
      res.json({ issueUrl });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new RepoController();
