import Image from "next/image";

const EnterpriseIntegration = () => {
  return (
    <section className="container mx-auto px-4 py-16 font-alliance">
      <h1 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] text-center">
        Enterprise Integrations
      </h1>
      <h6 className="font-medium text-xs text-[#FFFFFF] text-center mt-2">
        Seamlessly connect with your existing systems.
      </h6>
      <Image
        className="mx-auto mt-16 h-auto"
        src="/images/QuickDesk.png"
        alt="Integration image"
        width={300}
        height={300}
      />
    </section>
  );
};

export default EnterpriseIntegration;
