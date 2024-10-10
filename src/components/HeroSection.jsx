import heroImage from "../assets/images/indoor-bistro-hero-section.jpg";
import HeroButton from "./HeroButton";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";

function HeroSection() {
  return (
    <section
      className={`w-full h-[40rem] flex flex-col justify-center items-center bg-cover bg-center shadow-lg`}
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 top-16 h-[40rem] bg-gradient-to-b from-[rgba(25,1,3,0.75)] to-[rgba(25,1,3,0.25)]" />

      <div className="z-50 flex flex-col">
        <HeroTitle>Descubra a arte de saborear</HeroTitle>
        <HeroSubtitle>
          Experiências gastronômicas criadas para despertar os sentidos.
        </HeroSubtitle>

        <div className="flex justify-center gap-32 mt-16">
          <HeroButton>Ver cardápio</HeroButton>
          <HeroButton>Fazer reserva</HeroButton>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
