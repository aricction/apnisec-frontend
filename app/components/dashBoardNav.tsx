"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import { useUserStore } from "../store/user-store";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NavbarProps {
  showAuthButtons?: boolean;
}

const DashBoardNavbar: FC<NavbarProps> = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  
const user = useUserStore((state) => state.user)
  return (
    <nav className=" text-black shadow-md px-6 py-4 relative">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
       
      <Link href="/" className="text-xl font-bold">
               <Image src="/asset/logo-dk.svg" alt="logo" width={100} height={50} />
             </Link>

        
        <div className="flex gap-4">

        <div className="rounded-full p-4 w-[40px] h-[40px] bg-yellow-400">
            <span></span>
        </div>
        <p>{user?.user.name || 'user'}</p>
      </div>
        </div>

    

    
      
    </nav>
  );
};

export default DashBoardNavbar;
