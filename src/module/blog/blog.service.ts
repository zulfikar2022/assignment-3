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

export const blogServices = {
  createBlogIntoDB,
};
