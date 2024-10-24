import Logo from "./Logo";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-16 h-16 bg-primary">
      <Logo color="white" width="auto" height="h-11" />
      <div className="flex gap-16">
        <NavbarItem to="/">INÍCIO</NavbarItem>
        <NavbarItem to="about">SOBRE</NavbarItem>
        <NavbarItem to="menu">CARDÁPIO</NavbarItem>
        <NavbarItem to="reservation">RESERVAS</NavbarItem>
        <NavbarItem to="footer">CONTATO</NavbarItem>
      </div>
    </nav>
  );
}

export default Navbar;
