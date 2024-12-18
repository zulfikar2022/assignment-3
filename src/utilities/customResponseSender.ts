import { Response } from "express";

const sendResponse = (
  res: Response,
  statusCode: number = 200,
  message: string = "Success",
  data: any
) => {
  res.json({
    success: true,
    message,
    statusCode,
    data,
  });
};

export default sendResponse;
