import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { LoginSchema } from "./schemas";
import { getUserByName } from "./data/user";
export default{
    providers:[
        Credentials({
            async authorize(credentials){
           const validatedFields=LoginSchema.safeParse(credentials);
           if(validatedFields.success){
            const {name,password}=validatedFields.data;
            const user=await getUserByName(name);
            if(!user|| !user.password) return null;
            const passwordsMatch=await bcrypt.compare(
                password,
                user.password,
            );
            if(passwordsMatch) return user;
           }
           return null;
            }
        })
    ],
    pages:{
     signIn:"/login/admin-login"
    },
}satisfies NextAuthConfig