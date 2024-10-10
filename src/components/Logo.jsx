import LogotypeVector from "../assets/images/logotype.svg";

function Logo({ color, width, height }) {
  return (
    <a href="#">
      <img
        src={LogotypeVector}
        alt=""
        className={`w-${width} h-${height} fill-${color}`}
      />
    </a>
  );
}

export default Logo;
