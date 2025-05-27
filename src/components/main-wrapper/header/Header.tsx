'use client';

import { Bell, Grip, Search } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "./Menu";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export function Header() {

  const pathname = usePathname();
  const isMediaPage = pathname.includes("/media/");

  return (
    <header className={twMerge(
      "p-7 flex items-center justify-between relative z-[1]",
      isMediaPage && "text-white"
    )}
    >
      <div className="flex items-center gap-6">
        <Link className="transition-colors hover:text-primary" href="/">
            <Grip />
        </Link>             
        {!isMediaPage && <Menu />}
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