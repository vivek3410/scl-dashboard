import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { getUserById, getUserByRole } from "@/data/user"
import { adminDb } from "./firebase/admin"
import { FirestoreAdapter } from "@auth/firebase-adapter"
export const { handlers, auth, signIn, signOut } = NextAuth({
    callbacks: {
        async session({ token, session }) {
            console.log({ sessionToken: token })
            console.log({ sessionUser: session })
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.role && session.user) {
                session.user.role = token.role
            }
            return session
        },
        async jwt({ token }) {
            if (!token.sub) return token;
            const existingUser = await getUserById(token.sub);
            console.log(existingUser)
            // if (existingUser) {
            token.role = 'role';
            // }
            return token
        }
    },
    adapter: FirestoreAdapter(adminDb),
    session: { strategy: "jwt" },
    ...authConfig,
})