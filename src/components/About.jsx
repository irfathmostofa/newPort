import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../assets/images/about.jpg";
export const About = () => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase md:tracking-[8px] tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={aboutimg}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p className="text-base">
          I'm Irfath, an experienced web developer specializing in PHP, Nodejs,
          Express, MongoDB, React, Next.js, Vue.js, bootstrap, Tailwind CSS And
          WordPress With expertise in these technologies, I create stunning
          websites and powerful web applications. Whether it's customizing
          WordPress, building dynamic user interfaces with React, Next.js, and
          Vue.js, or architecting robust back-end systems with Nodejs, I
          consistently deliver exceptional results. From startups to established
          businesses, I exceed expectations for diverse clients. Let's bring
          your digital vision to life.
        </p>
      </div>
    </div>
  );
};
