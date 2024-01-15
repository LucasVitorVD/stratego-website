import Data from "@/components/section/Data";
import Hero from "@/components/section/Hero";
import Partners from "@/components/section/Partners";
import Services from "@/components/section/Services";

export default function Home() {
  return (
    <div>
      <Hero imageSrc="/images/congresso-brasil.jpg" footer>
        <div className="flex flex-col flex-1 items-center justify-center gap-9 md:flex-row lg:gap-28">
          <p className="heroText">
            <span className="border-b-2">Consultoria</span> Política
          </p>
          <p className="heroText">
            Melhor E.J de ciência
            <br />
            <span className="border-b-2">política</span> do país
          </p>
        </div>
      </Hero>
      <Data />
      <Partners />
      <Services />
    </div>
  );
}
