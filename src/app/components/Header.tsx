import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  backgroundColor: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
  return (
    <header
      className={`flex items-center justify-between px-8 font-poppins fixed w-full z-50 ${backgroundColor}`}
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
          <Link href="/features">Features</Link>
        </span>
        <span>
          <Link href="/pricing">Pricing</Link>
        </span>
        <span>
          <Link href="/request-demo">Request Demo</Link>
        </span>
        <span>
          <Link href="/contact">Contact</Link>
        </span>
      </nav>

      <Link href="/">
        <button className="py-3 px-6 text-xs bg-transparent rounded-full border-2 border-[#FFFFFF] text-[#FFFFFF] font-medium cursor-pointer hover:bg-[#FFFFFF]/20 transition-colors duration-300">
          Get Started Now
        </button>
      </Link>
    </header>
  );
};

export default Header;
