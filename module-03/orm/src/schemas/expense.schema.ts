import { z } from "zod";

export const createExpenseSchema = z.object({
  title: z.string().trim().nonempty("Title cannot be empty"),
  nominal: z.number().nonnegative("Nominal cannot be a negative number"),
  type: z.string().nonempty("Type cannot be empty"),
  category: z.string().nonempty("Category cannot be empty"),
  date: z.string().nonempty("Date cannot be empty"),
});
