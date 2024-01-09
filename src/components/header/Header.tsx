import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black bg-opacity-25 absolute top-0 z-30 w-full">
      <nav className="w-full py-3 px-10">
        <div className="flex items-center justify-around">
          <a href="#" className="nav text-primary-textPrimary text-lg font-bold">INÍCIO</a>
          <a href="#" className="nav text-primary-textPrimary text-lg font-bold">QUEM SOMOS</a>
          <a href="#">
            <Image
              src="/images/logo1.png"
              width={35}
              height={35}
              alt="Logo"
            />
          </a>
          <a href="#" className="nav text-highlightYellow text-lg font-bold">ACESSE O BLOG</a>
          <a href="#" className="nav text-highlightYellow text-lg font-bold">FALE CONOSCO</a>
        </div>
      </nav>
    </header>
  );
}
