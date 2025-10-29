import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../assets/images/1737712011573.jpg";
export const About = () => {
  return (
    <div className="flex flex-col md:relative md:h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="md:absolute md:top-24 uppercase md:tracking-[8px] tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={aboutimg}
        className="-mb-20 mt-5 md:mt-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10 mt-24 md:mt-0">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p className="md:text-base text-justify">
          Dedicated software developer with nearly five years of hands-on
          experience in building reliable, user-centric applications. Committed
          to writing clean, maintainable code and delivering solutions that
          solve real-world problems and drive meaningful impact.​ Continuously
          seeking opportunities to enhance user experiences, optimize
          performance, and architect scalable systems. Known for taking
          ownership of tasks, thriving in collaborative environments, and
          embracing continuous learning to grow both technically and
          professionally.
        </p>
      </div>
    </div>
  );
};
