import { z } from "zod";

export const emailFormValidationSchema = z
  .object({
    id: z.string(),
    email: z.string(),
    newEmail: z.string().trim().min(1, "New email is required"),
    password: z.string().trim().min(1, "Password is required"),
  })
  .superRefine((data, ctx) => {
    if (data.email === data.newEmail) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "New email must be different than the previous one",
        path: ["newEmail"],
      });
    }
  });

export type EmailFormValues = z.infer<typeof emailFormValidationSchema>;
