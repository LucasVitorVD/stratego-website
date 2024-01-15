import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full mt-10 md:mt-0 md:px-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-around md:gap-0">
        <Link href="/" className="nav text-primary-textPrimary text-lg font-bold">
          INÍCIO
        </Link>
        <Link href="/sobre" className="nav text-primary-textPrimary text-lg font-bold">
          QUEM SOMOS
        </Link>
        <Link href="/" className="hidden md:block">
          <Image src="/images/logo1.png" width={35} height={35} alt="Logo" />
        </Link>
        <a href="#" className="nav text-highlightYellow text-lg font-bold">
          ACESSE O BLOG
        </a>
        <a href="#" className="nav text-highlightYellow text-lg font-bold">
          FALE CONOSCO
        </a>
      </div>
    </nav>
  );
}
