import { Types } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      _id: string;
      email: string;
      role: "user" | "admin";
    }
  }
}
