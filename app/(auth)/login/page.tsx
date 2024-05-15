import React from 'react'
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import { NavLogin } from '../_components'
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function page() {
  return (
    <>
      <main className="flex  flex-col items-center  justify-center min-h-screen w-[100vw] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <div className='space-y-6 mt-3 text-center'>
          <h1 className={cn('text-6xl font-semibold text-white drop-shadow-md flex gap-2', font.className)}>
            🔐 Login
          </h1>
          <p className='text-white text-lg mr-[50px]'>
            Login for dashboard
          </p>
          <NavLogin />
        </div>
      </main>
    </>
  )
}
