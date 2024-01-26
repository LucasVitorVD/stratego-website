import Posts from "@/components/section/Posts";
import PostCard from "@/components/card/PostCard";
import Hero from "@/components/section/Hero";
import { posts } from "@/lib/data";

export default function Blog() {
  const recentPosts = posts.slice(0, 2);

  return (
    <div>
      <Hero imageSrc="/images/congresso-nacional-2.jpg">
        <div className="flex flex-col flex-1 items-center justify-between gap-10 py-16 px-10 w-full lg:flex-row lg:gap-0">
          <h1 className="font-bold text-4xl underline decoration-highlightYellow decoration-solid decoration-4 underline-offset-4">
            Blog
          </h1>

          <div className="flex flex-col items-center gap-8">
            <p className="text-2xl text-highlightYellow font-bold font-montserrat_alt">
              Últimas Notícias
            </p>

            <div className="flex flex-col items-center gap-16 lg:flex-row">
              {recentPosts.length > 0 &&
                recentPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    title={post.title}
                    coverImage={post.coverImage}
                    id={post.id}
                  />
                ))}
            </div>
          </div>
        </div>
      </Hero>

      <Posts />
    </div>
  );
}
