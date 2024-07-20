import * as z from 'zod';


export const PostSchema = z.object({
    title: z.string()
    .min(3, {message: 'Post title must be more than 3 characters long'})
    .max(200, {message: 'Post title must be 200 or less characters long'})
})

export type PostSchemaType = z.infer<typeof PostSchema>;