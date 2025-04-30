import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, {
      message: "Invalid email format",
    }),
  loginPassword: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]).{8,}$/,
      {
        message: "Invalid Password",
      }
    ),
});
