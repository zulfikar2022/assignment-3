export const sendError = (res, error, statusCode = 500) => {
    res.json({
        success: false,
        message: error.message || "Some error happened",
        statusCode,
        error: error,
        stack: error.stack,
    });
};
