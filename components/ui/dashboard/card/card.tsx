import { FaUserGraduate } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Card = () => {
  return (
    <>
      <div className="bg-[#182237] shadow-sm  flex rounded-md w-[100%] p-[20px] gap-[20px]  hover:bg-[#222e48]">
         <div className="flex">
          <div className="rounded-full bg-white h-5 w-5 flex items-center justify-center shadow-md">
<FaUserGraduate className="text-black h-4 w-3"/>
          </div>
         </div>
         <div className="flex flex-col gap-[15px] text-white">
         <span>Total students users</span>
          <span className="text-[24px] font-[500]">500</span>
          <button className="text-[14px] font-[300] cursor-pointer flex items-center gap-[5px]  hover:bg-[#31405f] p-1 rounded-md">More info <FaRegArrowAltCircleRight/></button> 
</div>
      </div>
    </>
  )
}

export default Card
