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
    <footer className="container mx-auto px-6 lg:px-16 pt-8 lg:pt-16 font-alliance">
      <div className="grid grid-cols-10 gap-8 text-left">
        <div className="col-span-10 md:col-span-5 lg:col-span-4 text-left flex flex-col items-start">
          <Link href="/">
            <Image
              src="/logo/Quick2.png"
              alt="Logo"
              className="w-40"
              width={100}
              height={100}
            />
          </Link>
          <p className="font-normal text-[#FAFAFA] text-xs py-4 md:my-2">
            AI-Powered Employee Support Platform
          </p>
          <div>
            <h6 className="font-semibold text-[#F9F9F9] text-xs">
              Social Media
            </h6>
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
        <div className="col-span-10 md:col-span-5 lg:col-span-6 w-full flex items-center">
          <div className="grid grid-cols-3 lg:grid-cols-4 text-[#FFFFFF] gap-10 md:gap-20 text-left">
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
      </div>
      <div>
        <p className="font-normal text-center md:text-left text-[#FFFFFF] text-xs mt-16 md:mt-10">
          © 2024 WorkSync Technologies, Inc. All rights reserved.
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <h1 className="font-bold text-[#FFFFFF30] text-[5rem] md:text-[10rem] lg:text-[16rem]">
          Worksync
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
