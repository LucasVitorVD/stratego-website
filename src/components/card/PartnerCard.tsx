import Image from "next/image"

interface Props {
  imgSrc: string,
  alt: string,
  content: string
}

export default function PartnerCard({ imgSrc, alt, content }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <figure>
        <Image
          alt={alt}
          src={imgSrc}
          width={140}
          height={140}
          className="rounded-full"
        />
        <figcaption className="font-bold text-center text-base mt-1">
          {alt}
        </figcaption>
      </figure>
      <p className="text-justify text-pretty tracking-tight w-72">
        {content}
      </p>
    </div>
  );
}
