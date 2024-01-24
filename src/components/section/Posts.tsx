import { posts } from "@/lib/data";
import PostCard from "../card/PostCard";

export default function Posts() {
  return (
    <section className="flex flex-wrap items-center justify-center p-16 gap-16">
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            coverImage={post.coverImage}
            id={post.id}
          />
        ))
      ) : (
        <p>Sem Posts</p>
      )}
    </section>
  );
}
