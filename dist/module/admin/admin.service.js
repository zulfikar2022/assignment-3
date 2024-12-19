import { CustomError } from "../../utilities/CustomError.js";
import { User } from "../user/user.model.js";
const blockAUserIntoDB = async (userId) => {
    // Block a user in the database
    const user = await User.findById(userId);
    console.log(user);
    if (!user) {
        throw new CustomError("User not found", 404, new Error("User not found"));
    }
    if (user.role === "admin") {
        throw new CustomError("Cannot block an admin", 400, {});
    }
    if (user.isBlocked) {
        throw new CustomError("User already blocked", 400, {});
    }
    await User.findByIdAndUpdate(userId, { isBlocked: true });
    return true;
};
export const adminServices = {
    blockAUserIntoDB,
};
