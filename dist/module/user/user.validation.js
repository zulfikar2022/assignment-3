import { z } from "zod";
const userCreateValidation = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
});
export const userValidationSchema = {
    userCreateValidation,
};
