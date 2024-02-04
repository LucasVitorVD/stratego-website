import PartnerCard from "@/components/card/PartnerCard";
import ListItem from "@/components/listItem/ListItem";

interface ItemsProps {
  variant: "line" | "default" | undefined,
  img: string,
  alt: string,
  content: string
}

const items: ItemsProps[] = [
  {
    variant: "line",
    img: "/images/shell-logo.png",
    alt: "Shell logo",
    content:
      "A Shell foi fundada em 1897, com a fusão da Royal Dutch Petroleum e da Shell Transport and Trading Company. A empresa cresceu rapidamente nos anos seguintes, tornando-se um dos principais fornecedores de petróleo e gás do mundo.",
  },
  {
    variant: "line",
    img: "/images/CONCENTRO.jpeg",
    alt: "Concentro logo",
    content:
      "A Concentro é uma Federação de Empresas Juniores do Distrito Federal, Brasil. Foi fundada em 2009 por sete EJs da capital, com o objetivo de unir e representar o movimento empresa júnior no DF.",
  },
  {
    variant: "default",
    img: "/images/olma-logo.png",
    alt: "Olma logo",
    content:
      "É uma organização sem fins lucrativos fundada em 2002 pela Província dos Jesuítas do Brasil. O OLMA tem como missão promover a justiça socioambiental no Brasil, por meio da pesquisa, da educação e da ação.",
  },
];

export default function PartnersList() {
  return (
    <ol className="flex flex-col gap-14 items-center w-full lg:px-28 lg:flex-row lg:gap-0">
      {items.map((item, i) => (
        <ListItem variant={item.variant} index={i} key={i}>
          <PartnerCard
            imgSrc={item.img}
            alt={item.alt}
            content={item.content}
          />
        </ListItem>
      ))}
    </ol>
  );
}
