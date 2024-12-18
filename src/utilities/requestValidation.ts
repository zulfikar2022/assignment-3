import { ZodError, ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

const validateSchema = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };
};

export { validateSchema };
