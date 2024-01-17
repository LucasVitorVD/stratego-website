"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Nav from "./Nav";
import { useState } from "react";

export default function Mobile() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Sheet open={openModal} onOpenChange={setOpenModal}>
      <SheetTrigger>
        <Menu size={30} className="text-highlightYellow md:hidden" />
      </SheetTrigger>
      <SheetContent className="bg-primary-darkBlue">
        <SheetHeader>
          <Nav setOpenModal={setOpenModal} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
