import { posts } from "@/lib/data"
import Link from "next/link"

interface Props {
  params: { 
    id: string 
  }
}

export default function Page({ params }: Props) { 
  const post = posts.find((post) => post.id === Number(params.id))

  return (
    <div className="container flex flex-col h-screen">
      <section className="flex flex-col items-center flex-1 gap-4 py-24 font-montserrat_alt">
        <div 
          className="flex items-center justify-end w-full h-28 bg-no-repeat bg-cover bg-center px-4"
          style={{ backgroundImage: `url(${post?.coverImage ?? "http://via.placeholder.com/640x360"})`}}
        >
          <h1 className="text-highlightYellow text-base font-bold text-pretty sm:text-3xl md:text-4xl">
            {post?.title ?? "Titulo"}
          </h1>
        </div>

        <div className="flex flex-1">
          <p className="text-base text-pretty tracking-tight font-bold">{post?.content}</p>
        </div>

        <div>
          <Link href="/blog" className="nav text-center text-xl text-highlightYellow">Voltar</Link>
        </div>
      </section>
    </div>
  )
}