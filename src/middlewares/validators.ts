import { body, param, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateRepoName = [
  param("repoName")
    .notEmpty()
    .withMessage("Repository name is required")
    .isString()
    .withMessage("Repository name must be a string"),
];

export const validateCreateIssue = [
  param("repoName")
    .notEmpty()
    .withMessage("Repository name is required")
    .isString()
    .withMessage("Repository name must be a string"),
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isString()
    .withMessage("Title must be a string"),
  body("body")
    .notEmpty()
    .withMessage("Body is required")
    .isString()
    .withMessage("Body must be a string"),
];

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return a 400 response with validation errors
    return res.status(400).json({ errors: errors.array() });
  }
  // If no errors, proceed to the next middleware
  next();
};
