"use client";

import React, { FC, useState } from "react";
import Link from "next/link";

interface NavbarProps {
  showAuthButtons?: boolean;
}

const DashBoardNavbar: FC<NavbarProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" text-black shadow-md px-6 py-4 relative">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
       
        <div className="text-xl font-bold">Logo</div>

        
        <div className="flex gap-4">

        <div className="rounded-full p-4 w-[40px] h-[40px] bg-yellow-400">
            <span></span>
        </div>
        <p>Username</p>
      </div>
        </div>

    

    
      
    </nav>
  );
};

export default DashBoardNavbar;
