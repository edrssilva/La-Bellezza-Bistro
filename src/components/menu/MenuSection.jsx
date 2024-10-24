import SectionTitle from "../SectionTitle";
import PrimaryButton from "../PrimaryButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const sliderSettings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-2/4 my-16 flex justify-center gap-8">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle>Cardápio</SectionTitle>
        <h2 className="font-serif font-bold text-2xl text-offblack text-left">
          Mais pedidos
        </h2>

        <div className="slider-container">
          <Slider {...sliderSettings}>
            {dishes.map((dish) => (
              <MenuCard
                key={dish.id}
                itemImageUrl={dish.imageUrl}
                itemImageAlt={dish.title}
                itemTitle={dish.title}
                itemDescription={dish.description}
                itemPrice={dish.price}
              />
            ))}
          </Slider>
        </div>

        <PrimaryButton>Cardápio completo</PrimaryButton>
      </div>
    </section>
  );
}

export default MenuSection;
