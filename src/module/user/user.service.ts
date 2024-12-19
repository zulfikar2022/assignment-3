import { CustomError } from "../../utilities/CustomError.js";
import { TUser } from "./user.interface.js";
import { User } from "./user.model.js";

const createUserIntoDB = async (payload: Partial<TUser>) => {
  try {
    const user = await User.create(payload);
    const { _id, name, email } = user;
    return { _id, name, email };
  } catch (error) {
    console.log("Inside the catch block");
    console.log({ error });
    throw new CustomError("User Creation failed", 409, error);
  }
};

export const userServices = {
  createUserIntoDB,
};
