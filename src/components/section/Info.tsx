import Image from "next/image";

export default function Info() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-10 py-14">
      <figure>
        <Image src="/images/logo2.png" width={208} height={208} alt="Logo" />
      </figure>
      <div className="flex flex-col gap-4 items-center">
        <div className="text-center">
          <h2 className="font-semibold text-4xl text-highlightYellow">
            STRATEGOS
          </h2>
          <span className="font-bold text-sm">CONSULTÓRIA POLÍTICA Jr.</span>
        </div>
        <div className="space-y-4 px-4 lg:w-[50rem] lg:px-0">
          <p className="uppercase break-words tracking-tight text-xs text-justify">
            A <strong>Strategos</strong> surgiu em 2005, com o intuito de
            oferecer serviços acessíveis e de qualidade para a sociedade, além
            de capacitar estudantes para o mercado de trabalho e fomentar o
            empreendedorismo jovem.
          </p>
          <p className="uppercase break-words tracking-tight text-xs text-justify">
            Atualmente, somos formados por alunos dos cursos de Ciência Política
            e Gestão de Políticas Públicas da Universidade de Brasília e
            oferecemos diversos serviços de consultoria política baseados no
            conhecimento técnico adquirido durante a graduação
          </p>
          <p className="uppercase break-words tracking-tight text-xs text-justify">
            Atuamos a nível federal e subnacional com monitoramento legislativo
            e executivo, análise política, relações governamentais e pesquisa de
            opinião política, para que o seu negócio acompanhe o cenário
            político por completo
          </p>
          <p className="uppercase break-words tracking-tight text-xs text-justify">
            Nosso compromisso é com a capacitação de jovens para o mercado de
            trabalho, oferecendo um{" "}
            <strong>serviço personalizado e de qualidade</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
