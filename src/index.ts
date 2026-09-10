import express from "express";
import "dotenv-flow/config";
import { Logger } from "./utils/logger.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/health", (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "ok", status: 200 });
});

app.listen(PORT, () => {
  Logger.info(`Server running on port ${PORT}`);
});
