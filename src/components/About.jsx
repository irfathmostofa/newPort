import { motion } from "framer-motion";
import aboutimg from "../assets/images/1737712011573.jpg";

export const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto px-6 sm:px-10 py-20 md:py-0">
      {/* Section Title - Centered at top */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="uppercase tracking-[20px] md:tracking-[8px] text-gray-500 text-2xl md:text-3xl absolute top-8 md:top-12"
      >
        About
      </motion.h3>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12 lg:gap-16 w-full mt-16 md:mt-0">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <img
            src={aboutimg}
            alt="Irfath Chowdhury"
            className="w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[420px] xl:h-[520px] shadow-2xl border-2 border-gray-700/50"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 sm:space-y-6 md:space-y-8 px-0 md:px-4 lg:px-6 md:max-w-xl lg:max-w-2xl text-center md:text-left"
        >
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Here is a little background
          </h4>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-justify md:text-left">
            Dedicated software developer with nearly five years of hands-on
            experience in building reliable, user-centric applications.
            Committed to writing clean, maintainable code and delivering
            solutions that solve real-world problems and drive meaningful
            impact. Continuously seeking opportunities to enhance user
            experiences, optimize performance, and architect scalable systems.
            Known for taking ownership of tasks, thriving in collaborative
            environments, and embracing continuous learning to grow both
            technically and professionally.
          </p>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 "
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
        </motion.div>
      </div>
    </div>
  );
};
