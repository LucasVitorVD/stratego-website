import Conduct from "@/components/section/Conduct";
import Hero from "@/components/section/Hero";
import Info from "@/components/section/Info";
import Team from "@/components/section/Team";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import Title from "@/components/title/Title";

export default function About() {
  return (
    <PageWrapper>
      <Hero imageSrc="/images/congresso-nacional-3.jpg" footer screen>
        <div className="flex flex-1 items-center p-10 w-full md:pl-16">
          <Title text="QUEM SOMOS?" />
        </div>
      </Hero>
      <Info />
      <Team />
      <Conduct />
    </PageWrapper>
  );
}
