import {
  House,
  CircleHelp,
  SquareMenu,
  CalendarClock,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-primary flex flex-col items-center">
      <div className="w-1/2 flex justify-between text-white gap-8 bg-primary py-8">
        <div className="flex flex-col justify-start gap-7">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-medium">LINKS ÚTEIS</h3>
            <div className="min-w-28 w-28 min-h-[1px] bg-secondary" />
          </div>
          <div className="flex gap-4">
            <House />
            <a href="#home">Início</a>
          </div>
          <div className="flex gap-4">
            <CircleHelp />
            <a href="#about">Sobre</a>
          </div>
          <div className="flex gap-4">
            <SquareMenu />
            <a href="#menu">Cardápio</a>
          </div>
          <div className="flex gap-4">
            <CalendarClock />
            <a href="#reservation">Reservas</a>
          </div>
          <div className="flex gap-4">
            <Mail />
            <a href="#footer">Contato</a>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-7">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-medium">REDES SOCIAIS</h3>
            <div className="min-w-28 w-28 min-h-[1px] bg-secondary" />
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex gap-4">
              <Instagram />
              <a href="#">@labellezza.bistro</a>
            </div>
            <div className="flex gap-4">
              <Facebook />
              <a href="#">La Bellezza Bistro</a>
            </div>
            <div className="flex gap-4">
              <Linkedin />
              <a href="#">La Bellezza Bistro</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-7">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-medium">CONTATO</h3>
            <div className="min-w-28 w-28 min-h-[1px] bg-secondary" />
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex gap-4">
              <House />
              <a href="#">Avenida Brasil, nº 69, Centro, São Paulo - SP</a>
            </div>
            <div className="flex gap-4">
              <Mail />
              <a href="#">contato@labellezza.com</a>
            </div>
            <div className="flex gap-4">
              <Phone />
              <a href="#">+55 (11) 99669-7995</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-offblack text-white py-4 text-center">
        <p className="font-bold">© 2024 La Bellezza Bistro</p>
        <p className="font-light text-xs">Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
