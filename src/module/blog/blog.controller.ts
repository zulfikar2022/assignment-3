import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../utilities/tryCatchReducer.js";
import { blogServices } from "./blog.service.js";
import sendResponse from "../../utilities/customResponseSender.js";
import { CustomResponse } from "../../utilities/CustomResponse.js";

const createBlog = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Create a blog here
    const blog = await blogServices.createBlogIntoDB(
      { _id: req._id, email: req.email, role: req.role },
      req.body
    );
    sendResponse(
      res,
      new CustomResponse("Blog created successfully", 200, blog)
    );
  }
);
const updateBlog = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Update a blog here
    const id = req.params.id;
    const payload = req.body;
    const updatedBlog = await blogServices.updateBlogIntoDB(id, payload);
    sendResponse(
      res,
      new CustomResponse("Blog updated successfully", 200, updatedBlog)
    );
  }
);

const deleteABlog = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Delete a blog here
    const id = req.params.id;
    const isDeleted = await blogServices.deleteBlogFromDb(id);
    if (isDeleted) {
      sendResponse(
        res,
        new CustomResponse("Blog deleted successfully", 200, { isDeleted })
      );
    }
  }
);

export const blogControllers = {
  createBlog,
  updateBlog,
  deleteABlog,
};
