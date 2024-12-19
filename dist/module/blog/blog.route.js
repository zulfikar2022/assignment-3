import express from "express";
import { blogControllers } from "./blog.controller.js";
import { validateSchema } from "../../utilities/requestValidation.js";
import { blogValidation } from "./blog.validation.js";
const router = express.Router();
router.post("/", validateSchema(blogValidation.createBlogSchema), blogControllers.createBlog);
export const blogsRoute = router;
