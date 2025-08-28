import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";

export const WorkingExperience = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const handleWheel = (e) => {
      if (!isScrolling && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => setIsScrolling(false), 100);
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll);

    return () => {
      section.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="md:h-screen flex md:relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="md:absolute md:top-14 mt-20 md:mt-0 uppercase tracking-[15px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div
        ref={containerRef}
        className="md:absolute top-20 md:mt-0 mt-10 w-full h-full flex space-x-5 overflow-x-scroll md:p-10 snap-x snap-mandatory scrollbar-hide"
      >
        <ExperienceCard />
      </div>
    </motion.div>
  );
};
