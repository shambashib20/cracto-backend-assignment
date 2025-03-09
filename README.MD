# GitHub API Integration Challenge

This project is a solution to the challenge of building an API that integrates with the GitHub API to fetch user activity data and create issues in repositories. The API is built using **Node.js**, **TypeScript**, and **Express.js**, and it follows best practices such as the **Controller-Service architecture** and **express-validator** for input validation.

---

## **Challenge Description**

The goal of this challenge is to build an API that connects to the GitHub API and provides the following functionality:

1. **Fetch GitHub User Data**:
   - Endpoint: `GET /github`
   - Returns: Number of followers, number of following, and a list of personal repositories.

2. **Fetch Repository Data**:
   - Endpoint: `GET /github/{repo-name}`
   - Returns: Details about a specific repository (e.g., name, description, URL).

3. **Create an Issue in a Repository**:
   - Endpoint: `POST /github/{repo-name}/issues`
   - Input: `title` and `body` of the issue.
   - Returns: URL of the created issue.

---

## **Solution Overview**

### **Tech Stack**
- **Node.js**: Runtime environment for the API.
- **TypeScript**: Adds type safety and improves code maintainability.
- **Express.js**: Framework for building the API.
- **Axios**: HTTP client for making requests to the GitHub API.
- **express-validator**: Middleware for validating request inputs.
- **dotenv**: Manages environment variables.

### **Project Structure**
```
src/
├── controllers/ # Controllers for handling requests
├── services/ # Business logic and GitHub API interactions
├── routes/ # API routes
├── middlewares/ # Validation middleware
├── utils/ # Utility functions (e.g., GitHub API client)
├── types/ # TypeScript interfaces/types
├── app.ts # Express app setup
└── server.ts # Server entry point
```

---

## *Setup Instructions*

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name