import { model, Schema } from "mongoose";
import { TUser } from "./user.interface.js";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: "user",
  isBlocked: {
    type: Boolean,
    default: false,
  },
});

export const User = model<TUser>("User", userSchema);
