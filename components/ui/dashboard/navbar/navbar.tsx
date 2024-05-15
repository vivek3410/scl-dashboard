"use client";
import { usePathname } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex text-white p-[20px] rounded-md bg-[#182237] h-[60px] justify-between items-center">
        <div>
          <div className="flex items-center gap-[10px] rounded-[10px]">
            <div className="font-bold text-white ">
              {pathname.split("/").pop()}
            </div>
            <div className="bg-[#2e374a] flex items-center rounded-lg p-1">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none"
              />
              <MdSearch />
            </div>
          </div>
          <div></div>
        </div>
        <div className="hidden md:flex gap-1 items-center p-3">
          <div className="bg-white rounded-full h-5 w-5 flex items-center justify-center">
            <RiAdminLine className="text-black" />
          </div>
          <h1 className="font-semibold p-2">Admin dashboard</h1>
          {/* <div className="bg-white h-4 w-4 rounded-full"></div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
