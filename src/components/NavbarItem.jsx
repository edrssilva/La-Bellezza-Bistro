import { Link } from "react-scroll";

function NavbarItem(props) {
  return (
    <Link
      {...props}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className="px-4 text-white font-medium cursor-pointer hover:scale-[1.05] origin-center transition-all"
    >
      {props.children}
    </Link>
  );
}

export default NavbarItem;
