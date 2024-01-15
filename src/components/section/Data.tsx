import Counter from "@/components/Counter/Counter";

export default function Data() {
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="space-y-16">
        <h1 className="text-[2.5rem] font-extrabold text-center">
          OS DADOS NÃO MENTEM!!
        </h1>

        <div className="flex flex-col gap-14 items-center  lg:flex-row lg:gap-36 lg:justify-between">
          <div className="flex flex-col gap-1 items-center">
            <Counter end={100} highlight plusIcon />
            <p className="text-base font-normal">CLIENTES SATISFEITOS</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Counter end={18} plusIcon />
            <p className="text-base font-normal">ANOS DE EXPERIÊNCIA</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="text-6xl font-bold text-highlightYellow">
              <Counter end={9} />
              /10
            </span>
            <p className="text-base font-normal">ÍNDICE DE SATISFAÇÃO (NPS)</p>
          </div>
        </div>
        <p className="text-2xl italic font-light text-muted-foreground text-center">
          “FAZENDO HISTÓRIA POR ONDE PASSA”
        </p>
      </div>
    </section>
  );
}
