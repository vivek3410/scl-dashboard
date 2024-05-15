import * as z from "zod"
export const LoginSchema=z.object({
    name: z.string().min(1,{message:"User name is required"})
    ,
    password: z.string().min(1,{
        message:"Password is required"
    }),
  });
  export const RegisterSchema = z.object({
    name: z.string().min(1, {
      message: "Name is required",
    }),
    email: z.string().email({
      message: "Email is required",
    }),
    password: z.string().min(6, {
      message: "String must contain at least 6 character(s)",
    }),
    confirmPassword: z.string().min(6, { message: "Password must contain at least 6 characters" }),
    role: z.string().min(1,{message:"it is required"}), 
isActive: z.string(), 
}).refine(
    (values) => {return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    },
)
