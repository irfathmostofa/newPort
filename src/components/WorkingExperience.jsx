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
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-14 uppercase tracking-[15px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="absolute top-20 w-full h-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};
