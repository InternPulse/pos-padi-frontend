import { z } from "zod";

export const adminSchema = z
  .object({
    firstName: z.string().min(2, { message: "Name is required" }),
    lastName: z.string().min(2, { message: "Name is required" }),
    phone: z.string().min(10, { message: "Phone number is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, {
        message: "Invalid email format",
      }),
    password: z
      .string()
      .regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]).{8,}$/,
        {
          message: "Invalid Password",
        }
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
