import asyncHandler from "../../utilities/tryCatchReducer.js";
import { blogServices } from "./blog.service.js";
import sendResponse from "../../utilities/customResponseSender.js";
import { CustomResponse } from "../../utilities/CustomResponse.js";
const createBlog = asyncHandler(async (req, res, next) => {
    // Create a blog here
    const blog = await blogServices.createBlogIntoDB({ _id: req._id, email: req.email, role: req.role }, req.body);
    sendResponse(res, new CustomResponse("Blog created successfully", 200, blog));
});
export const blogControllers = {
    createBlog,
};
