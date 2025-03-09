import { Request, Response } from "express";
import userservice from "../services/userService";

class UserController {
  async getUserData(req: Request, res: Response) {
    try {
      const username = String(process.env.GITHUB_USERNAME);
      const userData = await userservice.getUserData(username);
      res.json(userData);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user data" });
    }
  }
}

export default new UserController();
