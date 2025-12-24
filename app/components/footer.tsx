"use client";
import { MdFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";
export default function Footer() {
  return (
    <footer
      className="w-full bg-[#3C3C3C] py-16 px-4 text-white"
      style={{ fontFamily: "var(--font-lissen), Arial, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <Image src="/asset/logo.svg" alt="logo" width={200} height={200} />
          <p className="text-sm ">WE ARE CERTIFIED</p>
          <div className="flex gap-3">
            <Image src="/asset/aicpa.svg" alt="aicpa" width={50} height={40} />
            <Image src="/asset/iso.svg" alt="iso" width={50} height={40} />
            <Image src="/asset/gd.png" alt="gd" width={55} height={40}/>
           
            <Image
              src="/asset/start.png"
              alt="startup"
              width={120}
              height={40}
              />
              <br/>
          </div>
        </div>

        {/* Company */}
        <div>
          <p className="font-semibold mb-4 text-lg">Company</p>
          <div className="space-y-2 text-[#] text-sm">
            <p>Home</p>
            <p>Solutions</p>
            <p>Process</p>
            <p>Report</p>
            <p>Services</p>
            <p>Careers</p>
            <p>Bug Bounty</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="font-semibold mb-4 text-lg">Services</p>
          <div className="space-y-2 text-[#] text-sm">
            <p>Dark Eye Watcher</p>
            <p>Cloud Security</p>
            <p>Virtual CISO</p>
            <p>Red Team Assessment</p>
            <p>VAPT</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <p className="font-semibold text-lg">Subscribe Our Newsletter</p>

          <input
            type="text"
            placeholder="Search here..."
            className="w-full h-14 px-4  border rounded-md outline-none"
          />

          <div className="flex gap-3">
            <MdFacebook />
            <FaXTwitter />
            <FaLinkedin />
            <BiLogoGmail />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center mt-16 text-sm">
        © 2025 Apni Sec. All rights reserved.
      </p>
    </footer>
  );
}
