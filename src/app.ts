import "reflect-metadata";
import "dotenv/config";

import express, { NextFunction } from "express";
import cors from "cors";

import "./database";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

function logRequests(req: Request, res: Response, next: NextFunction) {
  const { method, url } = req;
  const logLabel = `[${method.toUpperCase()}] ${url}`;
  console.time(logLabel);
  next();
  console.timeEnd(logLabel);
}

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("Server running");
});
