import { model, Schema } from "mongoose";
const userSchema = new Schema({
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
export const User = model("User", userSchema);
