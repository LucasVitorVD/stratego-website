import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="bg-black bg-opacity-25 fixed top-0 z-30 w-full py-2">
      <div className="flex items-center justify-between gap-4 px-6 md:hidden">
        <Image src="/images/logo1.png" width={35} height={35} alt="Logo" />
        <Sheet>
          <SheetTrigger>
            <Menu 
              size={30}
              className="text-highlightYellow md:hidden"
            />
          </SheetTrigger>
          <SheetContent className="bg-primary-darkBlue">
            <SheetHeader>
              <Nav />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:block">
        <Nav />
      </div>
    </header>
  );
}
