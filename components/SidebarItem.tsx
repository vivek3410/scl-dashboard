"use client";
import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo, useState,useCallback, memo } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Submenu1 from './Submenu1';

type SidebarItemType<T> = 
  | { title: string; icon?: React.ReactNode; path: string; items?: Isubitem<T>[]; }
  | Isubitem<T>;

type Isubitem<T> = {
  title: string;
  path: string;
  icon?: React.ReactNode;
  items?: Isubsubitem<T>[];
};
type Isubsubitem<T> = {
  title: string;
  path: string;
};

const SidebarItem = <T extends React.ReactNode>({ item }: { item: SidebarItemType<T> }) => {
  const { items, path,icon, title } = item;
  const router = useRouter();
  const pathname = usePathname();
  const [expend, setexpend] = useState(false);

  const onClick = ()=> {
    if (items && items.length > 0) {
      return setexpend(!expend);
    }
    router.push(path);
  };

  const isActive = useMemo(() => {
    if (items && items.length > 0) {
      if (items.find(() => path === pathname)) {
        setexpend(true);
        return true;
      }
    }
    return path === pathname;
  }, [path, pathname, items]);

  return (
    <>
      <div
        className={`flex items-center p-[15px] hover:bg-[#2e374a] my-[5px] mx-0 rounded-[10px] justify-between ${
          isActive ? "bg-[#2e374a]" : ""
        }`}
        onClick={onClick}
      >
        <div className="flex items-center gap-[10px] cursor-pointer">
          {icon}
          {title}
        </div>
        {items && items.length > 0 && (
          <IoIosArrowDown className={expend ? "rotate-180" : ""} />
        )}
      </div>
      <div className="bg-[#2e374a] rounded-md">
        {expend && items && items.length > 0 && (
          <div className="flex flex-col space-y-2 ml-10 mt-2">
            {items.map((item,index) => (
              <Submenu1 key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default memo(SidebarItem);