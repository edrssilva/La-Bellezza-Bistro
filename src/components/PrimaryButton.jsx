function HeroButton(props) {
  return (
    <button
      {...props}
      className="h-12 px-8 min-w-64 max-w-[420px] bg-primary rounded font-medium text-2xl text-white shadow-md hover:scale-[1.05] transition-all"
    >
      {props.children}
    </button>
  );
}

export default HeroButton;
