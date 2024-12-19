import { Types } from "mongoose";

export type TBlog = {
  _id: Types.ObjectId;
  title: string;
  content: string;
  author: Types.ObjectId;
  isPublished?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TBlogPayload = Pick<TBlog, "title" | "content">;
