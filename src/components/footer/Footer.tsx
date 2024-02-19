"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="space-y-8 py-4 px-4 md:px-14 bg-highlightYellow lg:flex lg:justify-between lg:items-baseline">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h4 className="title-2">Contato</h4>
        <p className="text-black">faleconosco@strategosconsultoria.com.br</p>
        <p className="text-black">+55 61 99640-9153</p>
        <div>
          <Button variant={"secondary"} className="py-7 rounded-full">
            <Image
              src="/images/whatsapp.png"
              width={140}
              height={140}
              alt="WhatsApp logo"
              className="rounded-full"
            />
          </Button>
          <p>
            Entre em contato conosco <br /> através do nosso WhatsApp
          </p>
        </div>
        <p>
          Design feito por:{" "}
          <a
            href="https://www.linkedin.com/in/eumarcelie/"
            target="_blank"
            rel="external"
            className="underline text-blue-700"
          >
            Marcelo Marques
          </a>
        </p>
        <p>
          Desenvolvido por:{" "}
          <a
            href="https://www.linkedin.com/in/lucas-vitor-472026210/"
            target="_blank"
            rel="external"
            className="underline text-blue-700"
          >
            Lucas Vitor
          </a>
        </p>
      </motion.div>

      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <p className="title-2 text-primary-darkBlue">REDES</p>
        <ul className="list-none space-y-4">
          <li className="flex">
            <Image
              src="/images/FACEBOOK.png"
              width={25}
              height={25}
              alt="facebook icone"
              className="mr-1 rounded-full"
            />
            Facebook
          </li>
          <li className="flex">
            <Image
              src="/images/instagram-logo.png"
              width={25}
              height={25}
              alt="instagram icone"
              className="mr-1"
            />
            Instagram
          </li>
          <li className="flex">
            <Image
              src="/images/x.png"
              width={25}
              height={25}
              alt="X icone"
              className="rounded-full mr-1"
            />
            X
          </li>
          <li className="flex">
            <Image
              src="/images/linkedin.png"
              width={25}
              height={25}
              alt="LinkedIn icone"
              className="rounded-full mr-1 bg-white"
            />
            LinkedIn
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <p className="title-2">ASSINE A NOSSA NEWSLETTER</p>
        <form className="space-y-4">
          <Input
            placeholder="E-mail"
            type="email"
            className="bg-secondary-lightGray text-lg text-primary-darkBlue placeholder:text-primary-darkBlue"
            required
          />
          <Button type="submit" className="font-bold text-highlightYellow">
            INSCREVER-SE
          </Button>
        </form>
      </motion.div>
    </footer>
  );
}
