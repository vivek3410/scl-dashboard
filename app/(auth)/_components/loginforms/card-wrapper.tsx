"use client"

import { Card,
    CardContent,
    CardFooter,
    CardHeader
 } from "@/components/ui/card";
import { Header } from "./header";
import { BackButton } from "./BackButton";

type CardWrapperProps={
    children:React.ReactNode;
    header:string
    headerLabel:string;
    backButtonloginLabel:string;
    backButtonhomeLabel:string
backButtonhomeHref:string;
backButtonloginHref:string;
};
export const CardWrapper=({
    children,
    header,
    headerLabel,
    backButtonloginLabel,
    backButtonhomeLabel,
    backButtonhomeHref,
    backButtonloginHref,
}:CardWrapperProps)=>{
    return(
        <>
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header header={header} label={headerLabel}/>
            </CardHeader>
            <CardContent>

{children}    
            </CardContent>
            <CardFooter className="gap-10">
                <BackButton
                label={backButtonhomeLabel}
                href={ backButtonhomeHref}
                />
                <BackButton
                label={backButtonloginLabel}
                href={backButtonloginHref}
                />
            </CardFooter>
        </Card>
        </>
    )
}