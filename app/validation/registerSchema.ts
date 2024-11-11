import { z } from 'zod';

export const registerSchema = z.object({
    username: z.string().nonempty("Username is required"),
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
});
