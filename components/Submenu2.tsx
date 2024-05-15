import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo, useState} from 'react'
type Isubsubitem= {
    title: string;
    path: string;
    items?:[]
  };

const Submenu2=({item}:{item:Isubsubitem}) =>{
  const {items,path,title}=item;
    const router =useRouter()
    const pathname=usePathname();
    const [expend,setexpend]=useState(false);
    const onClick=  ()=>{
      if(items && items.length>0){
        return setexpend(!expend);
        
      }
      router.push(path)
 
    }
    const isActive=useMemo(()=>{
      if(items && items.length>0){
        if(items.find( ()=>path===pathname)){
            setexpend(true);
            return true;
        }
      }
  return path===pathname
    },[path,pathname,items])
  return (
    <>
    <div key={path}  className={`hover:bg-[#717e9d] cursor-pointer flex items-center gap-2 px-2 py-1 rounded-md ${isActive? "bg-[#57637e]":""}`} onClick={onClick}>
    <div className='h-2 w-2 bg-white rounded-lg '>
    </div>
    <div>
{title}
    </div>
</div>
    </>
  )
}
export default Submenu2;