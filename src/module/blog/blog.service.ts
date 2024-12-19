import { Types } from "mongoose";
import { TBlogPayload } from "./blog.interface.js";
import { Blog } from "./blog.model.js";
import { CustomError } from "../../utilities/CustomError.js";

const createBlogIntoDB = async (
  user: {
    _id: Types.ObjectId;
    email: string;
    role: "admin" | "user";
  },
  payload: TBlogPayload
) => {
  try {
    const { title, content } = payload;
    const { _id, email, role } = user;
    // Create a blog here
    const blog = (await Blog.create({ title, content, author: _id })).populate(
      "author"
    );
    return blog;
  } catch (error) {
    throw new CustomError("Failed to create a blog", 500, error);
  }
};

export const blogServices = {
  createBlogIntoDB,
};
