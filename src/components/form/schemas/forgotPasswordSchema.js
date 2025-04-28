import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, {
      message: "Invalid email format",
    }),
});
