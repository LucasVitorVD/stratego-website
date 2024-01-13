export default function Services() {
  return (
    <section className="section flex flex-col pt-12">
      <div className="flex items-center justify-between">
        <div className="flex flex-col w-1/3 gap-1">
          <h3 className="title borderImg w-max pl-12">NOSSOS</h3>
          <span className="title pl-12 underline decoration-4 decoration-highlightYellow underline-offset-8">
            SERVIÇOS
          </span>
        </div>

        <div className="flex flex-col w-full">
          <p className="text-center font-bold">Serviço mais procurado</p>
          <ul className="bg-highlightYellow rounded-l-full p-4 list-image-[url(/images/ellipse-blue.png)]">
            <li className="text-2xl font-bold ml-7">Relações Governamentais</li>
          </ul>
        </div>
      </div>

      <div className="relative flex flex-col pt-10 after:content-[url('/images/grafismos-jr3-cinza.png')] after:absolute after:scale-[45%] after:top-[-82px] after:right-[-166px]">
        <ul className="flex flex-col flex-1 gap-10 pl-16 list-image-[url(/images/ellipse-yellow.png)]">
          <li className="font-bold text-xl uppercase">
            Acompanhamento Legislativo
            <ul className="list-disc">
              <li className="ml-8 mt-4 font-extralight uppercase text-sm">
                Monitoramento de proposições que estão em trâmite
              </li>
            </ul>
          </li>
          <li className="font-bold text-xl uppercase">
            Pesquisa de Opinião Parlamentar
          </li>
          <li className="font-bold text-xl uppercase">
            Análise do Cenário Político
          </li>
        </ul>
        <div className="bg-primary-darkBlue p-4 text-center">
          <p className="text-8xl text-highlightYellow">+</p>
          <p>CLIQUE PARA TER ACESSO A TODOS OS SERVIÇOS</p>
        </div>
      </div>
    </section>
  );
}
