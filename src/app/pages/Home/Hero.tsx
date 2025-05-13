import Image from "next/image";
import Button from "@/app/components/Button";
import { MobileHeroSVG, LargeHeroSVG } from "@/app/components/ui/SVGs";

const Hero = () => {
  return (
    <section className="container md:mx-auto px-4 pt-16 font-alliance">
      <h1 className="mt-10 text-3xl md:text-5xl font-bold text-[#FFFFFF] text-center leading-tighten">
        Streamline Your Work <br /> Processes with
        <span className="inline-flex items-center md:mt-2">
          <Image
            className="mx-2"
            src="/logo/worksync-hero.png"
            alt="chat icon"
            width={60}
            height={60}
          />
        </span>
        WorkSync
      </h1>
      <h6 className="font-semibold text-xs text-[#FFFFFF] text-center mt-4">
        AI-Powered Employee Support Copilot for SMBs
      </h6>
      <Button
        content1="Get Started Now"
        link1="/get-started"
        content2="Schedule Demo"
        link2="/demo"
      />
      <div className="md:hidden flex items-center justify-center justify-items-center">
        <MobileHeroSVG />
      </div>
      <div className="hidden md:flex mt-10 items-center justify-center">
        <LargeHeroSVG />
      </div>
    </section>
  );
};

export default Hero;
