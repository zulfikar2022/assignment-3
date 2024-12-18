import express from "express";
import cors from "cors";
import router from "./global_routes.js";
import { sendError } from "./utilities/customErrorSender.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
// creating an error handling middleware
app.use((error, req, res, next) => {
    sendError(res, error);
});
app.all("*", (req, res) => {
    sendError(res, new Error("Route not found"), 404);
});
export default app;
