import express from "express";
import userController from "../controllers/userController";
import repoController from "../controllers/repoController";
import {
  validateRepoName,
  validateCreateIssue,
} from "../middlewares/validators";

const router = express.Router();

// GET /github
router.get("/github", userController.getUserData);

// GET /github/:repoName
router.get(
  "/github/:repoName",
  validateRepoName,

  repoController.getRepoData
);

// POST /github/:repoName/issues
router.post(
  "/github/:repoName/issues",
  validateCreateIssue,

  repoController.createIssue
);

export default router;
