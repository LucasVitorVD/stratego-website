export default function Hero() {
  return (
    <section className="bg-[url('/images/congresso-brasil.jpg')] bg-no-repeat bg-cover bg-bottom w-full h-[35rem]">
      <div className="flex flex-col items-center justify-center w-full h-full backdrop-blur-[2px]">
        <div className="flex flex-1 items-center gap-28">
          <h1 className="text-4xl font-extralight text-primary-textPrimary z-20">
            <span className="border-b-2">Consultoria</span> Política
          </h1>
          <p className="text-4xl font-extralight text-primary-textPrimary">
            Melhor E.J de ciência
            <br />
            <span className="border-b-2">política</span> do país
          </p>
        </div>
        <div className="p-4">
          <a href="#" className="nav text-xl font-bold text-center">
            ACESSE O BLOG
          </a>
        </div>
      </div>
    </section>
  );
}
