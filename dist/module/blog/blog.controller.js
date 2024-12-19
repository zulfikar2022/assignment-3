import asyncHandler from "../../utilities/tryCatchReducer.js";
import { blogServices } from "./blog.service.js";
import sendResponse from "../../utilities/customResponseSender.js";
import { CustomResponse } from "../../utilities/CustomResponse.js";
const createBlog = asyncHandler(async (req, res, next) => {
    // Create a blog here
    const blog = await blogServices.createBlogIntoDB({ _id: req._id, email: req.email, role: req.role }, req.body);
    sendResponse(res, new CustomResponse("Blog created successfully", 200, blog));
});
const updateBlog = asyncHandler(async (req, res, next) => {
    // Update a blog here
    const id = req.params.id;
    const payload = req.body;
    const updatedBlog = await blogServices.updateBlogIntoDB(id, payload);
    sendResponse(res, new CustomResponse("Blog updated successfully", 200, updatedBlog));
});
const deleteABlog = asyncHandler(async (req, res, next) => {
    // Delete a blog here
    const id = req.params.id;
    const isDeleted = await blogServices.deleteBlogFromDb(id);
    if (isDeleted) {
        sendResponse(res, new CustomResponse("Blog deleted successfully", 200, { isDeleted }));
    }
});
const getAllBlogs = asyncHandler(async (req, res, next) => {
    // Get all blogs here
    console.log(req.query);
    const blogs = await blogServices.getAllBlogsFromDb(req.query);
    sendResponse(res, new CustomResponse("All blogs", 200, blogs));
});
export const blogControllers = {
    createBlog,
    updateBlog,
    deleteABlog,
    getAllBlogs,
};
