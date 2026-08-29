import { motion } from "framer-motion";
import {
  FaLayerGroup,
  FaCode,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaLayerGroup,
    title: "End-to-End Delivery",
    description:
      "From requirement analysis and design to deployment and maintenance — I handle the entire software lifecycle.",
  },
  {
    icon: FaCode,
    title: "Clean, Maintainable Code",
    description:
      "I write well-structured, tested code that is easy to extend, scale, and hand over with confidence.",
  },
  {
    icon: FaLightbulb,
    title: "Business-First Thinking",
    description:
      "Technology is a means, not the goal. I focus on solutions that save time, cut cost, and grow revenue.",
  },
  {
    icon: FaHandshake,
    title: "Reliable Partnership",
    description:
      "Clear communication, honest timelines, and continuous support long after launch.",
  },
];

export const WhyMe = () => {
  return (
    <div className="py-20 md:py-28 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <p className="uppercase tracking-[10px] text-gray-500 text-sm mb-3">
          Why Work With Me
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          A Partner, Not Just a Developer
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
          I care about outcomes — your users&apos; experience and your
          business&apos;s bottom line.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {reasons.map((reason, index) => {
          const IconComponent = reason.icon;
          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-gray-800/40 border border-gray-700/80 rounded-2xl p-6 text-center hover:border-[#F7AB0A]/30 transition-colors"
            >
              <div className="p-3 rounded-xl bg-[#F7AB0A]/10 text-[#F7AB0A] inline-flex mb-4">
                <IconComponent className="text-2xl" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-12 md:mt-16">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F7AB0A] text-black font-semibold rounded-full hover:bg-amber-500 hover:-translate-y-0.5 transition-all duration-300"
        >
          Let&apos;s Build Something Together
        </a>
      </div>
    </div>
  );
};
