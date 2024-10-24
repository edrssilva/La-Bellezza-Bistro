import SectionTitle from "../SectionTitle";
import PrimaryButton from "../PrimaryButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MenuCard from "./MenuCard";
import risotoImage from "../../assets/images/dishes/risoto.png";
import bifeImage from "../../assets/images/dishes/bife.png";
import ravioliImage from "../../assets/images/dishes/ravioli.png";
import mignonImage from "../../assets/images/dishes/mignon.png";
import salmaoImage from "../../assets/images/dishes/salmao.jpg";
import polentaImage from "../../assets/images/dishes/polenta.jpg";
import lasanhaImage from "../../assets/images/dishes/lasanha.jpg";
import patoImage from "../../assets/images/dishes/pato.jpg";

function MenuSection() {
  const dishes = [
    {
      id: 1,
      title: "Risoto de Camarão",
      description:
        "Arroz arbóreo cremoso com camarões frescos, temperado com limão siciliano e um toque de parmesão.",
      price: "R$69,99",
      imageUrl: risotoImage,
    },
    {
      id: 2,
      title: "Bife Ancho ao Molho",
      description:
        "Corte especial de bife ancho, servido com molho chimichurri e batatas rústicas.",
      price: "R$89,99",
      imageUrl: bifeImage,
    },
    {
      id: 3,
      title: "Ravióli de Queijo com Molho",
      description:
        "Massa fresca recheada com queijos especiais, coberta com molho de tomate caseiro e manjericão.",
      price: "R$39,99",
      imageUrl: ravioliImage,
    },
    {
      id: 4,
      title: "Filé Mignon com Purê",
      description:
        "Filé mignon grelhado, acompanhado de purê de batata cremoso e cogumelos salteados.",
      price: "R$94,99",
      imageUrl: mignonImage,
    },
    {
      id: 5,
      title: "Salmão Grelhado com Aspargos",
      description:
        "Salmão fresco grelhado, servido com aspargos crocantes e molho de ervas.",
      price: "R$79,99",
      imageUrl: salmaoImage,
    },
    {
      id: 6,
      title: "Polenta Cremosa com Ragu",
      description:
        "Polenta cremosa servida com um rico ragu de carne cozida lentamente ao vinho tinto.",
      price: "R$59,99",
      imageUrl: polentaImage,
    },
    {
      id: 7,
      title: "Lasanha de Berinjela",
      description:
        "Lasanha leve de berinjela grelhada, intercalada com molho de tomate e queijos selecionados.",
      price: "R$49,99",
      imageUrl: lasanhaImage,
    },
    {
      id: 8,
      title: "Pato ao Molho de Laranja",
      description:
        "Pato confit crocante servido com um delicioso molho de laranja e purê de batata-doce.",
      price: "R$109,99",
      imageUrl: patoImage,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const dishesCards = dishes.map((dish) => (
    <MenuCard
      key={dish.id}
      itemImageUrl={dish.imageUrl}
      itemImageAlt={dish.title}
      itemTitle={dish.title}
      itemDescription={dish.description}
      itemPrice={dish.price}
    ></MenuCard>
  ));

  return (
    <section className="w-2/4 my-16 flex justify-center gap-8">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle>Cardápio</SectionTitle>
        <h2 className="font-serif font-bold text-2xl text-offblack text-left">
          Mais pedidos
        </h2>

        <Carousel responsive={responsive}>{dishesCards}</Carousel>

        <PrimaryButton>Cardápio completo</PrimaryButton>
      </div>
    </section>
  );
}

export default MenuSection;
