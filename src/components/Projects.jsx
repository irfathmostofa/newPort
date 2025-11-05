import React, { useRef, useEffect, useState } from "react";
import { projectsArray } from "../Content/projectArray";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const isScrolling = useRef(false);

  const scrollToProject = (index) => {
    if (!scrollContainerRef.current || isScrolling.current) return;
    isScrolling.current = true;
    setCurrentIndex(index);
    scrollContainerRef.current.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth",
    });
    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleWheel = (e) => {
    if (isScrolling.current) return;
    e.preventDefault();
    if (e.deltaY > 0) {
      if (currentIndex < projectsArray.length - 1) {
        scrollToProject(currentIndex + 1);
      } else {
        scrollToSection("contact");
      }
    } else {
      if (currentIndex > 0) {
        scrollToProject(currentIndex - 1);
      } else {
        scrollToSection("skills");
      }
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current || isScrolling.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const projectWidth = window.innerWidth;
    const newIndex = Math.round(scrollLeft / projectWidth);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const handleKeyDown = (e) => {
    if (isScrolling.current) return;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      if (currentIndex < projectsArray.length - 1) {
        scrollToProject(currentIndex + 1);
      } else {
        scrollToSection("contact");
      }
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      if (currentIndex > 0) {
        scrollToProject(currentIndex - 1);
      } else {
        scrollToSection("skills");
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
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center mt-20 md:mt-0">
      <h3 className="absolute top-16 md:top-14 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl z-30">
        Projects
      </h3>

      <div
        ref={scrollContainerRef}
        className="relative w-full flex overflow-x-scroll md:overflow-x-hidden snap-x snap-mandatory z-20 scrollbar-none"
        style={{ scrollBehavior: "smooth" }}
      >
        {projectsArray.map((item, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-20"
          >
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 max-w-7xl w-full">
              <div className="lg:w-[600px] xl:w-[650px] lg:flex-shrink-0">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-6">
                  <span className="text-[#F7AB0A] font-mono text-xs md:text-sm">
                    {String(item.id).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-gray-700"></div>
                </div>

                <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 md:mb-6 leading-tight">
                  {item.name}
                </h4>

                {item.tags && (
                  <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm text-gray-400 mb-4 md:mb-6">
                    {item.tags.map((tag, idx) => (
                      <React.Fragment key={idx}>
                        <span>{tag}</span>
                        {idx < item.tags.length - 1 && <span>•</span>}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-8">
                  {item.description}
                </p>

                {item.technologies && (
                  <div className="pt-4 md:pt-6 border-t border-gray-800">
                    <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mb-2 md:mb-3">
                      Tech Stack
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      {item.technologies.join(" • ")}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col justify-center overflow-y-auto max-h-[50vh] lg:max-h-[60vh] pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                {item.features && (
                  <div className="space-y-3 md:space-y-4">
                    <h5 className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mb-4">
                      Key Features
                    </h5>
                    <div className="space-y-2 md:space-y-3">
                      {item.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 md:gap-4 text-gray-400 text-xs sm:text-sm md:text-base"
                        >
                          <span className="text-[#F7AB0A] text-xs mt-1 md:mt-1.5 flex-shrink-0">
                            —
                          </span>
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8 text-gray-500 text-xs md:text-sm font-mono z-30">
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(projectsArray.length).padStart(2, "0")}
      </div>
    </div>
  );
};
