import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(8, { message: "Too short Name" }),
  username: z.string().min(2, { message: "Too short Username" }).max(50),
  email: z.string().email(),
  password: z.string().min(2, { message: "Password must be 8 letters long" }),
});
