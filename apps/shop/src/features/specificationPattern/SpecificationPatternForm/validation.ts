import { z } from "zod";

export const specificationPatternValidationSchema = z.object({
  id: z.string().optional(),
  name: z.string().trim().min(1, "Name must be at least 1 character"),
  types: z
    .object({
      id: z.string().optional(),
      specificationTypeId: z.string(),
    })
    .array(),
});

export type SpecificationPatternFormValues = z.infer<
  typeof specificationPatternValidationSchema
>;
