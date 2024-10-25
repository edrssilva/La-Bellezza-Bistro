function NavbarItem(props) {
  return (
    <div className="px-2 text-white font-medium cursor-pointer hover:scale-[1.05] origin-center transition-all">
      {props.children}
    </div>
  );
}

export default NavbarItem;
