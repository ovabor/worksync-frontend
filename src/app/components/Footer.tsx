import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaSquareInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="container mx-auto py-16 font-alliance grid grid-cols-10 gap-8">
      <div className="col-span-10 lg:col-span-4">
        <Link href="/">
          <Image
            src="/logo/quickdesk.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
        <p className="font-normal text-[#FAFAFA] text-xs my-4">
          AI-Powered Employee Support Platform
        </p>
        <div>
          <h6 className="font-semibold text-[#F9F9F9] text-xs">Social Media</h6>
          <div className="flex gap-2 mt-4 items-center">
            <Link href="https://www.facebook.com/quickdesk" target="_blank">
              <div className="bg-[#FAFAFA] p-2 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                <FaFacebookF className="text-[#121212] text-xl" />
              </div>
            </Link>
            <Link href="https://twitter.com/quickdesk" target="_blank">
              <div className="bg-[#FAFAFA] p-2 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                <FaXTwitter className="text-[#121212] text-xl" />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/company/quickdesk/"
              target="_blank"
            >
              <div className="bg-[#FAFAFA] p-2 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                <FaLinkedinIn className="text-[#121212] text-xl" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/quickdesk/" target="_blank">
              <div className="bg-[#FAFAFA] p-2 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                <FaSquareInstagram className="text-[#121212] text-xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-10 lg:col-span-6 w-full">
        <div className="grid grid-cols-4 text-[#FFFFFF] gap-6">
          <div>
            <h4 className="font-semibold text-sm">Resources</h4>
            <div className="mt-4">
              <ul className="flex flex-col gap-2 space-y-2 text-[#FFFFFFBF] text-xs font-medium">
                <Link href="/documentation">
                  <li>Documentation</li>
                </Link>
                <Link href="/api-references">
                  <li>API References</li>
                </Link>
                <Link href="/security">
                  <li>Security</li>
                </Link>
                <Link href="/system-status">
                  <li>System Status</li>
                </Link>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm">Product</h4>
            <div className="mt-4">
              <ul className="flex flex-col gap-2 space-y-2 text-[#FFFFFFBF] text-xs font-medium">
                <Link href="/features">
                  <li>Features</li>
                </Link>
                <Link href="/pricing">
                  <li>Pricing</li>
                </Link>
                <Link href="/security">
                  <li>Security</li>
                </Link>
                <Link href="/faqs">
                  <li>FAQ</li>
                </Link>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm">Company</h4>
            <div className="mt-4">
              <ul className="flex flex-col gap-2 space-y-2 text-[#FFFFFFBF] text-xs font-medium">
                <Link href="/blog">
                  <li>Blog</li>
                </Link>
                <Link href="/contact-us">
                  <li>Contact Us</li>
                </Link>
                <Link href="/privacy">
                  <li>Privacy</li>
                </Link>
                <Link href="/terms">
                  <li>Terms</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
