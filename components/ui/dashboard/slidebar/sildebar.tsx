
"use server"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { items } from "@/lib/sidebarList"
import SidebarItem from "@/components/SidebarItem";
const Sildebar = async () => {
  //   // const user=await 
  const firstname = "Vivek"
  const lastname = "Mamidi"
  return (
    <>
      <div className="mt-[5px] mx-[10px] min-h-screen overflow-y-auto ">
        <div className="flex items-center gap-[20px] mt-[20px]">
          <Avatar>

            {/* user?.id?(
                <AvatarImage src={imageUrl}/> */}
            <AvatarImage src="https://github.com/shadcn.png" />


            <AvatarFallback>{firstname?.charAt(0)}{lastname?.charAt(0)} </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">{firstname} {lastname}</span>
            <span className="text-[12px] bg-[#182237]">@{firstname}{lastname}
              {/* -{user?.id?.slice(-4)} */}
            </span>
            <span className="text-[12px] bg-[#182237]">Administrator</span>
          </div>
        </div>
        <div className="bg-black my-2 p-2 rounded-md shadow-sm">
          <span className="px-3">Main Navigation</span>
        </div>
        <div>
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sildebar;
