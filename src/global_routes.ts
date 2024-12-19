import express from "express";
import { userRoute } from "./module/user/user.route.js";
import { blogsRoute } from "./module/blog/blog.route.js";
import { adminRouter } from "./module/admin/admin.route.js";
const allRoutes = [
  {
    path: "/auth",
    route: userRoute,
  },
  {
    path: "/blogs",
    route: blogsRoute,
  },
  {
    path: "/admin",
    route: adminRouter,
  },
];
const router = express.Router();
allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
export default router;
