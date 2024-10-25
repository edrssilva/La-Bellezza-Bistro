import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-16 h-16 bg-primary">
      <Logo color="white" width="auto" height="h-11" />
      <div className="flex gap-16">
        <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
          <NavbarItem>INÍCIO</NavbarItem>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          <NavbarItem>SOBRE</NavbarItem>
        </Link>
        <Link to="menu" spy={true} smooth={true} offset={50} duration={500}>
          <NavbarItem>CARDÁPIO</NavbarItem>
        </Link>
        <Link
          to="reservation"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <NavbarItem>RESERVAS</NavbarItem>
        </Link>
        <Link to="footer" spy={true} smooth={true} offset={50} duration={500}>
          <NavbarItem to="footer">CONTATO</NavbarItem>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
