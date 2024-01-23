import Link from "next/link";
import Image from "next/image";

export default function PostCard() {
  return (
    <div>
      <figure>
        <Image
          src="http://via.placeholder.com/640x360"
          alt="Imagem da capa do blog"
          width={350}
          height={350}
        />
        <figcaption className="mt-3">
          <Link
            href="#"
            className="text-sm font-bold capitalize hover:underline"
          >
            O que mudou com a aprovação da “MP dos ministérios”?
          </Link>
        </figcaption>
      </figure>
      <Link href="#" className="text-sm text-highlightYellow font-bold">
        Ler mais
      </Link>
    </div>
  );
}
