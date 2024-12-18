import { Request, Response, NextFunction } from "express";

// This is the wrapper function that handles the try-catch logic
const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default asyncHandler;
