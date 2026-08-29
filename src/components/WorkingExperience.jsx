import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceArray } from "../Content/ExperienceArray";

export const WorkingExperience = () => {
  return (
    <div className="py-20 md:py-28 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 md:mb-20"
      >
        <p className="uppercase tracking-[10px] text-gray-500 text-sm mb-3">
          Experience
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Where I&apos;ve Worked
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
          Professional roles that shaped my skills in software development,
          system administration, and business technology.
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* Timeline line - centered */}
        <div className="absolute left-[7px] lg:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-[#F7AB0A]/50 via-gray-600 to-transparent"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {ExperienceArray.map((item, index) => {
            // Alternate sides for timeline positioning
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative ${isLeft ? "lg:pr-8" : "lg:pl-8"}`}
              >
                {/* Node - positioned based on side */}
                <div
                  className={`absolute top-2 z-10 ${
                    isLeft
                      ? "right-[-6px] lg:right-[-6px]"
                      : "left-[-6px] lg:left-[-6px]"
                  }`}
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-[#F7AB0A] border-2 border-gray-900 shadow-[0_0_10px_rgba(247,171,10,0.6)]"></div>
                </div>

                <div
                  className={`pl-8 ${isLeft ? "lg:pl-0 lg:pr-4" : "lg:pl-4"}`}
                >
                  <ExperienceCard item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
