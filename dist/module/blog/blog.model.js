import { model, Schema } from "mongoose";
import { User } from "../user/user.model.js";
const blogSchema = new Schema({
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
            validator: async (value) => {
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
}, {
    timestamps: true,
    versionKey: false,
});
// blogSchema.post("save", async function (doc) {
//   delete doc.isPublished;
//   delete doc.createdAt;
//   delete doc.updatedAt;
// });
export const Blog = model("Blog", blogSchema);
