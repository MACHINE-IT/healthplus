import { z } from "zod";

export const UserFormvalidation = z.object({
    name: z.string()
        .min(2, "Username must be at least 2 characters.")
        .max(20, "Username must be at most 20 characters."),
    email: z.string().email("Please enter a valid email address."),
    phone: z.string().refine((phone) => /^\+?[1-9]\d{1,14}$/.test(phone), "Invalid phone number."),
})