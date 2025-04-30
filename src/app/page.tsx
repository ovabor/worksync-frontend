import Benefit from "./pages/Home/Benefit";
import Hero from "./pages/Home/Hero";
import Pricing from "./pages/Home/Pricing";
import TailoredSolution from "./pages/Home/TailoredSolution";
import Team from "./pages/Home/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Team />
      <Benefit />
      <TailoredSolution />
      <Pricing />
    </>
  );
}
