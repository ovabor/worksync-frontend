const pricingData = [
  {
    id: 1,
    title: "Growth",
    price: "$499",
    basis: "/ per month",
    isBasis: true,
    btn: "Talk to Sales",
  },
  {
    id: 2,
    title: "Scale",
    price: "$1,499",
    basis: "/ per month",
    isBasis: true,
    btn: "Talk to Sales",
  },
  {
    id: 3,
    title: "Enterprise",
    price: "Custom",
    isBasis: false,
    btn: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <section className="container mx-auto px-4 py-16 font-alliance">
      <h1 className="text-4xl font-bold text-[#FFFFFF] text-center">
        Simple, Scalable Pricing for <br /> Growing Teams
      </h1>
      <h6 className="font-medium text-xs text-[#FFFFFF] text-center mt-2">
        Predictable plans designed for Mid-Market & Growth companies
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {pricingData.map(({ title, price, btn, isBasis, basis, id }) => (
          <div
            key={id}
            className="pricing-card hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="my-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  fill="url(#paint0_linear_146_751)"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  stroke="url(#paint1_linear_146_751)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_146_751"
                    x1="20"
                    y1="0"
                    x2="20"
                    y2="40"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#CDCDCD" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_146_751"
                    x1="20"
                    y1="0"
                    x2="20"
                    y2="40"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopOpacity="0" />
                    <stop offset="1" stopOpacity="0.24" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-sm font-semibold mb-6">{title}</h2>
            <p className="text-4xl font-semibold">
              {price}{" "}
              <span className="text-[#FFFFFFCC] text-xs font-normal">
                {basis}
              </span>
            </p>
            <button
              className={`mt-8 mb-4 px-4 py-3 w-full text-[#FFFFFF] text-xs rounded-xl cursor-pointer transition duration-300 ease-in-out ${
                isBasis
                  ? "bg-transparent border border-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000]"
                  : "bg-[#033E8C] hover:bg-transparent hover:border hover:border-[#FFFFFF]"
              }`}
            >
              {btn}
            </button>
            <hr className="my-4 border border-[#FFFFFF29] w-[80%]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
