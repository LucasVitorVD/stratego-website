import ContactForm from "@/components/contact-form/form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="container lg:h-screen">
      <section className="grid grid-cols-1 place-content-center gap-10 h-full py-20 lg:grid-cols-2 lg:gap-0 lg:py-0">
        <div>
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-highlightYellow text-2xl text-center font-bold">
              Fale conosco pelo E-mail!
            </h1>
            <ContactForm />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-highlightYellow text-2xl text-center font-bold">
            Fale conosco pelo WhatsApp!
          </h2>

          <div>
            <Button variant={"secondary"} className="py-7 px-20 rounded-full">
              <Image
                src="/images/whatsapp.png"
                width={140}
                height={140}
                alt="WhatsApp logo"
                className="rounded-full"
              />
            </Button>
            <p className="text-highlightYellow text-xl text-center font-bold">
              +55 61 99640-9153
            </p>
          </div>

          <div className="space-y-2 text-sm font-bold lg:ml-16">
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-white" />
              <p>faleconosco@strategosconsultoria.com.br</p>
            </div>
            <div className="flex gap-2">
              <MapPin size={25} className="text-white" />
              <p>
                Endereço: Universidade de Brasília - Campus Universitario Darcy
                Ribeiro, Instituto de Ciência Política (IPOL), Sala AT 45/7 -
                Brasília, DF
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-5xl font-bold">OBRIGADO!</p>
            <p className="text-highlightYellow text-base font-bold text-center">Equipe Strategos.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
