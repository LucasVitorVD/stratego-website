import Image from "next/image";

export default function Nav() {
  return (
    <nav className="w-full md:px-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-around md:gap-0">
        <a href="#" className="nav text-primary-textPrimary text-lg font-bold">
          INÍCIO
        </a>
        <a href="#" className="nav text-primary-textPrimary text-lg font-bold">
          QUEM SOMOS
        </a>
        <a href="#" className="hidden md:block">
          <Image src="/images/logo1.png" width={35} height={35} alt="Logo" />
        </a>
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
