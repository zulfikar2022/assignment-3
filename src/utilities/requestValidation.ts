import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
import { CustomError } from "./CustomError.js";

const validateSchema = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      next(new CustomError("Validation failed", 400, error));
    }
  };
};

export { validateSchema };
