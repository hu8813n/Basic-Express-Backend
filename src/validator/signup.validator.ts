import z from "zod";

export  const signupSchema = z.object({
   username: z.string().min(3).max(8),
   email: z.string().email(),
   password: z.string().min(6).max(20),
   confirmPassword: z.string().min(6).max(20)
})