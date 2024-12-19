import { Types } from "mongoose";
import { TBlog, TBlogPayload } from "./blog.interface.js";
import { Blog } from "./blog.model.js";
import { CustomError } from "../../utilities/CustomError.js";
import { User } from "../user/user.model.js";

const createBlogIntoDB = async (
  user: {
    _id: string;
    email: string;
    role: "admin" | "user";
  },
  payload: TBlogPayload
) => {
  try {
    const { title, content } = payload;
    const { _id, email, role } = user;
    // Create a blog here
    const blog = await (
      await Blog.create({
        title,
        content,
        author: _id,
      })
    ).populate("author");

    const returnableBlog = {
      _id: blog._id,
      title: blog.title,
      content: blog.content,
      author: blog.author,
    };
    return returnableBlog;
  } catch (error) {
    throw new CustomError("Failed to create a blog", 500, error);
  }
};

const updateBlogIntoDB = async (
  id: string,
  payload: Partial<Pick<TBlog, "content" | "title">>
) => {
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
  } catch (error) {
    throw new CustomError("Failed to update a blog", 500, error);
  }
};

const deleteBlogFromDb = async (id: string) => {
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      throw new Error("Blog not found");
    }
    return true;
  } catch (error) {
    throw new CustomError("Failed to delete a blog", 500, error);
  }
};

export const blogServices = {
  createBlogIntoDB,
  updateBlogIntoDB,
  deleteBlogFromDb,
};
