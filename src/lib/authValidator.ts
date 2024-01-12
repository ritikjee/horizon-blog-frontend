import { z } from "zod";

export const AuthValidatorSchema = z.object({
  name: z.string().min(2, { message: "Name must be atleast 2 digit long" }),
  username: z.string().min(5, { message: "Name must be atleast 5 digit long" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type TAuth = z.infer<typeof AuthValidatorSchema>;
