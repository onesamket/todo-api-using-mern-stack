import { z } from "zod";
export const FormSchema = z.object({
  title: z
    .string({
      invalid_type_error: "please enter  valid character",
      required_error: "title is required ",
    })
    .min(10, { message: "title must be at least 10 character" })
    .max(120, { message: " please write your title using 120 characters." }),
  content: z
    .string({
      required_error: "todo content is required ",
    })
    .min(20, { message: "please write at least 20 characters " }),
});

export type formType = z.infer<typeof FormSchema>;
