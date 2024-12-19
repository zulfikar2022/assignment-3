import { CustomError } from "../../utilities/CustomError.js";
import { Blog } from "../blog/blog.model.js";
import { User } from "../user/user.model.js";

const blockAUserIntoDB = async (userId: string) => {
  // Block a user in the database

  const user = await User.findById(userId);
  console.log(user);
  if (!user) {
    throw new CustomError("User not found", 404, new Error("User not found"));
  }
  if (user.role === "admin") {
    throw new CustomError("Cannot block an admin", 400, {});
  }

  if (user.isBlocked) {
    throw new CustomError("User already blocked", 400, {});
  }
  await User.findByIdAndUpdate(userId, { isBlocked: true });
  return;
};

const deleteABlogFromDB = async (blogId: string) => {
  try {
    // Delete a blog from the database
    const blog = await Blog.findByIdAndDelete(blogId);
    if (!blog) {
      throw new CustomError("Blog not found", 404, new Error("Blog not found"));
    }
    return;
  } catch (error) {
    throw new CustomError("Error while deleting the blog", 500, error);
  }
};

export const adminServices = {
  blockAUserIntoDB,
  deleteABlogFromDB,
};
