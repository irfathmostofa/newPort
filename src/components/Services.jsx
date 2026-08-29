import { motion } from "framer-motion";

import {
  primaryServices,
  supportingServices,
} from "../Content/ServicesArray";

export const Services = () => {
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
          Services &amp; Solutions
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          What I Can Help You Build
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
          From websites and custom software to AI automation and digital growth
          — I provide complete digital solutions.
        </p>
      </motion.div>

      {/* Primary services */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-12">
        {primaryServices.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group relative bg-gradient-to-br from-[#292929] to-[#1f1f1f] border border-gray-700 rounded-2xl p-6 sm:p-7 hover:border-[#F7AB0A]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 ${
                index === 0 ? "md:row-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`p-3.5 rounded-xl bg-gradient-to-br ${service.accent} text-white`}
                >
                  <IconComponent className="text-2xl" />
                </div>
                {index === 0 && (
                  <span className="text-[10px] uppercase tracking-widest text-[#F7AB0A] border border-[#F7AB0A]/30 px-2 py-0.5 rounded-full">
                    Core Service
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>

              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-gray-300 text-sm"
                  >
                    <span className="text-[#F7AB0A] text-xs mt-1 flex-shrink-0">
                      &#10003;
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Supporting services */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
            Supporting Services
          </h3>
          <div className="h-px flex-1 bg-gray-700"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {supportingServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-gray-800/40 border border-gray-700/80 rounded-2xl p-5 sm:p-6 hover:border-gray-500 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-gray-700/60 text-[#F7AB0A]">
                    <IconComponent className="text-lg" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {service.title}
                  </h4>
                </div>

                <ul className="space-y-1.5">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <span className="text-[#F7AB0A] text-xs mt-1 flex-shrink-0">
                        •
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
