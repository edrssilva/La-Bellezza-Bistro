import HeroButton from "../HeroButton";
function ReservationSection() {
  return (
    <section className="bg-secondary w-full py-16 flex flex-col items-center justify-center gap-8">
      <div className="w-1/2 flex flex-col items-center gap-8">
        <h2 className="font-serif font-bold text-4xl text-white text-left">
          Reserve sua mesa
        </h2>
        <p className="text-2xl text-white text-center">
          Garanta uma experiência exclusiva no La Bellezza Bistro. Basta enviar
          uma mensagem pelo WhatsApp e nossa equipe confirmará sua reserva.
        </p>
        <HeroButton>Reserve agora</HeroButton>
      </div>
    </section>
  );
}

export default ReservationSection;
