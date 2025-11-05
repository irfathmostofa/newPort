import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "./BackgroundCircles";
import { MenuButtons } from "./MenuButtons";
import topImage from "../assets/images/top.jpg";

export const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, The Name's Irfath Chowdhury",
      "Guy-Who-loves-Chips.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-full h-32 w-32 mx-auto object-cover border-4 border-[#F7AB0A]/20"
        src={topImage}
        alt="Irfath Chowdhury"
      />
      <div className="z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm uppercase text-gray-500 pb-2 tracking-[8px]"
        >
          Full Stack Developer
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl lg:text-5xl font-semibold px-10"
        >
          <span className="mr-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MenuButtons />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4"
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Technologies" },
            { number: "∞", label: "Passion for Learning" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center p-4 md:p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F7AB0A] to-amber-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
