import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./global_routes.js";
import { sendError } from "./utilities/customErrorSender.js";
import { CustomError } from "./utilities/CustomError.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.all("*", (req: Request, res: Response) => {
  sendError(res, new CustomError("Route Not Found", 404, {}));
});

// creating an error handling middleware
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log("Inside global error handler.");
  sendError(res, error);
});
export default app;
