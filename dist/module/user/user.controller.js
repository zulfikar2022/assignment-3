import asyncHandler from "../../utilities/tryCatchReducer.js";
import { userServices } from "./user.service.js";
import sendResponse from "../../utilities/customResponseSender.js";
const createUser = asyncHandler(async (req, res, next) => {
    const data = await userServices.createUserIntoDB(req.body);
    sendResponse(res, 201, "User created successfully", data);
});
export const userController = {
    createUser,
};
