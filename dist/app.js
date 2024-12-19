import express from "express";
import cors from "cors";
import router from "./global_routes.js";
import { sendError } from "./utilities/customErrorSender.js";
import { CustomError } from "./utilities/CustomError.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.all("*", (req, res) => {
    sendError(res, new CustomError("Route Not Found", 404, {}));
});
// creating an error handling middleware
app.use((error, req, res, next) => {
    sendError(res, error);
});
export default app;
