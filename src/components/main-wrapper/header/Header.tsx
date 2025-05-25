import { menu } from "motion/react-client";
import { Menu } from "./Menu";
import { Bell, Grip, Search } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="p-7 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Grip className="transition-colors hover:text-primary"/>     
        <Menu />
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