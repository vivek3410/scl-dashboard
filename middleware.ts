import NextAuth from "next-auth"
import authConfig from "./auth.config";
import {default_Login_redirect,apiAuthPrefix,authRoutes,publicRoutes} from "@/routes"
const {auth}=NextAuth(authConfig);

export default auth((req):any=>{
   const {nextUrl}=req;
   const isLoggedIn=!!req.auth;
   const isApiAuthRoute=nextUrl.pathname.startsWith(apiAuthPrefix);
   const isPublicRoute=publicRoutes.includes(nextUrl.pathname);
   const isAuthRoute=authRoutes.includes(nextUrl.pathname);
   if(isApiAuthRoute){
    return null;
   }
   if(isAuthRoute){
    if(isLoggedIn){
      return Response.redirect(new URL(default_Login_redirect,nextUrl))
    }
    return null
   }
   if(!isLoggedIn && !isPublicRoute){
    return Response.redirect(new URL("/login",nextUrl))
   }
   return null;
})

export const config = {
 
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};