'use client';

import { Bell, Grip, Search } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "./Menu";

export function Header() {

  const pathname = usePathname();

  return (
    <header className="p-7 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Grip className="transition-colors hover:text-primary"/>     
        {!pathname.includes("/media/") && <Menu />}
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