"use server"
import * as z from "zod"
import { LoginSchema } from "@/schemas";
import {signIn} from "@/auth";
import { AuthError } from "next-auth";
import { default_Login_redirect } from "@/routes";

export const  AdminLogin =async (values:z.infer<typeof LoginSchema>)=>{
    const validatedFields=LoginSchema.safeParse(values);
    if(!validatedFields.success){
        return {error:"Invalid fields!"};
    }
    const {name,password}=validatedFields.data
    
    try{
        await signIn("credentials",{
            name,password,
            redirectTo:default_Login_redirect,
        })
    }catch(error){
if(error instanceof AuthError){
    switch(error.type){
        case "CredentialsSignin":
            return {error :"Inavalid credentials!"}
        dafault:
             return{error: "Something went wrong!"}
    }
}
throw error;
    }
    return{success:"Success Login"}
}