import React, { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import BackToTopButton from "./components/BackToTopButton";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { WorkingExperience } from "./components/WorkingExperience";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Initial check when component mounts
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[rgb(36,36,36)] text-white md:h-screen md:snap-y md:snap-mandatory overflow-scroll overflow-x-hidden z-0 md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7Ab0A]/80">
      <Header />
      <div className={`back-to-top-button `}>
        <button onClick={scrollToTop}>Back to Top</button>
      </div>
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
      <section id="contact" className="md:snap-center">
        <Contact />
      </section>
      <BackToTopButton scrollToTop={scrollToTop} />
    </div>
  );
}

export default App;
