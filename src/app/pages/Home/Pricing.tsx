import TitleText from "@/app/components/TitleText";
import { BadgeCheck, Minus } from "lucide-react";

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
    isBasis: false,
    btn: "Talk to Sales",
  },
  {
    id: 3,
    title: "Enterprise",
    price: "Custom",
    isBasis: true,
    btn: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <section className="container mx-auto px-8 lg:px-16 py-8 lg:py-16 font-alliance">
      <TitleText title="Simple, Scalable Pricing for Growing Teams" />
      <h6 className="font-medium text-xs text-[#FFFFFF] text-center mt-2">
        Predictable plans designed for Mid-Market & Growth companies
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
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
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Features Column */}
          <div className="space-y-8">
            <h2 className="text-lg font-bold">Features</h2>

            <div>
              <h3 className="font-medium mb-2">Target Company Size</h3>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-base uppercase mb-6">
                Core Platform
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-left items-center text-xs font-extralight">
                  AI Agent Access (Web, Slack, Teams)
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Agentic RAG (Q&A)
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Autonomous Task Automation
                </li>
                <li className="text-xs font-extralight pt-2">
                  <div>AI Interactions/Tasks</div>
                  <div>Monthly Pool High / Unlimited Basic</div>
                  <div>Custom Limits Included Departments</div>
                </li>
                <li className="text-xs font-extralight pt-2">
                  Core Integrations
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Enhanced Integrations
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Basic Admin Dashboard
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-base uppercase mb-6">
                Reliability & Security
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-left items-center text-xs font-extralight">
                  Standard Security
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Features
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Enhanced Monitoring
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Advanced Data Governance
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Privacy Fine-tuning Option
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Standard SLA
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Enhanced SLA Option
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-base uppercase mb-6">
                Support & Services
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-left items-center text-xs font-extralight">
                  Standard Support
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Priority Support
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Dedicated Support Rep
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Guided Onboarding
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  Pro Services Assess
                </li>
              </ul>
            </div>
          </div>

          {/* Growth Plan */}
          <div className="space-y-8">
            <h2 className="text-lg font-bold text-left">Growth</h2>

            <div className="text-left">
              <h3 className="font-medium mb-2">100 - 300 Employees</h3>
            </div>

            <div className="mt-8">
              <h3 className="invisible font-bold text-lg uppercase mb-6">
                Core Platform
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="pt-6">
                  <div className="text-left flex justify-left items-center text-xs font-extralight">
                    Generous Monthly Pool Up to 3
                  </div>
                  <div className="text-left flex justify-left items-center text-xs font-extralight">
                    Departments (e.g., IT, HR, Finance)
                  </div>
                </li>
                <li className="flex justify-left items-center text-xs gap-2 font-extralight pt-2">
                  <BadgeCheck size={15} /> (MVP Set + More)
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <Minus size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="invisible font-bold text-lg uppercase mb-6">
                Reliability & Security
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <Minus size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <Minus size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <Minus size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <Minus size={15} />
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="invisible font-bold text-lg uppercase mb-6">
                Support & Services
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-left items-center text-xs gap-2 font-extralight">
                  <BadgeCheck size={15} /> (Email/Chat, Business Hrs)
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <Minus size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <Minus size={15} />
                </li>

                <li className="flex justify-left items-center text-xs gap-2 font-extralight">
                  <BadgeCheck size={15} /> (Standard Package)
                </li>
                <li className="flex justify-left items-center text-xs gap-2 font-extralight">
                  <BadgeCheck size={15} /> (Paid Add-on)
                </li>
              </ul>
            </div>
          </div>

          {/* Scale Plan */}
          <div className="space-y-8">
            <h2 className="text-lg font-bold text-left">Scale</h2>

            <div className="text-left">
              <h3 className="font-medium mb-2">300 - 1000 Employees</h3>
            </div>

            <div className="mt-8">
              <h3 className="invisible font-bold text-lg uppercase mb-6">
                Core Platform
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="pt-6">
                  <div className="text-left flex justify-left items-center text-xs font-extralight">
                    High / Unlimited Basic All 5 Core
                  </div>
                  <div className="text-left flex justify-left items-center text-xs font-extralight">
                    Departments (IT/HR/Eng/Sec/Ops/Dev)
                  </div>
                </li>
                <li className="flex justify-left items-center text-xs font-extralight pt-2">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="invisible font-bold text-lg uppercase mb-6">
                Reliability & Security
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs gap-2 font-extralight">
                  <BadgeCheck size={15} /> (Auto/Lakera Access)
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <Minus size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <Minus size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <Minus size={15} />
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="invisible font-bold text-lg uppercase mb-6">
                Support & Services
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs gap-2 font-extralight">
                  <BadgeCheck size={15} /> (Email/Chat, 24x5)
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <Minus size={15} />
                </li>
                <li className="flex justify-left items-center text-xs gap-2 font-extralight">
                  <BadgeCheck size={15} /> (Enhanced Package)
                </li>
                <li className="flex justify-left items-center text-xs gap-2 font-extralight">
                  <BadgeCheck size={15} /> (Paid Add-on)
                </li>
              </ul>
            </div>
          </div>

          {/* Custom Plan */}
          <div className="space-y-8">
            <h2 className="text-lg font-bold text-left">Custom</h2>

            <div className="text-left">
              <h3 className="font-medium mb-2">1000+ / Unique Needs</h3>
            </div>

            <div className="mt-8">
              <h3 className="invisible font-bold text-lg uppercase mb-6">
                Core Platform
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="pt-6">
                  <div className="text-left flex justify-left items-center text-xs font-extralight">
                    Custom Limits
                  </div>
                  <div className="text-left flex justify-left items-center text-xs font-extralight">
                    Custom Scope
                  </div>
                </li>
                <li className="flex justify-left items-center text-xs font-extralight gap-2 pt-2">
                  <BadgeCheck size={15} /> + Custom
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="invisible font-bold text-lg uppercase mb-6">
                Reliability & Security
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight gap-2">
                  <BadgeCheck size={15} /> (Add-on Service)
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="invisible font-bold text-lg uppercase mb-6">
                Support & Services
              </h3>
              <ul className="space-y-6">
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>
                <li className="flex justify-left items-center text-xs font-extralight">
                  <BadgeCheck size={15} />
                </li>

                <li className="flex justify-left items-center text-xs font-extralight gap-2">
                  <BadgeCheck size={15} /> (24x7 Phone Option)
                </li>
                <li className="flex justify-left items-center text-xs font-extralight gap-2">
                  <BadgeCheck size={15} /> (Custom Plan)
                </li>
                <li className="flex justify-left items-center text-xs font-extralight gap-2">
                  <BadgeCheck size={15} /> (Included Add-on)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
