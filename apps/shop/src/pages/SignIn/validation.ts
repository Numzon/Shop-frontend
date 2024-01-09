import { z } from "zod";

export const signInValidationSchema = z.object({
  email: z.string().email().trim().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export type SignInFormValues = z.infer<typeof signInValidationSchema>;
