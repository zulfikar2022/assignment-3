import { model, Schema } from "mongoose";
import { environmentVariables } from "../../environments/environmentAccess.js";
import bcrypt from "bcrypt";
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
        validate: {
            validator: async (email) => {
                const user = await User.findOne({ email });
                return !user;
            },
            message: "Email already exists",
        },
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false,
    },
    role: {
        type: String,
        default: "user",
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});
userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, parseInt(environmentVariables.salt_rounds));
    console.log("Password hashed");
    console.log(this.password);
    next();
});
export const User = model("User", userSchema);
