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
          className="text-2xl sm:text-3xl lg:text-5xl font-semibold px-4 sm:px-10"
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
      </div>
    </div>
  );
};
