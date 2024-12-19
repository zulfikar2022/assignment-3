import express from "express";
import { validateSchema } from "../../utilities/requestValidation.js";
import { userValidationSchema } from "./user.validation.js";
import { userController } from "./user.controller.js";
const router = express.Router();
router.post("/register", validateSchema(userValidationSchema.userCreateValidation), userController.createUser);
router.post("/login", validateSchema(userValidationSchema.userLoginValidation), userController.loginUser);
export const userRoute = router;
