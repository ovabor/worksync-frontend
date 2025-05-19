import TitleText from "@/app/components/TitleText";
import Image from "next/image";

const EnterpriseIntegration = () => {
  return (
    <section className="container mx-auto px-8 py-8 lg:py-10 font-alliance">
      <TitleText title="Enterprise Integrations" />
      <h6 className="font-medium text-xs text-[#FFFFFF] text-center mt-2">
        Seamlessly connect with your existing systems.
      </h6>
      <Image
        className="mx-auto h-auto mt-10"
        src="/images/enterprise.png"
        alt="Integration image"
        width={800}
        height={800}
      />
    </section>
  );
};

export default EnterpriseIntegration;
