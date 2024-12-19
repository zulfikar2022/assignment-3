import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../utilities/tryCatchReducer.js";

const createBlog = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const blogControllers = {
  createBlog,
};
