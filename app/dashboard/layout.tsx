import Navbar from "@/components/ui/dashboard/navbar/navbar";
import { auth, signOut } from "@/auth"
import type { Metadata } from "next";
import Sildebar from "@/components/ui/dashboard/slidebar/sildebar";
export const metadata: Metadata = {
  title: "Admin-dashboard",
  description: "Admin dashboard wo manage school data",
};
export default async function layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <div className="flex bg-[#151c2c] text-white">
      {JSON.stringify(session)}
      <div className="hidden md:flex bg-[#182237] p-[20px]  text-white min-h-screen shadow-sm overflow-auto">
        <Sildebar />
      </div>
      
      <div className="flex-[4] m-2">
        <Navbar />
        <form action={async () => {
          "use server"
          await signOut();
        }}>
          <button type="submit">
            Sign out
          </button>

        </form>
        {children}
      </div>
    </div>
  );
}
