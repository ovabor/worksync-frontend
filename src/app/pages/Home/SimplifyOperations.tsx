import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const SimplifyOperations = () => {
  return (
    <section className="container mx-auto px-4 py-18 font-alliance flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-[#FFFFFF] text-center leading-12">
        Ready to Simplify Your <br /> Operations?
      </h1>
      <h6 className="font-medium text-xs text-[#FFFFFF] text-center my-2">
        Let&apos;s find the perfect WorkSync plan for your growing business.
      </h6>
      <h6 className="font-medium text-xs text-[#FFFFFF] text-center mt-2">
        Our team can provide a detailed quote and demo.
      </h6>
      <div
        className={`flex items-center justify-center gap-8 ${inter.className}`}
      >
        <Link href="/faqs">
          <button className="py-3 px-6 mt-10 text-sm bg-[#FFFFFF] rounded-full border-2 border-[#FFFFFF] text-[#121212] font-bold cursor-pointer hover:bg-transparent hover:text-[#FFFFFF] transition-colors duration-300">
            Talk to Sales
          </button>
        </Link>
        <Link href="/faqs">
          <button className="flex items-center justify-center mt-10 text-sm text-[#FFFFFF] font-bold cursor-pointer hover:text-[#121212] transition-colors duration-300">
            <span>Request Demo Quote</span>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.503 7.00971L12.437 6.96971C11.689 6.51471 11.031 6.11371 10.467 5.91171C10.1561 5.79222 9.8237 5.73875 9.491 5.75471C9.14078 5.78144 8.80602 5.91006 8.528 6.12471C7.949 6.55871 7.699 7.19771 7.562 7.90471C7.429 8.58971 7.378 9.48171 7.315 10.5677L7.312 10.6237C7.274 11.2737 7.25 11.9167 7.25 12.4997C7.25 13.0827 7.274 13.7267 7.312 14.3767L7.315 14.4317C7.378 15.5177 7.429 16.4097 7.562 17.0937C7.699 17.8017 7.949 18.4397 8.528 18.8747C8.814 19.0897 9.135 19.2177 9.491 19.2447C9.833 19.2697 10.161 19.1977 10.467 19.0877C11.031 18.8857 11.689 18.4847 12.437 18.0307L12.503 17.9907C12.929 17.7307 13.347 17.4637 13.72 17.2007C14.1768 16.8757 14.6221 16.5349 15.055 16.1787L15.105 16.1377C15.869 15.5147 16.517 14.9857 16.965 14.4657C17.453 13.8957 17.75 13.2837 17.75 12.4997C17.75 11.7157 17.453 11.1027 16.964 10.5337C16.517 10.0137 15.869 9.48371 15.106 8.86171L15.056 8.82071C14.602 8.45071 14.146 8.09671 13.72 7.79871C13.3227 7.52264 12.9169 7.25918 12.503 7.00871"
                  fill="#3AC282"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SimplifyOperations;
