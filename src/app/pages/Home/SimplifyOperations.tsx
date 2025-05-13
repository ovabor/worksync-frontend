import Button from "@/app/components/Button";
import TitleText from "@/app/components/TitleText";

const SimplifyOperations = () => {
  return (
    <section className="container mx-auto px-4 py-18 font-alliance flex flex-col items-center justify-center">
      <TitleText title="Ready to Simplify Your Operations?" />
      <h6 className="font-medium text-xs text-[#FFFFFF] text-center my-2">
        Let&apos;s find the perfect WorkSync plan for your growing business.
      </h6>
      <h6 className="font-medium text-xs text-[#FFFFFF] text-center mt-2">
        Our team can provide a detailed quote and demo.
      </h6>
      <Button
        content1="Talk To Sales"
        link1="/faqs"
        content2="Request Demo Quote"
        link2="/faqs"
      />
    </section>
  );
};

export default SimplifyOperations;
