import express from "express";
import { blogControllers } from "./blog.controller.js";
import { validateSchema } from "../../utilities/requestValidation.js";
import { blogValidation } from "./blog.validation.js";
import { auth } from "../../middleware/authentication.js";
import { userRoles } from "../user/user.constants.js";
const router = express.Router();
router.post("/", auth(userRoles.USER), validateSchema(blogValidation.createBlogSchema), blogControllers.createBlog);
export const blogsRoute = router;
