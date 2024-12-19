export const sendError = (res, error) => {
    res.json({
        success: error.success,
        message: error.message,
        statusCode: error.statusCode,
        error: error.error,
        stack: error.stack,
    });
};
