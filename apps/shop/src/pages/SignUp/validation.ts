import { z } from "zod";

export const signUpValidationSchema = z
  .object({
    email: z.string().email().trim().min(1, "Email is required"),
    password: z.string().min(8, "Password must be at least 8 letters"),
    passwordConfirmation: z
      .string()
      .min(8, "Password must be at least 8 letters"),
  })
  .superRefine((data, ctx) => {
    if (data.password != data.passwordConfirmation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
      });
    }
  });

export type SignUpFormValues = z.infer<typeof signUpValidationSchema>;
