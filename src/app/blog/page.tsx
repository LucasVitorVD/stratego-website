import PostCard from "@/components/card/PostCard";
import Hero from "@/components/section/Hero";

export default function Blog() {
  return (
    <div>
      <Hero imageSrc="/images/congresso-nacional-2.jpg">
        <div className="flex flex-1 items-center justify-between p-10 w-full md:pl-16">
          <h1 className="font-bold text-4xl underline decoration-highlightYellow decoration-solid decoration-4 underline-offset-4">
            Blog
          </h1>

          <div className="flex flex-col items-center gap-8">
            <p className="text-2xl text-highlightYellow font-bold font-montserrat_alt">
              Últimas Notícias
            </p>

            <div className="flex items-center gap-16">
              <PostCard />
            </div>
          </div>
        </div>
      </Hero>
    </div>
  );
}
