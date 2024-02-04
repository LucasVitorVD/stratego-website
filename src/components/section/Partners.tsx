import PartnersList from "../partners-list/PartnersList";

export default function Partners() {
  return (
    <section>
      <div className="pl-4 py-12 md:pl-12">
        <h2 className="title text-highlightYellow md:relative md:overflow-hidden md:after:content-[''] md:after:block md:after:bg-white md:after:w-full md:after:h-[8px] md:after:absolute md:after:right-[-278px] md:after:top-[56px]">
          ALGUNS DE NOSSOS CLIENTES <br /> & PARCEIROS
        </h2>
      </div>
      <PartnersList />
    </section>
  );
}
