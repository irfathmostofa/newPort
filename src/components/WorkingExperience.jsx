import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
export const WorkingExperience = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="md:h-screen flex md:relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="md:absolute md:top-14 mt-20 md:mt-0 uppercase tracking-[15px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="md:absolute top-20 md:mt-0 mt-10 w-full h-full flex space-x-5 overflow-x-scroll md:p-10 snap-x snap-mandatory">
        <ExperienceCard />
      </div>
    </motion.div>
  );
};
