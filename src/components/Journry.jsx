import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { journeyData } from "../Content/JourneyArray";

export const Journey = () => {
  const [activePhase, setActivePhase] = useState(0);
  const timelineRef = useRef(null);

  const handleScroll = () => {
    if (!timelineRef.current) return;

    const timeline = timelineRef.current;
    const phases = timeline.querySelectorAll(".phase-item");

    phases.forEach((phase, index) => {
      const rect = phase.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.7 && rect.bottom > 0;

      if (isInView) {
        setActivePhase(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
            My Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From learning the basics to becoming a professional developer, each
            step has shaped my skills and passion for technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 h-full hidden md:block"></div>

          {/* Journey Phases */}
          <div className="space-y-12 md:space-y-24">
            {journeyData.map((phase, index) => {
              const IconComponent = phase.icon;
              const isEven = index % 2 === 0;
              const isActive = index === activePhase;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`phase-item flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-8`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`flex-1 ${
                      isEven
                        ? "md:text-right md:pr-12"
                        : "md:text-left md:pl-12"
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br ${
                        phase.color
                      } p-1 rounded-2xl shadow-2xl ${
                        isActive ? "ring-4 ring-white/20" : ""
                      }`}
                    >
                      <div className="bg-gray-800 rounded-xl p-6 md:p-8">
                        <div
                          className={`flex items-center gap-4 mb-4 ${
                            isEven ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <div
                            className={`p-3 rounded-full bg-gradient-to-br ${phase.color} text-white`}
                          >
                            <IconComponent className="text-2xl" />
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-gray-400">
                              {phase.year}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                              {phase.title}
                            </h3>
                            <p className="text-gray-300">{phase.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {phase.description}
                        </p>
                        <div
                          className={`flex flex-wrap gap-2 ${
                            isEven ? "md:justify-end" : ""
                          }`}
                        >
                          {phase.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline Node - Desktop */}
                  <div className="hidden md:flex items-center justify-center w-24 h-24 relative">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.2 : 1,
                        boxShadow: isActive
                          ? "0 0 20px rgba(59, 130, 246, 0.5)"
                          : "none",
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${phase.color} border-4 border-gray-900 z-10`}
                    />
                  </div>

                  {/* Timeline Node - Mobile */}
                  <div className="md:hidden flex items-center justify-center w-16 h-16 relative">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.2 : 1,
                      }}
                      className={`w-4 h-4 rounded-full bg-gradient-to-br ${phase.color} border-2 border-gray-900 z-10`}
                    />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
      </div>
    </div>
  );
};
