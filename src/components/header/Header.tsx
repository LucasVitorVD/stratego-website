import Image from "next/image";
import Nav from "./Nav";
import Mobile from "./Mobile";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black bg-opacity-25 fixed top-0 z-30 w-full py-2">
      <div className="flex items-center justify-between gap-4 px-6 md:hidden">
        <Link href="/">
          <Image src="/images/logo1.png" width={35} height={35} alt="Logo" className="mx-auto md:mx-0" />
        </Link>
        <Mobile />
      </div>
      <div className="hidden md:block">
        <Nav />
      </div>
    </header>
  );
}
