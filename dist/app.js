import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
// creating an error handling middleware
app.use((error, req, res, next) => {
    res.json({
        success: false,
        message: "Some error happened",
        statusCode: 500,
        error: error,
        stack: error.stack,
    });
});
export default app;
