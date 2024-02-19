import Image from "next/image";
import ConductAside from "../conductAside/ConductAside";

export default function Conduct() {
  const verticalLine = "hidden md:block md:flex-1 md:mx-auto md:border-x-4 md:border-x-highlightYellow md:px-1"

  return (
    <section className="grid grid-cols-mobile-cols lg:grid-cols-large-screens-cols">
      <ConductAside />
      <div className="grid md:grid-cols-1 md:grid-rows-large-screens-rows pt-20 lg:pl-20">
        <div className="flex items-center justify-around bg-highlightYellow font-bold text-3xl py-8 md:py-0">
          <p>Missão.</p>
          <p>Visão.</p>
          <p>Valores.</p>
        </div>
        <div className="flex justify-around flex-wrap gap-6 py-7 md:gap-0 md:py-0">
          <div className="flex flex-col justify-center md:h-4/6">
            <div className={verticalLine}></div>
            <p className="border border-highlightYellow text-sm text-center text-pretty p-2 w-48 font-bold">
              A nossa missão é ser uma empresa capaz de promover a capacitação
              de jovens para o mercado de trabalho e oferecer uma consultoria
              política personalizada e de qualidade.
            </p>
          </div>
          <div className="flex flex-col justify-center md:h-3/5">
            <div className={verticalLine}></div>
            <p className="border border-highlightYellow text-sm text-center text-pretty p-2 w-48 font-bold">
              Nos tornar uma consultoria consolidada em Relações Governamentais
              e referência em análise política no Brasil.
            </p>
          </div>

          <div className="flex flex-col justify-center md:h-4/5">
            <div className={verticalLine}></div>
            <ul className="border border-highlightYellow text-sm p-2 w-52 list-disc list-inside font-bold">
              <li>Diversidade como propulsora da inovação</li>
              <li>Compromisso com resultados</li>
              <li>Crescimento e evolução em equipe</li>
              <li>Sinergia empresarial Qualidade</li>
              <li>Aprimoramento das soluções</li>
            </ul>
          </div>
        </div>
        <div className="hidden pt-14 md:block">
          <Image
            src="/images/grafismo-quadrado.png"
            alt="detalhes"
            width={352}
            height={40}
          />
        </div>
      </div>
    </section>
  );
}
