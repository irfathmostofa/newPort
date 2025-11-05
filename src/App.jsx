import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { About } from "./components/About";
import BackToTopButton from "./components/BackToTopButton";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { WorkingExperience } from "./components/WorkingExperience";
import { Journey } from "./components/Journry";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const projectsSectionRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
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
    <div className="bg-[rgb(36,36,36)] text-white md:h-screen md:snap-y md:snap-mandatory overflow-scroll overflow-x-hidden z-0 md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />

      <section id="hero" className="snap-start">
        <HeroSection />
      </section>

      <section id="about" className="md:snap-center">
        <About />
      </section>
      <section id="journey" className="md:snap-center">
        <Journey />
      </section>

      <section
        id="experience"
        className="md:snap-center experience-section"
        style={{ scrollSnapAlign: "start" }}
      >
        <WorkingExperience />
      </section>

      <section id="skills" className="md:snap-center">
        <Skills />
      </section>

      <section
        id="projects"
        className="md:snap-center projects-section"
        style={{ scrollSnapAlign: "start" }}
      >
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
