import asyncHandler from "../../utilities/tryCatchReducer.js";
import { adminServices } from "./admin.service.js";
import sendResponse from "../../utilities/customResponseSender.js";
import { CustomResponse } from "../../utilities/CustomResponse.js";
const blockAUser = asyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    const isBlocked = await adminServices.blockAUserIntoDB(userId);
    sendResponse(res, new CustomResponse("User blocked successfully", 200, isBlocked));
});
export const adminController = {
    blockAUser,
};
