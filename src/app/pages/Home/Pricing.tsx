import TitleText from "@/app/components/TitleText";
import {
  MobilePricingData,
  DesktopPricingData,
} from "@/app/components/ui/PricingData";

const Pricing = () => {
  return (
    <section className="container mx-auto px-8 lg:px-16 py-8 lg:py-16 font-alliance">
      <TitleText title="Simple, Scalable Pricing for Growing Teams" />
      <h6 className="font-medium text-xs text-[#FFFFFF] text-center mt-2">
        Predictable plans designed for Mid-Market & Growth companies
      </h6>
      <div className="md:hidden">
        <MobilePricingData />
      </div>
      <div className="hidden md:block">
        <DesktopPricingData />
      </div>
    </section>
  );
};

export default Pricing;
