import { model, Schema, Types } from "mongoose";
import { TUser } from "./user.interface.js";
import { environmentVariables } from "../../environments/environmentAccess.js";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
      validate: {
        validator: async (email: string): Promise<boolean> => {
          const user:
            | (TUser & {
                _id: Types.ObjectId;
                createdAT: string;
                updatedAt: string;
              })
            | null = await User.findOne({ email });
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    parseInt(environmentVariables.salt_rounds as string)
  );
  console.log("Password hashed");
  console.log(this.password);
  next();
});

export const User = model<TUser>("User", userSchema);
