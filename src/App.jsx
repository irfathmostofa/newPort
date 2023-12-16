import "./App.css";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { WorkingExperience } from "./components/WorkingExperience";

function App() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      <Header />
      <section id="hero" className="snap-start">
        <HeroSection />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkingExperience />
      </section>
    </div>
  );
}

export default App;
