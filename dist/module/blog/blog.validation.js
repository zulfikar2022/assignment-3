import { z } from "zod";
const createBlogSchema = z
    .object({
    title: z.string(),
    content: z.string(),
})
    .strict();
const updateBlogSchema = z
    .object({
    title: z.string().optional(),
    content: z.string().optional(),
})
    .strict();
export const blogValidation = {
    createBlogSchema,
    updateBlogSchema,
};
