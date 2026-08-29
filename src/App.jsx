import { MotionConfig } from "framer-motion";
import "./App.css";
import { About } from "./components/About";
import BackToTopButton from "./components/BackToTopButton";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { WorkingExperience } from "./components/WorkingExperience";
import { Journey } from "./components/Journry";
import { WhyMe } from "./components/WhyMe";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-[rgb(36,36,36)] text-white z-0">
        <Header />

        <main>
          <section id="hero" className="relative">
            <HeroSection />
          </section>

          <section id="about" className="relative">
            <About />
          </section>

          {/* <section id="journey" className="relative">
            <Journey />
          </section> */}

          <section id="experience" className="relative">
            <WorkingExperience />
          </section>

          <section id="skills" className="relative">
            <Skills />
          </section>

          <section id="projects" className="relative">
            <Projects />
          </section>

          <section id="services" className="relative">
            <Services />
          </section>

          <section id="why-me" className="relative">
            <WhyMe />
          </section>

          <section id="contact" className="relative">
            <Contact />
          </section>
        </main>

        <BackToTopButton />
      </div>
    </MotionConfig>
  );
}

export default App;
