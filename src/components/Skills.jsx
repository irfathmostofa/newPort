import { motion } from "framer-motion";

import { Skill } from "./Skill";

export const Skills = () => {
  return (
    <div className="py-20 md:py-28 px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <p className="uppercase tracking-[10px] text-gray-500 text-sm mb-3">
          Skills
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Technologies I Work With
        </h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Hover over a skill for current proficiency
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-5 md:gap-6 justify-items-center">
        <Skill />
      </div>
    </div>
  );
};
