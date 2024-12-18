const sendResponse = (res, statusCode = 200, message = "Success", data) => {
    res.json({
        success: true,
        message,
        statusCode,
        data,
    });
};
export default sendResponse;
