import Image from "next/image";
import Button from "@/app/components/Button";

const Hero = () => {
  return (
    <section className="container md:mx-auto px-4 font-alliance">
      <div className="flex items-center justify-center">
        <Image
          className="bottom-5 relative z-0"
          src="/images/Blue.png"
          alt="lamp effect"
          width={700}
          height={700}
        />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-[#FFFFFF] text-center leading-tighten">
        Streamline Your Work <br /> Processes with
        <span className="inline-flex items-center md:mt-2">
          <Image
            className="mx-2 w-10 md:w-16"
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
      <div className="md:hidden mt-10 flex items-center justify-center justify-items-center">
        {/* <MobileHeroSVG /> */}
        <Image
          src="/images/heroBgMobile.png"
          alt="hero image"
          width={300}
          height={300}
        />
      </div>
      <div className="hidden md:flex mt-10 items-center justify-center">
        {/* <LargeHeroSVG /> */}
        <Image
          className="mx-auto"
          src="/images/heroBgDesktop.png"
          alt="hero image"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default Hero;
