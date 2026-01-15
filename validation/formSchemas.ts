import { z } from "zod";

export const personalSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  gender: z.string().min(1),
  country: z.string().min(1),
  age: z.string().refine((val) => {
    const n = Number(val);
    return n >= 18 && n <= 100;
  }, "Age must be between 18 and 100"),
});

export const preferencesSchema = z.object({
  category: z.string().min(1),
  interests: z.array(z.string()).min(1),
});
