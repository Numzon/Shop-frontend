import { z } from "zod";

export const categoryValidationSchema = z.object({
  id: z.string().optional(),
  name: z.string().trim().min(1, "Name must be at least 1 character"),
  specificationPatternId: z.string().optional(),
  subcategories: z
    .object({
      id: z.string().optional(),
      name: z.string().trim().min(1, "Name must be at least 1 character"),
    })
    .array(),
});

export type CategoryFormValues = z.infer<typeof categoryValidationSchema>;
