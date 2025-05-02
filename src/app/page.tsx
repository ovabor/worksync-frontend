import Benefit from "./pages/Home/Benefit";
import Hero from "./pages/Home/Hero";
import Pricing from "./pages/Home/Pricing";
import ProfessionalServices from "./pages/Home/ProfessionalServices";
import TailoredSolution from "./pages/Home/TailoredSolution";
import Team from "./pages/Home/Team";
import FAQs from "./pages/Home/FAQs";
import SimplifyOperations from "./pages/Home/SimplifyOperations";

export default function Home() {
  return (
    <>
      <Hero />
      <Team />
      <Benefit />
      <TailoredSolution />
      <Pricing />
      <ProfessionalServices />
      <FAQs />
      <SimplifyOperations />
    </>
  );
}
