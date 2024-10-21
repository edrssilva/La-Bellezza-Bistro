import SectionTitle from "../SectionTitle";
import AboutParagraph from "./AboutParagraph";
import AboutImage from "./AboutImage";

function AboutSection() {
  return (
    <section className="w-2/4 my-16 flex justify-between gap-8">
      <div className="w-full">
        <SectionTitle>Sobre nós</SectionTitle>
        <AboutParagraph>
          No La Bellezza Bistro, celebramos a culinária artesanal com um toque
          de elegância. Cada prato é cuidadosamente elaborado com ingredientes
          frescos e de alta qualidade, proporcionando uma experiência
          gastronômica única. Nossa missão é criar momentos inesquecíveis, onde
          o sabor encontra a sofisticação em um ambiente acolhedor.
        </AboutParagraph>
      </div>
      <div className="w-full">
        <AboutImage />
      </div>
    </section>
  );
}

export default AboutSection;
