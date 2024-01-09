import { z } from "zod";

export const specificationTypeValidationSchema = z.object({
  id: z.string().optional(),
  name: z.string().trim().min(1, "Name must be at least 1 character"),
  subtypes: z
    .object({
      id: z.string().optional(),
      name: z.string().trim().min(1, "Name must be at least 1 character"),
    })
    .array(),
});

export type SpecificationTypeFormValues = z.infer<
  typeof specificationTypeValidationSchema
>;
