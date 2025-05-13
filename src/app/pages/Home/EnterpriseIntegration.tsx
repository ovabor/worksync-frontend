import TitleText from "@/app/components/TitleText";
import Image from "next/image";

const EnterpriseIntegration = () => {
  return (
    <section className="container mx-auto px-8 py-8 lg:py-16 font-alliance">
      <TitleText title="Enterprise Integrations" />
      <h6 className="font-medium text-xs text-[#FFFFFF] text-center mt-2">
        Seamlessly connect with your existing systems.
      </h6>
      <Image
        className="mx-auto mt-10 lg:mt-14 h-auto"
        src="/images/QuickDesk.png"
        alt="Integration image"
        width={300}
        height={300}
      />
    </section>
  );
};

export default EnterpriseIntegration;
