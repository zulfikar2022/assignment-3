const sendResponse = (res, response) => {
    res.json({
        success: response.success,
        message: response.message,
        statusCode: response.statusCode,
        data: response.data,
    });
};
export default sendResponse;
