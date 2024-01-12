import PartnerCard from "../card/PartnerCard";
import ListItem from "../listItem/ListItem";

export default function Partners() {
  return (
    <section className="section">
      <div className="pl-12 py-12">
        <h2 className="title text-highlightYellow relative overflow-hidden after:content-[''] after:block after:bg-white after:w-full after:h-[8px] after:absolute after:right-[-278px] after:top-[56px]">
          ALGUNS DE NOSSOS CLIENTES <br /> & PARCEIROS
        </h2>
      </div>
      <ol className="flex items-center w-full px-28">
        <ListItem variant="line">
          <PartnerCard 
            imgSrc="/images/shell-logo.png"
            alt="SHELL"
            content="A Shell foi fundada em 1897, com a fusão da Royal Dutch Petroleum e da Shell Transport and Trading Company. A empresa cresceu rapidamente nos anos seguintes, tornando-se um dos principais fornecedores de petróleo e gás do mundo." 
          />
        </ListItem>
        <ListItem variant="line">
          <PartnerCard 
            imgSrc="/images/CONCENTRO.jpeg"
            alt="CONCENTRO"
            content="A Concentro é uma Federação de Empresas Juniores do Distrito Federal, Brasil. Foi fundada em 2009 por sete EJs da capital, com o objetivo de unir e representar o movimento empresa júnior no DF."
          />
        </ListItem>
        <ListItem variant="default">
          <PartnerCard  
            imgSrc="/images/olma-logo.png"
            alt="OLMA"
            content="É uma organização sem fins lucrativos fundada em 2002 pela Província dos Jesuítas do Brasil. O OLMA tem como missão promover a justiça socioambiental no Brasil, por meio da pesquisa, da educação e da ação."
          />
        </ListItem>
      </ol>
    </section>
  );
}
