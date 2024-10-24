import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/about/AboutSection";
import MenuSection from "./components/menu/MenuSection";
import ReservationSection from "./components/reservation/ReservationSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <MenuSection id="menu" />
      <ReservationSection id="reservation" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
