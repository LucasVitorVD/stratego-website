import Data from "@/components/section/Data";
import Hero from "@/components/section/Hero";
import Partners from "@/components/section/Partners";
import Services from "@/components/section/Services";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-primary-darkBlue">
      <Hero />
      <Data />
      <Partners />
      <Services />
    </div>
  );
}
