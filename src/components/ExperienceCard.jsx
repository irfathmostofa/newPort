import React from "react";
import { motion } from "framer-motion";
import { ExperienceArray } from "../Content/ExperienceArray";

export const ExperienceCard = () => {
  return (
    <>
      {ExperienceArray.map((item, index) => (
        <div
          key={item.id}
          className="w-screen flex-shrink-0 snap-center flex items-center justify-center px-4 md:px-8 py-4"
        >
          <motion.article
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row rounded-xl md:rounded-2xl items-start space-y-6 lg:space-y-0 lg:space-x-8 bg-gradient-to-br from-[#292929] to-[#1f1f1f] p-6 md:p-8 lg:p-12 hover:shadow-2xl transition-all duration-300 w-full max-w-4xl lg:max-w-7xl border border-gray-700 hover:border-[#F7AB0A]/30 mx-auto"
          >
            {/* Left Section - Company Info */}
            <div className="lg:w-2/5 w-full text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <motion.img
                  initial={{ y: -50, opacity: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 md:w-28 md:h-28 rounded-xl md:rounded-2xl object-cover object-center mb-4 md:mb-6 shadow-lg border-2 border-gray-600"
                  src={item.logo}
                  alt={item.company}
                />

                <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {item.occupation}
                </h4>

                <p className="font-bold text-lg md:text-xl lg:text-2xl mt-2 md:mt-3 text-[#F7AB0A]">
                  {item.company}
                </p>

                <div className="flex flex-col mt-3 md:mt-4 space-y-1 md:space-y-2">
                  <p className="text-gray-400 text-base md:text-lg font-medium">
                    {item.date}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">
                    {item.duration}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-4 md:mt-6">
                  <h5 className="text-gray-400 font-semibold mb-2 md:mb-3 text-xs md:text-sm uppercase tracking-wide">
                    Technologies
                  </h5>
                  <div className="flex flex-wrap gap-1 md:gap-2 justify-center lg:justify-start">
                    {item.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 md:px-3 md:py-1 bg-[#F7AB0A]/10 text-[#F7AB0A] text-xs md:text-sm rounded-full border border-[#F7AB0A]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Responsibilities */}
            <div className="lg:w-3/5 w-full mt-6 lg:mt-0">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-1.5 h-6 md:w-2 md:h-8 bg-[#F7AB0A] rounded-full mr-2 md:mr-3"></div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Key Responsibilities
                </h3>
              </div>

              <ul className="space-y-3 md:space-y-4">
                {item.work.map((workItem, workIndex) => (
                  <motion.li
                    key={workIndex}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: workIndex * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#F7AB0A] rounded-full mt-2 md:mt-3 mr-3 md:mr-4"></div>
                    <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                      {workItem.title}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      ))}
    </>
  );
};
