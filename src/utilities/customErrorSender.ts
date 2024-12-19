import { Response } from "express";
import { CustomError } from "./CustomError.js";

export const sendError = (res: Response, error: CustomError) => {
  res.json({
    success: error.success,
    message: error.message,
    statusCode: error.statusCode,
    error: error.error,
    stack: error.stack,
  });
};
