function NavbarItem(props) {
  return (
    <a href={props.href}>
      <li className="text-white font-medium cursor-pointer hover:scale-[1.05] origin-center transition-all">
        {props.children}
      </li>
    </a>
  );
}

export default NavbarItem;
