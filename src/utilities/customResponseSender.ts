import { Response } from "express";
import { CustomResponse } from "./CustomResponse.js";

const sendResponse = (res: Response, response: CustomResponse) => {
  res.json({
    success: response.success,
    message: response.message,
    statusCode: response.statusCode,
    data: response.data,
  });
};

export default sendResponse;
