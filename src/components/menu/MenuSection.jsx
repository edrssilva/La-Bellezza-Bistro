import SectionTitle from "../SectionTitle";
import PrimaryButton from "../PrimaryButton";

function MenuSection() {
  return (
    <section className="w-2/4 my-16 flex justify-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <SectionTitle>Cardápio</SectionTitle>
        <h2 className="font-serif font-bold text-2xl text-offblack text-left">
          Mais pedidos
        </h2>

        <PrimaryButton>Cardápio completo</PrimaryButton>
      </div>
    </section>
  );
}

export default MenuSection;
