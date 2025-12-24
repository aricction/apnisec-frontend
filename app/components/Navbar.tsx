"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
interface NavbarProps {
  showAuthButtons?: boolean;
}

const Navbar: FC<NavbarProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md px-6 py-4 relative">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Image src="/asset/logo.svg" alt="logo" width={100} height={50} />
        </div>

        {/* Desktop Menu */}
        <ul
          style={{ fontFamily: "var(--font-lissen), Arial, sans-serif" }}
          className="hidden lg:flex flex-1 justify-center items-center space-x-12"
        >
          {[
            "Home",
            "vCISO",
            "DarkEye Watcher",
            "Cloud Security",
            "VAPT",
            "RedTeam Assessment",
            "Compliance",
          ].map((item) => (
            <li key={item}>
              <Link href="#">
                <span className="text-[14px] font-medium hover:text-green-400 transition">
                  {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="px-4 py-2 bg-white rounded-lg text-black hover:bg-gray-200 transition">
            Secure Now
          </button>
          <p className="text-[15px] cursor-pointer text-orange-500 hover:underline">
            <Link href="/Login">Login</Link>
          </p>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
       <GiHamburgerMenu/>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          style={{ fontFamily: "Lissen" }}
          className="lg:hidden bg-black border-t border-gray-800 mt-4"
        >
          <ul className="flex flex-col space-y-4 px-6 py-6">
            {[
              "Home",
              "vCISO",
              "DarkEye Watcher",
              "Cloud Security",
              "VAPT",
              "RedTeam Assessment",
              "Compliance",
            ].map((item) => (
              <li key={item}>
                <Link href="#">
                  <span
                    className="block text-[14px] font-medium hover:text-indigo-400 transition"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </span>
                </Link>
              </li>
            ))}

            <button className="mt-4 px-4 py-2 bg-white rounded-lg text-black">
              Secure Now
            </button>

            <p className="text-[15px] cursor-pointer text-orange-500 hover:underline">
              <Link href="/Login">Login</Link>
            </p>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
