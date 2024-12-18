import express from "express";
import { auth } from "../../middleware/authentication.js";
import { userRoles } from "../user/user.constants.js";
import { adminController } from "./admin.controller.js";

const router = express.Router();
router.patch(
  "/users/:userId/block",
  auth(userRoles.ADMIN),
  adminController.blockAUser
);

router.delete("/blogs/:id", auth(userRoles.ADMIN), adminController.deleteABlog);

export const adminRouter = router;
