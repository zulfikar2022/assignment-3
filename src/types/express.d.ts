import { Types } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      _id: Types.ObjectId;
      email: string;
      role: "user" | "admin";
    }
  }
}
