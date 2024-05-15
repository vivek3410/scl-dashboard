import AdminsignUpForm from "@/app/(auth)/_components/signupform/AdminsignUpForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from 'react'

export default function page() {
  const lastname="vanam"
  const firstname="saiguna"
  return (
    <div className="mt-[20px]  rounded-[10px] bg-[#182237]  overflow-hidden p-[20px]">
          <AdminsignUpForm/>
          
    </div>
  )
}
