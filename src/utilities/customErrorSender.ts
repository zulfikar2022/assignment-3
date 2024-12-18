import { Response } from "express";

export const sendError = (
  res: Response,
  error: Error,
  statusCode: number = 500
) => {
  res.json({
    success: false,
    message: error.message || "Some error happened",
    statusCode,
    error: error,
    stack: error.stack,
  });
};
