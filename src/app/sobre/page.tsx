import Hero from "@/components/section/Hero";
import Info from "@/components/section/Info";
import Team from "@/components/section/Team";

export default function About() {
  return (
    <div>
      <Hero imageSrc="/images/congresso-nacional-3.jpg" footer>
        <div className="flex flex-1 items-center p-10 w-full md:pl-16">
          <h1 className="font-montserrat_alt font-bold text-4xl underline decoration-highlightYellow decoration-solid decoration-4 underline-offset-4">
            QUEM SOMOS?
          </h1>
        </div>
      </Hero>
      <Info />
      <Team />
    </div>
  );
}
