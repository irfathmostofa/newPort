import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { projectsArray } from "../Content/projectArray";

const featuredProjects = projectsArray.filter((p) => p.featured);
const otherProjects = projectsArray.filter((p) => !p.featured);

const ProjectLinks = ({ item }) => {
  if (!item.demo && !item.github) return null;

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {item.demo && (
        <a
          href={item.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7AB0A] text-black text-sm font-semibold rounded-lg hover:bg-amber-500 transition-colors"
        >
          <FaExternalLinkAlt className="text-xs" /> Live Demo
        </a>
      )}
      {item.github && (
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 text-sm font-semibold rounded-lg hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A] transition-colors"
        >
          <FaGithub /> Source Code
        </a>
      )}
    </div>
  );
};

const FeaturedProjectCard = ({ item, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group bg-gradient-to-br from-[#292929] to-[#1f1f1f] border border-gray-700 rounded-2xl overflow-hidden hover:border-[#F7AB0A]/40 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 lg:grid lg:grid-cols-2"
    >
      {item.image && (
        <div className="relative overflow-hidden lg:h-full min-h-[220px]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1f1f1f]"></div>
        </div>
      )}

      <div className="p-6 sm:p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[#F7AB0A] text-xs">
            {String(item.id).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-gray-700"></div>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 border border-[#F7AB0A]/30 text-[#F7AB0A]/80 px-2 py-0.5 rounded-full">
            Featured
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          {item.name}
        </h3>

        {item.tags && (
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-gray-400 mb-3">
            {item.tags.map((tag, idx) => (
              <React.Fragment key={idx}>
                <span>{tag}</span>
                {idx < item.tags.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
        )}

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {item.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2.5 py-1 bg-gray-700/50 text-gray-300 text-[11px] rounded-full border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {item.features && (
          <ul className="space-y-2 mb-4">
            {item.features.slice(0, 4).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-gray-400 text-sm"
              >
                <span className="text-[#F7AB0A] text-xs mt-1 flex-shrink-0">
                  —
                </span>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto">
          <ProjectLinks item={item} />
        </div>
      </div>
    </motion.article>
  );
};

const ProjectCard = ({ item, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group bg-gradient-to-br from-[#292929] to-[#1f1f1f] border border-gray-700 rounded-2xl p-5 sm:p-6 flex flex-col hover:border-[#F7AB0A]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all duration-300"
    >
      {item.image && (
        <div className="relative overflow-hidden rounded-xl mb-4 h-40">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      )}

      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono text-[#F7AB0A] text-xs">
          {String(item.id).padStart(2, "0")}
        </span>
        <div className="h-px flex-1 bg-gray-700"></div>
      </div>

      <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
        {item.name}
      </h3>

      {item.tags && (
        <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-gray-500 mb-2.5">
          {item.tags.map((tag, idx) => (
            <React.Fragment key={idx}>
              <span>{tag}</span>
              {idx < item.tags.length - 1 && <span>•</span>}
            </React.Fragment>
          ))}
        </div>
      )}

      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {item.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-0.5 bg-gray-700/50 text-gray-300 text-[10px] rounded-full border border-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <ProjectLinks item={item} />
      </div>
    </motion.article>
  );
};

export const Projects = () => {
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
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Things I&apos;ve Built
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
          A selection of products and platforms I&apos;ve designed and shipped —
          from enterprise ERPs to modern web applications.
        </p>
      </motion.div>

      {/* Featured projects */}
      {featuredProjects.length > 0 && (
        <div className="max-w-6xl mx-auto space-y-10 lg:space-y-14 mb-16 md:mb-20">
          {featuredProjects.map((item, index) => (
            <FeaturedProjectCard key={item.id} item={item} index={index} />
          ))}
        </div>
      )}

      {/* Other projects */}
      {otherProjects.length > 0 && (
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-300 uppercase tracking-widest text-sm">
              More Projects
            </h3>
            <div className="h-px flex-1 bg-gray-700"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {otherProjects.map((item, index) => (
              <ProjectCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
