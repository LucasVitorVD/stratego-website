import Image from "next/image";
import ConductAside from "../conductAside/ConductAside";

export default function Conduct() {
  const verticalLine = "flex-1 mx-auto border-x-4 border-x-highlightYellow px-1"

  return (
    <section className="grid grid-cols-custom">
      <ConductAside />
      <div className="grid grid-cols-1 grid-rows-custom pt-20 pl-20">
        <div className="flex items-center justify-around bg-highlightYellow font-bold text-3xl">
          <p>Missão.</p>
          <p>Visão.</p>
          <p>Valores.</p>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col justify-center h-4/6">
            <div className={verticalLine}></div>
            <p className="border border-highlightYellow text-sm text-center text-pretty p-2 w-48 font-bold">
              A nossa missão é ser uma empresa capaz de promover a capacitação
              de jovens para o mercado de trabalho e oferecer uma consultoria
              política personalizada e de qualidade.
            </p>
          </div>
          <div className="flex flex-col justify-center h-3/5">
            <div className={verticalLine}></div>
            <p className="border border-highlightYellow text-sm text-center text-pretty p-2 w-48 font-bold">
              Nos tornar uma consultoria consolidada em Relações Governamentais
              e referência em análise política no Brasil.
            </p>
          </div>

          <div className="flex flex-col justify-center h-4/5">
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
        <div className="pt-14">
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
