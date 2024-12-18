import { User } from "./user.model.js";
const createUserIntoDB = async (payload) => {
    try {
        const user = await User.create(payload);
        const { _id, name, email } = user;
        return { _id, name, email };
    }
    catch (error) {
        throw error;
    }
};
export const userServices = {
    createUserIntoDB,
};
