'use client';

import { Bell, Grip, Search } from "lucide-react";
import Image from "next/image";
import { Menu } from "./Menu";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMainAnimationStore } from "@/store/main-animation.store";

const checkMediaPath = (pathname: string | null ) => {  
  return !pathname?.includes("/media/");
};

export function Header({ pathname }: { pathname: string | null }) {
  const [isShowMenu, setIsShowMenu] = useState(checkMediaPath(pathname));
    
  const clientPathName = usePathname();  
  
  useEffect(() => {
    setIsShowMenu(checkMediaPath(clientPathName));
  }, [clientPathName]);  
 
  return (
    <header className={twMerge(
      "p-7 flex items-center justify-between relative z-1",
      !isShowMenu && "text-white"
    )}
    >
      <div className="flex items-center gap-6">
        <Link className="transition-colors hover:text-primary" href="/">
            <Grip />
        </Link>             
        {isShowMenu && <Menu />}
      </div>

      <div className="flex items-center gap-6">
        <Search className="transition-colors hover:text-primary"/>
        <Bell className="transition-colors hover:text-primary"/>
        <Image 
          src="/avatar-killflex.jpg"
          alt="Profile picture"
          width={40}
          height={40} 
          className="rounded-full"
          priority={true}
          draggable={false}
        />          
      </div>      
    </header>
  )
}