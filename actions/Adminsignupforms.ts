"use server"
import * as z from "zod"
import { RegisterSchema } from "@/schemas";
import { db } from "@/firebase/clientApp";
import { addDoc, collection, query, where, doc, getDoc, getDocs } from 'firebase/firestore';
import bcrypt from "bcryptjs"
import { getUserByEmail, getUserByName} from "@/data/user";
export const  Adminsignupforms =async (values:z.infer<typeof RegisterSchema>)=>{
    const validatedFields=RegisterSchema.safeParse(values);
    if(!validatedFields.success){
        return {error:"Invalid fields!"};
    }
    const {email,password,name,isActive,role}=validatedFields.data;
    const hashedPassword=await bcrypt.hash(password,10);


    const existingemail=await getUserByEmail(email);
    const existingname=await getUserByName(name);

    if (existingemail) {
        return { error: "Email is already in use!" };
    }
    if(existingname){
        return { error: "Username is already in use!" };
    }

    await addDoc(collection(db, 'users'), {
        name,
        email,
        password: hashedPassword,
        role,
        isActive,
    });
    return {success:"User created"}
}