import { Blog } from "./blog.model.js";
import { CustomError } from "../../utilities/CustomError.js";
const createBlogIntoDB = async (user, payload) => {
    try {
        const { title, content } = payload;
        const { _id, email, role } = user;
        // Create a blog here
        const blog = await (await Blog.create({
            title,
            content,
            author: _id,
        })).populate("author");
        const returnableBlog = {
            _id: blog._id,
            title: blog.title,
            content: blog.content,
            author: blog.author,
        };
        return returnableBlog;
    }
    catch (error) {
        throw new CustomError("Failed to create a blog", 500, error);
    }
};
const updateBlogIntoDB = async (id, payload) => {
    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            throw new Error("Blog not found");
        }
        const updatedBlog = await Blog.findByIdAndUpdate(id, payload, {
            new: true,
        }).populate("author");
        if (!updatedBlog) {
            throw new Error("Failed to update a blog");
        }
        const returnableBlog = {
            _id: updatedBlog._id,
            title: updatedBlog.title,
            content: updatedBlog.content,
            author: updatedBlog.author,
        };
        return returnableBlog;
    }
    catch (error) {
        throw new CustomError("Failed to update a blog", 500, error);
    }
};
const deleteBlogFromDb = async (id) => {
    try {
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            throw new Error("Blog not found");
        }
        return true;
    }
    catch (error) {
        throw new CustomError("Failed to delete a blog", 500, error);
    }
};
const getAllBlogsFromDb = async () => {
    try {
        const blogs = await Blog.find().populate("author");
        const returnableBlogs = blogs.map((blog) => {
            return {
                _id: blog._id,
                title: blog.title,
                content: blog.content,
                author: blog.author,
            };
        });
        return returnableBlogs;
    }
    catch (error) {
        throw new CustomError("Failed to get all blogs", 500, error);
    }
};
export const blogServices = {
    createBlogIntoDB,
    updateBlogIntoDB,
    deleteBlogFromDb,
    getAllBlogsFromDb,
};
