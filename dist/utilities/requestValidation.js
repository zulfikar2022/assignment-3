import { CustomError } from "./CustomError.js";
const validateSchema = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch (error) {
            next(new CustomError("Validation failed", 400, error));
        }
    };
};
export { validateSchema };
