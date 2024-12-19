import { z } from "zod";
const createBlogSchema = z
    .object({
    title: z.string(),
    content: z.string(),
})
    .strict();
export const blogValidation = {
    createBlogSchema,
};
