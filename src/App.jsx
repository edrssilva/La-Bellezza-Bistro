import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/about/AboutSection";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <HeroSection />
      <AboutSection id="about" />
    </div>
  );
}

export default App;
