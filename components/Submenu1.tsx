import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo, useState} from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import Submenu2 from './Submenu2';
type Isubitem= {
    title: string;
    path: string;
    items?: Isubsubitem[];
  };
  
  type Isubsubitem= {
    title: string;
    path: string;
  };
const Submenu=({item}:{item:Isubitem})=> {
  const {items,path,title}=item;
  const pathname=usePathname();
  const [expend,setexpend]=useState(false);
    const router=useRouter();
   const onClick=()=>{
    if(items && items.length>0){
            return setexpend(!expend);
        }
    router.push(path)

   }
   const isActive=useMemo(()=>{
    if(items && items.length>0){
      if(items.find(()=>path===pathname)){
          setexpend(true);
          return true;
      }
    }
    return path===pathname
        },[path,pathname,items])
        
  return (
    <>
      <div key={path}  className={`hover:bg-[#57637e] cursor-pointer flex items-center gap-2 px-2 py-1 rounded-md ${isActive? "bg-[#57637e]":""}`} onClick={onClick}>
    <div className='h-2 w-2 bg-white rounded-lg '>
    </div>
    <div>
{title}
    </div>
    {items && items.length>1 &&(
<IoIosArrowDown  className={expend?"rotate-180":""}/>
)}
  </div>
  <div className='bg-[#2e374a] rounded-md'>
{expend  && items && items.length>0 &&(
  <div className='flex flex-col space-y-2 ml-5  mt-2'>
 {items.map((item,index) => (
  <Submenu2 key={index} item={item}/>
))}
  </div>
)}
</div>
    </>
  )
}
export default Submenu