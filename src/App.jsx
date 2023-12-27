import "./App.css";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { WorkingExperience } from "./components/WorkingExperience";

function App() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white md:h-screen md:snap-y md:snap-mandatory overflow-scroll overflow-x-hidden z-0 md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7Ab0A]/80">
      <Header />
      <section id="hero" className="snap-start">
        <HeroSection />
      </section>
      <section id="about" className="md:snap-center">
        <About />
      </section>
      <section id="experience" className="md:snap-center">
        <WorkingExperience />
      </section>
      <section id="skills" className="md:snap-center">
        <Skills />
      </section>
      <section id="projects" className="md:snap-center">
        <Projects />
      </section>
    </div>
  );
}

export default App;
