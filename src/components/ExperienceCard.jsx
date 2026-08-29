import { motion } from "framer-motion";

export const ExperienceCard = ({ item }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-[#292929] to-[#1f1f1f] border border-gray-700 rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#F7AB0A]/30 hover:shadow-xl hover:shadow-black/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <img
          src={item.logo}
          alt={item.company}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border border-gray-600 flex-shrink-0"
        />
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
            {item.occupation}
          </h3>
          <p className="text-[#F7AB0A] font-semibold text-sm sm:text-base mt-0.5">
            {item.company}
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 text-xs sm:text-sm text-gray-400">
            <span>{item.date}</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-500">{item.duration}</span>
          </div>
        </div>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {item.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2.5 py-1 bg-[#F7AB0A]/10 text-[#F7AB0A] text-[11px] sm:text-xs rounded-full border border-[#F7AB0A]/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Responsibilities */}
      <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
        <span className="w-1 h-4 bg-[#F7AB0A] rounded-full inline-block"></span>
        Key Responsibilities
      </h4>
      <ul className="space-y-2.5">
        {item.work.map((workItem, workIndex) => (
          <li key={workIndex} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#F7AB0A] rounded-full mt-2"></span>
            <p className="text-gray-300 text-sm leading-relaxed">
              {workItem.title}
            </p>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};
