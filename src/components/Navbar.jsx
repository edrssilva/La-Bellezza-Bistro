import Logo from "./Logo";
import NavbarItem from "./NavbarItem";
function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-16 h-16 bg-primary">
      <Logo color="white" width="auto" height="h-11" />
      <ul className="flex gap-16">
        <NavbarItem href="#">INÍCIO</NavbarItem>
        <NavbarItem href="#">SOBRE</NavbarItem>
        <NavbarItem href="#">CARDÁPIO</NavbarItem>
        <NavbarItem href="#">RESERVAS</NavbarItem>
        <NavbarItem href="#">CONTATO</NavbarItem>
      </ul>
    </nav>
  );
}

export default Navbar;
