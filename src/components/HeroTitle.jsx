function HeroTitle(props) {
  return (
    <h1 className="font-serif text-[4rem] font-bold text-white text-center">
      {props.children}
    </h1>
  );
}

export default HeroTitle;
