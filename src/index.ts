import express from "express";
import "dotenv-flow/config";
import { Logger } from "./utils/logger.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.listen(PORT, () => {
  Logger.info(`Server running on port ${PORT}`);
});
