import express from "express";
import dotenv from "dotenv";
import githubRoutes from "./routes/githubRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/", githubRoutes);

export default app;
