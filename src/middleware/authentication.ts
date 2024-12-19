import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utilities/CustomError.js";
import jwt from "jsonwebtoken";
import { environmentVariables } from "../environments/environmentAccess.js";
import { User } from "../module/user/user.model.js";

export const auth = (...accessibleUsers: ("admin" | "user")[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.headers.authorization) {
        next(
          new CustomError(
            "Unauthorized User",
            401,
            new Error("No token provided")
          )
        );
      }
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        next(
          new CustomError(
            "Unauthorized User",
            401,
            new Error("No token provided")
          )
        );
      }

      // Verify the token here
      const decoded: { _id: string; email: string; role: "user" | "admin" } =
        jwt.verify(
          token as string,
          environmentVariables.jwt_secret as string
        ) as { _id: string; email: string; role: "user" | "admin" };

      if (!accessibleUsers.includes(decoded.role)) {
        next(
          new CustomError(
            "Unauthorized User",
            401,
            new Error(
              "You are not authorized to access this data or processing"
            )
          )
        );
      }
      // a blocked user cannot access the data
      const user = await User.findOne({ _id: decoded._id });
      if (user?.isBlocked) {
        next(
          new CustomError(
            "Unauthorized User",
            401,
            new Error(
              "You are blocked not authorized to access this data or processing"
            )
          )
        );
      }

      req._id = decoded._id;
      req.email = decoded.email;
      req.role = decoded.role;
      next();
    } catch (error) {
      next(new CustomError("Unauthorized User", 401, error));
    }
  };
};
