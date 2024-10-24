function HeroButton(props) {
  return (
    <button
      {...props}
      className={`h-12 min-w-64 max-w-[420px] bg-offwhite-transparent border border-offwhite backdrop-blur-sm rounded font-medium text-2xl text-white shadow-md hover:scale-[1.05] transition-all{}`}
    >
      {props.children}
    </button>
  );
}

export default HeroButton;
