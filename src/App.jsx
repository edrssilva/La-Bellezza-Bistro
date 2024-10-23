import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/about/AboutSection";
import MenuSection from "./components/menu/MenuSection";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <MenuSection />
    </div>
  );
}

export default App;
