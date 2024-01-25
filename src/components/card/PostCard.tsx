import Link from "next/link";
import Image from "next/image";

interface Props {
  coverImage: string;
  title: string;
  id: string | number;
}

export default function PostCard({ coverImage, title, id }: Props) {
  return (
    <div className="flex flex-col gap-4 w-80">
      <figure>
        <Image
          src={coverImage}
          alt="Imagem da capa do blog"
          width={350}
          height={350}
        />
      </figure>
      <div className="flex flex-col gap-4">
        <Link
          href={`/blog/post/${id}`}
          className="text-sm font-bold capitalize text-pretty hover:underline"
        >
          {title}
        </Link>
        <Link href={`/blog/post/${id}`} className="nav text-sm text-highlightYellow font-bold">
          Ler mais
        </Link>
      </div>
    </div>
  );
}
