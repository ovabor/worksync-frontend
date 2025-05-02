import Link from "next/link";
import Image from "next/image";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface HeaderProps {
  backgroundColor: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
  return (
    <header
      className={`flex items-center justify-between px-8 fixed w-full z-50 font-alliance ${backgroundColor}`}
    >
      <Link href="/">
        <Image
          src="/logo/quickdesk.webp"
          alt="QuickDesk Logo"
          width={150}
          height={150}
          priority={false}
        />
      </Link>

      <nav className="flex items-center space-x-6 px-6 bg-[#FFFFFF]/12 rounded-full py-3 text-xs font-semibold text-[#FFFFFF] border-2 border-[#FFFFFF]/20 backdrop-blur-sm">
        <span>
          <Link
            href="/features"
            className="transition-colors duration-300 hover:text-[#FFFFFF]/60"
          >
            Features
          </Link>
        </span>
        <span>
          <Link
            href="/pricing"
            className="transition-colors duration-300 hover:text-[#FFFFFF]/60"
          >
            Pricing
          </Link>
        </span>
        <span>
          <Link
            href="/request-demo"
            className="transition-colors duration-300 hover:text-[#FFFFFF]/60"
          >
            Request Demo
          </Link>
        </span>
        <span>
          <Link
            href="/contact"
            className="transition-colors duration-300 hover:text-[#FFFFFF]/60"
          >
            Contact
          </Link>
        </span>
      </nav>

      <Link href="/">
        <button
          className={`${inter.className} py-3 px-6 text-xs bg-transparent rounded-full border-2 border-[#FFFFFF] text-[#FFFFFF] font-medium cursor-pointer hover:bg-[#FFFFFF]/20 transition-colors duration-300`}
        >
          Get Started Now
        </button>
      </Link>
    </header>
  );
};

export default Header;
