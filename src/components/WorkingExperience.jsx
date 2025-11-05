import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceArray } from "../Content/ExperienceArray";

export const WorkingExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const isScrolling = useRef(false);

  // Scroll to specific experience card
  const scrollToCard = (index) => {
    if (!scrollContainerRef.current || isScrolling.current) return;

    isScrolling.current = true;
    setCurrentIndex(index);

    const cardWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  // Handle wheel event for horizontal scrolling
  const handleWheel = (e) => {
    if (isScrolling.current) return;
    e.preventDefault();

    if (e.deltaY > 0) {
      // Scroll down - go to next card or section
      if (currentIndex < ExperienceArray.length - 1) {
        scrollToCard(currentIndex + 1);
      } else {
        // Last card - go to skills section
        document.getElementById("skills").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Scroll up - go to previous card or section
      if (currentIndex > 0) {
        scrollToCard(currentIndex - 1);
      } else {
        // First card - go to about section
        document.getElementById("journey").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  // Handle scroll to update current index
  const handleScroll = () => {
    if (!scrollContainerRef.current || isScrolling.current) return;

    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (isScrolling.current) return;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      if (currentIndex < ExperienceArray.length - 1) {
        scrollToCard(currentIndex + 1);
      } else {
        document.getElementById("skills").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      if (currentIndex > 0) {
        scrollToCard(currentIndex - 1);
      } else {
        document.getElementById("journey").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left max-w-full justify-center mx-auto items-center"
    >
      {/* <h3 className="absolute top-16 md:top-24 uppercase tracking-[15px] text-gray-500 text-xl md:text-2xl z-20">
        Experience
      </h3> */}

      <div
        ref={scrollContainerRef}
        className="w-full flex overflow-x-scroll snap-x snap-mandatory hide-scrollbar"
        style={{
          scrollBehavior: "smooth",
          height: "100vh",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <ExperienceCard />
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {ExperienceArray.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-[#F7AB0A] scale-125"
                : "bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Mobile navigation hints */}
      <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs">
        Swipe to navigate
      </div>
    </motion.div>
  );
};
