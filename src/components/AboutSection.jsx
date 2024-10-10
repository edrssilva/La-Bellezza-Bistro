import aboutImage from "../assets/images/indoor-bistro-about-section-1980x1360.jpg";

function AboutSection() {
  return (
    <div className="w-2/4 my-16 flex justify-between gap-8">
      <div className="w-full">
        <h2 className=" font-serif font-bold text-4xl text-offblack text-left">
          Sobre nós
        </h2>
        <p className="font-light text-xl text-offblack text-left">
          No La Bellezza Bistro, celebramos a culinária artesanal com um toque
          de elegância. Cada prato é cuidadosamente elaborado com ingredientes
          frescos e de alta qualidade, proporcionando uma experiência
          gastronômica única. Nossa missão é criar momentos inesquecíveis, onde
          o sabor encontra a sofisticação em um ambiente acolhedor.
        </p>
      </div>
      <div className="w-full">
        <img
          src={aboutImage}
          alt=""
          className="rounded-md shadow-md object-cover object-center"
        />
      </div>
    </div>
  );
}

export default AboutSection;
