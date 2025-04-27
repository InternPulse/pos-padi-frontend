import { z } from "zod";

export const bizInfoSchema = z.object({
  businessName: z.string().min(2, { message: "Business name is required" }),
  businessAddress: z
    .string()
    .min(5, { message: "Business address is required" }),
  state: z.string().min(2, { message: "State is required" }),
});
