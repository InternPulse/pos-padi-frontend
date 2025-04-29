import { z } from "zod";

export const agentSignUpSchema = z
  .object({
    agentPassword: z
      .string()
      .regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?]).{8,}$/,
        {
          message: "Invalid Password",
        }
      ),
    confirmAgentPassword: z.string(),
  })
  .refine((data) => data.agentPassword === data.confirmAgentPassword, {
    message: "Passwords do not match",
    path: ["confirmAgentPassword"],
  });
