import { model, Mongoose, Schema, Types } from "mongoose";
import { TBlog } from "./blog.interface.js";
import { User } from "../user/user.model.js";

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: [true, "Title is required for a blog"],
    },
    content: {
      type: String,
      required: [true, "Content is required for a blog"],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "A blog cannot be created without an author"],
      validate: {
        validator: async (value: Schema.Types.ObjectId) => {
          const user = await User.findById(value);
          return !!user;
        },
        message: "The Author does not exist",
      },
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Blog = model<TBlog>("Blog", blogSchema);
