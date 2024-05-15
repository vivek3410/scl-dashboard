import NextAuth,{DefaultSession} from "next-auth";
export type ExtendedUser=DefaultSession["user"] &{
    role:string
};
declare module "next-auth"{
    interface Session{
        user:ExtendedUsers
    }
}
