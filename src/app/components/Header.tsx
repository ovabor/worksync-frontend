"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface HeaderProps {
  backgroundColor: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
  const navbarStyle = {
    backgroundColor: backgroundColor,
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={`flex items-center justify-between px-4 py-6 md:px-8 fixed w-full z-50 font-alliance`}
      style={navbarStyle}
    >
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
          title={isOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6H20M4 12H12M4 18H20"}
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <Link href="/">
        <Image
          className="w-[70%] md:w-[100%]"
          src="/logo/Quick2.png"
          alt="QuickDesk Logo"
          width={150}
          height={150}
          priority={false}
        />
      </Link>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } opacity-95 md:opacity-100 text-left md:text-start md:flex items-center absolute md:relative top-18 md:top-0 left-0 w-full md:w-auto p-4 md:p-0 transition-transform duration-300 ease-in-out transform
  items-center md:space-x-6 md:px-6 md:bg-[#FFFFFF]/12 md:rounded-full md:py-3 md:text-xs font-semibold md:text-[#FFFFFF] md:border-2 md:border-[#FFFFFF]/20 backdrop-blur-sm ${
    isOpen ? "translate-x-0" : "translate-x-full"
  } md:translate-x-0 flex flex-col md:flex-row`}
      >
        <span className="w-full md:w-auto block mb-4 md:mb-0">
          <Link
            href="/features"
            className="transition-colors duration-300 hover:text-[#FFFFFF]/60 block w-full md:w-auto"
          >
            Features
          </Link>
        </span>
        <span className="w-full md:w-auto block mb-4 md:mb-0">
          <Link
            href="/pricing"
            className="transition-colors duration-300 hover:text-[#FFFFFF]/60 block w-full md:w-auto"
          >
            Pricing
          </Link>
        </span>
        <span className="w-full md:w-auto block mb-4 md:mb-0">
          <Link
            href="/request-demo"
            className="transition-colors duration-300 hover:text-[#FFFFFF]/60 block w-full md:w-auto"
          >
            Request Demo
          </Link>
        </span>
        <span className="w-full md:w-auto block">
          <Link
            href="/contact"
            className="transition-colors duration-300 hover:text-[#FFFFFF]/60 block w-full md:w-auto"
          >
            Contact
          </Link>
        </span>
      </nav>

      <Link href="/">
        <button
          className={`${inter.className} px-4 py-3 md:px-6 text-xs bg-transparent rounded-full border-2 border-[#FFFFFF] text-[#FFFFFF] font-medium cursor-pointer hover:bg-[#FFFFFF]/20 transition-colors duration-300`}
        >
          Get Started Now
        </button>
      </Link>
    </header>
  );
};

export default Header;
