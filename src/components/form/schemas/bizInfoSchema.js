import { z } from "zod";

export const bizInfoSchema = z.object({
  businessName: z.string().min(2, { message: "Business name is required" }),
  address: z.string().min(5, { message: "Business address is required" }),
  // state: z.string().min(2, { message: "State is required" }),
  // lga: z.string().min(2, { message: "LGA address is required" }),
  // axis: z.string().min(2, { message: "Axis is required" }),
});
