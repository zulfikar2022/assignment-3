import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../utilities/tryCatchReducer.js";
import { userServices } from "./user.service.js";
import sendResponse from "../../utilities/customResponseSender.js";
import { User } from "./user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { CustomError } from "../../utilities/CustomError.js";
import { CustomResponse } from "../../utilities/CustomResponse.js";

const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await userServices.createUserIntoDB(req.body);
    sendResponse(
      res,
      new CustomResponse("User Registered Successfully", 201, data)
    );
  }
);

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  // check if the user credentials are correct
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    // if user does not exists then email is wrong
    // if (!user) {
    //   throw new CustomError("Invalid credentials", 401, {});
    // }
    const isPasswordMatched = await bcrypt.compare(
      password,
      user?.password as string
    );

    // if password does not matched then invalid credentials
    if (!isPasswordMatched) {
      throw new Error("Invalid Credentials");
    }

    // create a token and send it back
    const payload = { _id: user?._id, email: user?.email, role: user?.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "2d",
    });

    sendResponse(
      res,
      new CustomResponse("Logged in successfully", 200, { token })
    );
  } catch (error) {
    next(new CustomError("User login failed", 401, error));
  }
};

export const userController = {
  createUser,
  loginUser,
};
