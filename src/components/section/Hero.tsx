const heroText = "text-4xl font-extralight text-primary-textPrimary"

export default function Hero() {
  return (
    <section className="section bg-[url('/images/congresso-brasil.jpg')] bg-no-repeat bg-cover bg-bottom">
      <div className="flex flex-col items-center min-h-full backdrop-blur-[2px]">
        <div className="flex flex-1 items-center gap-28">
          <p className={heroText}>
            <span className="border-b-2">Consultoria</span> Política
          </p>
          <p className={heroText}>
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
