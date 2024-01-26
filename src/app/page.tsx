import Data from "@/components/section/Data";
import Hero from "@/components/section/Hero";
import Partners from "@/components/section/Partners";
import Services from "@/components/section/Services";

export default function Home() {
  return (
    <div>
      <Hero imageSrc="/images/congresso-brasil.jpg" footer screen>
        <div className="flex flex-col flex-1 items-start justify-center gap-36 md:flex-row md:items-center lg:gap-28">
          <p className="heroText">
            <span className="border-b-2 block md:inline">Consultoria</span> Política
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
