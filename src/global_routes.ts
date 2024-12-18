import express from "express";
import { userRoute } from "./module/user/user.route.js";
const allRoutes = [
  {
    path: "/auth",
    route: userRoute,
  },
];
const router = express.Router();
allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
export default router;
