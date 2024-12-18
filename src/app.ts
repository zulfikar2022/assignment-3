import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./global_routes.js";
import { sendError } from "./utilities/customErrorSender.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

// creating an error handling middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  sendError(res, error);
});

app.all("*", (req: Request, res: Response) => {
  sendError(res, new Error("Route not found"), 404);
});

export default app;
