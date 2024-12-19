import { z } from "zod";
const userCreateValidation = z
    .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
})
    .strict();
const userLoginValidation = z
    .object({
    email: z.string().email(),
    password: z.string().min(6),
})
    .strict();
export const userValidationSchema = {
    userCreateValidation,
    userLoginValidation,
};
