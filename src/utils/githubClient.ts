import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const githubClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
});

export default githubClient;
