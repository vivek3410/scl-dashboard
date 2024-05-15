"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

type props={
    label:string
    href:string
}
export const BackButton=({
    label,href
}:props)=>{
    return(
        <>
        <Button size="sm" 
        variant="link"
        asChild
        className="font-normal w-full">
            <Link href={href}>
            {label}
            </Link>
        </Button>
        </>
    )
}